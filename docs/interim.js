// Interim-Seite: Formulare ohne Server. Kontaktformular (Kontaktseite und Polymerseiten) und
// Bewerbungsformular (Teamseite) bleiben 1:1 sichtbar und ausfuellbar. Beim Absenden faengt
// dieses Skript den Submit ab, bevor React ihn sieht (kein Request an /api, keine Erfolgs- oder
// Fehlermeldung der App), prueft die Pflichtfelder und oeffnet stattdessen eine E-Mail an
// info@plastship.com mit allen Feldern als Vorlage. Darunter erscheint ein kurzer Hinweis.
(function () {
  var MAIL = 'info@plastship.com';
  var TEXT = {
    de: { subject: 'Kontaktanfrage plastship.com', topic: 'Anliegen',
      apply: 'Bewerbung plastship.com', yes: 'Ja', choose: 'Bitte auswählen.',
      hint: 'Ihr E-Mail-Programm öffnet sich mit der Anfrage. Falls nicht: ' },
    en: { subject: 'Contact request plastship.com', topic: 'Topic',
      apply: 'Application plastship.com', yes: 'Yes', choose: 'Please choose.',
      hint: 'Your e-mail program opens with your request. If not: ' }
  };
  // Kontaktformular (Kontaktseite, Polymerseiten; de und en): Felder per data-field,
  // Anliegen ueber die Radio-Gruppe
  var FORM = 'form[data-testid$="contact-form-form"]';
  var ORDER = ['name', 'company', 'email', 'phone', 'topic', 'message'];
  // Bewerbungsformular (Teamseite, #2236): Felder per id `<basis>-<feld>-input-el`, der
  // Bereich ist eine eigene Auswahl (Button role=combobox), kein natives required-Attribut
  var APPLY = 'form[data-testid$="-application-form"]';
  var APPLY_ORDER = ['name', 'email', 'phone', 'area', 'message', 'profileUrl', 'consent'];
  var APPLY_REQUIRED = ['name', 'email', 'area', 'message', 'consent'];

  function lang() { return TEXT[(document.documentElement.lang || 'de').slice(0, 2)] || TEXT.de; }
  function clean(s) { return (s || '').replace(/\s*\*\s*$/, '').replace(/\s+/g, ' ').trim(); }

  function labelFor(form, el) {
    var l = el.id && form.querySelector('label[for="' + el.id + '"]');
    if (!l) return clean(el.getAttribute('aria-label') || el.getAttribute('data-field'));
    // nur der Text des Labels selbst, ohne Zusaetze wie "(optional)" oder Pflicht-Sternchen
    var own = Array.prototype.filter.call(l.childNodes, function (n) { return n.nodeType === 3; })
      .map(function (n) { return n.textContent; }).join(' ');
    return clean(own) || clean(l.textContent);
  }

  function topic(form) {
    var r = form.querySelector('input[type="radio"]:checked');
    if (!r) return '';
    var l = r.closest('label');
    // Titel der Anliegen-Karte (erstes sichtbares Textelement, ohne Icon und Erlaeuterung)
    var title = l && l.querySelector('span:not([aria-hidden])');
    return clean(title ? title.textContent : l ? l.textContent : r.value);
  }

  function collect(form) {
    var lines = [];
    ORDER.forEach(function (f) {
      if (f === 'topic') {
        var t = topic(form);
        if (t) lines.push(lang().topic + ': ' + t);
        return;
      }
      var el = form.querySelector('[data-field="' + f + '"]');
      if (!el) return;
      var v = (el.value || '').trim();
      if (f === 'message') lines.push('', labelFor(form, el) + ':', v);
      else lines.push(labelFor(form, el) + ': ' + v);
    });
    return lines;
  }

  function mailto(form) {
    var t = lang();
    var tp = topic(form);
    var subject = t.subject + (tp ? ': ' + tp : '');
    var body = collect(form).join('\r\n');
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  }

  // --- Bewerbungsformular ---------------------------------------------------------------
  function applyField(form, f) {
    var base = (form.getAttribute('data-testid') || '').replace(/-form$/, '');
    return document.getElementById(base + '-' + f + '-input-el');
  }
  // Beschriftung ohne Doppelpunkt, Pflicht-Stern und „(optional)“
  function applyLabel(form, el) {
    return clean(labelFor(form, el).replace(/\s*:\s*$/, '').replace(/\s*\((optional)\)\s*$/i, '').replace(/\s*\*\s*$/, ''));
  }
  // Auswahl „Bereich“: Beschriftung des Buttons; leer, solange noch der Platzhalter
  // (Text beim Laden der Seite) steht
  function selectValue(el) {
    var t = clean(el.textContent);
    return t === el.getAttribute('data-interim-placeholder') ? '' : t;
  }
  function rememberPlaceholders() {
    Array.prototype.forEach.call(document.querySelectorAll(APPLY + ' button[role="combobox"]'), function (b) {
      if (!b.hasAttribute('data-interim-placeholder')) b.setAttribute('data-interim-placeholder', clean(b.textContent));
    });
  }
  function fieldHint(el, text) {
    var root = el.closest('[data-testid$="-root"]') || el.parentNode;
    var old = root.querySelector('.interim-field-hint');
    if (old) old.remove();
    if (!text) return;
    var p = document.createElement('p');
    p.className = 'interim-field-hint';
    p.setAttribute('role', 'alert');
    p.textContent = text;
    root.appendChild(p);
  }
  function applyValid(form) {
    for (var i = 0; i < APPLY_REQUIRED.length; i++) {
      var f = APPLY_REQUIRED[i], el = applyField(form, f);
      if (!el) continue;
      if (el.getAttribute('role') === 'combobox') {
        if (!selectValue(el)) { fieldHint(el, lang().choose); el.focus(); return false; }
        fieldHint(el, '');
        continue;
      }
      el.required = true;
    }
    var fields = Array.prototype.filter.call(form.elements, function (el) {
      return el.willValidate && el.name !== 'website' && !el.closest('[data-testid$="altcha-slot"]') && !/^altcha/.test(el.id || '');
    });
    for (var j = 0; j < fields.length; j++) {
      if (!fields[j].checkValidity()) { fields[j].reportValidity(); return false; }
    }
    return true;
  }
  function applyMailto(form) {
    var t = lang(), lines = [], area = '';
    APPLY_ORDER.forEach(function (f) {
      var el = applyField(form, f);
      if (!el) return;
      var label = applyLabel(form, el), v;
      if (el.getAttribute('role') === 'combobox') { v = selectValue(el); if (f === 'area') area = v; }
      else if (el.type === 'checkbox') v = el.checked ? t.yes : '';
      else v = (el.value || '').trim();
      if (f === 'message') lines.push('', label + ':', v);
      else if (v) lines.push(label + ': ' + v);
    });
    var subject = t.apply + (area ? ': ' + area : '');
    return 'mailto:' + MAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\r\n'));
  }

  function showHint(form) {
    var btn = form.querySelector('[type="submit"]');
    var old = form.querySelector('.interim-form-hint') || (btn && btn.parentNode.querySelector('.interim-form-hint'));
    if (old) return;
    var p = document.createElement('p');
    p.className = 'interim-form-hint';
    p.setAttribute('data-testid', 'interim-form-hint');
    p.setAttribute('role', 'status');
    var a = document.createElement('a');
    a.href = 'mailto:' + MAIL;
    a.textContent = MAIL;
    p.append(lang().hint, a);
    if (btn) btn.insertAdjacentElement('afterend', p); else form.appendChild(p);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', rememberPlaceholders);
  else rememberPlaceholders();
  // React haengt das Formular erst beim Hydrieren an: Platzhalter auch dann merken
  new MutationObserver(rememberPlaceholders).observe(document.documentElement, { childList: true, subtree: true });

  window.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.matches) return;
    if (form.matches(APPLY)) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (!applyValid(form)) return;
      var u = applyMailto(form);
      window.dispatchEvent(new CustomEvent('interim:mailto', { detail: u }));
      window.location.href = u;
      showHint(form);
      return;
    }
    if (!form.matches(FORM)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    // Pflichtfelder und Formate (required, type=email) wie im Browser pruefen (greift auch
    // bei noValidate). Das Captcha (altcha) braucht den Server und ist ausgeblendet: auslassen.
    var fields = Array.prototype.filter.call(form.elements, function (el) {
      return el.willValidate && !el.closest('[data-testid$="altcha-slot"]') && !/^altcha/.test(el.id || '');
    });
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].checkValidity()) { fields[i].reportValidity(); return; }
    }
    var url = mailto(form);
    window.dispatchEvent(new CustomEvent('interim:mailto', { detail: url }));
    window.location.href = url;
    showHint(form);
  }, true);
})();
