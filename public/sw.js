console.log('started ServiceWorker');

this.addEventListener('install', event => {
	event.waitUntil(
	    caches.open('looklive-v1').then(cache => {
	    	return cache.addAll([
	        	'/',
	        	'/styles/style.css',
	        	'/js/app.js'
	    	]);
	    })
	);
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
      	return response || fetch(event.request)
      })
  );
});

