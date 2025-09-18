<template>
  <div>
    <Nav />
  </div>
  <div class="py-4"></div>
  <section class="relative bg-white py-16 px-6 md:px-12">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
      <p class="text-gray-600 max-w-2xl mx-auto">
        Here are some of our recent works in teak, mahogany, and coconut wood. 
        Each project reflects our craftsmanship and dedication to timeless design.
      </p>
    </div>
    <!-- Grid Portfolio -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(project, index) in projects.projects"
        :key="index"
        class="relative group overflow-hidden rounded-xl shadow-md cursor-pointer"
        @click="openLightbox(index)"
      >
        <img
          :src="project.image"
          :alt="project.title"
          class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        >
          <p class="text-white text-lg font-semibold px-4">{{ project.title }}</p>
        </div>
      </div>
    </div>
    <div class="py-4 text-2xl font-bold text-center">
      And More...
    </div>

    <!-- Lightbox -->
    <div
      v-if="lightboxIndex !== null"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click.self="closeLightbox"
    >
      <div class="relative max-w-5xl w-full p-4 flex flex-col items-center">
        <img
          :src="projects.projects[lightboxIndex].image"
          :alt="projects.projects[lightboxIndex].title"
          class="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
        />
        <p class="text-white text-center mt-4 text-lg">
          {{ projects.projects[lightboxIndex].title }}
        </p>

        <!-- Close button -->
        <button
          class="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
          @click="closeLightbox"
        >
          ✕
        </button>

        <!-- Prev button -->
        <button
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
          @click.stop="prevImage"
        >
          ‹
        </button>

        <!-- Next button -->
        <button
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full p-3"
          @click.stop="nextImage"
        >
          ›
        </button>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const { data: projects } = await useFetch("http://api.sabilajati.com/projects");

const lightboxIndex = ref(null);

const openLightbox = (index) => {
  lightboxIndex.value = index;
};

const closeLightbox = () => {
  lightboxIndex.value = null;
};

const nextImage = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value + 1) % projects.length;
  }
};

const prevImage = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value =
      (lightboxIndex.value - 1 + projects.length) % projects.length;
  }
};

// Keyboard navigation
const handleKeydown = (e) => {
  if (lightboxIndex.value === null) return;

  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") nextImage();
  if (e.key === "ArrowLeft") prevImage();
};

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>