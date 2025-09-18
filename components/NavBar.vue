<template>
  <header>
    <!-- Fixed Navbar -->
    <div
      ref="navbar"
      class="fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent"
    >
      <div class="container mx-auto flex items-center justify-between px-4 py-6">
        <!-- Logo -->
        <h1 :class="textColorClass" class="text-xl font-bold transition-colors duration-500">
          <NuxtLinkLocale to="/">Sabilajati Jepara</NuxtLinkLocale>
        </h1>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLinkLocale to="/" :class="textColorClass + ' hover:opacity-70'">Home</NuxtLinkLocale>
          <NuxtLinkLocale to="/about" :class="textColorClass + ' hover:opacity-70'">About</NuxtLinkLocale>
          <NuxtLinkLocale to="/how-we-work" :class="textColorClass + ' hover:opacity-70'">
            {{ $t('How We Work') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/projects" :class="textColorClass + ' hover:opacity-70'">
            {{ $t('Projects') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="https://blog.sabilajati.com" :class="textColorClass + ' hover:opacity-70'">Blog</NuxtLinkLocale>
          <NuxtLinkLocale to="/contact" :class="textColorClass + ' hover:opacity-70'">Contact</NuxtLinkLocale>
          <!-- Language Dropdown
          <div class="relative" @click="toggleDropdown">
            <button
              class="flex items-center space-x-2 px-3 py-2 border rounded-md hover:bg-gray-100"
            >
              <span>{{ getLabel(locale) }}</span>
              <Icon
                name="mdi:chevron-down"
                class="w-4 h-4"
              />
            </button>
      
            Dropdown menu
            <div
              v-if="open"
              class="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50"
            >
              <ul>
                <li
                  v-for="l in availableLocales"
                  :key="l"
                >
                  <button
                    @click="changeLang(l)"
                    class="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {{ getLabel(l) }}
                  </button>
                </li>
              </ul>
            </div>
          </div>-->
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            :class="textColorClass + ' flex items-center space-x-1 border rounded-full px-3 py-2 hover:opacity-70'"
            @click="toggleMenu"
          >
            <span class="text-xs">Menu</span>
            <Icon name="ci:menu-duo-lg"/>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-gray-400/20 backdrop-blur-3xl flex flex-col text-xl px-4 py-6 z-50"
      >
        <div class="flex justify-between items-center" :class="textColorClass">
          <div class="font-bold text-xl">Sabilajati Jepara</div>
          <button
            :class="textColorClass + ' flex items-center space-x-1 border rounded-full px-3 py-2 hover:opacity-70'"
            @click="toggleMenu"
          >
            <span class="text-xs">Close</span>
            <Icon name="line-md:close-small"/>
          </button>
        </div>

        <div class="flex flex-col px-8 py-12 space-y-8" :class="textColorClass">
          <NuxtLinkLocale to="/" class="hover:opacity-70 text-2xl" @click="toggleMenu">Home</NuxtLinkLocale>
          <NuxtLinkLocale to="/about" class="hover:opacity-70 text-2xl" @click="toggleMenu">About</NuxtLinkLocale>
          <NuxtLinkLocale to="/how-we-work" class="hover:opacity-70 text-2xl" @click="toggleMenu">How We Work</NuxtLinkLocale>
          <NuxtLinkLocale to="/blog" class="hover:opacity-70 text-2xl" @click="toggleMenu">Blog</NuxtLinkLocale>
          <NuxtLinkLocale to="/contact" class="hover:opacity-70 text-2xl" @click="toggleMenu">Contact</NuxtLinkLocale>
          <hr class="h-px my-8 bg-gray-200 border-0">
          <div class="pt-8" :class="isDark ? 'text-white' : 'text-black'">
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
      isDark: true, // default teks putih
    };
  },
  computed: {
    textColorClass() {
      return this.isDark ? 'text-white' : 'text-black';
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle("overflow-hidden", this.isMenuOpen);
    },
    handleScroll() {
      const hero = document.querySelector('section'); // asumsi section pertama hero
      if (!hero) return;

      const rect = hero.getBoundingClientRect();
      // kalau hero sudah tidak terlihat (scroll > hero.height)
      this.isDark = rect.bottom > 0;
    }
  },
  mounted() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<script setup>
  const { locale, availableLocales } = useI18n();
const open = ref(false);

function toggleDropdown() {
  open.value = !open.value;
}

function changeLang(l) {
  locale.value = l;
  open.value = false;
}

function getLabel(l) {
  switch (l) {
    case "id":
      return "🇮🇩 ";
    case "en":
      return "🇬🇧 ";
    default:
      return l.toUpperCase();
  }
}
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