window.onscroll = function() {shrinkNavbar()};

function shrinkNavbar() {
	var topPage = document.getElementById("topPage"),
	whyPOGO = document.getElementById("whyPokémonGo"),
	buddySystem = document.getElementById("BuddySystem"),
	medals = document.getElementById("Medals"),
	Poster = document.getElementById("Poster"),
	socialMedia = document.getElementById("socialMedia");

	var itemPosition1 = getPosition(topPage),
		itemPosition2 = getPosition(whyPOGO),
		itemPosition3 = getPosition(buddySystem) - 25,
		itemPosition4 = getPosition(medals) - 25,
		itemPosition5 = getPosition(Poster) - 25,
		itemPosition6 = itemPosition5 + 325;
	
	var navBar = document.getElementById("navbar"),
		navBarHeight = navBar.style.getPropertyValue("height"),
		indicator1 = document.getElementById("indicator1"),
		indicator2 = document.getElementById("indicator2"),
		indicator3 = document.getElementById("indicator3"),
		indicator4 = document.getElementById("indicator4"),
		indicator5 = document.getElementById("indicator5"),
		indicator6 = document.getElementById("indicator6");
	
	
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		const menuItems = document.getElementsByClassName("menuItem");
		for (let i = 0; i < menuItems.length; ++i) {
			menuItems[i].style.fontSize = "80%";
		}
		const navList = document.getElementsByClassName("navList");
		for (let i = 0; i < navList.length; ++i) {
			navList[i].style.padding = "0.5% 1rem";
		}
		const logo = document.getElementsByClassName("logo")[0];
		logo.style.height = "1rem";
	} else {
		const mi = document.getElementsByClassName("menuItem");
		for (let i = 0; i < mi.length; ++i) {
			mi[i].style.fontSize = "100%";
		}
		const navList = document.getElementsByClassName("navList");
		for (let i = 0; i < navList.length; ++i) {
			navList[i].style.padding = "2.5% 1rem";
		}
		const logo = document.getElementsByClassName("logo")[0];
		logo.style.height = "3rem";
	}
	let topPosition = document.documentElement.scrollTop || document.body.scrollTop;
	topPosition += navBarHeight;
	if (topPosition >= itemPosition1 && topPosition <= itemPosition2) {
		indicator1.style.backgroundColor = "rgba(255,214,50,1)";
		indicator2.style.backgroundColor = "rgba(250,250,50,1)";
		indicator3.style.backgroundColor = "rgba(250,250,50,1)";
		indicator4.style.backgroundColor = "rgba(250,250,50,1)";
		indicator5.style.backgroundColor = "rgba(250,250,50,1)";
		indicator6.style.backgroundColor = "rgba(250,250,50,1)";
	}
	if (itemPosition2  <= topPosition && topPosition <= itemPosition3) {
		indicator1.style.backgroundColor = "rgba(250,250,50,1)";
		indicator2.style.backgroundColor = "rgba(255,214,50,1)";
		indicator3.style.backgroundColor = "rgba(250,250,50,1)";
		indicator4.style.backgroundColor = "rgba(250,250,50,1)";
		indicator5.style.backgroundColor = "rgba(250,250,50,1)";
		indicator6.style.backgroundColor = "rgba(250,250,50,1)";
	}
	if (itemPosition3 <= topPosition && topPosition <= itemPosition4) {
		indicator1.style.backgroundColor = "rgba(250,250,50,1)";
		indicator2.style.backgroundColor = "rgba(250,250,50,1)";
		indicator3.style.backgroundColor = "rgba(255,214,50,1)";
		indicator4.style.backgroundColor = "rgba(250,250,50,1)";
		indicator5.style.backgroundColor = "rgba(250,250,50,1)";
		indicator6.style.backgroundColor = "rgba(250,250,50,1)";
	}
	if (itemPosition4 <= topPosition && topPosition <= itemPosition5) {
		indicator1.style.backgroundColor = "rgba(250,250,50,1)";
		indicator2.style.backgroundColor = "rgba(250,250,50,1)";
		indicator3.style.backgroundColor = "rgba(250,250,50,1)";
		indicator4.style.backgroundColor = "rgba(255,214,50,1)";
		indicator5.style.backgroundColor = "rgba(250,250,50,1)";
		indicator6.style.backgroundColor = "rgba(250,250,50,1)";
	}
	if (itemPosition5 <= topPosition && topPosition <= itemPosition6) {
		indicator1.style.backgroundColor = "rgba(250,250,50,1)";
		indicator2.style.backgroundColor = "rgba(250,250,50,1)";
		indicator3.style.backgroundColor = "rgba(250,250,50,1)";
		indicator4.style.backgroundColor = "rgba(250,250,50,1)";
		indicator5.style.backgroundColor = "rgba(255,214,50,1)";
		indicator6.style.backgroundColor = "rgba(250,250,50,1)";
	}
	if (itemPosition6 < topPosition) {
		indicator1.style.backgroundColor = "rgba(250,250,50,1)";
		indicator2.style.backgroundColor = "rgba(250,250,50,1)";
		indicator3.style.backgroundColor = "rgba(250,250,50,1)";
		indicator4.style.backgroundColor = "rgba(250,250,50,1)";
		indicator5.style.backgroundColor = "rgba(250,250,50,1)";
		indicator6.style.backgroundColor = "rgba(255,214,50,1)";
	}
}

