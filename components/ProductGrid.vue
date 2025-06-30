<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div
      v-for="(item, index) in products"
      :key="index"
      :class="[
        'relative h-72 w-full rounded-3xl overflow-hidden group cursor-pointer',
        (index === products.length - 1 && products.length % 2 !== 0)
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
        class="absolute bottom-4 left-4 text-white duration-300 p-2 md:px-4 md:py-4"
      >
        <h3 class="text-xl md:text-2xl font-semibold">{{ item.name }}</h3>
        <div class="py-1"></div>
        <p class="text-sm">{{ item.description }}</p>
        <div class="py-2"></div>
        <div class="flex justify-between">
          <div>Rp 12.000</div>
          <div>
            <NuxtLink :to="item.link" class="text-sm px-3 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition delay-150">
              View Product
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4"></div>
  <div class="flex justify-center">
    <div>
      <NuxtLink class="rounded-full border border-black px-4 py-3 hover:bg-blue-200 hover:border-blue-200 transition delay-150">View All Products</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: 'Table and Chair',
    category: 'School',
    description: 'Ergonomic and functional furniture for educational environments.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747188213/file-CBRwQrKonVtvYBFXQPAeWA_lylmqn.webp',
    link: '/category/school'
  },
  {
    name: 'Teak Gazebo',
    category: 'Gazebo',
    description: 'Elegant outdoor structures perfect for gardens and patios.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747188211/file-66wMTjmnDaGjwtAf1Svhj7_wtctoi.webp',
  },
    {
    name: 'Ropan Chair',
    category: 'Home Living',
    description: 'Elegant outdoor structures perfect for gardens and patios.',
    image: 'https://res.cloudinary.com/dwn4gzaqp/image/upload/v1747188211/file-66wMTjmnDaGjwtAf1Svhj7_wtctoi.webp',
  },
]
</script>