import type { PageServerLoad } from './$types';
import { TMDBClient, MovieListResponse } from '$lib/clients/tmdb';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	return await fetchUpcomingMovies(fetch, locals.accessToken, true);
};

const fetchUpcomingMovies = async (fetch, token: string, fake = true) => {
	if (!fake) {
		const tmdb = new TMDBClient({ token, fetch });
		const results = await tmdb.getUpcomingMovies();
		return { results };
	}

	return {
		results: [
			{
				adult: false,
				backdrop_path: '/bizhlTVjifYQUu4Xrdt7m3TYr7d.jpg',
				genre_ids: [],
				id: 1226578,
				original_language: 'en',
				original_title: 'Longlegs',
				overview:
					'FBI Agent Lee Harker is assigned to an unsolved serial killer case that takes an unexpected turn, revealing evidence of the occult. Harker discovers a personal connection to the killer and must stop him before he strikes again.',
				popularity: 1515.397,
				poster_path: '/5aj8vVGFwGVbQQs26ywhg4Zxk2L.jpg',
				release_date: '2024-07-10',
				title: 'Longlegs',
				video: false,
				vote_average: 6.652,
				vote_count: 619
			},
			{
				adult: false,
				backdrop_path: '/9BQqngPfwpeAfK7c2H3cwIFWIVR.jpg',
				genre_ids: [],
				id: 1079091,
				original_language: 'en',
				original_title: 'It Ends with Us',
				overview:
					"When a woman's first love suddenly reenters her life, her relationship with a charming, but abusive neurosurgeon is upended, and she realizes she must learn to rely on her own strength to make an impossible choice for her future.",
				popularity: 1312.259,
				poster_path: '/AjV6jFJ2YFIluYo4GQf13AA1tqu.jpg',
				release_date: '2024-08-07',
				title: 'It Ends with Us',
				video: false,
				vote_average: 6.8,
				vote_count: 232
			},
			{
				adult: false,
				backdrop_path: '/okVLmXL5y18dfN2R4ufMZEGaeCd.jpg',
				genre_ids: [],
				id: 1160018,
				original_language: 'hi',
				original_title: 'Kill',
				overview:
					'When an army commando finds out his true love is engaged against her will, he boards a New Dehli-bound train in a daring quest to derail the arranged marriage. But when a gang of knife-wielding thieves begin to terrorize innocent passengers on his train, the commando takes them on himself in a death-defying kill-spree to save those around him — turning what should have been a typical commute into an adrenaline-fueled thrill ride.',
				popularity: 1261.768,
				poster_path: '/m2zXTuNPkywdYLyWlVyJZW2QOJH.jpg',
				release_date: '2024-07-03',
				title: 'Kill',
				video: false,
				vote_average: 6.81,
				vote_count: 105
			},
			{
				adult: false,
				backdrop_path: '/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg',
				genre_ids: [],
				id: 945961,
				original_language: 'en',
				original_title: 'Alien: Romulus',
				overview:
					'While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.',
				popularity: 1189.05,
				poster_path: '/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg',
				release_date: '2024-08-13',
				title: 'Alien: Romulus',
				video: false,
				vote_average: 7.15,
				vote_count: 801
			},
			{
				adult: false,
				backdrop_path: '/n3JeGELHa9V6k9mL81ItMxWLSS6.jpg',
				genre_ids: [],
				id: 1129598,
				original_language: 'en',
				original_title: 'Prey',
				overview:
					'A young couple is compelled to leave their Christian missionary station in the Kalahari Desert after being threatened with death by an extremist militant gang. After crashing their aircraft they must battle man and beast for their lives.',
				popularity: 1032.108,
				poster_path: '/5wAlO5zZ3IyzLBAf7cp5WejalmG.jpg',
				release_date: '2024-03-15',
				title: 'Prey',
				video: false,
				vote_average: 6.44,
				vote_count: 207
			},
			{
				adult: false,
				backdrop_path: '/h9YlRHAZWOWtGonllmj6JJg1FrE.jpg',
				genre_ids: [],
				id: 588648,
				original_language: 'zh',
				original_title: 'Dragonkeeper',
				overview:
					'Set in Han Imperial China, the plot follows the adventures of enslaved girl Ping with ancient dragon Long Danzi. Dragons had been banished from the kingdom. Ping, an orphan, finds one of the last remaining dragon eggs. Palace guards force Ping to run away in order to return the dragon egg to the ocean and save all dragons from extinction. Ping discovers that she is a true Dragonkeeper.',
				popularity: 857.435,
				poster_path: '/ggZGnJLzO3BTu7ysuuIzou3Oex5.jpg',
				release_date: '2024-04-11',
				title: 'Dragonkeeper',
				video: false,
				vote_average: 7.1,
				vote_count: 71
			},
			{
				adult: false,
				backdrop_path: '/3EIYw4aJImgsvJsb0ybhOzLk6J3.jpg',
				genre_ids: [],
				id: 1066262,
				original_language: 'en',
				original_title: 'The Convert',
				overview:
					'Munro, a soldier turned lay preacher, comes to New Zealand to minister to the first British colonists, but he is converted by the powerful chief Maianui to serve a different purpose.',
				popularity: 760.964,
				poster_path: '/e5ZqqPlhKstzB4geibpZh38w7Pq.jpg',
				release_date: '2024-03-14',
				title: 'The Convert',
				video: false,
				vote_average: 6.277,
				vote_count: 65
			},
			{
				adult: false,
				backdrop_path: '/6GhU4BJnqLSaAuz0yQBq3RfdzsF.jpg',
				genre_ids: [],
				id: 1216191,
				original_language: 'en',
				original_title: 'Oddity',
				overview:
					'After the brutal murder of her twin sister, Darcy goes after those responsible by using haunted items as her tools for revenge.',
				popularity: 610.97,
				poster_path: '/uln9Efc2vzDOl0Fue2BPs8l1WO7.jpg',
				release_date: '2024-07-19',
				title: 'Oddity',
				video: false,
				vote_average: 6.9,
				vote_count: 110
			},
			{
				adult: false,
				backdrop_path: '/p5kpFS0P3lIwzwzHBOULQovNWyj.jpg',
				genre_ids: [],
				id: 1032823,
				original_language: 'en',
				original_title: 'Trap',
				overview:
					"A father and teen daughter attend a pop concert, where they realize they're at the center of a dark and sinister event.",
				popularity: 557.533,
				poster_path: '/jwoaKYVqPgYemFpaANL941EF94R.jpg',
				release_date: '2024-07-31',
				title: 'Trap',
				video: false,
				vote_average: 6.5,
				vote_count: 633
			},
			{
				adult: false,
				backdrop_path: '/2XCmJWRZIQtHzikNsW29l9oy5Fb.jpg',
				genre_ids: [],
				id: 804616,
				original_language: 'en',
				original_title: 'Something in the Water',
				overview:
					'A group of five friends must fight for their lives in open water after a dream wedding turns into a nightmare.',
				popularity: 530.032,
				poster_path: '/1iWGGxHEwswZGvPSoMZlLFf0PNq.jpg',
				release_date: '2024-03-22',
				title: 'Something in the Water',
				video: false,
				vote_average: 6.1,
				vote_count: 131
			},
			{
				adult: false,
				backdrop_path: '/61yrVrkOH75fUtExDZ4Hi0KqOmc.jpg',
				genre_ids: [],
				id: 1225377,
				original_language: 'en',
				original_title: 'The Mouse Trap',
				overview:
					"It's Alex's 21st Birthday, but she's stuck at the amusement arcade on a late shift so her friends decide to surprise her, but a masked killer dressed as Mickey Mouse decides to play a game of his own with them which she must survive.",
				popularity: 499.267,
				poster_path: '/3ovFaFeojLFIl5ClqhtgYMDS8sE.jpg',
				release_date: '2024-08-23',
				title: 'The Mouse Trap',
				video: false,
				vote_average: 5.2,
				vote_count: 20
			},
			{
				adult: false,
				backdrop_path: '/cgKZtNSETjXJPkAQ4rasV7dnyQH.jpg',
				genre_ids: [],
				id: 917496,
				original_language: 'en',
				original_title: 'Beetlejuice Beetlejuice',
				overview:
					"After a family tragedy, three generations of the Deetz family return home to Winter River. Still haunted by Beetlejuice, Lydia's life is turned upside down when her teenage daughter, Astrid, accidentally opens the portal to the Afterlife.",
				popularity: 494.984,
				poster_path: '/kKgQzkUCnQmeTPkyIwHly2t6ZFI.jpg',
				release_date: '2024-09-04',
				title: 'Beetlejuice Beetlejuice',
				video: false,
				vote_average: 6.615,
				vote_count: 14
			},
			{
				adult: false,
				backdrop_path: '/wkPPRIducGfsbaUPsWfw0MCQdX7.jpg',
				genre_ids: [],
				id: 1051891,
				original_language: 'en',
				original_title: 'Thelma',
				overview:
					'When 93-year-old Thelma Post gets duped by a phone scammer pretending to be her grandson, she sets out on a treacherous quest across the city to reclaim what was taken from her.',
				popularity: 460.022,
				poster_path: '/rUcuageYgv9SsJoWuc0seRWG6JC.jpg',
				release_date: '2024-06-21',
				title: 'Thelma',
				video: false,
				vote_average: 7.033,
				vote_count: 91
			},
			{
				adult: false,
				backdrop_path: '/dNplOw9U5IzlY7nNiaMS0JSVobp.jpg',
				genre_ids: [],
				id: 1029955,
				original_language: 'en',
				original_title: 'Kinds of Kindness',
				overview:
					'A triptych fable following a man without choice who tries to take control of his own life; a policeman who is alarmed that his wife who was missing-at-sea has returned and seems a different person; and a woman determined to find a specific someone with a special ability, who is destined to become a prodigious spiritual leader.',
				popularity: 459.53,
				poster_path: '/8mmpltkcG9areafsQHXaURedno3.jpg',
				release_date: '2024-05-30',
				title: 'Kinds of Kindness',
				video: false,
				vote_average: 6.714,
				vote_count: 477
			},
			{
				adult: false,
				backdrop_path: '/hP3HWRujFCM2qLUYhSAJEm23ElP.jpg',
				genre_ids: [],
				id: 1096342,
				original_language: 'en',
				original_title: 'Beautiful Wedding',
				overview:
					'Abby and Travis wake after a crazy night in Vegas as accidental newlyweds! With the mob on their heels, they flee to Mexico for a wild, weird honeymoon—but are they in for another disaster?',
				popularity: 454.529,
				poster_path: '/6214Uk9CZZcIibI84o5DEtbhfyk.jpg',
				release_date: '2024-01-24',
				title: 'Beautiful Wedding',
				video: false,
				vote_average: 5.384,
				vote_count: 155
			},
			{
				adult: false,
				backdrop_path: '/6IrZ3C8qSZ8Tbb32s41ReJOXpI0.jpg',
				genre_ids: [],
				id: 826510,
				original_language: 'en',
				original_title: 'Harold and the Purple Crayon',
				overview:
					"Inside of his book, adventurous Harold can make anything come to life simply by drawing it. After he grows up and draws himself off the book's pages and into the physical world, Harold finds he has a lot to learn about real life.",
				popularity: 430.486,
				poster_path: '/dEsuQOZwdaFAVL26RjgjwGl9j7m.jpg',
				release_date: '2024-07-31',
				title: 'Harold and the Purple Crayon',
				video: false,
				vote_average: 6.75,
				vote_count: 74
			},
			{
				adult: false,
				backdrop_path: '/4yrOyO3N55XazHQXXYoqiiPQd40.jpg',
				genre_ids: [],
				id: 938614,
				original_language: 'en',
				original_title: 'Late Night with the Devil',
				overview:
					"A live broadcast of a late-night talk show in 1977 goes horribly wrong, unleashing evil into the nation's living rooms.",
				popularity: 269.976,
				poster_path: '/jGY62i0D0zitaGz4Ema7vTEYIXw.jpg',
				release_date: '2024-03-19',
				title: 'Late Night with the Devil',
				video: false,
				vote_average: 7.33,
				vote_count: 758
			},
			{
				adult: false,
				backdrop_path: '/vblTCXOWUQGSc837vgbhDRi4HSc.jpg',
				genre_ids: [],
				id: 955555,
				original_language: 'ko',
				original_title: '범죄도시 3',
				overview:
					'Detective Ma Seok-do changes his affiliation from the Geumcheon Police Station to the Metropolitan Investigation Team, in order to eradicate Japanese gangsters who enter Korea to commit heinous crimes.',
				popularity: 229.551,
				poster_path: '/lW6IHrtaATxDKYVYoQGU5sh0OVm.jpg',
				release_date: '2023-05-31',
				title: 'The Roundup: No Way Out',
				video: false,
				vote_average: 7.264,
				vote_count: 396
			},
			{
				adult: false,
				backdrop_path: '/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg',
				genre_ids: [],
				id: 120,
				original_language: 'en',
				original_title: 'The Lord of the Rings: The Fellowship of the Ring',
				overview:
					'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
				popularity: 216.356,
				poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
				release_date: '2001-12-18',
				title: 'The Lord of the Rings: The Fellowship of the Ring',
				video: false,
				vote_average: 8.414,
				vote_count: 24781
			},
			{
				adult: false,
				backdrop_path: '/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
				genre_ids: [],
				id: 122,
				original_language: 'en',
				original_title: 'The Lord of the Rings: The Return of the King',
				overview:
					'As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​',
				popularity: 199.902,
				poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
				release_date: '2003-12-17',
				title: 'The Lord of the Rings: The Return of the King',
				video: false,
				vote_average: 8.481,
				vote_count: 23848
			}
		]
	} as MovieListResponse;
};
