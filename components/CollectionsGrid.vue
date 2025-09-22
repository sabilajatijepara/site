<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in collections"
      :key="index"
      :class="[
        'relative h-80 rounded-3xl hover:rounded-2xl duration-300 overflow-hidden',
        (index === collections.length - 1 && collections.length % 2 !== 0)
          ? 'md:col-span-2'
          : ''
      ]"
    >
      <!-- Background image -->
      <img
        :src="item.image"
        :alt="item.name"
        class="absolute inset-0 w-full h-full object-cover transition duration-300"
      />

      <!-- Gradient overlay on hover -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
      ></div>

      <!-- Text and link on hover -->
      <div
        class="absolute bottom-4 left-4 text-white p-2 md:px-4 md:py-4"
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
    name: 'Cafe & Resto',
    description: 'Stylish and durable furniture for cafes, restaurants, and bistros.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750857486/cafe_xieolw.webp',
    link: 'https://sabilajati.com/categories/Cafe'
  },
  {
    name: 'Home Living',
    description: 'Comfortable and elegant furniture for residential spaces.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750855824/living_room_uxhsfe.webp',
    link: 'https://sabilajati.com/categories/Rumah'
  },
  {
    name: 'School',
    description: 'Ergonomic and functional furniture for educational environments.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750857308/school_xdg9z3.webp',
    link: 'https://sabilajati.com/categories/Sekolah'
  },
  {
    name: 'Bungalow',
    description: 'Complete furniture solutions for vacation homes and bungalows.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750860966/sekar-ayu-spa-salon-bungalow_onnd0f.webp',
    link: 'https://sabilajati.com/categories/Bungalow'
  },
  {
    name: 'Gazebo',
    description: 'Elegant outdoor structures perfect for gardens and patios.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750860873/andre-benz-L-URIPpFsbc-unsplash_qebu20.webp',
    link: 'https://sabilajati.com/categories/Gazebo'
  }
]
</script>