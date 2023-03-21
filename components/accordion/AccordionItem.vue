<template>
  <div class="mb-3">
    <button
      ref="buttonRef"
      class="flex w-full items-center bg-white rounded-lg shadow-lg p-4 relative"
      @click="clicked"
    >
      <span><img class="w-10 mr-4" :src="image.url" alt=""></span>
      <span class="font-primary font-semibold text-base text-grey">{{ title }}</span>
      <span
        class="w-[1.375rem] h-[1.375rem] inline-block absolute top-50 right-4 bg-no-repeat bg-center"
        :class="active ? 'bg-angle-up' : 'bg-angle-down'"
      />
    </button>
    <div v-show="active" class="block">
      <div class="pt-9 flex flex-wrap -mx-4">
        <Plan
          v-for="p in packages"
          :key="p.id"
          v-bind="p"
          :theme="apiEndpoint"
          :country="title"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    title: String,
    slug: String,
    image: Object,
    active: Boolean,
    apiEndpoint: String
  })
  const packages = ref([])
  const buttonRef = ref(null)
  const emit = defineEmits(['clicked'])
  const clicked = async () => {
    if (!packages.value?.length) {
      const { data } = await useFetch(`https://www.airalo.com/api/v2/${props.apiEndpoint}/${props.slug}`)
      packages.value = data.value.packages
    }
    emit('clicked')
    buttonRef.value?.scrollIntoView()
  }
</script>
