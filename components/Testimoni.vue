<template>
  <ClientOnly>
    <swiper-container
      slides-per-view="1"
      loop="true"
      pagination="true"
      navigation="true"
      autoplay-delay="5000"
      effect="fade"
      class="w-full"
    >
      <swiper-slide v-for="(customer, index) in customers" :key="index">
        <div class="bg-white py-6 px-4">
          <div class="py-4 px-6 border rounded-2xl">
            <div class="flex items-center mb-4">
                  <div class="flex text-yellow-400">
                    <template v-for="i in 5">
                      <svg
                        v-if="i <= customer.rating"
                        :key="'filled-' + i"
                        class="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.19 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.19 3.674c.3.921-.755 1.688-1.538 1.118l-3.124-2.27a1 1 0 00-1.175 0l-3.124 2.27c-.783.57-1.838-.197-1.538-1.118l1.19-3.674a1 1 0 00-.364-1.118l-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.19-3.674z" />
                      </svg>
                      <svg
                        v-else
                        :key="'empty-' + i"
                        class="w-5 h-5 text-gray-300 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.19 3.674a1 1 0 00.95.69h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27a1 1 0 00-.364 1.118l1.19 3.674c.3.921-.755 1.688-1.538 1.118l-3.124-2.27a1 1 0 00-1.175 0l-3.124 2.27c-.783.57-1.838-.197-1.538-1.118l1.19-3.674a1 1 0 00-.364-1.118l-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862a1 1 0 00.95-.69l1.19-3.674z" />
                      </svg>
                    </template>
                  </div>
                </div>
                <p class="text-gray-700 italic mb-4">"{{ customer.comment }}"</p>
                <p class="text-sm font-semibold text-gray-900">{{ customer.name }}</p>
              
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
const customers = [
  {
    name: 'Sinta Rahayu',
    comment: 'Pelayanan sangat ramah dan cepat. Saya sangat puas dengan hasil akhirnya!',
    rating: 5,
  },
  {
    name: 'Bagas Prasetyo',
    comment: 'Produk sesuai ekspektasi. Proses pengiriman juga aman dan cepat.',
    rating: 4,
  },
  {
    name: 'Lina Marlina',
    comment: 'Desain elegan dan kualitasnya bagus. Recommended!',
    rating: 5,
  },
]
</script>

<style lang="css">
swiper-container::part(button-prev),
swiper-container::part(button-next) {
  color: white;
}
swiper-container::part(pagination-bullet-active) {
  background: white;
  color: white;
}
.swiper-button-next,
.swiper-button-prev {
  background-color: #000;
}
</style>