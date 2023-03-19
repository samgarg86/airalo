<template>
  <header class="absolute top-0 left-0 z-50 w-full py-5 md:py-[2.18rem]">
    <nav>
      <div class="container">
        <div class="flex justify-between">
          <div>
            <a href="/"><img class="w-[5.93rem]" src="~/assets/icons/Airalo_Logo.svg" alt=""></a>
          </div>
          <div>
            <ul class="flex items-center text-white">
              <li class="flex items-center border-r border-white pr-2 md:pr-6">
                <span class="mr-2"><img src="~/assets/icons/User.svg" alt=""></span>
                <span class="flex items-center"><a href="#" class="font-primary font-medium text-xs2 md:text-base text-white">Log in </a> / <a href="#" class="font-primary font-medium text-xs2 md:text-base text-white"> Sign up</a></span>
              </li>
              <li class="flex items-center pl-2 md:pl-6">
                <span class="mr-2"><img src="~/assets/icons/globe.svg" alt=""></span>
                <div class="group relative cursor-pointer">
                  <span class="flex font-primary font-medium text-xs2 md:text-base text-white items-center">English <img src="~/assets/icons/angle-down.svg" alt=""></span>
                  <div class="hidden group-hover:block absolute top-100 left-0">
                    <span class="font-primary font-medium text-xs2 md:text-base text-white">Dutch</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>