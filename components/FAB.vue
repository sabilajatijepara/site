<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
    <!-- Contact Box -->
    <transition name="fade">
      <div
        v-if="showContact"
        class="mb-2 p-4 bg-white rounded-xl shadow-xl flex flex-col items-start space-y-3 w-48 lg:w-96 border border-white/20 bg-white/30 backdrop-blur-md backdrop-saturate-150"
      >
        <div class="font-bold text-lg">
          Contact Us
        </div>
        <hr class="h-px my-4 bg-gray-100 border-0" />
        <div class="hover:text-white transition hover:bg-blue-600 w-full px-2 py-1 rounded-2xl">
          <NuxtLink
            href="mailto:hello@perusahaan.com"
            class="flex items-center space-x-2"
          >
            <Icon name="heroicons:envelope" size="20" />
            <span>Email</span>
          </NuxtLink>
        </div>
        <div class="hover:text-white hover:bg-green-500 transition px-2 py-1 rounded-2xl w-full">
          <NuxtLink
            href="https://wa.me/6281234567890"
            target="_blank"
            class="flex items-center space-x-2"
          >
            <Icon name="mdi:whatsapp" size="20" />
            <span>WhatsApp</span>
          </NuxtLink>
        </div>
      </div>
    </transition>

    <!-- FAB Button -->
    <button
      @click="toggleContact"
      class="w-14 h-14 md:h-20 md:w-20 text-blue-600 text-2xl md:text-4xl rounded-full shadow-md flex items-center justify-center transition duration-300 border border-white/20 bg-white/30 backdrop-blur-md backdrop-saturate-150"
      aria-label="Hubungi Kami"
    >
      <Icon name="heroicons:chat-bubble-left-right"/>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showContact = ref(false)

function toggleContact() {
  showContact.value = !showContact.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>