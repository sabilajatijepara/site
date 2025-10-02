<template>
  <footer class="">
    <div class="text-center font-bold text-7xl md:text-9xl">
      SABILAJATI
    </div>
    <div class="backdrop-blur-md rounded-t-2xl md:rounded-t-3xl -mt-6 md:-mt-12 bg-gray-200/40">
      <!-- Top -->
      <div class="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 md:py-12 py-6">
        <div class="">
          <div class="font-bold text-2xl">
            Sabilajati Jepara
          </div>
          <div class="py-2"></div>
          <div class="text-sm">
            We are manufacturers of school tables and chairs, cafe tables and chairs, as well as gazebos and bungalows.
          </div>
          <div class="py-2">
            <NuxtLink to="/about" class="font-bold text-sm hover:underline hover:duration-300 transition">More About us.</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="flex space-x-8">
            <div>
              <NuxtLink to="/" class="font-bold text-xl">Home.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/about" class="font-bold text-xl">About.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/projects" class="font-bold text-xl">Projects.</NuxtLink>
            </div>
          </div>
          <div class="py-6"></div>
          <div class="flex flex-col">
            <div class="font-bold text-xl">Contact Us</div>
            <div class="py-3">
              <div>(+62) 85225208256</div>
              <div>admin@sabilajati.com</div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-6 md:px-16 md:py-12 py-6">
        © 2025 — All Right Reserved.
      </div>
    </div>
  </footer>
</template>