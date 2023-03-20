<template>
  <AccordionItem
      v-for="(item, i) in items"
      :key="i"
      v-bind="item"
      :active="active === i"
      @clicked="active = i"
      :apiEndpoint="apiEndpoint"
  >
  </AccordionItem>
</template>
<script setup lang="ts">
const active = ref(-1)
defineProps({
  items: Array,
  apiEndpoint: String,
})
</script>