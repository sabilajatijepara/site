<template>
  <div class="flex container mx-auto max-w-4xl">
    <Nav />
  </div>
  <div class="bg-white text-gray-800" data-theme="dark">
    <!-- Hero Section -->
    <section
      class="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80');"
    >
      <div class="absolute inset-0 bg-black/40"></div>
      <div
        class="relative z-10 text-center text-white px-4"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1 class="text-3xl md:text-5xl font-bold mb-4">
          Crafted with Heart, Inspired by Tradition
        </h1>
        <p class="text-base md:text-xl max-w-2xl mx-auto">
          Furniture that carries the soul of Jepara into your home.
        </p>
      </div>
    </section><!-- Our Story -->
    <section class="py-16 px-6 md:px-20 text-center" data-theme="light">
      <h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">
        Our Story
      </h2>
      <p
        class="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-600"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        Welcome to <span class="font-semibold">CV Sabilajati Mebel Jepara</span>,
        where the timeless beauty of Indonesian wood craftsmanship meets modern living.
        Although our company was officially registered in 2021, our roots trace back much
        further—deep into the woodworking traditions of Jepara, a town globally celebrated
        for its mastery of teak furniture.
      </p>
      <p
        class="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-gray-600 mt-6"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        We craft a wide range of wooden products: elegant <span class="font-semibold">gazebos</span>, warm
        <span class="font-semibold">café furniture</span>, sturdy <span class="font-semibold">school furniture</span>,
        traditional <span class="font-semibold">wooden houses</span>, and bespoke pieces for private homes.
        Depending on the character of each project, we work with <span class="font-semibold">teak</span>,
        <span class="font-semibold">mahogany</span>, and <span class="font-semibold">coconut wood</span> (especially for gazebos)—
        materials we choose for their strength, durability, and natural charm.
      </p>
      <img
        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
        alt="Artisan carving teak wood"
        class="mt-10 rounded-2xl shadow-lg mx-auto w-full max-w-3xl"
        data-aos="zoom-in"
        data-aos-delay="350"
      />
    </section>
    
    <!-- The Soul of Jepara -->
    <section class="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center" data-theme="light">
      <div data-aos="fade-up">
        <h2 class="text-2xl md:text-3xl font-bold mb-6">The Soul of Jepara</h2>
        <p class="text-base md:text-lg leading-relaxed text-gray-600 max-w-2xl">
          For centuries, Jepara has been the heart of Indonesia’s teak craftsmanship.
          At Sabilajati, many of our artisans learned from their parents and grandparents.
          Each piece is shaped by hand—subtle marks of skill and patience—so no two creations
          are ever exactly the same.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
        alt="Jepara workshop"
        class="rounded-2xl shadow-lg"
        data-aos="fade-up"
      />
    </section>
    
    <!-- Values -->
    <section class="py-16 px-6 md:px-20 bg-gray-50 text-center" data-theme="light">
      <h2 class="text-2xl md:text-3xl font-bold mb-12" data-aos="fade-up">
        What We Believe
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div data-aos="zoom-in" data-aos-delay="100">
          <span class="text-4xl">🛠️</span>
          <h3 class="mt-4 font-semibold text-lg">Craftsmanship</h3>
          <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Handmade by skilled artisans from Jepara.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <span class="text-4xl">🌿</span>
          <h3 class="mt-4 font-semibold text-lg">Authentic Materials</h3>
          <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Teak, mahogany, and coconut wood selected for strength and beauty.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <span class="text-4xl">🕰️</span>
          <h3 class="mt-4 font-semibold text-lg">Built to Last</h3>
          <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Designs meant to serve families and spaces for years.
          </p>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
          <span class="text-4xl">🌍</span>
          <h3 class="mt-4 font-semibold text-lg">Global Vision</h3>
          <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Preparing to bring Jepara’s artistry to customers worldwide.
          </p>
        </div>
      </div>
    </section>
    
    <!-- Behind Every Piece -->
    <section class="py-16 px-6 md:px-20 text-center" data-theme="light">
      <blockquote
        class="text-xl md:text-2xl italic text-gray-700 max-w-2xl mx-auto"
        data-aos="fade-up"
      >
        "Every gazebo, chair, and cabinet carries a piece of our soul. When you bring
        our furniture into your space, you are not just buying wood—you are keeping a
        tradition alive."
      </blockquote>
      <img
        src="https://images.unsplash.com/photo-1577985051167-0d34bd6bca49?auto=format&fit=crop&w=400&q=80"
        alt="Jepara artisan portrait"
        class="mt-10 rounded-full w-32 h-32 md:w-40 md:h-40 mx-auto shadow-lg object-cover"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
    </section>
    
    <!-- Call to Action -->
    <section
      class="relative h-[50vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80');" data-theme="dark"
    >
      <div class="absolute inset-0 bg-black/50"></div>
      <div
        class="relative z-10 text-center text-white px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 class="text-2xl md:text-4xl font-bold mb-6 max-w-2xl mx-auto">
          Bring the Warmth of Jepara into Your Home
        </h2>
        <NuxtLink
          to="/products"
          class="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          Explore Our Collection
        </NuxtLink>
      </div>
    </section>
    
    </div>
    <div>
      <Footer />
    </div>
  </template>
<script setup>

</script>