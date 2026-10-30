// Interim-Seite ohne Next-JavaScript: Menues auf- und zuklappen.
(function () {
  function closeAll(except) {
    document.querySelectorAll('[data-testid^="header-public-nav-item-"][data-open="true"]').forEach(function (el) {
      if (el !== except) el.setAttribute('data-open', 'false');
    });
  }

  // Mobilmenue: das echte Menue rendert React; hier eine einfache Linkliste aus der Desktop-Navigation
  function mobileMenu() {
    var old = document.getElementById('interim-mobile-menu');
    if (old) { old.remove(); return; }
    var nav = document.querySelector('[data-testid="header-public-nav"]');
    if (!nav) return;
    var box = document.createElement('div');
    box.id = 'interim-mobile-menu';
    box.setAttribute('data-testid', 'interim-mobile-menu');
    var close = document.createElement('button');
    close.type = 'button';
    close.textContent = '×';
    close.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Close menu' : 'Menü schließen');
    close.className = 'interim-mm-close';
    close.addEventListener('click', function () { box.remove(); });
    box.appendChild(close);
    var list = document.createElement('ul');
    nav.querySelectorAll('[data-testid^="header-public-nav-item-"][data-href], [data-testid^="header-public-nav-item-"]:not([data-testid*="-child"]):not([data-testid$="-toggle"]):not([data-testid$="-children"])').forEach(function (item) {
      if (!/^header-public-nav-item-\d+$/.test(item.getAttribute('data-testid'))) return;
      if (list.querySelector('[data-src="' + item.getAttribute('data-testid') + '"]')) return;
      var li = document.createElement('li');
      li.setAttribute('data-src', item.getAttribute('data-testid'));
      var main = item.querySelector('a');
      if (main) { var a = document.createElement('a'); a.href = main.getAttribute('href'); a.textContent = main.textContent; a.className = 'interim-mm-main'; li.appendChild(a); }
      var kids = item.querySelectorAll('[data-testid*="-child-"]');
      if (kids.length) {
        var sub = document.createElement('ul');
        kids.forEach(function (k) {
          var a2 = k.tagName === 'A' ? k : k.querySelector('a');
          if (!a2) return;
          var l2 = document.createElement('li'); var c = document.createElement('a');
          c.href = a2.getAttribute('href'); c.textContent = a2.textContent; l2.appendChild(c); sub.appendChild(l2);
        });
        li.appendChild(sub);
      }
      list.appendChild(li);
    });
    box.appendChild(list);
    var extra = document.createElement('p');
    extra.className = 'interim-mm-extra';
    document.querySelectorAll('[data-testid^="header-language-switcher-option-"]').forEach(function (o) {
      var a = o.tagName === 'A' ? o : o.querySelector('a');
      if (!a) return;
      var c = document.createElement('a'); c.href = a.getAttribute('href'); c.textContent = (o.textContent || '').trim() || a.getAttribute('href');
      extra.appendChild(c);
    });
    var login = document.createElement('a'); login.href = 'https://plastship.com/login/'; login.textContent = 'Login'; login.className = 'interim-mm-login';
    extra.appendChild(login);
    box.appendChild(extra);
    document.body.appendChild(box);
  }
  document.addEventListener('click', function (e) {
    if (e.target.closest('[data-testid="mobile-menu-open"]')) { e.preventDefault(); mobileMenu(); return; }
    var toggle = e.target.closest('[data-testid$="-toggle"]');
    if (toggle && toggle.closest('[data-testid="header-public-nav"]')) {
      var item = toggle.closest('[data-open]');
      if (item) {
        e.preventDefault();
        var open = item.getAttribute('data-open') === 'true';
        closeAll(item);
        item.setAttribute('data-open', open ? 'false' : 'true');
        toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
        return;
      }
    }
    var trig = e.target.closest('[data-testid="header-language-switcher-trigger"]');
    var panel = document.querySelector('[data-testid="header-language-switcher-panel"]');
    if (trig && panel) {
      e.preventDefault();
      if (panel.hasAttribute('hidden')) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', '');
      trig.setAttribute('aria-expanded', panel.hasAttribute('hidden') ? 'false' : 'true');
      return;
    }
    if (panel && !e.target.closest('[data-testid="header-language-switcher"]')) panel.setAttribute('hidden', '');
    if (!e.target.closest('[data-testid="header-public-nav"]')) closeAll(null);
  });
})();
