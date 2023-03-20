<template>
  <Accordion :items="countries"/>
</template>
<script setup lang="ts">
const {data: countriesData} = await useFetch('https://www.airalo.com/api/v2/countries?type=popular')
const countries = countriesData.value?.slice(0, 5) || []
provide('apiEndpoint', 'countries')
provide('theme', 'local')
</script>
