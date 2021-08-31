self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      './',
      './index.html',
      './sw.js',
      './js/jquery-3.3.1.min.js',
      './js/script.js',
      './js/navigation.js',
      './js/index.js',
      './js/share.js',
      './css/images/body.jpg',
      './css/images/1.jpg',
      './css/images/2.jpg',
      './css/images/icon.png',
      './css/style.css',
    ])),
  );
});
self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
