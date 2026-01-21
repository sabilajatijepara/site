<template>
  <section class="max-w-4xl mx-auto py-16 px-4">
    <h1 class="text-3xl md:text-4xl font-bold mb-10 text-center">
      {{ $t('faq.title') }}
    </h1>
    
    <div class="space-y-4">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="border rounded-xl overflow-hidden"
      >
        <button
          class="w-full flex justify-between items-center p-5 text-left font-semibold"
          @click="toggle(index)"
        >
          <span>{{ rt(item.q) }}</span>
          <span>{{ active === index ? '−' : '+' }}</span>
        </button>

        <div
          v-show="active === index"
          class="p-5 pt-0 text-gray-700"
        >
          {{ rt(item.a) }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
const { tm, rt } = useI18n()

const active = ref(null)

const faqItems = computed(() => {
  const items = tm('faq.items')
  return Array.isArray(items) ? items : []
})

const toggle = (i) => {
  active.value = active.value === i ? null : i
}
</script>