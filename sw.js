const CACHE_NAME = 'tahajjud-time-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

**3. Create icons:**
You'll need two icon files (`icon-192.png` and `icon-512.png`). You can create these using any design tool with a moon/crescent icon. For now, you can use a placeholder or create simple icons online at sites like Canva or Figma.

**Your file structure should be:**
```
your-repo/
├── index.html (the HTML file above)
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
