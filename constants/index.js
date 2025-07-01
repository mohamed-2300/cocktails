const navLinks = [
	{
		id: "cocktails",
		title: "Cocktails",
	},
	{
		id: "about",
		title: "About Us",
	},
	{
		id: "art",
		title: "The Art",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const cocktailLists = [
	{
		name: "Chapel Hill Red Bliss",
		country: "AU",
		detail: "Battle",
		"price": 100
	},
	{
		name: "Caten Berry Elixir",
		country: "AU",
		detail: "Battle",
		"price": 490
	},
	{
		name: "Rhino Ginger Spark",
		country: "CA",
		detail: "750 ml",
		"price": 200
	},
	{
		name: "Irish Cream Brew",
		country: "IE",
		detail: "600 ml",
		"price": 290
	},
]
	;

const mockTailLists = [{
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: 100
},
{
	name: "Passionfruit Fresh",
	country: "US",
	detail: "Battle",
	price: 490
},
{
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: 200
},
{
	name: "Lavender Lemon Fizz",
	country: "IE",
	detail: "600 ml",
	price: 290
},]

const profileLists = [
	{
		imgPath: "/images/profile1.png",
	},
	{
		imgPath: "/images/profile2.png",
	},
	{
		imgPath: "/images/profile3.png",
	},
	{
		imgPath: "/images/profile4.png",
	},
];

const featureLists = [
	"Perfectly balanced blends",
	"Garnished to perfection",
	"Ice-cold every time",
	"Expertly shaken & stirred",
];

const goodLists = [
	"Handpicked ingredients",
	"Signature techniques",
	"Craftsmanship in every blend",
	"Freshly muddled flavors",
];

const storeInfo = {
	heading: "Where to Find Us",
	address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
	contact: {
		phone: "(555) 987-6543",
		email: "hello@jsmcocktail.com",
	},
};

const openingHours = [
	{ day: "Mon–Thu", time: "11:00am – 12am" },
	{ day: "Fri", time: "11:00am – 2am" },
	{ day: "Sat", time: "9:00am – 2am" },
	{ day: "Sun", time: "9:00am – 1am" },
];

const socials = [
	{
		name: "Instagram",
		icon: "/images/insta.png",
		url: "#",
	},
	{
		name: "X (Twitter)",
		icon: "/images/x.png",
		url: "#",
	},
	{
		name: "Facebook",
		icon: "/images/fb.png",
		url: "#",
	},
];

const sliderLists = [
	{
		id: 1,
		name: "Virgin Mojito",
		image: "/images/drink1.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Made with fresh mint, lime juice, soda water, and a hint of sweetness — the Virgin Mojito is crisp, cool, and refreshing on any day."
	},
	{
		id: 2,
		name: "Raspberry Mojito",
		image: "/images/drink2.png",
		title: "A Zesty Classic That Never Fails",
		description:
			"This fruity twist on the mojito combines raspberry, mint, lime, and bubbles for a mocktail that’s light, zesty, and full of life."
	},
	{
		id: 3,
		name: "Violet Breeze",
		image: "/images/drink3.png",
		title: "Simple Ingredients, Bold Flavor",
		description:
			"Violet Breeze blends grape juice, citrus, and floral notes for a refreshing zero-proof mocktail with a smooth, relaxing finish."
	},
	{
		id: 4,
		name: "Curacao Mojito",
		image: "/images/drink4.png",
		title: "Crafted With Care, Poured With Love",
		description:
			"Each mocktail is made with fresh ingredients and a passion for balance — whether you're celebrating or simply relaxing in style."
	}
];

export {
	navLinks,
	cocktailLists,
	mockTailLists,
	profileLists,
	featureLists,
	goodLists,
	openingHours,
	storeInfo,
	socials,
	sliderLists,
};