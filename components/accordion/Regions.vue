<template>
  <Accordion :items="regions"/>
</template>
<script setup lang="ts">
const {data: regions} = await useFetch('https://www.airalo.com/api/v2/regions')
provide('apiEndpoint', 'regions')
</script>
