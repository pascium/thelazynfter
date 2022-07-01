const staticCacheName = 'site-static-v0.0.8';
const dynamicCacheName = 'site-dynamic-v0.0.8';
const assets = [
  '/',
  '/index.html',
  '/js/main.js',
  '/css/bul.min.css',
  '/css/style.css',
  '/404/',
  '/img/icons/android-chrome-192x192.png',
  '/img/icons/android-chrome-512x512.png',
  '/img/icons/apple-touch-icon.png',
  '/img/icons/browserconfig.xml',
  '/img/icons/favicon-16x16.png',
  '/img/icons/favicon-32x32.png',
  '/img/icons/favicon.ico',
  '/img/icons/cc4.webp',
  '/img/icons/mstile-150x150.png',
  '/img/icons/site.webmanifest',
  '/img/icons/safari-pinned-tab.svg',
  '/thelazynfter_favicon.png',
  '/img/dystopian_tokyo_city.webp',
  '/img/free_nft_ad.webp',
  '/img/shipwreck_underwater.webp',
  '/img/steampunk_futuristic_city.webp',
  '/img/thelazynfter_logo.svg'

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
