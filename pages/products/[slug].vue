<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">

    <div>
      <NavProducts />
    </div>
    
    <div class="py-4"></div>

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

        <div v-else class="flex flex-col">
          <div class="w-full overflow-hidden rounded-2xl shadow-lg bg-white">
            <img
              :src="activeImage"
              :alt="displayName"
              class="w-full h-[320px] md:h-[480px] object-cover transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
          <div class="flex space-x-2 mt-4 overflow-x-auto py-2">
            <img
              v-for="(img, i) in product.imageURL"
              :key="i"
              :src="img"
              @click="activeImage = img"
              :class="[
                'rounded-xl cursor-pointer transition-all w-20 h-20',
                activeImage === img ? 'scale-105' : 'opacity-70 hover:opacity-100'
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

            <p class="text-2xl font-semibold text-blue-600 mb-6">
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
            <button @click="goBack" class="inline-block bg-gray-200 text-gray-800 text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-gray-300 transition-all w-full md:w-auto text-center shadow-sm hover:shadow-md">
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </main>

    <FooProducts />
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

function goBack() {
  if (document.referrer) {
    window.history.back();
  } else {
    window.location.href = '/products'; // fallback
  }
}

useHead(() => ({
  title: `${displayName.value} | Sabilajati Mebel Jepara`,
  meta: [
    { name: 'description', content: displayDesc.value.slice(0, 150) },
    { property: 'og:title', content: displayName.value },
    { property: 'og:description', content: displayDesc.value.slice(0, 150) },
    { property: 'og:image', content: activeImage.value }
  ]
}))
</script>