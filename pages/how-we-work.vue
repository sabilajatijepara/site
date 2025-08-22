<template>
  <div>
    <Nav />
  </div>
  <section class="bg-white relative overflow-hidden">
    <!-- ===== Decorative Wood Grain (global, very subtle) ===== -->
    <WoodGrain class="pointer-events-none absolute -top-24 -left-24 w-[520px] opacity-[0.06] text-amber-900 hidden md:block" />
    <WoodGrain class="pointer-events-none absolute -bottom-32 -right-24 w-[520px] opacity-[0.06] text-amber-700 hidden md:block" />

    <!-- ===== HERO ===== -->
    <div
      class="relative h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style="background-image:url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop');"
    >
      <div class="absolute inset-0 bg-black/40"></div>
      <!-- Wood grain thin overlay -->
      <svg class="absolute inset-0 w-full h-full opacity-[0.07] mix-blend-soft-light" viewBox="0 0 800 400" aria-hidden="true">
        <defs>
          <pattern id="grain" width="120" height="60" patternUnits="userSpaceOnUse">
            <path d="M0,30 C40,0 80,60 120,30" fill="none" stroke="white" stroke-width="1"/>
            <path d="M0,10 C30,-10 90,40 120,15" fill="none" stroke="white" stroke-width="0.7" opacity="0.6"/>
            <path d="M0,50 C20,70 100,20 120,45" fill="none" stroke="white" stroke-width="0.7" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grain)"/>
      </svg>

      <div class="relative z-10 max-w-2xl px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">How We Work</h1>
        <p class="text-lg md:text-xl" data-aos="fade-up" data-aos-delay="150">
          From design to delivery—our Jepara craftsmanship, step by step.
        </p>
      </div>
    </div>

    <!-- ===== INTRO STRIP ===== -->
    <div class="bg-amber-50 border-y border-amber-100">
      <div class="max-w-6xl mx-auto px-4 py-10">
        <p class="text-amber-900/90 text-center md:text-left" data-aos="fade-up">
          We specialize in <span class="font-semibold">teak</span>, <span class="font-semibold">mahogany</span>, and <span class="font-semibold">coconut wood</span> —
          building gazebos, café furniture, wooden houses, and school furniture with consistent quality control for export.
        </p>
      </div>
    </div>

    <!-- ===== STEPS ===== -->
    <div class="max-w-6xl mx-auto px-4 py-16 space-y-20">
      <!-- Step -->
      <div v-for="(s, i) in steps" :key="i" class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Image -->
        <div
          :class="i % 2 === 0 ? 'order-1' : 'order-2 md:order-1'"
          class="relative"
          data-aos="fade-right"
        >
          <!-- corner grain -->
          <WoodKnot class="absolute -top-6 -left-6 w-14 h-14 text-amber-800/10" />
          <img :src="s.image" :alt="s.title" class="rounded-2xl shadow-xl w-full h-[320px] md:h-[400px] object-cover">
          <div class="absolute -bottom-4 -right-4 bg-amber-900 text-white text-xs tracking-wider px-3 py-1 rounded-full shadow/50 shadow-amber-900/30">
            STEP {{ i + 1 }}
          </div>
        </div>

        <!-- Text -->
        <div
          :class="i % 2 === 0 ? 'order-2' : 'order-1 md:order-2'"
          data-aos="fade-left"
          :data-aos-delay="100"
        >
          <div class="inline-flex items-center gap-2 text-amber-800 mb-3">
            <component :is="s.icon" class="w-5 h-5" />
            <span class="uppercase tracking-wider text-xs font-semibold">Process</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold mb-3">{{ s.title }}</h2>
          <p class="text-gray-700 leading-relaxed mb-4">{{ s.desc }}</p>
          <ul v-if="s.points?.length" class="space-y-2 text-gray-700">
            <li v-for="(p, pi) in s.points" :key="pi" class="flex items-start gap-2">
              <svg class="w-5 h-5 mt-0.5 shrink-0 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12l4 4L19 7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- ===== CTA ===== -->
    <div
      class="relative h-[50vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style="background-image:url('https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop');"
    >
      <div class="absolute inset-0 bg-black/60"></div>
      <!-- subtle grain -->
      <svg class="absolute inset-0 w-full h-full opacity-[0.06]" viewBox="0 0 800 400" aria-hidden="true">
        <use href="#grain-def" />
      </svg>
      <div class="relative z-10 max-w-xl px-4">
        <h3 class="text-3xl font-bold mb-3" data-aos="fade-up">Ready to Start Your Project?</h3>
        <p class="mb-6 opacity-90" data-aos="fade-up" data-aos-delay="120">
          Send us your brief, drawings, or references. We’ll respond with options, timeline, and a quotation.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center" data-aos="fade-up" data-aos-delay="180">
          <a href="https://wa.me/6281234567890" target="_blank"
             class="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
            Contact via WhatsApp
          </a>
          <NuxtLinkLocale to="/contact"
             class="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full backdrop-blur transition">
            Send an Inquiry
          </NuxtLinkLocale>
        </div>
      </div>
    </div>

    <!-- Hidden SVG defs for reuse -->
    <svg width="0" height="0" class="absolute">
      <defs>
        <pattern id="grain-def" width="120" height="60" patternUnits="userSpaceOnUse">
          <path d="M0,30 C40,0 80,60 120,30" fill="none" stroke="white" stroke-width="1"/>
          <path d="M0,10 C30,-10 90,40 120,15" fill="none" stroke="white" stroke-width="0.7" opacity="0.6"/>
          <path d="M0,50 C20,70 100,20 120,45" fill="none" stroke="white" stroke-width="0.7" opacity="0.6"/>
        </pattern>
      </defs>
    </svg>
  </section>
