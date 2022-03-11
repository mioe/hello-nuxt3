<script setup lang="ts">
import { useElementBounding, useElementByPoint, useEventListener, useMouse } from '@vueuse/core'
const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))
useEventListener('scroll', bounding.update, true)

const boxStyles = computed(() => {
  if (element.value && element.value.dataset.magic) {
    return {
      position: 'fixed',
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top}px`,
      backgroundColor: '#3eaf7c44',
      pointerEvents: 'none',
      zIndex: 9999,
      border: '1px solid var(--c-brand)',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

const tooltipStyles = computed(() => {
  if (element.value && element.value.dataset.magic) {
    return {
      position: 'fixed',
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top - bounding.height}px`,
      backgroundColor: '#ffaf7c44',
      pointerEvents: 'none',
      zIndex: 9999,
      border: '1px solid var(--c-brand)',
    } as Record<string, string | number>
  }
  return {
    display: 'none',
  }
})

const pointStyles = computed<Record<string, string | number>>(() => ({
  position: 'fixed',
  left: '0px',
  top: '0px',
  pointerEvents: 'none',
  zIndex: 9999,
  transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}))

const items = Array(25).fill(Array(40).fill('hello world'))
</script>

<template>
	<main
		ref="containerHook"
		class="relative w-full h-full overflow-auto max-h-[calc(100vh-53px)] max-w-screen p-[16px] grid gap-[16px]"
	>
		<ClientOnly>
			<Teleport to="body">
				<div :style="tooltipStyles">
					Tooltip
				</div>
				<div ref="box" :style="boxStyles" />
				<div ref="point" :style="pointStyles" class="w-2 h-2 rounded-full bg-green-400 shadow" />
			</Teleport>
		</ClientOnly>

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
				{{ subItem }}
			</div>
		</div>
	</main>
</template>
