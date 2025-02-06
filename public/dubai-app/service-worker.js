// Import Workbox from the CDN
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// Import precache manifest generated during the build
importScripts("/dubai-app/precache-manifest.69bfff52a3f48604cc9e03f30c7ab589.js");

// Skip waiting and immediately activate the new service worker
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Claim clients immediately after activation
workbox.core.clientsClaim();

// Precache and route assets
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// Register route for navigation requests
workbox.routing.registerNavigationRoute(
  workbox.precaching.getCacheKeyForURL("/dubai-app/index.html"),
  {
    blacklist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
  }
);

// Register route for manifest.json
workbox.routing.registerRoute(
  new RegExp('/dubai-app/manifest.json'),
  new workbox.strategies.NetworkFirst({
    cacheName: 'manifest-cache',
  })
);
