// Interim-Seite: laeuft synchron im <head>, vor den Next-Skripten.
(function () {
  // 1. HMR-Verbindung des Entwicklungsservers: ueber sie kommen die React-Debug-Daten der
  //    Anfrage, ohne die React nicht hydriert. Statisch gibt es den Server nicht; ein
  //    Platzhalter meldet "verbunden" und spielt die beim Bauen aufgezeichneten Daten
  //    (window.__INTERIM_DEBUG__) ein, danach das Ende-Signal. Sonst sendet er nichts.
  try {
    var NativeWS = window.WebSocket;
    if (NativeWS) {
      var Stub = function (url, protocols) {
        if (!/\/_next\/(webpack-)?hmr/.test(String(url))) {
          return protocols === undefined ? new NativeWS(url) : new NativeWS(url, protocols);
        }
        var ws = { url: String(url), readyState: 1, CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3,
          protocol: '', extensions: '', bufferedAmount: 0, binaryType: 'arraybuffer',
          onopen: null, onmessage: null, onerror: null, onclose: null,
          send: function () {}, close: function () { ws.readyState = 3; },
          addEventListener: function () {}, removeEventListener: function () {}, dispatchEvent: function () { return false; } };
        var id = new URL(String(url), location.href).searchParams.get('id') || '';
        var idBytes = new TextEncoder().encode(id);
        function frame(data) {
          var buf = new Uint8Array(2 + idBytes.length + (data ? data.length : 0));
          buf[0] = 0; buf[1] = idBytes.length; buf.set(idBytes, 2);
          if (data) buf.set(data, 2 + idBytes.length);
          return buf.buffer;
        }
        function deliver(data) { if (ws.readyState === 1 && ws.onmessage) ws.onmessage({ type: 'message', data: data }); }
        setTimeout(function () {
          if (ws.onopen) ws.onopen({ type: 'open' });
          var src = window.__INTERIM_DEBUG__;
          var done = function () { deliver(frame(null)); };
          if (!src) return done();
          fetch(src).then(function (r) { return r.ok ? r.arrayBuffer() : null; }).then(function (ab) {
            if (ab && ab.byteLength) deliver(frame(new Uint8Array(ab)));
            done();
          }, done);
        }, 0);
        return ws;
      };
      Stub.prototype = NativeWS.prototype;
      Stub.CONNECTING = 0; Stub.OPEN = 1; Stub.CLOSING = 2; Stub.CLOSED = 3;
      window.WebSocket = Stub;
    }
  } catch (e) { /* egal */ }

  // 2. Bildoptimierer /_next/image?url=X -> X, auch fuer Bilder, die React oder WebGL erst
  //    im Browser setzen (der Service Worker greift erst ab dem zweiten Aufruf)
  function fix(v) {
    if (typeof v !== 'string' || v.indexOf('/_next/image') === -1) return v;
    return v.replace(/\/_next\/image\/?\?url=([^&\s,"']+)(?:&[a-z]+=[^&\s,"']*)*/g, function (_, enc) {
      try { return encodeURI(decodeURIComponent(enc)); } catch (e) { return enc; }
    });
  }
  try {
    [[HTMLImageElement, ['src', 'srcset']], [HTMLSourceElement, ['src', 'srcset']], [HTMLLinkElement, ['href', 'imageSrcset']]].forEach(function (pair) {
      pair[1].forEach(function (prop) {
        var d = Object.getOwnPropertyDescriptor(pair[0].prototype, prop);
        if (!d || !d.set) return;
        Object.defineProperty(pair[0].prototype, prop, { configurable: true, enumerable: d.enumerable, get: d.get,
          set: function (v) { d.set.call(this, fix(v)); } });
      });
    });
    var setAttr = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function (name, value) {
      var n = String(name).toLowerCase();
      if (n === 'src' || n === 'srcset' || n === 'imagesrcset' || (n === 'href' && this.tagName === 'LINK')) value = fix(String(value));
      return setAttr.call(this, name, value);
    };
    var nativeFetch = window.fetch;
    if (nativeFetch) {
      window.fetch = function (input, init) {
        if (typeof input === 'string') input = fix(input);
        else if (input instanceof URL) input = fix(input.href);
        return nativeFetch(input, init);
      };
    }
  } catch (e) { /* egal */ }

  // 3. Service Worker: Bildoptimierer, /api/*, Sentry, Weiterleitung nicht gespiegelter Seiten
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/interim-sw.js', { scope: '/' }).catch(function () {});
  }

  // 4. nur 404.html: Pfade ausserhalb des Spiegels auf die Live-Seite weiterleiten
  var routes = window.__INTERIM_ROUTES__;
  if (routes) {
    var live = 'https://plastship.com';
    var here = location.pathname.replace(/\/?$/, '/');
    var underLive = location.origin === live || location.origin === live.replace('://', '://www.');
    if (!underLive && routes.indexOf(here) === -1 && !/\.[A-Za-z0-9]{2,5}$/.test(location.pathname)) {
      location.replace(live + location.pathname + location.search + location.hash);
    }
  }
})();
