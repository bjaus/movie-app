import type { PageServerLoad } from './$types';
import { TMDBClient } from '$lib/clients/tmdb';
import type { Movie } from '$lib/clients/tmdb';

export const load: PageServerLoad = async ({ fetch, locals }) => {
	return await fetchUpcomingMovies(fetch, locals.accessToken, true);
};

const fetchUpcomingMovies = async (fetch, token: string, fake = true) => {
	if (!fake) {
		const tmdb = new TMDBClient({ token, fetch });
		const upcomingPromise = tmdb.getUpcomingMovies();
		const topRatedPromise = tmdb.getTopRateMovies();
		return { upcoming: await upcomingPromise, topRated: await topRatedPromise };
	}

	return {
		topRated: [
			{
				adult: false,
				backdrop_path: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
				id: 278,
				original_language: 'en',
				original_title: 'The Shawshank Redemption',
				overview:
					'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
				popularity: 207.384,
				poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
				release_date: '1994-09-23',
				title: 'The Shawshank Redemption',
				video: false,
				vote_average: 8.706,
				vote_count: 26735
			},
			{
				adult: false,
				backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
				id: 238,
				original_language: 'en',
				original_title: 'The Godfather',
				overview:
					'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
				popularity: 159.117,
				poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
				release_date: '1972-03-14',
				title: 'The Godfather',
				video: false,
				vote_average: 8.69,
				vote_count: 20289
			},
			{
				adult: false,
				backdrop_path: '/kGzFbGhp99zva6oZODW5atUtnqi.jpg',
				id: 240,
				original_language: 'en',
				original_title: 'The Godfather Part II',
				overview:
					'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
				popularity: 98.221,
				poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
				release_date: '1974-12-20',
				title: 'The Godfather Part II',
				video: false,
				vote_average: 8.574,
				vote_count: 12236
			},
			{
				adult: false,
				backdrop_path: '/zb6fM1CX41D9rF9hdgclu0peUmy.jpg',
				id: 424,
				original_language: 'en',
				original_title: "Schindler's List",
				overview:
					'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
				popularity: 106.663,
				poster_path: '/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
				release_date: '1993-12-15',
				title: "Schindler's List",
				video: false,
				vote_average: 8.565,
				vote_count: 15650
			},
			{
				adult: false,
				backdrop_path: '/qqHQsStV6exghCM7zbObuYBiYxw.jpg',
				id: 389,
				original_language: 'en',
				original_title: '12 Angry Men',
				overview:
					"The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
				popularity: 80.592,
				poster_path: '/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg',
				release_date: '1957-04-10',
				title: '12 Angry Men',
				video: false,
				vote_average: 8.545,
				vote_count: 8480
			},
			{
				adult: false,
				backdrop_path: '/m4TUa2ciEWSlk37rOsjiSIvZDXE.jpg',
				id: 129,
				original_language: 'ja',
				original_title: '千と千尋の神隠し',
				overview:
					'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
				popularity: 146.084,
				poster_path: '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
				release_date: '2001-07-20',
				title: 'Spirited Away',
				video: false,
				vote_average: 8.536,
				vote_count: 16277
			},
			{
				adult: false,
				backdrop_path: '/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg',
				id: 19404,
				original_language: 'hi',
				original_title: 'दिलवाले दुल्हनिया ले जायेंगे',
				overview:
					'Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.',
				popularity: 54.859,
				poster_path: '/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg',
				release_date: '1995-10-20',
				title: 'Dilwale Dulhania Le Jayenge',
				video: false,
				vote_average: 8.532,
				vote_count: 4421
			},
			{
				adult: false,
				backdrop_path: '/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
				id: 155,
				original_language: 'en',
				original_title: 'The Dark Knight',
				overview:
					'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
				popularity: 152.569,
				poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
				release_date: '2008-07-16',
				title: 'The Dark Knight',
				video: false,
				vote_average: 8.516,
				vote_count: 32473
			},
			{
				adult: false,
				backdrop_path: '/8eihUxjQsJ7WvGySkVMC0EwbPAD.jpg',
				id: 496243,
				original_language: 'ko',
				original_title: '기생충',
				overview:
					"All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
				popularity: 112.128,
				poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
				release_date: '2019-05-30',
				title: 'Parasite',
				video: false,
				vote_average: 8.507,
				vote_count: 17965
			},
			{
				adult: false,
				backdrop_path: '/vxJ08SvwomfKbpboCWynC3uqUg4.jpg',
				id: 497,
				original_language: 'en',
				original_title: 'The Green Mile',
				overview:
					"A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
				popularity: 99.648,
				poster_path: '/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg',
				release_date: '1999-12-10',
				title: 'The Green Mile',
				video: false,
				vote_average: 8.507,
				vote_count: 17168
			},
			{
				adult: false,
				backdrop_path: '/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg',
				id: 372058,
				original_language: 'ja',
				original_title: '君の名は。',
				overview:
					'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
				popularity: 110.256,
				poster_path: '/vfJFJPepRKapMd5G2ro7klIRysq.jpg',
				release_date: '2016-08-26',
				title: 'Your Name.',
				video: false,
				vote_average: 8.488,
				vote_count: 11226
			},
			{
				adult: false,
				backdrop_path: '/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg',
				id: 680,
				original_language: 'en',
				original_title: 'Pulp Fiction',
				overview:
					"A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
				popularity: 123.252,
				poster_path: '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
				release_date: '1994-09-10',
				title: 'Pulp Fiction',
				video: false,
				vote_average: 8.487,
				vote_count: 27584
			},
			{
				adult: false,
				backdrop_path: '/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
				id: 122,
				original_language: 'en',
				original_title: 'The Lord of the Rings: The Return of the King',
				overview:
					'As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​',
				popularity: 187.486,
				poster_path: '/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
				release_date: '2003-12-17',
				title: 'The Lord of the Rings: The Return of the King',
				video: false,
				vote_average: 8.481,
				vote_count: 23853
			},
			{
				adult: false,
				backdrop_path: '/ghgfzbEV7kbpbi1O8eIILKVXEA8.jpg',
				id: 13,
				original_language: 'en',
				original_title: 'Forrest Gump',
				overview:
					'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.',
				popularity: 131.138,
				poster_path: '/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
				release_date: '1994-06-23',
				title: 'Forrest Gump',
				video: false,
				vote_average: 8.474,
				vote_count: 27108
			},
			{
				adult: false,
				backdrop_path: '/7TF4p86ZafnxFuNqWdhpHXFO244.jpg',
				id: 769,
				original_language: 'en',
				original_title: 'GoodFellas',
				overview:
					'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
				popularity: 93.823,
				poster_path: '/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
				release_date: '1990-09-12',
				title: 'GoodFellas',
				video: false,
				vote_average: 8.463,
				vote_count: 12671
			},
			{
				adult: false,
				backdrop_path: '/bxSBOAD8AuMHYMdW3jso9npAkgt.jpg',
				id: 667257,
				original_language: 'es',
				original_title: 'Cosas imposibles',
				overview:
					'After the death of her abusive husband, Matilde finds her new best friend in Miguel, her young, insecure, and disoriented neighbor.',
				popularity: 29.961,
				poster_path: '/t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg',
				release_date: '2021-06-17',
				title: 'Impossible Things',
				video: false,
				vote_average: 8.462,
				vote_count: 381
			},
			{
				adult: false,
				backdrop_path: '/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg',
				id: 429,
				original_language: 'it',
				original_title: 'Il buono, il brutto, il cattivo',
				overview:
					'While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.',
				popularity: 100.642,
				poster_path: '/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg',
				release_date: '1966-12-22',
				title: 'The Good, the Bad and the Ugly',
				video: false,
				vote_average: 8.461,
				vote_count: 8466
			},
			{
				adult: false,
				backdrop_path: '/sJNNMCc6B7KZIY3LH3JMYJJNH5j.jpg',
				id: 346,
				original_language: 'ja',
				original_title: '七人の侍',
				overview:
					"A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
				popularity: 62.873,
				poster_path: '/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg',
				release_date: '1954-04-26',
				title: 'Seven Samurai',
				video: false,
				vote_average: 8.5,
				vote_count: 3594
			},
			{
				adult: false,
				backdrop_path: '/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg',
				id: 12477,
				original_language: 'ja',
				original_title: '火垂るの墓',
				overview:
					'In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.',
				popularity: 0.074,
				poster_path: '/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg',
				release_date: '1988-04-16',
				title: 'Grave of the Fireflies',
				video: false,
				vote_average: 8.458,
				vote_count: 5383
			},
			{
				adult: false,
				backdrop_path: '/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg',
				id: 637,
				original_language: 'it',
				original_title: 'La vita è bella',
				overview:
					'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
				popularity: 52.917,
				poster_path: '/74hLDKjD5aGYOotO6esUVaeISa2.jpg',
				release_date: '1997-12-20',
				title: 'Life Is Beautiful',
				video: false,
				vote_average: 8.4,
				vote_count: 12893
			}
		] as Array<Movie>,
		upcoming: [
			{
				adult: false,
				backdrop_path: '/bizhlTVjifYQUu4Xrdt7m3TYr7d.jpg',
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
		] as Array<Movie>
	};
};
