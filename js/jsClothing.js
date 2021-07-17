var sectionHeading = document.getElementsByClassName("sectionHeading");
var img1 = document.getElementsByClassName("image1");
var img2 = document.getElementsByClassName("image2");
var img3 = document.getElementsByClassName("image3");
var img4 = document.getElementsByClassName("image4");
var img5 = document.getElementsByClassName("image5");
var img6 = document.getElementsByClassName("image6");

var subHeading1 = document.getElementsByClassName("subheading1");
var subHeading2 = document.getElementsByClassName("subheading2");
var subHeading3 = document.getElementsByClassName("subheading3");
var subHeading4 = document.getElementsByClassName("subheading4");
var subHeading5 = document.getElementsByClassName("subheading5");
var subHeading6 = document.getElementsByClassName("subheading6");

var des1 = document.getElementsByClassName("description1");
var des2 = document.getElementsByClassName("description2");
var des3 = document.getElementsByClassName("description3");
var des4 = document.getElementsByClassName("description4");
var des5 = document.getElementsByClassName("description5");
var des6 = document.getElementsByClassName("description6");


var sHeading = ["Best pieces of 18th century",  "Best pieces of 1920s", "Best pieces of 1930s", "Best pieces of 1940s", "Best pieces of 1950s"];

var picture1 = ["Images/18th.jpg", "Images/20s1.jpg", "Images/30s1.jpg", "Images/40s1.jpg", "Images/50s1.jpg"];
var picture2 = ["Images/18th2.jpg", "Images/20s2.jpg", "Images/30s2.jpg", "Images/40s2.jpg", "Images/50s2.jpg"];
var picture3 = ["Images/18th3.jpg", "Images/20s3.jpg", "Images/30s3.jpg", "Images/40s3.jpg", "Images/50s3.jpg"];
var picture4 = ["Images/18th4.jpg", "Images/20s4.jpg", "Images/30s4.jpg", "Images/40s4.jpg", "Images/50s4.jpg"];
var picture5 = ["Images/18th5.jpg", "Images/20s5.jpg", "Images/30s5.jpg", "Images/40s5.jpg", "Images/50s5.jpg"];
var picture6 = ["Images/18th6.jpg", "Images/20s6.jpg", "Images/30s6.jpg", "Images/40s6.jpg", "Images/50s6.jpg"];


var heading1 = ["Robe volante", "Velvet clothes", "Floral Feedsack Dress", "Country Plaid Dress", "50s Poodle skirts"];
var heading2 = ["Mantua","Handkerchief Hems", "Green Knit Day Suit", "Women’s Suits", "Pencil Skirts"];
var heading3 = ["Robe à la française", "Tiered Skirts", " Black Chiffon Beaded Dress", "High-waisted Pants", "The Sweater Girl Look"];
var heading4 = ["Robe à l’anglaise","Sequins","Art Deco Knit Sweater","Box coats ","Evening Gowns"];
var heading5 = [" Round gown", "Oriental Style", "Bias Cut Floral Silk Dress", "Suit Style Dress", "Shirtwaist dresses"];
var heading6 = ["Marchands de mode","La Garconne Dresses","Sports Causal","Novelty Print Dress","Circle skirts"];

var descrip1 = ["A robe volante, derived from negligee enjoyed popularity as formal wear in the early 18th century. The large flounce flowed from the shoulders to the ground and was shaped to spread softly over the skirt, characterized this style of gown.",
			"Velvet’s popularity represented the ’20s passion for luxury. “Burnout” velvet was an invention of the decade. An outerwear style trend of the ’20s, shapeless, almost blanket-like “Opera coats” were made from velvet material. When the ’60s did ’20s fashion, the burnout velvet mini dress was a popular reproduction piece and a style still easy to find and wear today.",
			"The trend of the feedsack dress began in the ’20s when resourceful women realized they could upcycle the material of sacks into clothing for themselves and their family. The trend grew exponentially out of economical necessity during the Depression era ’30s.",
			"It’s a casual style for the era that’d have been worn gardening (the pockets are perfect for your pruners and the color camouflages any grass or dirt stains), playing with children in the yard or walking into town to gather fresh produce at the local market.",
			"Chop off the top half of a dress and you are left with a classic 1950s skirt. They were worn over several layers of fluffy petticoats to add to the volume."
			];

var descrip2 = ["The mantua was fashionable from the 1670s through to the beginning of the 18th century, but continued to be worn in England at Court from the 1730s to the end of the 18th century. The feature of the dress is the long train extended at the back.",
					"Handkerchief hems were a flirty design element to the rising hemline of the ’20s dress, when a dress’ skirt falls at different points along the hemline creating an asymmetrical scarf effect. I think that the hem design was popular because it gracefully showed more skin while also covering some of it within the same hem.",
					"Influential ’30s designer Coco Chanel introduced the jersey knit two-piece suit as an economically fit and relaxed option for daywear women’s fashion.",
					"The shortage of fabric also caused the popularity of the two-piece suit known as a Victory or Utility suit.  Women could mix and match skirts, blouses, and jackets for a new outfit every day. Even after the war, the suit remained popular due to its comfort and practicality.",
					"A narrow, close fitting straight skirt sometimes call a ‘hobble’ skirt restricted women’s walking creating the wiggle look. Pencil line dresses were also very popular for all ages, being a very sophisticated look for more mature women worn with heels and plenty of accessories."
					];
					
