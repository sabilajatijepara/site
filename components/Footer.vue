<template>
  <footer class="px-3 md:px-8">
    <div class="backdrop-blur-md rounded-t-3xl md:rounded-t-3xl bg-amber-700">
      <!-- Top -->
      <div class="grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 md:py-12 py-6 gap-4 md:gap-8">
        <div class="text-white">
          <div class="">
            <img src="https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759737993/Logo_White_1_dbjdtr.png" class="w-20 h-20" alt="Logo Sabilajati"/>
          </div>
          <div class="py-2"></div>
          <div class="text-sm">
            We are manufacturers of school tables and chairs, cafe tables and chairs, as well as gazebos and bungalows.
          </div>
          <div class="py-4 text-2xl space-x-4">
            <NuxtLink>
              <Icon name="tabler:brand-linktree"/>
            </NuxtLink>
            <NuxtLink>
              <Icon name="tabler:brand-tiktok"/>
            </NuxtLink>
            <NuxtLink>
              <Icon name="tabler:brand-instagram"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-sm text-white -mb-2">Quick Links</div>
          <div class="grid grid-cols-3 md:grid-cols-4 py-4 gap-4 text-white">
            <div>
              <NuxtLink to="/" class="font-bold text-xl">Home.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/about" class="font-bold text-xl">About.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/products" class="font-bold text-xl">Products.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/projects" class="font-bold text-xl">Projects.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="https://blog.sabilajati.com" class="font-bold text-xl">Blog.</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/contacts" class="font-bold text-xl">Contact.</NuxtLink>
            </div>
          </div>
          <div class="py-6"></div>
          <div class="flex flex-col text-white">
            <div class="font-bold text-xl">Contact Us</div>
            <div class="py-3">
              <div class="space-x-1.5">
                <Icon name="material-symbols:call-outline"/> <span>(+62) 85225208256</span>
              </div>
              <div class="space-x-1.5 items-center">
                <Icon name="material-symbols:mail-outline"/> <span>admin@sabilajati.com</span>
              </div>
              <div class="space-x-1.5">
                <Icon name="material-symbols:location-on-outline"/> <span>Jl. Jepara - Bangsri KM. 7, Dusun 3, Suwawal, Kec. Mlonggo, Kabupaten Jepara, Jawa Tengah 59452 (Samping Alfamart)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-6 md:px-16 md:py-12 py-6 text-white flex justify-between">
        <div>© 2025 — All Right Reserved.</div>
      </div>
    </div>
  </footer>
</template>