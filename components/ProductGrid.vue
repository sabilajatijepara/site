<template>
  <div v-if="pending">Sedang memuat produk...</div>
  <div v-else-if="error">Gagal memuat data produk.</div>
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
        <p class="text-sm">{{ item.description.length > 60 ? item.description.slice(0, 60) + '...' : item.description }}</p>
        <div class="py-2"></div>
        <div class="flex justify-between">
          <div>Rp {{ item.price.toLocaleString('id-ID') }}</div>
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
      <NuxtLink
        to="/products"
        class="relative overflow-hidden px-6 py-3 rounded-3xl border border-blue-600 text-blue-600 font-medium transition-all duration-300 group inline-block"
      >
        <span class="relative z-10 group-hover:text-white">View All Products</span>
    
        <!-- Efek air mengisi -->
        <span
          class="absolute left-0 bottom-0 w-full h-full z-0 bg-blue-600 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 rounded-t-[100%] group-hover:rounded-t-none"
        ></span>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup>
const { data: response, pending, error } = await useFetch('https://api.sabilajati.com/products')

// Transformasi data agar sesuai dengan struktur yang template kamu harapkan
const products = computed(() =>
  (response.value || []).slice(0,3).map((item) => ({
    name: item.name,
    description: item.description,
    image: item.imageURL[0] || '', // pakai gambar pertama
    link: `/products/${item.slug}`, // buat link dinamis berdasarkan slug
    price: item.price
  }))
)
</script>
