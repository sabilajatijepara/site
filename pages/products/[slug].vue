<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">

    <!-- ===== HEADER / NAVBAR ===== -->
    <header class="bg-white shadow-md sticky top-0 z-50">
      <div class="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-10">
        <div class="text-2xl font-bold text-gray-900">Sabila Jati</div>
        <nav class="hidden md:flex gap-6 text-gray-700 font-medium">
          <NuxtLink to="/" class="hover:text-black transition">Home</NuxtLink>
          <NuxtLink to="/products" class="hover:text-black transition">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-black transition">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-black transition">Contact</NuxtLink>
        </nav>
        <!-- Mobile Menu Icon -->
        <button class="md:hidden text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <!-- ===== PRODUCT DETAIL MAIN ===== -->
    <main class="flex-grow py-10 px-4 md:px-10">
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- GALLERY -->
        <div v-if="loading" class="space-y-4 animate-pulse">
          <div class="w-full h-[320px] md:h-[480px] bg-gray-200 rounded-2xl"></div>
          <div class="flex gap-3">
            <div v-for="n in 4" :key="n" class="w-20 h-20 bg-gray-200 rounded-xl"></div>
          </div>
        </div>

        <div v-else class="flex flex-col items-center">
          <div class="w-full overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              :src="activeImage"
              :alt="displayName"
              class="w-full h-[320px] md:h-[480px] object-cover transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
          <div class="flex gap-3 mt-4 overflow-x-auto">
            <img
              v-for="(img, i) in product.imageURL"
              :key="i"
              :src="img"
              @click="activeImage = img"
              :class="[
                'w-20 h-20 object-cover rounded-xl cursor-pointer transition-all',
                activeImage === img ? 'ring-2 ring-black scale-105' : 'opacity-70 hover:opacity-100'
              ]"
            />
          </div>
        </div>

        <!-- PRODUCT INFO -->
        <div v-if="loading" class="space-y-4 animate-pulse">
          <div class="h-10 bg-gray-200 rounded w-3/4"></div>
          <div class="h-5 bg-gray-200 rounded w-1/4"></div>
          <div class="h-7 bg-gray-200 rounded w-1/3"></div>
          <div class="h-24 bg-gray-200 rounded w-full"></div>
          <div class="h-12 bg-gray-300 rounded w-1/2"></div>
        </div>

        <div v-else class="flex flex-col justify-between space-y-6">
          <div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">
              {{ displayName }}
            </h1>
            <p class="text-gray-500 text-sm mb-4 capitalize">
              {{ product.categories?.[0]?.name?.en || product.categories?.[0]?.name?.id || "Uncategorized" }}
            </p>

            <p class="text-2xl font-semibold text-green-600 mb-6">
              {{ formatPrice(product.price) }}
            </p>

            <p class="text-gray-700 leading-relaxed mb-8 text-lg whitespace-pre-line">
              {{ displayDesc }}
            </p>
          </div>

          <div class="flex flex-col md:flex-row gap-4">
            <a
              :href="whatsappLink"
              target="_blank"
              class="inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-green-700 transition-all w-full md:w-auto text-center shadow-md hover:shadow-lg"
            >
              💬 Order via WhatsApp
            </a>
            <NuxtLink to="/products" class="inline-block bg-gray-200 text-gray-800 text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-gray-300 transition-all w-full md:w-auto text-center shadow-sm hover:shadow-md">
              ← Back to Products
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <!-- ===== FOOTER ===== -->
    <footer class="bg-white border-t mt-10">
      <div class="max-w-6xl mx-auto py-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
        <div>
          <h3 class="font-bold mb-3 text-gray-900">Sabila Jati</h3>
          <p>Premium furniture handcrafted in Indonesia. Elegant, minimal, and timeless.</p>
        </div>

        <div>
          <h3 class="font-bold mb-3 text-gray-900">Quick Links</h3>
          <ul class="space-y-1">
            <li><NuxtLink to="/" class="hover:text-black">Home</NuxtLink></li>
            <li><NuxtLink to="/products" class="hover:text-black">Products</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-black">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-black">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold mb-3 text-gray-900">Contact</h3>
          <p>📞 +62 812 3456 7890</p>
          <p>📧 info@sabilajati.com</p>
          <p>📍 Jepara, Indonesia</p>
        </div>
      </div>

      <div class="border-t py-4 text-center text-gray-500 text-sm">
        © 2025 Sabila Jati. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, computed } from 'vue'

const route = useRoute()
const slugEn = route.params.slug
const product = ref({})
const loading = ref(true)
const activeImage = ref('')

onMounted(async () => {
  try {
    const res = await $fetch(`https://api.sabilajati.com/products/en/${slugEn}`)
    product.value = res
    activeImage.value = product.value?.imageURL?.[0] || ''
  } catch (e) {
    console.error("Gagal ambil produk:", e)
  } finally {
    loading.value = false
  }
})

const displayName = computed(() => product.value?.name_en || product.value?.name || '')
const displayDesc = computed(() => product.value?.desc_en || product.value?.description || '')

const formatPrice = (price) => {
  if (!price || price === 0) return 'Price: Contact Admin'
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}

const whatsappLink = computed(() => {
  const phone = '6281234567890'
  const text = `Hello, I'm interested in the product: ${displayName.value}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
})

useHead(() => ({
  title: `${displayName.value} | Sabilajati Jepara`,
  meta: [
    { name: 'description', content: displayDesc.value.slice(0, 150) },
    { property: 'og:title', content: displayName.value },
    { property: 'og:description', content: displayDesc.value.slice(0, 150) },
    { property: 'og:image', content: activeImage.value }
  ]
}))
</script>