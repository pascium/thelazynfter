const staticCacheName = 'site-static-v2';
const dynamicCacheName = 'site-dynamic-v2';
const assets = [
  '/',
  '/index.html',
  '/js/main.js',
  '/css/norm.min.css',
  '/css/main.css',
  '/404/',
  '/img/icons/apple-touch-icon.png',
  '/img/icons/favicon-32x32.png',
  '/img/icons/favicon-16x16.png',
  '/img/icons/site.webmanifest',
  '/img/icons/safari-pinned-tab.svg',
  '/img/thelazynfter_logo.svg',
  '/img/bg/city_of_robots.webp',
  '/img/bg/sci-fi_server_room.webp',
  '/img/bg/sci-fi_wheelchair.webp',
  '/img/bg/scifi_city_at_night.webp',
  '/img/bg/scifi_game_arena.webp',
  '/img/bg/scifi_planet.webp',
  '/img/page/metaservse_at_night.webp'

];

// cache size limit function
const limitCacheSize = (name, size) => {
  caches.open(name).then(cache => {
    cache.keys().then(keys => {
      if(keys.length > size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// fetch event
self.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  // evt.respondWith(
  //   caches.match(evt.request).then(cacheRes => {
  //     return cacheRes || fetch(evt.request).then(fetchRes => {
  //       return caches.open(dynamicCacheName).then(cache => {
  //         cache.put(evt.request.url, fetchRes.clone());
  //         // check cached items size
  //         limitCacheSize(dynamicCacheName, 15);
  //         return fetchRes;
  //       })
  //     });
  //   }).catch(() => {
  //     if(evt.request.url.indexOf('.html') > -1){
  //       return caches.match('/pages/fallback.html');
  //     } 
  //   })
  // );
});