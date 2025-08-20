<template>
  <header
    class="max-w-4xl mx-auto transition-colors duration-300"
    :class="isDark ? 'text-white' : 'text-black'"
  >
    <div
      class="fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-colors duration-300"
      :class="isDark ? 'bg-white/10' : ''"
    >
      <div class="container mx-auto flex items-center justify-between px-4 py-6 inline-flex">
        <!-- Logo -->
        <h1 class="text-xl font-bold">
          <NuxtLinkLocale to="/" class="">
            Sabilajati Jepara
          </NuxtLinkLocale>
        </h1>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex space-x-6">
          <NuxtLinkLocale to="/" class="hover:opacity-70">{{ $t('Home') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/about" class="hover:opacity-70">{{ $t('About') }}</NuxtLinkLocale>
          <NuxtLinkLocale to="/blog" class="hover:opacity-70">Blog</NuxtLinkLocale>
          <NuxtLinkLocale to="/contact" class="hover:opacity-70">{{ $t('Contact') }}</NuxtLinkLocale>
        </nav>

        <!-- Mobile Menu Button -->
        <div class="md:hidden focus:outline-none">
          <button
            class="flex items-center inline-flex space-x-1 border rounded-full px-3 py-2 hover:bg-gray-100 transition delay-150" :class="isDark ? 'text-white hover:bg-white/10 border-white' : 'text-black hover:bg-gray-100 border-black'"
            @click="toggleMenu"
          >
            <span class="text-xs">Menu</span>
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
        <div class="flex focus:outline-none text-2xl justify-between" :class="isDark ? 'text-white' : 'text-black'">
          <div class="font-bold text-xl">Sabilajati Jepara</div>
          <div class="space-x-2">
            <button
              class="text-black focus:outline-none flex items-center inline-flex space-x-1 border rounded-full px-3 py-2 transition delay-150" :class="isDark ? 'text-white hover:bg-white/10 border-white' : 'text-black hover:bg-gray-100 border-black'"
              @click="toggleMenu"
            >
              <span class="text-xs">Close</span>
              <Icon name="line-md:close-small"/>
            </button>
          </div>
        </div>
        <div class="flex flex-col px-8 py-12 space-y-8" :class="isDark ? 'text-white' : 'text-black'">
          <NuxtLinkLocale to="/" class="hover:opacity-70 text-2xl" @click="toggleMenu">
            {{ $t('Home') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/about" class="hover:opacity-70 text-2xl" @click="toggleMenu">
            {{ $t('About') }}
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/blog" class="hover:opacity-70 text-2xl" @click="toggleMenu">
            Blog
          </NuxtLinkLocale>
          <NuxtLinkLocale to="/contact" class="hover:opacity-70 text-2xl" @click="toggleMenu">
            {{ $t('Contact') }}
          </NuxtLinkLocale>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
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

<!--<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDark: false, // toggle warna teks/navbar
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
    getLuminance(color) {
      const rgb = color.match(/\d+/g)?.map(Number);
      if (!rgb) return 1; // fallback putih

      const [r, g, b] = rgb.map((v) => {
        v /= 255;
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
      });

      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    },
    observeSections() {
      const sections = document.querySelectorAll("section");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const style = getComputedStyle(entry.target);

              const hasImage =
                style.backgroundImage && style.backgroundImage !== "none";

              if (hasImage) {
                this.isDark = true; // default anggap gelap kalau pakai gambar
              } else {
                const bgColor = style.backgroundColor || "rgb(255,255,255)";
                const luminance = this.getLuminance(bgColor);

                this.isDark = luminance < 0.9; // gelap → teks putih
              }
            }
          });
        },
        { threshold: 0.5 }
      );

      sections.forEach((section) => observer.observe(section));
    },
  },
  mounted() {
    this.observeSections();
  },
  beforeDestroy() {
    document.body.classList.remove("overflow-hidden");
  },
};
</script>-->

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.classList.toggle("overflow-hidden", isMenuOpen.value)
}

// Luminance detection
const navbar = ref(null)
let observer

onMounted(() => {
  const sections = document.querySelectorAll("section, header, div")
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bgColor = window.getComputedStyle(entry.target).backgroundColor
          const rgb = bgColor.match(/\d+/g)?.map(Number) || [255, 255, 255]
          const [r, g, b] = rgb
          const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

          if (luminance > 0.9) {
            isDark.value = false // teks hitam
          } else if (luminance < 0.65) {
            isDark.value = true // teks putih
          } else {
            isDark.value = false // fallback hitam
          }
        }
      })
    },
    { threshold: 0.5 }
  )
  sections.forEach((sec) => observer.observe(sec))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  document.body.classList.remove("overflow-hidden")
})
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