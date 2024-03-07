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
	cis,
	sapienza,

	asm,
	c,
	cpp,
	docker,
	git,
	go,
	java,
	javascript,
	kivy,
	opengl,
	python,
	typescript,

	engine_3d,
	proxy,
	kernel,

	dario,

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
		],
	},
	{
		title: "Cyber Challenge Bootcamp",
		name: "Sapienza University of Rome",
		icon: sapienza,
		iconBg: "#989Ee6",
		date: "Oct 2023 - Dec 2023",
		points: [
			"Tutor for the Cyber Challenge Bootcamp",
		],
	},
	{
		title: "Cyber Challenge",
		name: "CyberChallengeIT",
		icon: ccit,
		iconBg: "#989Ee6",
		date: "Feb 2024 - Present",
		points: [
			"Cyber Challenge Tutor",
		],
	},
];

const technologies = [
	{
		name: "ASM",
		icon: asm,
	},
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
		name: "Git",
		icon: git,
	},
	{
		name: "Go",
		icon: go,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "Javascript",
		icon: javascript,
	},
	{
		name: "Kivy",
		icon: kivy,
	},
	{
		name: "OpenGL",
		icon: opengl,
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
		name: "3D Engine",
		description: "A 3D engine with dynamic lights and shadows, object importing and more.",
		tags: [
			{
				name: "OpenGL",
				color: "text-blue-400",
			},
			{
				name: "Raytracing",
				color: "text-green-600",
			},
			{
				name: "Rendering",
				color: "text-purple-500",
			},
		],
		image: engine_3d,
		source_code_link: "https://github.com/tde-nico/3D_engine_with_reflexes",
	},
	{
		name: "Demon Hill",
		description: "A cutsom proxy used in AD-style CTF's, used for traffic redirection, data sanitizing and more.",
		tags: [
			{
				name: "CTF",
				color: "text-red-600",
			},
			{
				name: "Blue Team",
				color: "text-blue-600",
			},
			{
				name: "System Administration",
				color: "text-lime-500",
			},
		],
		image: proxy,
		source_code_link: "https://github.com/tde-nico/demon_hill",
	},
	{
		name: "x86-64 Kernel",
		description: "A minimal implementaion of a 64bit kernel for x86 and made with cross compilation.",
		tags: [
			{
				name: "Kernel Dev",
				color: "text-pink-600",
			},
			{
				name: "x86_64",
				color: "text-yellow-400",
			},
			{
				name: "Drivers",
				color: "text-cyan-400",
			},
		],
		image: kernel,
		source_code_link: "https://github.com/tde-nico/os-dev_2",
	},
];

const testimonials = [
	{
		testimonial: "Having collaborated with an exceptional CTF player, I can confidently attest to his outstanding OSINT skills.",
		name: "Osint Dario",
		designation: "CEO and Cofounder",
		company: "TRX",
		image: dario,
	},
	/*{
		testimonial:
		"testimonial",
		name: "name",
		designation: "designation",
		company: "company",
		image: "https://avatars.githubusercontent.com/u/3639429?v=4",
	},
	{
		testimonial:
		"testimonial",
		name: "name",
		designation: "designation",
		company: "company",
		image: "https://avatars.githubusercontent.com/u/3639429?v=4",
	},*/
];

export { services, technologies, experiences, testimonials, projects };