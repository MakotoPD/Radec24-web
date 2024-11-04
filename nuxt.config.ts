export default defineNuxtConfig({
	app:{
		head: {
			title: 'RADEC24 - Remonty i wykończenia',
			htmlAttrs: {
				lang: 'pl',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'RADEC24 - Remonty i wykończenia' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'keywords', content: 'redec24, firma, domy modułowe, domy, modułowe, moduł, remontowo, budowlana, remonty, wykończenia, wykonczenia, wnętrz, inowroclaw, inowrocław, Inowroclaw, Inowrocław torun, toruń, Torun, Toruń, bydgoszcz, Bydgoszcz, kompleksowo, adaptacje, adaptacja, poddasze, poddaszy, wykonanie, sufity, napinane, Remonty i wykończenia wnętrz inowrocław, kompleksowo wykonane remonty, adaptacja poddaszy, sufity napinane,'},
				
				{ property: 'og:locale', content: 'pl_PL'},
				{ property: 'og:title', content: 'RADEC24 - Remonty i wykończenia'},
				{ property: 'og:type', content: 'website'},
				{ property: 'og:image', content: '/thumbnail.jpg'},

				{ name: 'author', content: '@MakotoPD'}
			],
			link: [
				{rel: 'canonical', href: 'https://radec24.pl'},
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com'},
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins' },
				{ rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' } 
			],
			script: [
				{
					async: true,
					src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7443176231652937',
					crossorigin: "anonymous"
				},
				{
					type: 'application/ld+json',
					children: '{"@context": "https://schema.org","@type": "Corporation","name": "Radec24","alternateName": "RADEC24","url": "https://radec24.pl","logo": "https://radec24.pl/img/logo/logo.png","sameAs": ["https://www.facebook.com/RADEC24pl","https://www.instagram.com/RADEC24pl","https://radec24.pl"], "keywords": "redec24, firma, domy modułowe, domy, modułowe, moduł, remontowo, budowlana, remonty, wykończenia, wykonczenia, wnętrz, inowroclaw, inowrocław, Inowroclaw, Inowrocław torun, toruń, Torun, Toruń, bydgoszcz, Bydgoszcz, kompleksowo, adaptacje, adaptacja, poddasze, poddaszy, wykonanie, sufity, napinane, Remonty i wykończenia wnętrz inowrocław, kompleksowo wykonane remonty, adaptacja poddaszy, sufity napinane"}'
				}
			]
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',  	//css framework
		'@unlighthouse/nuxt',		//lighthouse buided in page, port:5678
		'@nuxt/image-edge',			//nuxt-image https://v1.image.nuxtjs.org/
		'nuxt-gtag',				//tag
	],

	sitemap: {
		hostname: 'https://radec24.pl',
	},


	unlighthouse: {
		scanner: {
			device: 'desktop', // simulate a desktop device
		}
	},

	gtag: {
		id: 'G-C2BZNE1RGS'
	},
	
	css: [
		'@/assets/css/global.css',
	],

	render: {
		csp: {
			reportOnly: false,
			addMeta: true,     // Add CSP meta-tag in addition to the HTTP header
			hashAlgorithm: 'sha256',
			unsafeInlineCompatiblity: true,
			policies: {
				'default-src': ["'self'", 'https:'],
				'script-src': ["'self'", "'strict-dynamic'", 'https:'],
				'style-src': ["'self'", "'strict-dynamic'", 'https:'],
				'frame-src': [],
				'object-src': ["'none'"],
				'base-uri': ["'self"]
			}
		}
	},
})
