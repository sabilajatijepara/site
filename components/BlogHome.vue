<script setup>
const { data: blogPosts, error, pending: isLoading } = await useFetch('https://api.sabilajati.com/blog')
</script>

<template>
  <div class="mx-auto px-6 py-12">
    <div v-if="isLoading" class="text-gray-500 text-center">Memuat...</div>
    <div v-else-if="error" class="text-red-500 text-center">Gagal memuat blog.</div>

    <div v-else class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
      <div
        v-for="post in blogPosts?.slice(0, 3)"
        :key="post.id"
        class="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden border"
      >
        <img :src="post.thumbnail" :alt="post.title" loading="lazy" class="w-full h-48 object-cover" />
        <div class="p-4 flex flex-col h-full">
          <h2 class="text-lg font-semibold mb-1">{{ post.title }}</h2>
          <p class="text-sm text-gray-500 mb-2">{{ formatDate(post.published) }}</p>
          <p class="text-sm text-gray-700 line-clamp-3 mb-4">{{ stripHTML(post.summary) }}</p>
          <div>
            <NuxtLink :to="post.link" class="text-black hover:underline">
              Baca Selengkapnya →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4"></div>
    <div class="flex justify-center">
      <div>
        <NuxtLink
          to="https://blog.sabilajati.com"
          class="relative overflow-hidden px-6 py-3 rounded-3xl border border-blue-600 text-blue-600 font-medium transition-all duration-300 group inline-block"
        >
          <span class="relative z-10 group-hover:text-white">View All Articles</span>
      
          <!-- Efek air mengisi -->
          <span
            class="absolute left-0 bottom-0 w-full h-full z-0 bg-blue-600 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0 rounded-t-[100%] group-hover:rounded-t-none"
          ></span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
function formatDate(dateStr) {
  try {
    return new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(new Date(dateStr))
  } catch {
    return dateStr
  }
}

function stripHTML(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim()
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>