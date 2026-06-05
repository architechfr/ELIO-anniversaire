// Service Worker — Élio Game Room
// Permet l'installation PWA + fonctionnement hors-ligne après 1re visite.
const CACHE = 'elio-sonic-v1';

// Fichiers essentiels mis en cache à l'installation
const CORE = [
  './',
  './index.html',
  './poster.png',
  './icon-192.png',
  './icon-512.png',
  './manifest.webmanifest',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first : sert depuis le cache, sinon réseau (et met en cache au passage)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        // Met en cache les fichiers du jeu (ROMs, data, vidéo) à la volée
        if (resp.ok && resp.type === 'basic') {
          const copy = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return resp;
      }).catch(() => cached);
    })
  );
});
