<template>
  <div class="mb-3">
    <div>
      <button
          class="flex w-full items-center bg-white rounded-lg shadow-lg p-4 relative after:content[''] after:w-[1.375rem] after:h-[1.375rem] after:inline-block after:absolute after:top-50 after:right-4 after:bg-angle-up after:bg-no-repeat after:bg-center"
          @click="fetchPackages">
        <span><img class="w-10 mr-4" :src="image.url" alt=""></span>
        <span class="font-primary font-semibold text-base text-grey">{{title}}</span>
      </button>
    </div>
    <div class="block" v-show="true">
      <div class="pt-9 flex flex-wrap -mx-4">
        <Plan v-for="p in packages" :key="p.id" v-bind="p" :country="title"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  title: String,
  slug: String,
  image: Object
})
const packages = ref([])

const fetchPackages = async () => {
  const { data } = await useFetch(`https://www.airalo.com/api/v2/countries/${props.slug}`)
  packages.value = data.value.packages
}

</script>