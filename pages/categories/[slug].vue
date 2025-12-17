<template>
  <!-- Navbar -->
  <section>
    <NavProducts />
  </section>
  
  <div class="py-12 md:py-16"></div>
  <!-- Hero -->
  <section class="container max-w-6xl mx-auto px-4">
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div class="text-3xl md:text-4xl font-bold">Stylish and Durable Furniture Collection
          </div>
        </div>
        <div>
          <div class="text-sm">
            Discover our stylish and Durable Fumiture Dotection designed to olevate your space with niegance and latning quality Perfect for any room, these pieces biend modern design with exceptional functionality and comfort.
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="py-4"></div>

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
              :src="toWebP(item.image, 480, 480)"
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
  <div class="py-4"></div>
  <section
    class="relative h-[60vh] w-full bg-cover bg-center flex items-end rounded-3xl"
    style="background-image: url('https://unsplash.com/photos/WPqcd-gpJeE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzB8fGZ1cm5pdHVyZXN8aWR8MHwwfHx8MTc1OTcyNjA0N3ww&force=true&w=1920');"
  >
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-white"></div>
  
    <!-- Content -->
    <div
      class="relative z-10 w-full max-w-6xl mx-auto px-6 pb-10 flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:items-end md:text-left"
    >
      <!-- Text -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold mb-3">
          Looking for a custom product designed just for you?
        </h2>
        <p class="text-lg text-gray-700 max-w-xl">
          We craft furniture that reflects your unique vision — tailored, timeless, and made to last.
        </p>
      </div>
  
      <!-- Button -->
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        class="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400 transition md:mb-2"
      >
        <Icon name="mdi:whatsapp" size="1.5em" />
        Contact Us
      </a>
    </div>
  </section>
  <FAB />
  <div class="py-8"></div>
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

function toWebP(url, width = null, height = null) {
  if (!url) return ''
  
  let newUrl = url.replace('/upload/', '/upload/f_webp/')
  
  if (width || height) {
    let sizeStr = []
    if (width) sizeStr.push(`w_${width}`)
    if (height) sizeStr.push(`h_${height}`)
    sizeStr.push('c_fill')
    newUrl = newUrl.replace('/upload/', `/upload/${sizeStr.join(',')}/`)
  }

  return newUrl
}

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

const category = computed(() => categories.find(c => c.link.endsWith(slug)))

useHead(() => {
  const baseUrl = 'https://sabilajati.com'
  const currentUrl = `${baseUrl}/categories/${slug}`

  return {
    title: category.value
      ? `${category.value.name} — Sabila Jati Furniture`
      : 'Furniture Collections — Sabila Jati',
    meta: [
      {
        name: 'description',
        content: category.value
          ? category.value.desc
          : 'Explore our collection of stylish and durable furniture for every space.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: category.value ? category.value.name : 'Furniture Collections' },
      { property: 'og:description', content: category.value ? category.value.desc : 'Premium furniture crafted for every lifestyle.' },
      { property: 'og:image', content: category.value?.image },
      { property: 'og:url', content: currentUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'canonical', href: currentUrl }],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": baseUrl
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": category.value?.name || "Furniture Category",
              "item": currentUrl
            }
          ]
        })
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": category.value?.name || "Furniture Collections",
          "description": category.value?.desc || "Explore our selection of handcrafted furniture.",
          "url": currentUrl,
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": allProducts.value.slice(0, 12).map((item, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": item.name,
              "image": item.image,
              "url": `${baseUrl}${item.link}`,
              "offers": {
                "@type": "Offer",
                "priceCurrency": "IDR",
                "price": item.price || "0",
                "availability": "https://schema.org/InStock"
              }
            }))
          }
        })
      }
    ]
  }
})
</script>