</template>

<script setup>
// Ikon sederhana pakai inline Vue components biar tanpa dependency tambahan
const IconSketch = {
  render() { return h('svg', { class: 'w-5 h-5', viewBox:'0 0 24 24', fill:'none', stroke:'currentColor' },
    [h('path',{d:'M3 7l9-4 9 4-9 4-9-4z M3 7v6l9 4 9-4V7', strokeWidth:2, strokeLinecap:'round', strokeLinejoin:'round'})]) }
}
const IconTree = {
  render() { return h('svg',{class:'w-5 h-5',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor'},
    [h('path',{d:'M12 3l4 6h-3l3 5h-3l2 4H9l2-4H8l3-5H8l4-6z',strokeWidth:1.5}),
     h('path',{d:'M12 21v-3',strokeWidth:2, strokeLinecap:'round'})]) }
}
const IconHammer = {
  render(){return h('svg',{class:'w-5 h-5',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor'},
    [h('path',{d:'M2 22l8-8',strokeWidth:2,strokeLinecap:'round'}),
     h('path',{d:'M15 3l6 6-3 3-6-6z',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'})])}
}
const IconBrush = {
  render(){return h('svg',{class:'w-5 h-5',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor'},
    [h('path',{d:'M20 4l-6 6',strokeWidth:2,strokeLinecap:'round'}),
     h('path',{d:'M3 21c2 0 3-1 4-3s2-3 4-3 4 2 4 4',strokeWidth:2,strokeLinecap:'round'})])}
}
const IconPackage = {
  render(){return h('svg',{class:'w-5 h-5',viewBox:'0 0 24 24',fill:'none',stroke:'currentColor'},
    [h('path',{d:'M21 16V8l-9-5-9 5v8l9 5 9-5z',strokeWidth:2,strokeLinecap:'round',strokeLinejoin:'round'}),
     h('path',{d:'M3.3 7.3L12 12l8.7-4.7',strokeWidth:2,strokeLinecap:'round'})])}
}

const steps = [
  {
    title: "Consultation & Design",
    desc: "We begin with your brief—use cases, dimensions, finishes, and budget. Our team refines ideas into practical designs while preserving the Jepara character.",
    points: [
      "Share mood boards, sketches, or references",
      "Custom sizes & branding for cafés/schools/resorts",
      "Technical drawings upon request"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    icon: IconSketch
  },
  {
    title: "Material Selection",
    desc: "We select the right wood for the job—teak for outdoor durability, mahogany for smooth finishing, coconut wood for unique texture (perfect for gazebos).",
    points: [
      "Kiln-dried lumber to minimize warping",
      "Sustainable & legally sourced wood",
      "Moisture level checked before production"
    ],
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1600&auto=format&fit=crop",
    icon: IconTree
  },
  {
    title: "Craftsmanship",
    desc: "Every piece is handcrafted by Jepara artisans—joinery, carving, and assembly handled with precision for long-term strength.",
    points: [
      "Traditional joinery + modern tools",
      "Experienced carving specialists",
      "Strict tolerance for assemblies"
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1600&auto=format&fit=crop",
    icon: IconHammer
  },
  {
    title: "Finishing & Quality Check",
    desc: "Finishes tailored to your climate & use—outdoor-grade coatings for gazebos, smooth finishing for café sets, and child-safe coatings for school furniture.",
    points: [
      "Color matching & surface smoothness",
      "Hardware & stability inspection",
      "Packaging quality verification"
    ],
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    icon: IconBrush
  },
  {
    title: "Packing & Shipping",
    desc: "Export-ready packing: foam wrap, corner guards, and wooden crating for long voyages. We coordinate LCL/FCL shipments with your forwarder.",
    points: [
      "Export documents prepared",
      "Clear labeling & packing list",
      "Worldwide delivery coordination"
    ],
    image: "https://images.unsplash.com/photo-1604147495798-57beb5d6af73?q=80&w=1600&auto=format&fit=crop",
    icon: IconPackage
  }
]
</script>

<script>
/* Small SVG components for wood ornaments */
export default {
  components: {
    WoodGrain: {
      props: { class: { type: String, default: '' } },
      template: `
        <svg :class="class" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <g stroke="currentColor" stroke-width="2" fill="none">
            <path d="M10,200 C80,80 320,80 390,200" />
            <path d="M20,230 C120,120 280,120 380,230" opacity="0.8"/>
            <path d="M40,270 C140,180 260,180 360,270" opacity="0.6"/>
            <path d="M60,305 C160,230 240,230 340,305" opacity="0.45"/>
            <circle cx="220" cy="140" r="20" opacity="0.25"/>
            <circle cx="235" cy="150" r="8" opacity="0.35"/>
          </g>
        </svg>
      `
    },
    WoodKnot: {
      props: { class: { type: String, default: '' } },
      template: `
        <svg :class="class" viewBox="0 0 64 64" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="32" cy="32" r="20" stroke-width="2" opacity="0.5"/>
          <circle cx="32" cy="32" r="12" stroke-width="2" opacity="0.6"/>
          <path d="M12 32c8-10 32-10 40 0" opacity="0.4"/>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
/* optional subtle divider */
</style>