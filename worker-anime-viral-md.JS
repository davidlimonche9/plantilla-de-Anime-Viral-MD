self.addEventListener('install', function(event) {
// Instalar de inmediato
if (self.skipWaiting) { self.skipWaiting(); }
  event.waitUntil(
    caches.open('cache01').then(function(cache) {
      return cache.addAll([
        './',
  'https://animeviramd.blogspot.com/',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css',
  'https://cdn.ampproject.org/v0.js',
  'https://rawcdn.githack.com/davidlimonche9/plantilla-de-Anime-Viral-MD/2877e2d126e38f732a806cd40596c993889d516d/whale.min.js',
  'https://rawcdn.githack.com/davidlimonche9/plantilla-de-Anime-Viral-MD/cfbd3eed23b17f9e77b04b460eadc00a8dfc201c/manifiest-anime-viral-md.json',
   'https://sdki.truepush.com/sdk/v2.0.2/app.js',
  ]);
    })
  );
});
// Cache, falling back to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
 // Elimina archivos de cache viejos
  var cacheWhitelist = ['cache01'];
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    });
	caches.keys().then(function(cacheKeys) {
	// Muestra en la consola la cache instalada 
	console.log('Versión SW: '+cacheKeys);
});  