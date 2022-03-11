import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		'@nuxtjs/color-mode',
		'nuxt-windicss',
		'@vueuse/nuxt',
	],
	css: [
		'@/assets/sass/main.sass',
	],
	vueuse: {
		ssrHandlers: true,
	},
	vite: {
		optimizeDeps: {
			include: ['cookie'],
		},
	},
})
