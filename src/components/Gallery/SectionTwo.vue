<template>
  <div class="grid grid-cols-12 grid-flow-row gap-y-8" ref="divRef">
    <h3
      class="text-DH3 text-skin col-span-12 md:col-start-8 md:col-span-2 md:row-start-2 md:text-end md:mb-4"
      ref="sectionNum"
    >
      SECTION 02
    </h3>
    <div class="col-span-12 md:col-span-4 md:row-span-6" ref="sectionImg1">
      <img
        src="../../../public/item3.png"
        alt=""
        class="w-full aspect-[8/10] object-cover md:aspect-auto"
      />
      <p class="text-DB1 text-green my-6">1997 Christopher Fairbank</p>
    </div>
    <div
      class="col-span-12 md:col-start-7 md:col-span-3 md:row-start-3 md:row-span-4 md:self-end md:pe-6"
      ref="sectionImg2"
    >
      <img
        src="../../../public/item4.png"
        alt=""
        class="w-full aspect-[8/10] object-cover md:aspect-auto"
      />
      <p class="text-DB1 text-green my-6">1997 Christopher Fairbank</p>
    </div>
    <div
      class="col-span-12 md:col-start-10 md:col-span-3 md:row-start-3 md:row-span-6 md:self-end"
      ref="sectionImg3"
    >
      <img
        src="../../../public/item5.png"
        alt=""
        class="w-full aspect-[8/10] object-cover md:aspect-auto"
      />
      <p class="text-DB1 text-green my-6">1997 Christopher Fairbank</p>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const sectionNum = ref(null)
const sectionImg1 = ref(null)
const sectionImg2 = ref(null)
const sectionImg3 = ref(null)
const divRef = ref(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: divRef.value,
      start: 'top center'
    }
  })

  tl.from(sectionNum.value, {
    x: '100%',
    opacity: 0,
    duration: 3,
    ease: 'power3.out'
  }),
    tl.from(
      sectionImg1.value,
      {
        x: '-100%',
        y: '50%',
        opacity: 0,
        duration: 2,
        ease: 'power3.out'
      },
      1
    )

  tl.from(
    sectionImg2.value,
    {
      y: '100%',
      opacity: 0,
      duration: 3,
      ease: 'power3.out'
    },
    1
  )
  tl.from(
    sectionImg3.value,
    {
      x: '100%',
      y: '50%',
      opacity: 0,
      duration: 3,
      ease: 'power3.out'
    },
    1
  )
})
</script>
