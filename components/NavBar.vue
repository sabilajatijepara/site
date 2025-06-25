<template>
  <header class="">
    <div class="fixed top-0 left-0 w-full z-50 bg-gray-100/20 backdrop-blur-lg border-b-4 border-gray-100/20 rounded-b-2xl border-x-4">
    <div class="container mx-auto flex items-center justify-between px-4 py-6">
      <!-- Logo -->
      <h1 class="text-xl font-bold mix-blend-difference">
        <NuxtLinkLocale to="/">Sabilajati Jepara</NuxtLinkLocale>
      </h1>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLinkLocale to="/" class="hover:text-gray-300">{{ $t('Home') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/about" class="hover:text-gray-300">{{ $t('About') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/blog" class="hover:text-gray-300">Blog</NuxtLinkLocale>
        <NuxtLinkLocale to="/contact" class="hover:text-gray-300">{{ $t('Contact') }}</NuxtLinkLocale>
      </nav>

      <button
        class="block md:hidden focus:outline-none"
        @click="toggleMenu"
      >
        <svg
          class="w-6 h-6 transition-transform duration-300"
          :class="{ 'rotate-90': isMenuOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          >
            <title>Menu</title>
          </path>
        </svg>
      </button>
    </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white/20 backdrop-blur-3xl flex flex-col text-xl px-4 py-6 z-50"
      >
        <div class="flex text-gray-300 focus:outline-none text-2xl justify-between">
          <div class="font-bold text-xl text-black">Sabilajati Jepara</div>
          <div class="space-x-2">
            <button
              class="text-gray-300 focus:outline-none
              text-2xl"
              @click="toggleMenu"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                >
                  <title>Close</title>
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col px-8 py-12 space-y-8">
          <NuxtLinkLocale
            to="/"
            class="hover:text-gray-400 text-2xl"
            @click="toggleMenu"
          >{{ $t('Home') }}</NuxtLinkLocale>
          <NuxtLinkLocale
            to="/about"
            class="hover:text-gray-400 text-2xl"
            @click="toggleMenu"
          >{{ $t('About') }}</NuxtLinkLocale>
          <NuxtLinkLocale
            to="/blog"
            class="hover:text-gray-400 text-2xl"
            @click="toggleMenu"
          >Blog</NuxtLinkLocale>
          <NuxtLinkLocale
            to="/contact"
            class="hover:text-gray-400 text-2xl"
            @click="toggleMenu"
          >{{ $t('Contact') }}</NuxtLinkLocale>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
          <div class="pt-8">
            <p class="mb-2 font-bold">Language</p>
            <div class="text-sm space-x-4">
              <NuxtLink to="/en">ENGLISH</NuxtLink>
              <span>|</span>
              <NuxLink to="/id">INDONESIA</NuxLink>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      
      if (this.isMenuOpen) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
  // Bersihkan kelas ketika komponen dihancurkan
  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>