<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in collections"
      :key="index"
      :class="[
        'relative h-64 rounded-lg overflow-hidden group cursor-pointer',
        (index === collections.length - 1 && collections.length % 2 !== 0)
          ? 'md:col-span-2'
          : ''
      ]"
    >
      <!-- Background image -->
      <img
        :src="item.image"
        :alt="item.name"
        class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-300"
      />

      <!-- Gradient overlay on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>

      <!-- Text and link on hover -->
      <div
        class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 md:px-4 md:py-4"
      >
        <h3 class="text-xl md:text-2xl font-semibold">{{ item.name }}</h3>
        <div class="py-1"></div>
        <p class="text-sm">{{ item.description }}</p>
        <div class="py-2"></div>
        <NuxtLink :to="item.link" class="text-sm px-3 py-2 rounded-full bg-white text-black">
          View collections
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const collections = [
  {
    name: 'Cafe',
    description: 'Stylish and durable furniture for cafes, restaurants, and bistros.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747707202/file-Prjq2hQmDX1HZAPKRXtoHm_hniqzt.webp',
    link: '/category/cafe'
  },
  {
    name: 'Home Living',
    description: 'Comfortable and elegant furniture for residential spaces.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747707202/file-5cmj8Jbt1fsn6mMZfxm5tB_zlep74.webp',
    link: '/category/home-living'
  },
  {
    name: 'School',
    description: 'Ergonomic and functional furniture for educational environments.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747707210/file-PZ9e6iVt3DoCDEvJD6Zmh3_tqtgdl.webp',
    link: '/category/school'
  },
  {
    name: 'Bungalow',
    description: 'Complete furniture solutions for vacation homes and bungalows.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747707202/file-3dctTAYPhHbpRnMqExehd2_ilm08u.webp',
    link: '/category/bungalow'
  },
  {
    name: 'Gazebo',
    description: 'Elegant outdoor structures perfect for gardens and patios.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747707366/file-VUZ4ntKnAzYCLfenpvwc8e_g5bnpo.webp',
    link: '/category/gazebo'
  }
]
</script>