var descrip3 = ["This is a typical Rococo period women's dress, 'robe à la française'. The ensemble shown here consists of a gown, the petticoat much like what we would call a skirt today, and a stomacher made in a triangular panel shape. Until clothing accepted drastic changes with the 1789 French Revolution, rich outfits, such as is shown here, were worn.",
				"They were special as they captured the era’s penchant for pleating and feminine sportswear.The left dress is made from rayon crepe and was worn by a fashion-forward flapper female in her day, while the dress on the right is a light novelty print not fancy enough for evening activities and so was probably a knock-off style handsewn and worn by those who couldn’t afford the real deal.",
				"This piece speaks to two trends of the ’30s. Thanks to Coco Chanel’s influence over women’s fashion through her introduction of the jersey knit suit, functionality became just as important next to fashion. This is part of the reason why sweaters became so popular in the ’30s, because they were just much easier to wear when leading a more active lifestyle.",
				"Pants or trousers were primarily a men’s wear item only until the 1940s. Working in factories needed safe clothing that wouldn’t snag in machinery. At first women just wore men’s pants. Later manufactures made pants for women, although they still looked very masculine. They were very high waisted, button or zipper down the side and had full legs with wide cuffs at the bottom.",
				"The tight sweater was born in the 40s and would remain popular throughout the 50s"
				];
				
var descrip4 = ["Accompanied by the simplification of clothing worn outside of the royal court, during the 1770s, women's clothing progressed in the direction of functionality. As one can see, the dress' pleats are sewn into the waist and stop there; this style is known as 'Robe à l'anglaise'.",
				"Sequins embellished dresses were worn by the young, fancy and free  ’20s child because their shimmer and shine drew a looker’s eyes to the body of its wearer. Like a ’70s diva rocked a sequin jumpsuit to shine below the disco ball and meet her dance partner, the flapper female’s sequin dress was worn for the attention-seeking purposes of attracting the opposite sex. During this era of liberated fashion and sexuality, sequins were one of many ways the female fashionista fearlessly strutted her stuff.",
				"This piece speaks to two trends of the ’30s. Thanks to Coco Chanel’s influence over women’s fashion through her introduction of the jersey knit suit, functionality became just as important next to fashion. This is part of the reason why sweaters became so popular in the ’30s, because they were just much easier to wear when leading a more active lifestyle.",
				"Early 1940s coats were very square and usually plain. They had a few large buttons down the front, plain or cuffed narrow sleeves, and a variety of necklines. They were long, down to the knee, to keep warm and covered up.",
				"Soft, feminine, romantic…these words best describe Fifties evening wear. This type of party dress a younger woman might easily wear as this beautiful black dress accentuates the girl’s figure without being revealing."
				];

var descrip5 = ["Around the 1789 French Revolution, the Rococo period's extravagant dresses of brilliant hues changed, becoming simple, white dresses.",
				"It was considered to be one of the most stylish dresses worn by the people of 20s. They wore it mostly when going out for lunch or dinner.",
				"Parisian designer Madame Vionnet developed the bias cut method in 1922, and it was in the ’30s that her technique caught on and was used by other designers to create dresses that embraced the female form while celebrating fluidity and movement.",
				"It’s a one piece dress designed to look like a skirt suit. Wear this at a low lit smokey bar, playing live jazz and between you and me, inspires all the boys to eye you up.",
				"A shirtwaist dress, designed with a bodice that looks like a shirt complete with collar, buttons and sometimes sleeve cuffs. The “shirt” is cinched at the waist with a belt and an attached pleated skirt, forming a “shirtwaist dress” worn by housewives of the ’50s for style which was functional and fashionable."
				];
				
var descrip6 = ["Throughout 18th century, the composition of women's dress did not change. In the latter half of the 18th century, these merchants were responsible for producing and selling trimmings from head to toe, including headdresses. They gave full rein to their imaginations when decorating dresses, created headpieces, and in the end became powerful trend setters of the time.",
				"La Garconne dresses were cut short and straight to de-emphasize a woman’s curves. With the prints inspired from the Art Deco. They wore these dresses to look more like boys. The word “La Garconne” in french means boyish.",
				"During the 1930s, sports and outdoor activities became fashionable. Being fit and healthy was encouraged and this extended into ideas on clothing. This period saw the rise of the lounge pant and wide leg trouser heralding a chic and casual look. Further influences came from sailor and military styles.",
				"This is a dress that talks, so expect to talk a lot about it when the people you meet want a closer look at the cute dress you’re wearing. The print’s “novelty” attributes will strike up conversation with the people around you, and you’ll leave having made a memorable impression on friends old and new.",
				"Voluminous “circle” skirt made possible by its A-line flare and a layer of tulle or crinoline below. It was nicknamed the circle skirt because of its circular shape along the edges of the skirt hem."
				];				
				
				
