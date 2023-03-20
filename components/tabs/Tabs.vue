<template>
  <div class="bg-zinc-50 pb-12">
    <div class="container">
      <div class="text-center">
        <div class="inline-block bg-white rounded-lg p-[.625rem] shadow-xl relative z-50 -top-[1.56rem]">
          <ul class="flex">
            <li v-for="(tab, i) in tabs" key="i" @click="active = i; fetchTabs()">
              <button
                class="font-primary font-medium text-base rounded-md py-2 px-2 leading-none min-w-[5rem] md:min-w-[6.87rem]"
                :class="active === i ? 'text-white bg-grey': 'text-light-grey'">
                {{ tab }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <TabsTabContent title="Popular Countries" v-if="active === 0">
          <Accordion :items="tabsContent.countries" api-endpoint="countries"/>
          <div class="text-center pt-6">
            <button
                v-if="!isShowingAll"
                class="text-white border border-grey bg-grey rounded-md font-primary text-xs font-bold text-center inline-block px-[4rem] py-2 tracking-widest transition-all hover:bg-white hover:text-grey"
                @click="onShowAllClick"
            >
              SHOW ALL COUNTRIES
            </button>
          </div>
        </TabsTabContent>

        <LazyTabsTabContent title="Regions" v-if="active === 1">
          <Accordion :items="tabsContent.regions" api-endpoint="regions"/>
        </LazyTabsTabContent>

        <LazyTabsTabContent title="Discover Global" v-if="active === 2">
          <div class="pt-9 flex flex-wrap -mx-4">
            <Plan
                v-for="p in tabsContent.world"
                :key="p.id"
                v-bind="p"
                theme="world"
                :country="`${p.operator.countries.length} Countries`"/>
          </div>
        </LazyTabsTabContent>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  const tabs = ['Local', 'Regional', 'Global']
  const tabsContent = reactive({
    countries: [],
    regions: [],
    world: []
  })
  const active = ref(0)
  const isShowingAll = ref(false)
  const {data: countries} = await useFetch('https://www.airalo.com/api/v2/countries?type=popular')
  tabsContent.countries = countries.value?.slice(0, 5) || []

  const onShowAllClick = () => {
    tabsContent.countries = countries.value || []
    isShowingAll.value = true
  }

  const fetchTabs = async () => {
    switch (active.value) {
      case 1:
        if (tabsContent.regions.length <= 0) {
          const {data: regions} = await useFetch('https://www.airalo.com/api/v2/regions')
          tabsContent.regions = regions.value
        }
        break
      case 2:
        if (tabsContent.world.length <=0) {
          const {data: world} = await useFetch('https://www.airalo.com/api/v2/regions/world')
          tabsContent.world = world.value.packages
        }
    }
  }

</script>
