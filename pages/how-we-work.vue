<template>
  <div class="flex container mx-auto max-w-4xl">
    <Nav />
  </div>
  <section class="relative bg-white text-gray-800">
    <!-- Hero -->
    <section 
      class="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-center text-white"
      style="background-image: url('https://res.cloudinary.com/dwn4gzaqp/image/upload/v1756094939/How_We_Work_sho6ly.webp');" data-theme="light"
    >
      <div class="absolute inset-0"></div>
      <div class="relative z-10 px-6">
        <h1 class="text-5xl font-bold mb-4">How We Work</h1>
        <p class="text-lg max-w-2xl mx-auto">
          From raw wood to timeless furniture, this is the journey we walk with care and passion.
        </p>
      </div>
    </section>

    <!-- Section 1: Forest -->
    <div class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 class="text-2xl font-semibold mb-4">From the Forest</h3>
        <p class="text-gray-700 leading-relaxed">
          Deep in the forests of Java, every log has a story waiting to be told. 
          Our journey begins with teak, mahogany, and coconut wood — chosen not only for strength, 
          but for the spirit within each grain. A knot here, a curve there: nature leaves its 
          fingerprints, and we honor them.
        </p>
      </div>
      <div>
        <img 
          src="https://www.gotravelly.com/blog/wp-content/uploads/2019/05/hutan-playen-gunungkidul.jpg" 
          alt="Logs of wood in forest" 
          class="rounded-2xl shadow-lg"
        />
      </div>
    </div>

    <!-- Section 2: Workshop -->
    <section class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div class="order-2 md:order-1">
        <img 
          src="https://images.pexels.com/photos/5974334/pexels-photo-5974334.jpeg" 
          alt="Artisan working on wood" 
          class="rounded-2xl shadow-lg"
        />
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl font-semibold mb-4">In the Workshop</h3>
        <p class="text-gray-700 leading-relaxed">
          Once the wood arrives at our workshop, it is welcomed by hands that have known this 
          craft for generations. Carpenters, sculptors, and finishers move in rhythm, blending 
          inherited tradition with quiet innovation. The sound of chisels and the scent of 
          freshly carved wood fill the air, turning raw material into forms of warmth and character.
        </p>
      </div>
    </section>

    <!-- Section 3: Finishing -->
    <section class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h3 class="text-2xl font-semibold mb-4">The Finishing Touch</h3>
        <p class="text-gray-700 leading-relaxed">
          Finishing is not just polishing; it is revealing. With patience, we let the wood’s soul 
          shine — grain lines glowing under gentle oils, surfaces softened to touch, strength secured 
          for years to come.
        </p>
      </div>
      <div>
        <img 
          src="https://images.pexels.com/photos/4491916/pexels-photo-4491916.jpeg" 
          alt="Wood finishing process" 
          class="rounded-2xl shadow-lg"
        />
      </div>
    </section>

    <!-- Section 4: The Result -->
    <section class="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
      <div class="order-2 md:order-1">
        <img 
          src="https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg" 
          alt="Finished furniture in home" 
          class="rounded-2xl shadow-lg"
        />
      </div>
      <div class="order-1 md:order-2">
        <h3 class="text-2xl font-semibold mb-4">A Story Completed</h3>
        <p class="text-gray-700 leading-relaxed">
          What leaves our workshop is not mass-produced furniture. 
          It is a piece of Java’s heritage, shaped by human touch, 
          designed to travel across borders, and built to live for generations.
        </p>
      </div>
    </section>

    <!-- Who We Are -->
    <div class="grid grid-cols-1 md:grid-cols-2">
    <section 
      class="relative bg-cover bg-center text-white text-center cursor-pointer flex items-center justify-center h-[24vh]"
      style="background-image: url('https://images.pexels.com/photos/5466226/pexels-photo-5466226.jpeg');"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <NuxtLinkLocale
        to="/about"
        class="group relative z-10 flex items-center gap-3 text-2xl md:text-5xl text-white transition-all hover:tracking-wide"
      >
        <!-- Icon Panah Kiri -->
        <Icon
          name="mdi:arrow-left"
          class="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:-translate-x-2"
        />
        <span class="flex items-center">Who We Are</span>
      </NuxtLinkLocale>
    </section>
    <section 
      class="relative bg-cover bg-center text-white text-center cursor-pointer flex items-center justify-center h-[24vh]"
      style="background-image: url('https://images.pexels.com/photos/33537946/pexels-photo-33537946.jpeg');"
    >
      <div class="absolute inset-0 bg-black/20"></div>
      <NuxtLinkLocale
        to="/projects"
        class="group relative z-10 flex items-center gap-3 text-2xl md:text-5xl text-white transition-all hover:tracking-wide"
      >
        <span class="flex items-center">Projects</span>
        <Icon
          name="mdi:arrow-right"
          class="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:translate-x-2"
        />
      </NuxtLinkLocale>
    </section>
    </div>
  </section>
  <div class="py-4"></div>
  <div>
    <Footer />
  </div>
</template>

<script setup>
  // SEO
useHead({
  title: "How We Work - Sabilajati Mebel Jepara",
  meta: [
    {
      name: "description",
      content:
        "Discover how Sabilajati Mebel Jepara designs and produces custom furniture with craftsmanship, precision, and sustainable materials.",
    },
    {
      name: "keywords",
      content:
        "Mebel Jepara, meubel Jepara, furniture process, handmade furniture, custom furniture Jepara, woodworking Jepara",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "How We Work - Sabilajati Mebel Jepara" },
    {
      property: "og:description",
      content:
        "Learn more about our process of crafting premium furniture from Jepara — from design to delivery.",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/doninmxbl/image/upload/kquaxae4iakjge8rlve6.png",
    },
    { property: "og:url", content: "https://sabilajati.co.id/how-we-work" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://sabilajati.co.id/how-we-work",
    },
  ],
  script: [
    // === ORGANIZATION SCHEMA ===
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sabilajati Mebel Jepara",
        "url": "https://sabilajati.co.id",
        "logo":
          "https://res.cloudinary.com/doninmxbl/image/upload/kquaxae4iakjge8rlve6.png",
        "description":
          "We are a manufacturer of school desks and chairs, cafe tables and chairs, as well as gazebos.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Jl. Raya Jepara - Bangsri KM 7",
          "addressLocality": "Jepara",
          "addressRegion": "Jawa Tengah",
          "postalCode": "59452",
          "addressCountry": "ID",
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+62 852-2520-8256",
            "contactType": "customer service",
            "availableLanguage": ["Indonesian", "English"],
          },
        ],
        "sameAs": [
          "https://www.facebook.com/sabilajatimebeljepara",
          "https://www.instagram.com/sabilajati_jepara",
          "https://wa.me/6285225208256",
        ],
      }),
    },

    // === WEBPAGE SCHEMA ===
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "How We Work - Sabilajati Mebel Jepara",
        "url": "https://sabilajati.co.id/how-we-work",
        "description":
          "Learn about how Sabilajati Mebel Jepara creates handmade, custom furniture through expert craftsmanship and sustainable materials.",
        "publisher": {
          "@type": "Organization",
          "name": "Sabilajati Mebel Jepara",
          "logo": {
            "@type": "ImageObject",
            "url":
              "https://res.cloudinary.com/doninmxbl/image/upload/kquaxae4iakjge8rlve6.png",
          },
        },
      }),
    },

    // === BREADCRUMB SCHEMA ===
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sabilajati.co.id",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "How We Work",
            "item": "https://sabilajati.co.id/how-we-work",
          },
        ],
      }),
    },
  ],
});
</script>