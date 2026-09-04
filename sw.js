self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});
self.addEventListener('fetch', (e) => {
  // Fetch handler for offline caching
});
