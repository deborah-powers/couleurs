// gérer le cache
const cacheName = 'hello-pwa';
const filesToCache =[
	'/couleurs/',
	'/couleurs/index.html',
	'/couleurs/service-launcher.js',
	'/couleurs/job.js',
	'/couleurs/structure.css',
	'/couleurs/color.css',
	'/couleurs/style.css',
	'/couleurs/debbyPlay.css',
	'/couleurs/debbyPlay.js'
];
// mettre en cache le contenu de l'app
self.addEventListener ('install', function (event){
	event.waitUntil (caches.open (cacheName).then (function (cache){
		return cache.addAll (filesToCache);
}));});
// rendre le contenu de l'app hors-ligne
self.addEventListener ('fetch', function (event){
	event.respondWith (
	caches.match (event.request).then (function (response){
		return response || fetch (event.request);
}));});
