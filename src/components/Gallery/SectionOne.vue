<template>
  <div class="grid grid-cols-12 pt-3 gap-y-8" ref="divRef">
    <h3 class="text-DH3 text-skin col-span-12 md:col-span-7" ref="subtitle">
      SUMMER<br />COLLECTION
    </h3>
    <h3
      class="text-DH3 text-skin col-span-12 md:col-span-2 md:text-end md:text-nowrap"
      ref="sectionNum"
    >
      SECTION 01
    </h3>
    <div class="col-span-12 md:col-start-4 md:col-span-6" ref="sectionImg1">
      <img
        src="../../../public/item1.png"
        alt=""
        class="w-full aspect-[8/10] object-cover md:aspect-auto"
      />
      <p class="text-DB1 text-green my-6">1997 Christopher Fairbank</p>
    </div>
    <div class="col-span-12 md:col-span-3 md:self-end md:ps-6" ref="sectionImg2">
      <img
        src="../../../public/item2.png"
        alt=""
        class="w-full aspect-[8/10] object-cover md:aspect-auto"
      />
      <p class="text-DB1 text-green my-6">1997 Christopher Fairbank</p>
    </div>
    <div class="order-first h-32 md:order-last col-span-12 relative md:h-auto">
      <h2
        class="text-MDIS1 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-0 md:text-DDIS1 text-red text-center text-nowrap min-w-full"
        ref="title"
      >
        Gallery
      </h2>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = ref(null)
const subtitle = ref(null)
const sectionNum = ref(null)
const sectionImg1 = ref(null)
const sectionImg2 = ref(null)
const divRef = ref(null)

gsap.registerPlugin(ScrollTrigger)

const typeWriter = (element, scrollTrigger) => {
  const text = element.innerHTML
  element.innerHTML = ''
  let i = 0

  return gsap.to(element, {
    duration: text.length * 0.2, // 如果字更長可以讓時間成正比
    onUpdate: function() {
      const progress = Math.floor(this.progress() * text.length) // progress()回傳0~1的數值代表動畫百分比
      if (progress > i) { //
        element.innerHTML = text.slice(0, progress)
        i = progress
      }
    },
    scrollTrigger: scrollTrigger
  })
}

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: divRef.value,
      start: 'top center'
    }
  })

  tl.add([
    gsap.from([subtitle.value, sectionNum.value], {
      x: '100%',
      opacity: 0,
      duration: 3,
      ease: 'power3.out'
    }),
    typeWriter(title.value, {
      trigger: divRef.value,
      start: 'top bottom'
    })
  ], 0)

  tl.from(sectionImg1.value, {
    x: '-100%',
    y: '50%',
    opacity: 0,
    duration: 2,
    ease: 'power3.out'
  }, 1)

  tl.from(sectionImg2.value, {
    x: '100%',
    y: '50%',
    opacity: 0,
    duration: 3,
    ease: 'power3.out'
  }, 1)
})
</script>