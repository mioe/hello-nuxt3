import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	buildModules: [
		'@nuxtjs/color-mode',
		'nuxt-windicss',
	],
	css: [
		'@/assets/sass/main.sass',
	],
})
