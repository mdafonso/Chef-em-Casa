 var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/bootstrap.min.css',

        './assets/js/bootstrap.min.js',

        './assets/js/jquery.min.js',

        './assets/js/popper.min.js',

      
        './assets/img/logotipo.png',
        './assets/img/icon_29.png',
        './assets/img/icon_40.png',
        './assets/img/icon_60.png',
        './assets/img/icon_57.png',
        './assets/img/icon_80.png',
        './assets/img/icon_87.png',
        './assets/img/icon_96.png',
        './assets/img/icon_114png',
        './assets/img/icon_120.png',
        './assets/img/icon_180.png',
        './assets/img/icon_144.png',
        './assets/img/icon_72.png',
        

        './assets/img/sobremesa.jpg',
        './assets/img/sopas.jpg',
        './assets/img/laches.jpg',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

});

