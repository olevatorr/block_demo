<template>
    <section class="overflow-hidden pt-3 md:pt-10" ref="divRef">
        <div class="2xl:container md:px-16 mx-auto">
            <div class="grid grid-cols-12 grid-flow-row gap-y-10">
                <div class="col-span-12 h-28 md:h-auto relative">
                    <h2 class="text-skin text-center text-MDIS1 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:left-0 md:text-DDIS1" ref="title">Contact</h2>
                </div>
                <p class="font-RD text-red text-center text-DH2 col-span-12 md:mb-14 md:mt-6" ref="telNum">+339 566 789</p>
                <div class="hidden md:block size-[264px] rounded-full mix-blend-difference bg-white col-start-3 row-start-3 row-span-1 -translate-y-[40%]" ref="blendDiv"></div>
                <img src="../../public/contact.png" alt="" class="col-start-1 col-span-12 row-start-3 row-span-1 aspect-[8/10] object-cover md:aspect-auto" ref="banner">
                <p class="text-skin text-MDIS1 ms-4 -mb-7 row-start-3 col-start-4 md:-mb-14 md:ms-0 md:text-DDIS1 self-end row-span-1 md:col-start-9 md:col-span-4" ref="call">CALL</p>
                <p class="text-skin text-MDIS1 order-last -translate-x-8 -mb-7 md:order-none md:text-DDIS1 md:col-span-4 md:-mb-14 md:-translate-x-20" ref="me">ME</p>
                <p class="text-skin text-DB2 m-6 col-span-12 md:m-0 md:col-start-5 md:col-span-5 text-center" ref="text">Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa.</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = ref(null)
const telNum = ref(null)
const banner = ref(null)
const blendDiv = ref(null)
const text = ref(null)
const call = ref(null)
const me = ref(null)
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
    gsap.fromTo(telNum.value, {
      x: '100%',
      opacity: 0,
    },{
      x: '-20%',
      rotation: 40,
      opacity: 1,
      duration: 2,
      ease: 'power4.out'
    }),
    typeWriter(title.value, {
      trigger: divRef.value,
      start: 'top center'
    })
  ], 0)
  tl.to(telNum.value, {
      x: '0%',
      rotation: 0,
      duration: 2,
      ease: 'power1.in'
    }, 1)
    tl.from(banner.value, {
        opacity: 0,
        duration: 1,
        ease: 'power4.out"',
    }, 1)
    tl.from(blendDiv.value, {
        y: '10%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out"',
    }, 2)
    tl.from(me.value, {
        x: '-100%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out"',
    }, 2)
    tl.from(call.value, {
        y: '50%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out"',
    }, 2)
    tl.from(text.value, {
        y: '10%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out"',
    }, 3)

})
</script>