function getPosition(element) {
	let height = 0;
	while (element) {
		height += (element.offsetTop - element.scrollTop + element.clientTop);
		element = element.offsetParent;
	}
	return height;
}

let carouselIndex = 1;
carousel(carouselIndex);
document.getElementById("carousel-button-next").addEventListener("click", nextCarousel);
document.getElementById("carousel-button-prev").addEventListener("click", previousCarousel);

function nextCarousel() {
	carouselIndex++;
	carousel(carouselIndex);
}

function previousCarousel() {
	carouselIndex--;
	carousel(carouselIndex);
}

function carousel(n) {
	let carousels = document.getElementsByClassName("carousel");
	if (n > carousels.length) {
		carouselIndex = 1;
	}
	if (n < 1) {
		carouselIndex = carousels.length;
	}
	for (let i = 0; i < carousels.length; i++) {
		carousels[i].style.display = "none";
	}
	carousels[carouselIndex - 1].style.display = "block";
}

const Achievements = ["Jogger", "Collector", "Scientist", "Breeder", "Backpacker", "Researcher", "Cameraman", "Purifier", "Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "BattleGirl", "AceTrainer", "BerryMaster", "GymLeader", "Champion", "BattleLegend", "Hero", "UltraHero", "Gentleman", "Idol", "Pilot", "GreatLeague", "UltraLeague", "MasterLeague", "Fisherman", "Youngster", "PikachuFan", "Unown"];

let modals = [];

for (let i = 0; i < Achievements.length; i++) {
	modalName = Achievements[i].concat("_modal");
	singleModal = document.getElementById(modalName);
	modals.push(singleModal);
}

let medalButtons = [];

for (let i = 0; i < Achievements.length; i++) {
	buttonName = Achievements[i].concat("_shadow");
	singleButton = document.getElementById(buttonName);
	medalButtons.push(singleButton);
}

for (let i = 0; i < Achievements.length; i++) {
	const j = i;
	medalButtons[j].onclick = function(){
		modals[j].style.display = "block";
		document.getElementById(Achievements[j].concat("_image")).src = "assets/medals2/".concat(Achievements[j], "_Gold.png");
	}
}

window.onclick = function(event) {
	if (event.target.className === "modal") {
		for (let i = 0; i < Achievements.length; i++) {
			modals[i].style.display = "none";
		}
	}
}

const embeddedVideo = document.getElementById("buddy_adventures_video");

embeddedVideo.volume = 0.2;