<template class="">
  <ClientOnly>
    <div class="absolute w-full left-1/2 top-32 transform -translate-x-1/2 -translate-y-1/2 size-96 bg-gradient-to-b from-blue-400 to-transparent">
      
    </div>
    <swiper-container
      slides-per-view="1"
      loop="true"
      autoplay-delay="5000"
      pagination="true"
      effect="fade"
      class="w-full h-96 md:h-[25vh]"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index" class="">
        <div
          class="w-full h-full bg-cover bg-center relative rounded-3xl"
          :style="{ backgroundImage: `url(${slide.image})` }"
        >
          <div class="absolute inset-0 bg-black/30 flex items-center rounded-3xl">
            <div class="text-white px-8 md:px-20 container mx-auto">
              <h2 class="text-4xl md:text-6xl font-bold mb-4">{{ $t(slide.title) }}</h2>
              <p class="mb-6 text-lg">{{ $t(slide.description) }}</p>
              <button class="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition">
                {{ $t(slide.buttonText) }}
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
const slides = [
  {
    image: 'https://res.cloudinary.com/dj6we26m8/image/upload/f_webp,q_auto,w_800/v1745379155/oioonvvbky4omlc8htly.png',
    title: 'slider.slide1.title',
    description: 'slider.slide1.description',
    buttonText: 'slider.slide1.button',
  },
  {
    image: 'https://res.cloudinary.com/dj6we26m8/image/upload/v1741162571/hnssno6jxeeuuwccxit4.webp',
    title: 'slider.slide2.title',
    description: 'slider.slide2.description',
    buttonText: 'slider.slide2.button',
  },
]
</script>

<style scoped>
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: white;
}
swiper-container::part(pagination-bullet-active) {
  background: white;
  color: white;
}
</style>