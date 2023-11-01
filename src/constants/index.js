import {
	rev,
	pwn,
	sysadmin,
	space,

	trx,
	mhackeroni,
	ccit,
	leonardo,
	esa,

	c,
	cpp,
	docker,
	go,
	python,
	typescript,

	carrent,
	jobit,
	tripguide,

} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "experience",
		title: "Experience",
	},
	{
		id: "contact",
		title: "Contact",
	},
	];

const services = [
	{
		title: "Reverse Engineering",
		icon: rev,
	},
	{
		title: "Binary Exploitation",
		icon: pwn,
	},
	{
		title: "System Administration",
		icon: sysadmin,
	},
	{
		title: "Space Hacker",
		icon: space,
	},
];

const experiences = [
	{
		title: "CTF Player",
		name: "TheRomanXpl0it",
		icon: trx,
		iconBg: "#989Ee6",
		date: "Apr 2023 - Present",
		points: [
			"Joined CTF Team",
			//"point",
		],
	},
	{
		title: "CTF Player",
		name: "mHACKeroni",
		icon: mhackeroni,
		iconBg: "#989Ee6",
		date: "May 2023 - Present",
		points: [
			"Joined CTF Team",
			//"point",
		],
	},
	{
		title: "Cyber Challenge",
		name: "CyberChallengeIT",
		icon: ccit,
		iconBg: "#989Ee6",
		date: "Feb 2023 - Jul 2023",
		points: [
			"Achieved first place in the national AD CTF",
			//"point",
		],
	},
	{
		title: "CyberShield",
		name: "Leonardo",
		icon: leonardo,
		iconBg: "#989Ee6",
		date: "Sep 2023 - Oct 2023",
		points: [
			"Achieved third place in the Cyber Threat Hunting CTF",
			"CyberTechEurope Guest",
		],
	},
	{
		title: "Pwn The Rover",
		name: "ESA - Fraunhofer - ATHENE",
		icon: esa,
		iconBg: "#989Ee6",
		date: "Sep 2023 - Oct 2023",
		points: [
			"Achieved fourth place in the Space Hacking CTF",
			//"point",
		],
	},
];

const technologies = [
	{
		name: "C",
		icon: c,
	},
	{
		name: "Cpp",
		icon: cpp,
	},
	{
		name: "Docker",
		icon: docker,
	},
	{
		name: "Go",
		icon: go,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
];

const projects = [
	{
		name: "Car Rent",
		description:
		"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
		{
			name: "react",
			color: "blue-text-gradient",
		},
		{
			name: "mongodb",
			color: "green-text-gradient",
		},
		{
			name: "tailwind",
			color: "pink-text-gradient",
		},
		],
		image: carrent,
		source_code_link: "https://github.com/",
	},
	{
		name: "Job IT",
		description:
		"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
		{
			name: "react",
			color: "blue-text-gradient",
		},
		{
			name: "restapi",
			color: "green-text-gradient",
		},
		{
			name: "scss",
			color: "pink-text-gradient",
		},
		],
		image: jobit,
		source_code_link: "https://github.com/",
	},
	{
		name: "Trip Guide",
		description:
		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
		{
			name: "nextjs",
			color: "blue-text-gradient",
		},
		{
			name: "supabase",
			color: "green-text-gradient",
		},
		{
			name: "css",
			color: "pink-text-gradient",
		},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const testimonials = [
	{
		testimonial:
		"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
		"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
		"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

export { services, technologies, experiences, testimonials, projects };