<template class="font-jakarta">
  <NavBar />
  <HeroHome />
  <div class="py-4 md:py-8">
    <div class="py-2 md:py-4"></div>
    <section class="px-6 container mx-auto">
      <div class="text-3xl md:text-5xl font-bold font-jakarta">
        Crafting Exceptional <span class="text-blue-600">Furniture Experience</span>
      </div>
      <div class="py-4"></div>
      <div>
        After many years, Sabilajati has been at the forefront of contemporary furniture design, creating pieces that blend functionality with aesthetic appeal. Our mission is to transform spaces into
        comfortable, stylish environments that inspire productivity and relaxation.
      </div>
      <div class="py-3"></div>
      <div>
        <NuxtLinkLocale class="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 rounded-full text-white hover:from-blue-800 hover:to-blue-500 transition hover:shadow-lg hover:shadow-blue-400">
          See Product Catalog
        </NuxtLinkLocale>
      </div>
      <div class="py-3"></div>
      <div class="py-4">
        <SliderHome/>
      </div>
      <div class="py-4"></div>
      <div class="grid grid-cols-2 gap-3 md:gap-4">
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md">
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
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md">
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
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md">
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
        <div class="py-6 px-4 bg-blue-50/50 rounded-2xl hover:scale-[1.03] transition hover:shadow-md">
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
    <section class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="md:col-span-2 bg-blue-300/50 rounded-2xl bg-cover" style="background-image:
        url('https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750855824/living_room_uxhsfe.jpg')">
          <div class=""></div>
        </div>
        <div class="md:col-span-1 bg-black rounded-2xl py-6 px-4 text-white hover:-translate-y-2 transition duration-300 ease-in-out">
          <div class="font-bold text-2xl">Our Vision</div>
          <div class="py-2"></div>
          <div>
            Delivering the best service, becoming the leading furniture company of choice, and being a reliable partner in providing solutions for clients' furniture needs.
          </div>
        </div>
        <div class="md:col-span-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl py-6 px-4 text-white hover:-translate-y-2 transition duration-300 ease-in-out">
          <div class="font-bold text-2xl">Our Mission</div>
          <div class="py-2"></div>
          <div>
            Deliver innovative project execution, prioritize the quality of every product we create, and uphold responsibility, transparency, and reliability in all aspects of our work.
          </div>
        </div>
        <div class="md:col-span-2 bg-blue-300/50 rounded-2xl py-6 px-4 bg-cover h-auto" style="background-image: url('https://res.cloudinary.com/dwn4gzaqp/image/upload/v1750855824/living_room_uxhsfe.jpg')">
          
        </div>
      </div>
    </section>
    <div class="py-6"></div>
    <section class="bg-gray-100">
      <div class="container mx-auto py-6 px-4">
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl">
          Our <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Collections</span>
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md">
          Explore our diverse range of furniture collections designed for different spaces and needs.
        </div>
        <div class="py-4 md:py-8">
          <CollectionsGrid />
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-6">
      <div>
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl">
          New <span class="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Products</span>
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md">
          Discover our new popular furniture pieces, designed with quality and style in mind.
        </div>
        <div class="py-4 md:py-8">
          <ProductGrid />
        </div>
      </div>
    </section>
    <section class="container mx-auto px-4 py-6">
      <div>
        <div class="py-4"></div>
        <div class="text-center font-bold text-3xl md:text-4xl">
          Testimonials
        </div>
        <div class="py-2 md:py-4"></div>
        <div class="text-center text-md">
          Hear from businesses and individuals who have transformed their spaces with our furniture.
        </div>
        <div class="py-4 md:py-8">
          <Testimoni />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  
</script>