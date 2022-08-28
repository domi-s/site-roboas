const membersData = [
	{
		name: "Ioana Popa",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "George Cărpinișan",
		class: 2023,
		classIndex: "B",
		birth: new Date(2004, 3, 17, 0, 0) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "Dominic Satnoianu (Domi)",
		class: 2023,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/domi.jpg",
		thumbnailImage: "static/profile/domi.webp",
		passions: "Scrima, programarea, pisicile &#128008;",
		roles: [0, 4],
		description: "Hello! Eu-s Domi, iar în cadrul echipei de robotică mă ocup cu programarea. Iubesc pisicile, motiv pentru care o să mângâi orice mâță pe care o văd pe stradă!! În timpul liber îmi place să practic sporturi, precum scrima sau baschetul.",
		insta: "domi.py"
	},
	{
		name: "Robert Brîndea",
		class: 2023,
		classIndex: "B",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
		descriptionImage: "static/insta/robert.jpg",
		thumbnailImage: "static/profile/robert.webp",
		passions: "Cititul, scrisul, muzica, lumânări &#128367;",
		roles: [0, 2],
		description: "Bună! Sunt Robert și ăsta e primul meu an în echipa RoboAs, în cadrul căreia mă ocup cu designul și cu programarea. Pe lângă asta, în timpul liber citesc cam orice tip de cărți, mai ales ficțiune, scriu și ascult muzică. Îmi place să mă plimb prin natură și să colecționez chestii care miros frumos &ndash; gen lumânări parfumate și bețișoare parfumate.",
		insta: "robert.sqoop"
	},
	{
		name: "Andrei Borcoman (Borco)",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 7, 20, 0, 0) * 1,
		descriptionImage: "static/insta/borco.jpg",
		thumbnailImage: "static/profile/borco.webp",
		passions: "Sportul, Pepsi fără zahăr &#127936;",
		roles: [1, 3],
		description: "Neatza! Știi omul ăla care face mereu echipa să râdă chiar și în cele mai nasoale momente? Nu, nu sunt eu! Eu sunt Borco! Glumesc, glumesc! Îmi place să cred că pot să readuc echipa la viață oricât de moartă ar fi. Mă ocup cu proiectarea în cadrul echipei RoboAs. În ultima vreme am început să fiu foarte interesat de sport și de stilul de viață sănătos.",
		insta: "_borco_"
	},
	{
		name: "Teodor Neagoe (Teon)",
		class: 2023,
		classIndex: "A",
		birth: new Date(2004, 5, 8, 0, 0) * 1,
		descriptionImage: "static/insta/teon.jpg",
		thumbnailImage: "static/profile/teon.webp",
		passions: "Calisthenics, programarea, electronica, aeromodelismul, biciclismul, cățăratul &#128690;",
		roles: [0, 1, 3],
		description: "Salut! Sunt Teodor Neagoe (aka Teon) și mă ocup  cu proiectarea 3D în cadrul echipei RoboAs. Îmi place cam tot ce e legat de tehnologie: de la programat, proiectat, editat la construit circuite electrice și aeromodelism. Ca sporturi, ador biciclismul, cățăratul, alergatul, schiatul și înotul. Îmi place speed-cubingul și muzica rock!",
		insta: "teo.climber"
	},
	{
		name: "Dennis Bart",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/dennis.jpg",
		thumbnailImage: "static/profile/dennis.webp",
		passions: "Jocurile de fantezie, schiatul &#9975;",
		roles: [1, 3, 4],
		description: "Salut. Sunt Dennis și mă bucur mult să fiu în echipa RoboAs de un an. Îmi plac filmele, jocurile de fantezie și cărțile de ficțiune. De asemenea, îmi place adrenalina și să schiez. Cam atât despre mine :))",
		insta: "dennis__bart"
	},
	{
		name: "Ionuț",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "static/insta/dennis.jpg",
		thumbnailImage: "static/profile/dennis.webp",
		passions: "Jocurile de fantezie, schiatul &#9975;",
		roles: [1, 3, 4],
		description: "Salut. Sunt Dennis și mă bucur mult să fiu în echipa RoboAs de un an. Îmi plac filmele, jocurile de fantezie și cărțile de ficțiune. De asemenea, îmi place adrenalina și să schiez. Cam atât despre mine :))",
		insta: "dennis__bart"
	},
	{
		name: "Ana Răduș",
		class: 2024,
		classIndex: "A",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "",
		roles: [],
		description: "",
		insta: ""
	},
	{
		name: "Mircea Bodean",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Darius Chițu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Alexia Muncaciu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Anastasia Muncaciu",
		class: 2025,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Rareș Buteică",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Alexandra Șerban",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Daria Pampu-Românescu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Vlad Ștefan Deaconu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "David Iustin Brățucu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Maria Vasilescu",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
	{
		name: "Vlad Cobenciuc",
		class: 2024,
		classIndex: "B",
		birth: new Date(2005, 0, 27, 3, 40) * 1,
		descriptionImage: "https://dummyimage.com/500",
		thumbnailImage: "https://dummyimage.com/500",
		passions: "Frcutul pasiuni haha te ai prins",
		roles: [0, 1, 2, 3, 4],
		description: "",
		insta: ""
	},
].sort((a, b) => {
	if(a.class != b.class) return b.class - a.class;
	return a.name.localeCompare(b.name);
});