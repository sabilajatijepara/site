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
          <NuxtLinkLocale to="https://sabilajati.com/faq" class="border-2 border-black rounded-2xl px-4 py-3 hover:bg-black hover:text-white">{{ $t('See FAQ') }}</NuxtLinkLocale>
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
</script>