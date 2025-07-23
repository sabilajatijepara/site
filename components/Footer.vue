<template>
  <footer class="container mx-auto px-4 py-8 border-t max-w-4xl">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
      <div>
        <div class="font-bold text-2xl">Sabilajati Jepara</div>
        <div class="space-y-2 pt-2">
          <div class="text-gray-600">
            We are manufacturers of school tables and chairs, cafe tables and chairs, as well as gazebos and bungalows.
          </div>
        </div>
      </div>
      <div>
        <div class="font-bold">Contact</div>
        <div class="space-y-2">
        <div class="pt-3">
          <div class="space-x-2">
            <Icon name="ri:map-pin-2-line"/>
            <nuxt-link to="https://maps.app.goo.gl/aUv74NiqGtibWH8b7">
            <span class="hover:underline">Jl. Jepara - Bangsri, Dusun 3, Suwawal, Kec. Mlonggo, Kabupaten Jepara, Jawa Tengah 59452 (Samping Alfamart)</span>
            </nuxt-link>
          </div>
          
          </div>
          <div class="space-x-2">
            <nuxt-link to="https://wa.me/+6285225208256">
            <Icon name="ri:whatsapp-line"/>
            <span class="px-1">+6285225208256</span>
          </nuxt-link>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="ri:time-line"/> <span>Monday - Saturday<br/>08.00 - 16.00 WIB</span>
          </div>
        </div>
      </div>
      <div>
        <div class="font-bold pb-4">Social Media</div>
        <div class="space-x-4">
          <nuxt-link
          to="https://instagram.com/sabilajati_jepara" class="bg-amber-400 w-32 h-32 rounded-full items-center"><Icon
          name="ri:instagram-line" size="24" aria-label="Instagram"><title>Instagram</title></Icon></nuxt-link>
          <nuxt-link
          to="https://tiktok.com/@sabilajatijepara" class="bg-amber-400 w-32 h-32 rounded-full items-center"><Icon
          name="ri:tiktok-line" size="24" aria-label="Tiktok"><title>Tiktok</title></Icon></nuxt-link>
        </div>
      </div>
    </div>
    <div class="py-4">
      <hr class="w-48 h-1 mx-auto my-2 bg-black/70 border-0 rounded md:my-10">
      <div class="text-center py-2">
        <div class="pt-2">© 2025 Sabilajati Jepara.</div>
        <div>All Right Reserved.</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>