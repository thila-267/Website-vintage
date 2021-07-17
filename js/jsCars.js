var slideIndex = 1;

var headings = [];
var description = [];

headings[0] = "1957 Mercedes 300SL Gullwing";
headings[1] = "1934 Cadillac V16 Town Cabriolet";
headings[2] = "1966 Shelby 427 Cobra";
headings[3] = "Volkswagen Karmann Ghia Convertible";
headings[4] = "Ford Mustang";

description[0] = "It was the first iteration of the SL-Class grand tourer and fastest production car of its day with distinctive gull wing doors. It was built by Daimler-Benz AG.";
description[1] = "The Cadillac V-16 was Cadillac's top-of-the-line model from its January 1930 launch until 1940.";
description[2] = "Anything attached to Carroll Shelby’s name is immediately worth your time. It has an insane power-to-weight ratio, the Shelby 427 Cobra has a bit more giddyup. Plus, the hundreds of thousands of dollars you’d pay for one will seem like chump change compared to the other classics";
description[3] = "German coach builder Karmann took care of manufacturing, including hand-finished panels while Italian firm Ghia provided the styling. The Karmann Ghia wasn’t that quick in its day as the air-cooled engines only make so much noise. The big selling point, aside from the amazing looks, is that it’s one of the simplest and cheapest classics to work on.";
description[4] = "The classic ’60s-era Mustang has fought the ravages of aging and has retained an effortless, timeless appeal. That said, you do run the risk of looking like you’re on your way to a barn dance. The first-generation Mustang has the best looks of all the models, especially the early versions, and it wears a worn-in look well.";
 
showSlides(slideIndex);


function plusSlides(n) {
	showSlides (slideIndex += n);
}

function showSlides(n){
	var images = document.getElementsByClassName("mySlides");
	if (n > images.length) {
		slideIndex = 1;
		}
	if (n < 1) {
		slideIndex = images.length;
	}
	for (var i = 0; i < images.length; i++){
		images[i].style.display = "none";
	}
	images[slideIndex - 1].style.display = "block";
	document.getElementById("imageHeading").innerHTML = headings[slideIndex - 1];
	document.getElementById("description").innerHTML = description[slideIndex - 1];
	
}