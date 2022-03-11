<script setup lang="ts">
const items = Array(25).fill(Array(40).fill('hello world'))

const containerHook = ref(null)

onMounted(() => {
	const els = containerHook.value?.querySelectorAll("[data-magic]")
	console.log('🦕 els', els)
})
</script>

<template>
	<main
		ref="containerHook"
		class="relative w-full h-full overflow-auto max-h-[calc(100vh-53px)] max-w-screen p-[16px] grid gap-[16px]"
	>
		<header>
			<NuxtLink :to="{name: 'index'}">home</NuxtLink>
		</header>
		<div
			v-for="(item, idx) in items"
			:key="idx"
			class="bg-$secondary flex gap-[16px] p-[16px]"
		>
			<div
				v-for="(subItem, subIdx) in item"
				:key="subIdx"
				class="flex-shrink-0 bg-$document p-[16px]"
				data-magic="true"
			>
				<span>
					{{ subItem }}
				</span>
			</div>
		</div>
	</main>
</template>
