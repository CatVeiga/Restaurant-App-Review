// service worker cache
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
        "./",
        "./index.html",
        "./img/1.jpg",
        "./img/2.jpg",
        "./img/3.jpg",
        "./img/4.jpg",
        "./img/5.jpg",
        "./img/6.jpg",
        "./img/7.jpg",
        "./img/8.jpg",
        "./img/9.jpg",
        "./img/10.jpg",
        "./img/hero.image.jpg",
        "./img/icon.jpg",
        "./img/logotipo.png",
        "./css/styles.css",
        "./css/responsive.css",
        "./js/dbhelper.js",
        "./js/main.js",
        "./js/restaurant_info.js",
        "./js/serviceWorker.js",
      ]);
        })
    );
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (resp) {
            return resp || fetch(event.request).then(function (response) {
                return caches.open('v1').then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});