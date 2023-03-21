<template>
  <h2 class="font-primary font-semibold text-grey text-[1.68rem] mb-4 mt-4">
    {{ title }}
  </h2>
  <slot />
</template>
<script setup lang="ts">
defineProps({
  title: String
})
</script>