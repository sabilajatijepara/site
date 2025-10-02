<template>
  <!-- Navbar -->
  <section>
    <NavProducts />
  </section>

  <div class="py-8"></div>

  <!-- Hero Section (opsional, bisa dikosongkan) -->
  <section></section>

  <!-- Kategori -->
  <section>
    <div class="max-w-6xl mx-auto px-4">
      <div class="py-6"></div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8">
        <NuxtLink
          v-for="(category, i) in categories"
          :key="i"
          :to="category.link"
          class="relative rounded-xl p-2 pt-6 flex flex-col items-center text-center hover:shadow-xl transition-all group"
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
          <h3 class="text-lg font-semibold text-gray-900">{{ category.name }}</h3>
        </NuxtLink>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <section class="py-8">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between text-sm capitalize font-bold py-2">
        <div class="">{{ titleProducts }}</div>
        <div>
          <NuxtLink to="/products" class="px-3 py-2 border border-black rounded-full hover:bg-yellow-300 duration-300 transition">ALL PRODUCTS</NuxtLink>
        </div>
      </div>
      <div class="py-2"></div>
      <!-- Skeleton Loading -->
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

      <!-- Error State -->
      <div v-else-if="error" class="text-center text-red-500 py-8">
        Failed to load product data. Please try again later.
      </div>

      <!-- Product Cards -->
      <div v-else class="grid grid-cols-2 md:grid-cols-4 gap-2">
        <div
          v-for="(item, index) in products"
          :key="index"
          :class="[
            'border-2 border-black overflow-hidden bg-white shadow-sm group transition hover:shadow-lg cursor-pointer',
            (index === products.length - 1 && products.length % 2 !== 0) ? 'md:col-span-2' : ''
          ]"
        >
          <!-- Product Image -->
          <div class="w-full aspect-square overflow-hidden relative">
            <img
              :src="item.image"
              :alt="item.name"
              class="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Garis pemisah -->
          <div class="border-t-2 border-black"></div>

          <!-- Bottom Content -->
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

      <!-- Load More Button -->
      <div v-if="hasMore" class="text-center mt-10">
        <button
          @click="loadMore"
          :disabled="loadingMore"
          class="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto gap-2"
        >
          <svg
            v-if="loadingMore"
            class="w-5 h-5 animate-spin text-white"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
          </svg>
          <span>{{ loadingMore ? 'Loading...' : 'Load More' }}</span>
        </button>
      </div>
    </div>
  </section>

  <FooProducts />
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

// === KATEGORI HARD-CODED ===
const categories = [
  {
    name: "Home Living",
    desc: "Stylish furniture for your home.",
    link: "/categories/home-living",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759314965/Sofa_Scandinavian_1_mjadll.webp",
    color: "bg-green-100",
  },
  {
    name: "Cafe & Resto",
    link: "/categories/cafe-resto",
    desc: "Premium furniture for cafés and restaurants.",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759311774/Hiroshima_Busa_1_juwlne.webp",
    color: "bg-amber-100",
  },
  {
    name: "Structure",
    desc: "Quality structures for indoor and outdoor spaces.",
    link: "/categories/structures",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759374536/sabilagardener-20251002-0001_1_ceoiz0.webp",
    color: "bg-orange-100",
  },
  {
    name: "Institutions",
    desc: "Durable furniture designed for schools and institutions.",
    link: "/categories/institutions",
    image: "https://res.cloudinary.com/dwn4gzaqp/image/upload/v1759376346/IMG_8433.HEIC_1_rwfjxa.webp",
    color: "bg-blue-100",
  },
]

const titleProducts = computed(() => {
  // cek apakah ada kategori di route
  const slug = route.params.slug
  if (!slug) return 'ALL PRODUCTS'

  // cari nama kategori dari array static categories
  const cat = categories.find(c => c.link.endsWith(slug))
  return cat ? `${cat.name.toUpperCase()} PRODUCTS` : 'ALL PRODUCTS'
})

// === ROUTE & API FETCH ===
const route = useRoute()
const slug = route.params.slug
const { data: categoryData, pending, error } = useFetch(`https://api.sabilajati.com/categories/${slug}`)

// === PAGINATION STATE ===
const currentPage = ref(1)
const perPage = ref(8)
const loadingMore = ref(false)

// === RESPONSIVE PER PAGE ===
const updatePerPage = () => {
  const width = window.innerWidth
  if (width >= 1024) perPage.value = 16
  else if (width >= 768) perPage.value = 12
  else perPage.value = 8
}

onMounted(() => {
  updatePerPage()
  window.addEventListener('resize', updatePerPage)
})
onBeforeUnmount(() => window.removeEventListener('resize', updatePerPage))

// === TRANSFORM DATA ===
const allProducts = computed(() =>
  (categoryData.value?.products || []).map(item => ({
    name: item.name_en,
    description: item.desc_en,
    image: item.imageURL?.[0] || '',
    link: `/products/${item.slug_en}`,
    price: item.price
  }))
)

const products = computed(() => allProducts.value.slice(0, currentPage.value * perPage.value))

const totalCount = computed(() => categoryData.value?.total || allProducts.value.length)
const hasMore = computed(() => products.value.length < totalCount.value)

const loadMore = async () => {
  if (!hasMore.value) return
  loadingMore.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  currentPage.value++
  loadingMore.value = false
}
</script>