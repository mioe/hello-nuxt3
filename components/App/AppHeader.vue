<script setup lang="ts">
const colorMode = useColorMode()

const schemes = ['system', 'light', 'dark'] as Array<'system' | 'light' | 'dark'>

const handleChangeColorScheme = (scheme: 'system' | 'light' | 'dark') => {
	colorMode.preference = scheme
}
</script>

<template>
	<header class="sticky z-9 w-full bg-$document border-b border-$secondary">
		<div class="container mx-auto p-[16px] flex gap-[20px] justify-between">
			<p>hello-nuxt3</p>
			<div class="flex gap-[8px]">
				<button
					v-for="scheme in schemes"
					:key="scheme"
					:class="{'text-$primary': $colorMode.preference === scheme}"
					@click="handleChangeColorScheme(scheme)"
				>
					{{ scheme }}
				</button>
			</div>
		</div>
	</header>
</template>
