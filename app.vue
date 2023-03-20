<template>
  <div>
    <Header/>
    <Hero/>
    <Tabs/>
    <Download/>
    <Refer/>
    <Testimonials/>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Airalo',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'description' },
    { name: 'format-detection', content: 'telephone=no' },
    { 'http-equiv': 'accept-ch', 'content': 'width' }
  ],
  link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap' },
  ]
})
</script>
