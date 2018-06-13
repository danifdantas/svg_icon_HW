(function () {
	"use strict"; 
	console.log("file connected");




var iconSet = document.querySelectorAll(".icons");
// console.log(iconSet);




function logLoaded(evt) {
	// console.log("svg loaded");
	// console.log(evt);
	var targetSVG = evt.currentTarget.contentDocument;
	// console.log(targetSVG);
	var theIcon = targetSVG.querySelector(".mainIcon");
	// console.log(theIcon);
	theIcon.addEventListener("click", logClicked, false);
}
function logClicked(evt) {

	console.log(evt.currentTarget.id);
}

for (var i = 0; i<iconSet.length; i++) {
	// console.log(i);
	iconSet[i].addEventListener("load", logLoaded, false);
	
}



}) ();