/* ============================================================
   Minimal service worker — exists mainly so Chrome/Edge will treat
   the site as installable. Caches the app shell for offline access,
   but every same-origin GET is network-first: the site pulls live
   data from Bungie's API constantly (Xûr, nightfall, this week's
   rotation), so the cache is only a fallback for when the network
   request fails, never a first choice while online.
   Cross-origin requests (Bungie's API) are left completely alone.
   ============================================================ */
const CACHE_NAME = "rally-flag-v1";
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./assets/theme.css",
  "./assets/nav.js",
  "./favicon.ico"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
