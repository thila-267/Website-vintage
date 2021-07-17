var slideIndex = 1;

var headings = [];
var description = [];

headings[0] = "Wooden folding bench";
headings[1] = "Hand-knotted antique Persian Tabriz rug";
headings[2] = "1950s vintage mirror";
headings[3] = "Vintage stoneware crock";
headings[4] = "Orange Mini Bent Karlby Sconces Circa 1970s";

description[0] = "Kamissa Mort, Manager of Sales & Merchandising for Antiques & Vintage at Rejuvenation, believes in the enduring appeal of well-loved, well-built furniture as you know they’re good because they’ve already done half the work. When shopping vintage solid wood furniture, she suggests checking two things: the joinery and screws and hardware. The elegant look will certainly make any house or gardens look good.";
description[1] = "Handwoven, well-made rugs last a lifetime. Never buy a new rug that's made to look like an old rug. Handwoven rugs have around 100 knots per square inch. This helps explain their longevity. A good rug will last 50 to 100 years.There are many easy ways to clean them using mild soaps and brushes or just by vacuuming.";
description[2] = "A mirror is another home object that benefits from some age when used decoratively. A vintage or antique mirror will often be more affordable than a newly framed one. It will also look less sterile; the cloudiness that an older mirror has lends some romance to a living room or over a fireplace";
description[3] = "Vintage pottery often has miles more charm and history than newly purchased stuff and you’ll find in more cases than not that it’ll be more affordable and lend character to your meals. Other types of vintage ceramics like mugs, cups and gravy boats can be given new life as things like planters, cotton-ball bathroom storage, pencil cups, or just a spot to drop your loose change";
description[4] = "Looking for new lighting at an antiques store or estate sale can provide you many more options that you hadn’t thought of before. It will be a great way to add a distinct touch to a room. And again they are cheaper.";
 
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
