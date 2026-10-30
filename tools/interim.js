// Interim-Seite: Kontaktformular ohne Server. Das Formular bleibt (1:1), Absenden ist
// abgefangen und darueber steht ein Hinweis mit Mail-Adresse.
(function () {
  var TEXT = {
    de: ['Das Kontaktformular ist vorübergehend nicht verfügbar.', 'Bitte schreiben Sie uns an', 'oder rufen Sie an:'],
    en: ['The contact form is temporarily unavailable.', 'Please email us at', 'or call:']
  };
  var FORM = 'form[data-testid$="contact-form-form"]';

  // Absenden abfangen, bevor React es sieht (Erfassungsphase am window)
  window.addEventListener('submit', function (e) {
    if (e.target && e.target.matches && e.target.matches(FORM)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);

  function note() {
    var t = TEXT[(document.documentElement.lang || 'de').slice(0, 2)] || TEXT.de;
    var box = document.createElement('div');
    box.className = 'interim-form-note';
    box.setAttribute('data-testid', 'interim-form-note');
    box.setAttribute('role', 'note');
    var strong = document.createElement('strong');
    strong.textContent = t[0];
    var mail = document.createElement('a');
    mail.href = 'mailto:info@plastship.com';
    mail.textContent = 'info@plastship.com';
    var tel = document.createElement('a');
    tel.href = 'tel:+4961265898010';
    tel.textContent = '+49 6126 5898010';
    box.append(strong, document.createElement('br'), t[1] + ' ', mail, ' ' + t[2] + ' ', tel);
    return box;
  }

  // Hinweis als Geschwister vor dem Formular (nicht im React-Baum des Formulars);
  // nach der Hydration und erneut, falls React den Bereich neu aufbaut
  function place() {
    document.querySelectorAll(FORM).forEach(function (form) {
      var prev = form.previousElementSibling;
      if (prev && prev.classList.contains('interim-form-note')) return;
      form.parentNode.insertBefore(note(), form);
    });
  }
  function start() {
    place();
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      setTimeout(function () { queued = false; place(); }, 300);
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === 'complete') setTimeout(start, 500);
  else window.addEventListener('load', function () { setTimeout(start, 500); });
})();
