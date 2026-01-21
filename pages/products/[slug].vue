<template>
  <div class="bg-gray-50 min-h-screen flex flex-col">
    <div>
      <NavProducts />
    </div>
    
    <div class="py-8"></div>
  <main class="flex-grow py-10 px-4 md:px-10">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

    <!-- GALLERY -->
    <div v-if="pending" class="space-y-4 animate-pulse">
      <div class="w-full h-[320px] md:h-[480px] bg-gray-200 rounded-2xl"></div>
      <div class="flex gap-3">
        <div v-for="n in 4" :key="n" class="w-20 h-20 bg-gray-200 rounded-xl"></div>
      </div>
    </div>

    <div v-else class="flex flex-col">
      <div class="w-full overflow-hidden rounded-2xl bg-white">
        <img
          :src="toWebP(activeImage, 480, 480)"
          :alt="displayName"
          class="w-full h-[320px] md:h-[480px] object-cover"
        />
      </div>
      <div class="flex space-x-2 mt-4 overflow-x-auto py-2 px-4">
        <img
          v-for="(img, i) in product.imageURL"
          :key="i"
          :src="toWebP(img, 120, 120)"
          @click="activeImage = img"
          :class="[
            'rounded-xl cursor-pointer w-20 h-20 border',
            activeImage === img ? 'border-black' : 'grayscale opacity-70 hover:opacity-100'
          ]"
        />
      </div>
    </div>

    <!-- INFO -->
    <div v-if="pending" class="space-y-4 animate-pulse">
      <div class="h-10 bg-gray-200 rounded w-3/4"></div>
      <div class="h-24 bg-gray-200 rounded"></div>
    </div>

    <div v-else class="flex flex-col justify-between space-y-6">
      <div>
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 tracking-tight">
          {{ displayName }}
        </h1>
        <p class="text-2xl font-semibold text-blue-600 mb-6">
          {{ formatPrice(product.price) }}
        </p>
        <hr class="h-px my-4 bg-gray-200 border-0">
        <p class="text-gray-700 leading-relaxed mb-8 text-lg whitespace-pre-line">
          {{ displayDesc }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
        <a :href="whatsappLink" target="_blank" class="inline-block bg-green-700 hover:bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-2xl transition-all w-full md:w-auto text-center shadow-md hover:shadow-lg">
          <Icon name="mdi:whatsapp" />
          Order via WhatsApp
        </a>
        <button @click="goBack" class="inline-block border border-black text-gray-800 text-lg font-semibold py-3 px-6 rounded-2xl hover:bg-gray-300 transition-all w-full md:w-auto text-center shadow-sm hover:shadow-md">Go Back</button>
      </div>
    </div>
  </div>
</main>

<FooProducts />

  </div>
</template><script setup>
import { ref, computed, watchEffect } from 'vue'
import { useRoute, navigateTo, createError, useHead, useFetch } from '#imports'

// ROUTE & LOCALE
const route = useRoute()

const locale = computed(() =>
  route.path.startsWith('/id') ? 'id' : 'en'
)

const slug = computed(() => route.params.slug)


// API ENDPOINT
const apiUrl = computed(() =>
  locale.value === 'id'
    ? `https://api.sabilajati.com/products/${slug.value}`
    : `https://api.sabilajati.com/products/en/${slug.value}`
)

// FETCH PRODUCT (SSR SAFE)
const { data: product, pending, error } = await useFetch(apiUrl)

if (error.value) {
  throw createError({ statusCode: 404 })
}

const activeImage = ref('')
watchEffect(() => {
  if (product.value?.imageURL?.length) {
    activeImage.value = product.value.imageURL[0]
  }
})

const seoImage = computed(() => {
  if (!activeImage.value) return ''
  return activeImage.value.replace('/upload/', '/upload/f_auto,q_auto/')
})


// MULTI LANGUAGE
const displayName = computed(() =>
  locale.value === 'id'
    ? product.value?.name
    : product.value?.name_en || product.value?.name
)

const displayDesc = computed(() =>
  locale.value === 'id'
    ? product.value?.description
    : product.value?.desc_en || product.value?.description
)


// AUTO REDIRECT SLUG (SEO SAFETY)
watchEffect(() => {
  if (!product.value) return

  // EN page but slug is ID
  if (locale.value === 'en' && product.value.slug_en && slug.value !== product.value.slug_en) {
    navigateTo(`/products/${product.value.slug_en}`, { replace: true })
  }

  // ID page but slug is EN
  if (locale.value === 'id' && product.value.slug && slug.value !== product.value.slug) {
    navigateTo(`/id/products/${product.value.slug}`, { replace: true })
  }
})

// SEO
const canonicalUrl = computed(() =>
  locale.value === 'id'
    ? `https://sabilajati.com/id/products/${slug.value}`
    : `https://sabilajati.com/products/${slug.value}`
)

useHead(() => ({
  title: `${displayName.value} - Sabilajati Mebel Jepara`,
  meta: [
    { name: 'description', content: displayDesc.value?.slice(0, 150) },

    // OG
    { property: 'og:title', content: displayName.value },
    { property: 'og:description', content: displayDesc.value?.slice(0, 150) },
    { property: 'og:image', content: seoImage.value },
    { property: 'og:type', content: 'product' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: seoImage.value }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
    { rel: 'alternate', hreflang: 'id', href: `https://sabilajati.com/id/products/${product.value?.slug}` },
    { rel: 'alternate', hreflang: 'en', href: `https://sabilajati.com/products/${product.value?.slug_en}` }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: displayName.value,
        image: seoImage.value,
        description: displayDesc.value?.slice(0, 150),
        brand: {
          "@type": "Brand",
          name: "Sabilajati Mebel Jepara"
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "IDR",
          price: product.value?.price || "0",
          availability: "https://schema.org/InStock",
          url: canonicalUrl.value
        }
      })
    }
  ]
}))

// =========================
// HELPERS
// =========================
const whatsappLink = computed(() => {
  const phone = '6285225208256'

  const productUrl = canonicalUrl.value +
    '?utm_source=whatsapp&utm_medium=chat&utm_campaign=product_inquiry'

  const text =
    locale.value === 'id'
      ? `Halo! Saya melihat produk "${displayName.value}" di website Sabilajati Mebel Jepara.\n\nBisakah Anda memberikan informasi lebih lanjut?\n\nBerikut link produknya:\n${productUrl}`
      : `Hi! I saw your product "${displayName.value}" on the Sabilajati Mebel Jepara website.\n\nCould you please tell me more about it?\n\nHere’s the product link:\n${productUrl}`

  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
})

function goBack () {
  history.length > 1 ? history.back() : navigateTo('/products')
}

function formatPrice (price) {
  if (!price) return 'Price: Contact us'
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}

function toWebP (url, w, h) {
  if (!url) return ''
  let out = url.replace('/upload/', '/upload/f_webp/')
  if (w || h) {
    const size = [`w_${w}`, `h_${h}`, 'c_fill'].filter(Boolean).join(',')
    out = out.replace('/upload/', `/upload/${size}/`)
  }
  return out
}
</script>