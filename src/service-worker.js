self.addEventListener('install', (event) => {
    event.waitUntil(
    caches.open('my-cache').then((cache) => {
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/css/style.css',
            '/js/chunk-vendors.js',
            '/js/app.js'
          // 其他需要緩存的資源
        ]);
        })
    );
    });
    
    self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
        return response || fetch(event.request);
        })
    );
    });