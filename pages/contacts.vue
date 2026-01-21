<template>
  <div>
    <div class="flex container mx-auto max-w-4xl">
      <Nav />
    </div>
    <div class="py-16 md:px-12"></div>
    <div class="container relative mx-auto flex flex-col px-6 space-y-4 max-w-4xl">
      <div class="bg-slate-300 px-4 md:px-8 py-6 rounded-2xl">
        <div><Icon name="tabler:help-square-rounded" size="3rem"></Icon></div>
        <div class="text-xl font-bold py-2">{{ $t('Do You Have Question') }}</div>
        <div>{{ $t('Find Answer') }}</div>
        <div class="py-6 w-full">
          <NuxtLinkLocale to="/faq" class="border-2 border-black rounded-2xl px-4 py-3 hover:bg-black hover:text-white">{{ $t('See FAQ') }}</NuxtLinkLocale>
        </div>
      </div>
      <div class="rounded-2xl px-4 md:px-8 py-6 bg-cyan-100 overflow-hidden">
        <div><Icon name="tabler:message-circle" size="3rem"></Icon></div>
        <div class="text-xl font-bold py-2">Message</div>
        <div>(+62)85225208256</div>
        <div>sabilajatijepara@gmail.com</div>
        <div>admin@sabilajati.com</div>
        <div class="absolute right-0 md:right-16 top-[15.74rem]">
          <img src="https://res.cloudinary.com/dwn4gzaqp/image/upload/v1760516472/29014086_7429968_hicl2g.webp" class="w-56 h-56" alt="i"/>
        </div>
      </div>
      <div class="border-2 border-black rounded-2xl px-4 md:px-8 py-6">
        <div><Icon name="tabler:map-pin" size="3rem"></Icon></div>
        <div class="text-xl font-bold py-2">{{ $t('Location') }}</div>
        <div>
          <iframe class="w-full h-64 rounded-xl border-2"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Workshop Sabilajati&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowfullscreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    <div class="py-3"></div>
    <div class="">
      <Footer />
    </div>
  </div>
</template>

<script setup>
  // SEO
useHead({
  title: "Contacts - Sabilajati Mebel Jepara",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with Sabilajati Mebel Jepara, manufacturer of school desks, cafe tables, and custom furniture.",
    },
    {
      name: "keywords",
      content:
        "Mebel Jepara, meubel Jepara, contact, school desks, cafe tables, custom furniture",
    },
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Contacts - Sabilajati Mebel Jepara" },
    {
      property: "og:description",
      content:
        "Reach out to Sabilajati Mebel Jepara for inquiries, orders, or customer support.",
    },
    {
      property: "og:image",
      content:
        "https://res.cloudinary.com/doninmxbl/image/upload/kquaxae4iakjge8rlve6.png",
    },
    { property: "og:url", content: "https://sabilajati.co.id/contacts" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://sabilajati.com/contacts",
    },
  ],
  script: [
    // ORGANIZATION SCHEMA
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sabilajati Mebel Jepara",
        "url": "https://sabilajati.com",
        "logo":
          "https://res.cloudinary.com/doninmxbl/image/upload/kquaxae4iakjge8rlve6.png",
        "description":
          "Manufacturer of school desks and chairs, cafe tables and chairs, and custom furniture.",
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

    // CONTACT PAGE SCHEMA
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacts - Sabilajati Mebel Jepara",
        "url": "https://sabilajati.com/contacts",
        "description":
          "Reach out to Sabilajati Mebel Jepara for inquiries, orders, or customer support.",
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

    // BREADCRUMB SCHEMA
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
            "item": "https://sabilajati.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Contacts",
            "item": "https://sabilajati.com/contacts",
          },
        ],
      }),
    },
  ],
});
</script>