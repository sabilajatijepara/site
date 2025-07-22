<template>
  <header class="max-w-4xl">
    <div class="fixed top-0 left-0 w-full z-50 bg-gray-100/20 backdrop-blur-lg ">
    <div class="container mx-auto flex items-center justify-between px-4 py-6 inline-flex max-w-4xl">
      <!-- Logo -->
      <h1 class="text-xl font-bold">
        <NuxtLinkLocale to="/" class="[text-shadow:_0_2px_4px_#fff]">Sabilajati Jepara</NuxtLinkLocale>
      </h1>

      <!-- Desktop Menu -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLinkLocale to="/" class="hover:text-gray-300">{{ $t('Home') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/about" class="hover:text-gray-300">{{ $t('About') }}</NuxtLinkLocale>
        <NuxtLinkLocale to="/blog" class="hover:text-gray-300">Blog</NuxtLinkLocale>
        <NuxtLinkLocale to="/contact" class="hover:text-gray-300">{{ $t('Contact') }}</NuxtLinkLocale>
      </nav>

      <div class="md:hidden focus:outline-none">
      <button
        class="flex items-center inline-flex space-x-1 border rounded-full px-3 py-2 hover:bg-gray-100 transition delay-150"
        @click="toggleMenu"
      > <span class="text-xs">Menu</span>
        <!--<svg
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
        </svg>-->
        <Icon name="ci:menu-duo-lg"/>
      </button>
      </div>
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
              class="text-black focus:outline-none flex items-center inline-flex space-x-1 border rounded-full px-3 py-2 hover:bg-gray-100 transition delay-150"
              @click="toggleMenu"
            >
            <span class="text-xs text-black">Close</span>
              <!--<svg
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
              </svg>-->
              <Icon name="line-md:close-small"/>
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
              <NuxtLink to="/">ENGLISH</NuxtLink>
              <span>|</span>
              <NuxtLink to="/id">INDONESIA</NuxtLink>
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