function openDescription(option){
	if (option == 0){
		sectionHeading[0].innerHTML = sHeading[0];
		img1[0].src = picture1[0];
		img2[0].src = picture2[0];
		img3[0].src = picture3[0];
		img4[0].src = picture4[0];
		img5[0].src = picture5[0];
		img6[0].src = picture6[0];
		subHeading1[0].innerHTML = heading1[0];
		subHeading2[0].innerHTML = heading2[0];
		subHeading3[0].innerHTML = heading3[0];
		subHeading4[0].innerHTML = heading4[0];
		subHeading5[0].innerHTML = heading5[0];
		subHeading6[0].innerHTML = heading6[0];
		des1[0].innerHTML = descrip1[0];
		des2[0].innerHTML = descrip2[0];
		des3[0].innerHTML = descrip3[0];
		des4[0].innerHTML = descrip4[0];
		des5[0].innerHTML = descrip5[0];
		des6[0].innerHTML = descrip6[0];
	}
	
	else if(option == 1){
		sectionHeading[0].innerHTML = sHeading[1];
		img1[0].src = picture1[1];
		img2[0].src = picture2[1];
		img3[0].src = picture3[1];
		img4[0].src = picture4[1];
		img5[0].src = picture5[1];
		img6[0].src = picture6[1];
		subHeading1[0].innerHTML = heading1[1];
		subHeading2[0].innerHTML = heading2[1];
		subHeading3[0].innerHTML = heading3[1];
		subHeading4[0].innerHTML = heading4[1];
		subHeading5[0].innerHTML = heading5[1];
		subHeading6[0].innerHTML = heading6[1];
		des1[0].innerHTML = descrip1[1];
		des2[0].innerHTML = descrip2[1];
		des3[0].innerHTML = descrip3[1];
		des4[0].innerHTML = descrip4[1];
		des5[0].innerHTML = descrip5[1];
		des6[0].innerHTML = descrip6[1];
	}
	
	else if(option == 2){
		sectionHeading[0].innerHTML = sHeading[2];
		img1[0].src = picture1[2];
		img2[0].src = picture2[2];
		img3[0].src = picture3[2];
		img4[0].src = picture4[2];
		img5[0].src = picture5[2];
		img6[0].src = picture6[2];
		subHeading1[0].innerHTML = heading1[2];
		subHeading2[0].innerHTML = heading2[2];
		subHeading3[0].innerHTML = heading3[2];
		subHeading4[0].innerHTML = heading4[2];
		subHeading5[0].innerHTML = heading5[2];
		subHeading6[0].innerHTML = heading6[2];
		des1[0].innerHTML = descrip1[2];
		des2[0].innerHTML = descrip2[2];
		des3[0].innerHTML = descrip3[2];
		des4[0].innerHTML = descrip4[2];
		des5[0].innerHTML = descrip5[2];
		des6[0].innerHTML = descrip6[2];
	}
	
	else if(option == 3){
		sectionHeading[0].innerHTML = sHeading[3];
		img1[0].src = picture1[3];
		img2[0].src = picture2[3];
		img3[0].src = picture3[3];
		img4[0].src = picture4[3];
		img5[0].src = picture5[3];
		img6[0].src = picture6[3];
		subHeading1[0].innerHTML = heading1[3];
		subHeading2[0].innerHTML = heading2[3];
		subHeading3[0].innerHTML = heading3[3];
		subHeading4[0].innerHTML = heading4[3];
		subHeading5[0].innerHTML = heading5[3];
		subHeading6[0].innerHTML = heading6[3];
		des1[0].innerHTML = descrip1[3];
		des2[0].innerHTML = descrip2[3];
		des3[0].innerHTML = descrip3[3];
		des4[0].innerHTML = descrip4[3];
		des5[0].innerHTML = descrip5[3];
		des6[0].innerHTML = descrip6[3];
	}
	
	else if(option == 4){
		sectionHeading[0].innerHTML = sHeading[4];
		img1[0].src = picture1[4];
		img2[0].src = picture2[4];
		img3[0].src = picture3[4];
		img4[0].src = picture4[4];
		img5[0].src = picture5[4];
		img6[0].src = picture6[4];
		subHeading1[0].innerHTML = heading1[4];
		subHeading2[0].innerHTML = heading2[4];
		subHeading3[0].innerHTML = heading3[4];
		subHeading4[0].innerHTML = heading4[4];
		subHeading5[0].innerHTML = heading5[4];
		subHeading6[0].innerHTML = heading6[4];
		des1[0].innerHTML = descrip1[4];
		des2[0].innerHTML = descrip2[4];
		des3[0].innerHTML = descrip3[4];
		des4[0].innerHTML = descrip4[4];
		des5[0].innerHTML = descrip5[4];
		des6[0].innerHTML = descrip6[4];
	}
}

