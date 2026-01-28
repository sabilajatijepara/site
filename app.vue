<template>
  <NuxtPage/>
</template>
<script setup>
import { useI18n } from '#imports'

const { locale } = useI18n()
  
useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.bunny.net'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.bunny.net/css?family=plus-jakarta-sans:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i&display=swap'
    },
    { rel: "icon", href: "/favicon.ico" },
  ],
  htmlAttrs: {
    lang: locale,
  },
})
</script>