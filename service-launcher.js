window.onload = function(){
	'use strict';
	if ('serviceWorker' in navigator) navigator.serviceWorker.register ('./service-worker.js');
}
// rendre mon application installable
var buttonInstall = document.getElementById ('installator');
var deferredPrompt;
window.addEventListener ('beforeinstallprompt', function (event){
	// empêcher l'affichage de la popup d'installation
	event.preventDefault();
	deferredPrompt = event;
	buttonInstall.innerHTML = 'installez-moi';
	buttonInstall.className ="";
});
buttonInstall.addEventListener ('click', function(){
	if (deferredPrompt) deferredPrompt.prompt();
});
