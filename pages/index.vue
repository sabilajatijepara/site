<template class="font-jakarta">
  <div class="flex container mx-auto max-w-4xl">
    <NavBar />
  </div>
  <div class="">
    <HeroHome />
  </div>
  <div class="py-4 md:py-8 max-w-4xl mx-auto">
    <div class="py-2 md:py-4"></div>
    <section class="px-6 container mx-auto max-w-4xl">
      <div class="text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta" data-aos="fade-up">
        Crafting Exceptional <span class="text-blue-600">Furniture Experience</span>
      </div>
      <div class="py-4"></div>
      <div class="lg:text-xl" data-aos="fade-up">
        After many years, Sabilajati has been at the forefront of contemporary furniture design, creating pieces that blend functionality with aesthetic appeal. Our mission is to transform spaces into
        comfortable, stylish environments that inspire productivity and relaxation.
      </div>
      <div class="py-3"></div>
      <div data-aos="fade-up">
        <NuxtLinkLocale class="text-base lg:text-xl bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 lg:px-6 lg:py-4 rounded-full text-white hover:from-blue-800 hover:to-blue-500 transition hover:shadow-lg hover:shadow-blue-400">
          See Product Catalog
        </NuxtLinkLocale>
      </div>
      <div class="py-3"></div>
      <div class="py-4" data-aos="fade-up">
        <SliderHome/>
      </div>
      <div class="py-4"></div>
      <div class="grid grid-cols-2 gap-3 md:gap-4">
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md" data-aos="fade-up">
          <div class="bg-blue-100 rounded-full h-min w-max px-3 py-2 text-blue-600">
            <Icon name="mingcute:flash-fill"/>
          </div>
          <div class="py-2"></div>
          <div>
            <p class="text-xl font-bold">Innovative Design</p>
            <div class="py-2"></div>
            <p>
              Pushing boundaries with contemporary aesthetics and functionality
            </p>
          </div>
        </div>
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md" data-aos="fade-up">
          <div class="bg-blue-100 rounded-full h-min w-max px-3 py-2 text-blue-600">
            <Icon name="mingcute:check-circle-fill"/>
          </div>
          <div class="py-2"></div>
          <div>
            <p class="text-xl font-bold">Quality Craftmanship</p>
            <div class="py-2"></div>
            <p>
              Meticulous attention to detail and premium materials.
            </p>
          </div>
        </div>
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md" data-aos="fade-up">
          <div class="bg-blue-100 rounded-full h-min w-max px-3 py-2 text-blue-600">
            <Icon name="mingcute:world-2-line"/>
          </div>
          <div class="py-2"></div>
          <div>
            <p class="text-xl font-bold">Sustanaibility</p>
            <div class="py-2"></div>
            <p>
              Eco-friendly materials and responsible manufacturing practices.
            </p>
          </div>
        </div>
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md" data-aos="fade-up">
          <div class="bg-blue-100 rounded-full h-min w-max px-3 py-2 text-blue-600">
            <Icon name="mingcute:group-3-fill"/>
          </div>
          <div class="py-2"></div>
          <div>
            <p class="text-xl font-bold">Customer Focus</p>
            <div class="py-2"></div>
            <p>
              Dedicated to exceeding expectations with personalized service.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="py-4"></div>
    <section class=" ">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="md:col-span-2 bg-blue-300/50 rounded-2xl bg-cover" style="background-image:
          url('https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750855824/living_room_uxhsfe.jpg')" data-aos="fade-up">
            <div class=""></div>
          </div>
          <div class="md:col-span-1 bg-black rounded-2xl py-6 px-4 text-white hover:-translate-y-2 transition duration-300 ease-in-out" data-aos="fade-up">
            <div class="font-bold text-2xl">Our Vision</div>
            <div class="py-2"></div>
            <div>
              Delivering the best service, becoming the leading furniture company of choice, and being a reliable partner in providing solutions for clients' furniture needs.
            </div>
          </div>
          <div class="md:col-span-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl py-6 px-4 text-white hover:-translate-y-2 transition duration-300 ease-in-out" data-aos="fade-up">
            <div class="font-bold text-2xl">Our Mission</div>
            <div class="py-2"></div>
            <div>
              Deliver innovative project execution, prioritize the quality of every product we create, and uphold responsibility, transparency, and reliability in all aspects of our work.
            </div>
          </div>
          <div class="md:col-span-2 bg-blue-300/50 rounded-2xl py-6 px-4 bg-cover h-auto" style="background-image: url('https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750855824/living_room_uxhsfe.jpg')" data-aos="fade-up">
            
          </div>
        </div>
      </div>
    </section>
    <div class="py-6"></div>
    <section class="bg-gray-100 rounded-xl">
      <div class="container mx-auto py-6 px-4">
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl" data-aos="fade-up">
          Our <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Collections</span>
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md" data-aos="fade-up">
          Explore our diverse range of furniture collections designed for different spaces and needs.
        </div>
        <div class="py-4 md:py-8" data-aos="fade-up">
          <CollectionsGrid />
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-6">
      <div>
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl" data-aos="fade-up">
          New <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Products</span>
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md" data-aos="fade-up">
          Discover our new popular furniture pieces, designed with quality and style in mind.
        </div>
        <div class="py-4 md:py-8" data-aos="fade-up">
          <ProductGrid />
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-6">
      <div>
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl" data-aos="fade-up">
          Testimonials
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md" data-aos="fade-up">
          Hear from businesses and individuals who have transformed their spaces with our furniture.
        </div>
        <div class="py-4 md:py-8" data-aos="fade-up">
          <Testimoni />
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-6">
      <div class="rounded-3xl overflow-hidden border-2">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6" data-aos="fade-up">
          <div class="bg-yellow-100 flex items-center justify-center">
            <div class="text-4xl md:text-3xl lg:text-8xl">
              <Icon name="line-md:email-twotone"></Icon>
            </div>
          </div>
          <div class="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
            <div class="text-2xl md:text-3xl lg:text-4xl font-bold">
              Join our newsletter
            </div>
            <div class="py-2 text-base">get weekly access to our best deals, tips and tricks</div>
            <div class="inline-flex space-x-2">
              <div>
                <input
                  type="email"
                  v-model="email"
                  class="rounded-2xl px-4 py-2 bg-gray-200 focus:outline-black placeholder-black/40 border border-black"
                  placeholder="Your email address..."
                />
                <p v-if="error" class="text-red-600 text-sm mt-2 font-bold">{{ error }}</p>
              </div>
              <div class="py-2"></div>
              <div>
                <button
                  @click="submitEmail"
                  :disabled="!email"
                  class="bg-amber-600 px-3 py-2 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const error = ref('')

const isValidEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(value)
}

const submitEmail = () => {
  if (!isValidEmail(email.value)) {
    error.value = 'Email tidak valid'
    return
  }

  error.value = ''
  // Kirim email ke backend di sini, misal dengan fetch atau axios
  alert(`Email "${email.value}" berhasil dikirim!`)
}
</script>