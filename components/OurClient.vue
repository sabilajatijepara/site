<template>
  <section class="py-12 bg-white">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-center font-bold text-3xl md:text-4xl mb-8">
        Our Clients
      </h2>
      <div class="relative w-full">
        <Swiper
            :modules="[Autoplay]"
            :slides-per-view="5"
            :space-between="30"
            :loop="true"
            :direction="'horizontal'"
            :free-mode="true"
            :free-mode-momentum="false"
            :autoplay="{ delay: 0, disableOnInteraction: false }"
            :speed="6000"
            :breakpoints="{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            }"
            class="client-swiper"
            grab-cursor
        >
            <SwiperSlide v-for="(client, index) in clients" :key="index">
            <div class="flex items-center justify-center h-32">
                <!-- Jika ada logo, tampilkan logo -->
                <img
                v-if="client.logo"
                :src="client.logo"
                :alt="client.name"
                loading="lazy"
                class="h-full object-contain object-contain max-h-20 max-w-full grayscale hover:grayscale-0 transition duration-300"
                />
                <!-- Jika tidak ada logo, tampilkan teks -->
                <span
                v-else
                class="text-lg font-semibold text-gray-700 dark:text-white hover:text-blue-600 transition text-center"
                >
                {{ client.name }}
                </span>
            </div>
            </SwiperSlide>
        </Swiper>
        <div class="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div class="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
// Data campuran logo dan teks
const clients = [
  {
    name: 'Perumahan Tamansari Majapahit Semarang',
    
  },
  {
    name: 'Udinus',
    logo: 'https://dinus.ac.id/wp-content/uploads/2022/12/Logo-Udinus-Official-02-300x300-1.png',
  },
    {
        name: 'BSD City Cluster Vinasa Tangsel',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Bsdcity-logo.png',
    },
    {
        name: 'ITB Stikom Bali',
        logo: 'https://www.stikom-bali.ac.id/image/logo.png',
    },
  {
    name: 'RM. Kampoeng Sawah' // tanpa logo
  },
  {
    name: 'Black Canyon Surabaya' // tanpa logo
  },
  {
    name: 'SMA N 1 Guntur',
    logo: 'https://logo.siap-ppdb.com/upload/sekolah/20319290.150211152555.png'
  },
  {
    name: 'Universitas Paramedina Jakarta',
    logo: 'https://admission.paramadina.ac.id/images/logo.jpg'
  }
]

</script>
