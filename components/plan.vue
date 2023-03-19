<template>
  <div class="w-full sm:w-2/4 lg:w-1/3 px-4 mb-10">
    <div class="bg-gradient-to-r from-grad-1 to-grad-2 rounded-lg shadow-lg">
      <div class="flex p-4 justify-between">
        <div>
          <h3 class="font-primary font-semibold text-grey text-lg">{{operator.title}}</h3>
          <p class="font-primary font-medium text-grey text-xs2">{{ country }}</p>
        </div>
        <div>
          <img class="inline-block rounded-xl object-cover shadow-lg -mt-9 w-[140px] h-[88px]" :src="operator.image.url" alt="">
        </div>
      </div>
      <ul>
        <li class="flex justify-between items-center border-b border-t border-light-grey p-4">
          <div class="flex items-center">
            <span class="mr-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0109 13.25H11.5618C11.1242 13.25 10.8747 13.75 11.1379 14.0997L14.5906 18.6868C14.8029 18.9688 15.2262 18.9688 15.4385 18.6868L18.8912 14.0997C19.1544 13.75 18.9049 13.25 18.4672 13.25H16.0181V4.0036C16.0181 3.44933 15.5688 3 15.0145 3C14.4603 3 14.0109 3.44933 14.0109 4.0036V13.25ZM7.40967 3.31321C7.1974 3.0312 6.77407 3.0312 6.5618 3.31321L3.1091 7.9003C2.8459 8.24998 3.09537 8.75 3.53303 8.75H5.98214V17.9964C5.98214 18.5507 6.43146 19 6.98574 19C7.54001 19 7.98934 18.5507 7.98934 17.9964V8.75H10.4384C10.8761 8.75 11.1256 8.24998 10.8624 7.9003L7.40967 3.31321Z" fill="#4A4A4A"/>
              </svg>
            </span>
            <span class="font-primary font-semibold text-[.6875rem] text-grey uppercase tracking-wider">DATA</span>
          </div>
          <div>
            <span class="font-primary font-medium text-base text-grey uppercase tracking-tight">{{ data }}</span>
          </div>
        </li>
        <li class="flex justify-between items-center border-b border-light-grey p-4">
          <div class="flex items-center">
            <span class="mr-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7012 3C14.9167 3 15.0915 3.17472 15.0915 3.39024V6.70732C15.0915 6.92285 14.9167 7.09757 14.7012 7.09757C14.4857 7.09757 14.311 6.92285 14.311 6.70732V3.39024C14.311 3.17472 14.4857 3 14.7012 3ZM7.28658 3C7.50211 3 7.67682 3.17472 7.67682 3.39024V6.70732C7.67682 6.92285 7.50211 7.09757 7.28658 7.09757C7.07104 7.09757 6.89633 6.92285 6.89633 6.70732V3.39024C6.89633 3.17472 7.07104 3 7.28658 3ZM17.4329 4.17073C18.3004 4.17073 19 4.87033 19 5.73781V9.24391H3V5.73781C3 4.87033 3.69961 4.17073 4.56706 4.17073H5.73171H6.50609V5.83537C6.26675 6.04973 6.11584 6.36074 6.11584 6.70732C6.11584 7.3539 6.64 7.87806 7.28658 7.87806C7.93315 7.87806 8.45731 7.3539 8.45731 6.70732C8.45731 6.36074 8.3064 6.04973 8.06706 5.83537V4.17073H13.9268V5.82927C13.6838 6.04379 13.5305 6.35765 13.5305 6.70732C13.5305 7.3539 14.0546 7.87806 14.7012 7.87806C15.3478 7.87806 15.8719 7.3539 15.8719 6.70732C15.8719 6.36383 15.7234 6.05563 15.4878 5.84147V4.17073H17.4329ZM19 10.0244V17.4329C19 18.3004 18.3004 19 17.4329 19H4.56706C3.69961 19 3 18.3004 3 17.4329V10.0244L19 10.0244Z" fill="#4A4A4A"/>
              </svg>
            </span>
            <span class="font-primary font-semibold text-[.6875rem] text-grey uppercase tracking-wider">Validity</span>
          </div>
          <div>
            <span class="font-primary font-medium text-base text-grey uppercase tracking-tight">{{ validity }}</span>
          </div>
        </li>
      </ul>
      <div class="p-5">
        <a href="#"
           class="font-primary font-semibold text-[.6875rem] text-grey uppercase tracking-wider block text-center rounded-lg border border-grey px-4 py-3 transition-all hover:bg-grey hover:text-white">
          US${{price}} - BUY NOW
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  operator: Object,
  price: Number,
  data: String,
  validity: String,
  country: String
})
</script>