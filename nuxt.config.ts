export default defineNuxtConfig({
	app:{
		head: {
			title: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl',
			htmlAttrs: {
			  lang: 'pl',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl' },
				{ name: 'format-detection', content: 'telephone=no' },
				{ name: 'keywords', content: 'redec24, firma, domy modułowe, domy, modułowe, moduł, remontowo, budowlana, remonty, wykończenia, wykonczenia, wnętrz, inowroclaw, inowrocław, Inowroclaw, Inowrocław torun, toruń, Torun, Toruń, bydgoszcz, Bydgoszcz, kompleksowo, adaptacje, adaptacja, poddasze, poddaszy, wykonanie, sufity, napinane, Remonty i wykończenia wnętrz inowrocław, kompleksowo wykonane remonty, adaptacja poddaszy, sufity napinane,'},
				
				{ property: 'og:locale', content: 'pl_PL'},
				{ property: 'og:title', content: 'RADEC24 - Produkcja domów modułowych. FASTHOME.com.pl'},
				{ property: 'og:type', content: 'website'},
				{ property: 'og:image', content: '/thumbnail.jpg'},

				{ name: 'author', content: '@MakotoPD'},
			],
			link: [
			  { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			  { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins' },
			  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' } 
			]
		},
	},

	modules: [
		'@nuxtjs/tailwindcss',  	//css framework
		'@unlighthouse/nuxt',		//lighthouse buided in page, port:5678
		'@nuxt/image-edge'			//nuxt-image https://v1.image.nuxtjs.org/
	],


	builder: 'vite',				//webpack alternative for nuxtjs/vuejs


	sitemap: {
		hostname: 'https://radec24.pl',
	},


	unlighthouse: {
		scanner: {
		  device: 'desktop', // simulate a desktop device
		}
	},
	
	css: [
		'@/assets/css/global.css',
	],
})
