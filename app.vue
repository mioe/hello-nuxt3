<script setup lang="ts">
import AppHeader from '@/components/App/AppHeader.vue'
</script>

<template>
	<Html :class="$colorMode.value" />

	<AppHeader />
	<NuxtPage />
</template>
