<template>
  <section>
    
  </section>
  <!-- Hero -->
  <section>
    
  </section>
  <!-- Kategori -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">Category</h2>

      <div class="grid grid-cols-2 md:grid-cols-5 gap-4 gap-y-8">
        <div
          v-for="(category, i) in categories"
          :key="i"
          class="relative rounded-2xl p-2 pt-4 flex flex-col items-center text-center hover:shadow-xl transition-all group"
          :class="category.color"
        >
          <!-- Gambar Overlap -->
          <div class="absolute -top-10 w-24 h-24">
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-full object-contain drop-shadow-lg transform group-hover:scale-105 transition-transform"
            />
          </div>

          <!-- Teks -->
          <h3 class=" text-lg font-semibold text-gray-900">{{ category.name }}</h3>
        </div>
      </div>
    </div>
  </section>
  <!-- Products -->
  <section class="py-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- ✅ Skeleton Loading -->
      <div v-if="pending" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="n in 4"
          :key="n"
          class="border rounded-xl overflow-hidden bg-white shadow-sm animate-pulse"
        >
          <div class="w-full aspect-square bg-gray-200"></div>
          <div class="border-t p-4 space-y-3">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-10 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
      
      <!-- ❌ Error State -->
      <div v-else-if="error" class="text-center text-red-500 py-8">
        Failed to load product data. Please try again later.
      </div>
      
      <!-- ✅ Product Cards -->
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          v-for="(item, index) in products"
          :key="index"
          :class="[
            'border-2 border-black rounded-xl overflow-hidden bg-white shadow-sm group transition hover:shadow-lg cursor-pointer',
            (index === products.length - 1 && products.length % 2 !== 0)
              ? 'md:col-span-2'
              : ''
          ]"
        >
          <!-- 📸 Product Image -->
          <div class="w-full aspect-square overflow-hidden relative">
            <img
              :src="item.image"
              :alt="item.name"
              class="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
      
          <!-- 📏 Garis pemisah -->
          <div class="border-t-2 border-black"></div>
      
          <!-- 📦 Bottom Content -->
          <div class="grid grid-cols-[1fr_auto] items-center w-full h-20">
            <h3 class="text-base font-semibold line-clamp-3 px-4">
              {{ item.name }}
            </h3>
          
            <NuxtLink
              :to="item.link"
              class="bg-yellow-300 hover:bg-gray-200 text-sm text-gray-900 px-6 flex items-center justify-center h-full transition border-l-2 border-black"
            >
              View
            </NuxtLink>
          </div>
        </div>
      </div>
      <!--<div class="flex justify-center mt-6 gap-2">
      <button @click="goToPage(currentPage-1)" :disabled="currentPage===1" class="px-3 py-1 bg-gray-200 rounded">
        Prev
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="goToPage(page)"
        :class="['px-3 py-1 rounded', currentPage===page ? 'bg-blue-500 text-white' : 'bg-gray-200']"
      >
        {{ page }}
      </button>
      <button @click="goToPage(currentPage+1)" :disabled="currentPage===totalPages" class="px-3 py-1 bg-gray-200 rounded">
        Next
      </button>
    </div>-->
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    name: "Home Living",
    desc: "Modern sofas & tables",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759314965/Sofa_Scandinavian_1_mjadll.webp",
    color: "bg-green-100",
  },
  {
    name: "Cafe & Resto",
    desc: "Elegant dining sets",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759311774/Hiroshima_Busa_1_juwlne.webp",
    color: "bg-amber-100",
  },
  {
    name: "Gazebo",
    desc: "Beds & wardrobes",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759311774/Hiroshima_Busa_1_juwlne.png",
    color: "bg-orange-100",
  },
  {
    name: "Bungalows",
    desc: "Work desks & chairs",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759311774/Hiroshima_Busa_1_juwlne.png",
    color: "bg-sky-100",
  },
  {
    name: "School",
    desc: "Work desks & chairs",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759311774/Hiroshima_Busa_1_juwlne.png",
    color: "bg-blue-100",
  },
]

const { data: response, pending, error } = await useFetch('https://api.sabilajati.com/products')

// Pagination state
const currentPage = ref(1)
const perPage = 8 // jumlah produk per halaman

// Transformasi data agar sesuai dengan struktur yang template kamu harapkan
const products = computed(() =>
  (response.value || []).map(item => ({
    name: item.name_en,
    description: item.desc_en,
    image: item.imageURL?.[0] || '', // pakai gambar pertama
    link: `/products/${item.slug_en}`,
    price: item.price
  }))
)

/*const paginatedProducts = computed(() => {
  const arr = allProducts.value || [] // fallback
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return arr.slice(start, end)
})

// Fungsi ganti halaman
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo(0,0) // scroll ke atas halaman
  }
}*/
</script>