// Interim-Seite: Formulare ohne Server. Das Kontaktformular bleibt 1:1 sichtbar und
// ausfuellbar. Beim Absenden faengt dieses Skript den Submit ab, bevor React ihn sieht (kein
// Request an /api, keine Erfolgs- oder Fehlermeldung der App), prueft die Pflichtfelder und
// oeffnet stattdessen eine E-Mail an info@plastship.com mit allen Feldern als Vorlage.
// Darunter erscheint ein kurzer Hinweis.
(function () {
  var MAIL = 'info@plastship.com';
  var TEXT = {
    de: { subject: 'Kontaktanfrage plastship.com', topic: 'Anliegen',
      hint: 'Ihr E-Mail-Programm öffnet sich mit der Anfrage. Falls nicht: ' },
    en: { subject: 'Contact request plastship.com', topic: 'Topic',
      hint: 'Your e-mail program opens with your request. If not: ' }
  };
  // alle oeffentlichen Formulare (derzeit nur das Kontaktformular, de und en)
  var FORM = 'form[data-testid$="contact-form-form"]';
  // Reihenfolge im Mail-Text; Felder per data-field, Anliegen ueber die Radio-Gruppe
  var ORDER = ['name', 'company', 'email', 'phone', 'topic', 'message'];

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

  window.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || !form.matches || !form.matches(FORM)) return;
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
