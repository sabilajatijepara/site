<template>
  <div>
    <Nav />
  </div>
   <div class="py-4"></div>
  <section class="relative bg-white py-16 px-6 md:px-12">
    <FaqAccordion/>
  </section>
  <div class="py-3"></div>
  <div class="">
    <Footer />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n, useHead, useRoute } from '#imports'

const route = useRoute()
const { tm, rt, t, locale } = useI18n()

const faqItems = computed(() => tm('faq.items') || [])

const faqSchema = computed(() => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.value.map(item => ({
    "@type": "Question",
    "name": rt(item.q),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": rt(item.a)
    }
  }))
}))

useHead(() => ({
  title: `${t('faq.title')} - Sabilajati Mebel Jepara`,
  meta: [
    {
      name: 'description',
      content: t('faq.description')
    },
    {
      property: 'og:title',
      content: `${t('faq.title')} - Sabilajati Mebel Jepara`
    },
    {
      property: 'og:description',
      content: t('faq.description')
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://sabilajati.com${route.fullPath}`
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(faqSchema.value)
    }
  ]
}))
</script>