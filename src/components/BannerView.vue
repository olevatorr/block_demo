<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ThreeView from '@/components/ThreeView.vue'

gsap.registerPlugin(ScrollTrigger)

const image1Src = new URL('/banner1.png', import.meta.url).href
const image2Src = new URL('/banner2.png', import.meta.url).href

const image1Ref = ref(null)
const image2Ref = ref(null)

const currentImage1 = ref(image1Src)
const currentImage2 = ref(image2Src)

const sectionRef = ref(null)
const text1 = ref(null)
const text2 = ref(null)
const text3 = ref(null)
const image1 = ref(null)
const image2 = ref(null)
const content = ref(null)
const mobileMovie = ref(null)
const desktopMovie = ref(null)
const description = ref(null)

const swapImages = () => {
  // 創建淡出動畫
  gsap.to([image1Ref.value, image2Ref.value], {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      ;[currentImage1.value, currentImage2.value] = [currentImage2.value, currentImage1.value]
      gsap.to(image1Ref.value, {
        opacity: 1,
        duration: 1
      })
      gsap.to(image2Ref.value, {
        opacity: 1,
        duration: 1,
        delay: 0.5
      })
    }
  })
}

onMounted(() => {
  setInterval(swapImages, 5000)

  // 文字打字機效果
  const typeWriter = (element) => {
    const text = element.innerHTML
    element.innerHTML = ''
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)
  }

  // 應用打字機效果
  ;[text1.value, text2.value, text3.value, mobileMovie.value, desktopMovie.value].forEach(
    typeWriter
  )

  // 圖片動畫
  gsap.from(image1.value, {
    x: '-100%',
    opacity: '0',
    duration: 3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top center'
    }
  })

  gsap.from(image2.value, {
    x: '100%',
    opacity: '0',
    duration: 3,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top center'
    }
  })

  // 內容從下往上滑動
  gsap.from(content.value, {
    y: '100%',
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: content.value,
      start: 'top bottom'
    }
  })

  // 描述文字動畫
  gsap.from(description.value, {
    y: '50%',
    opacity: 0,
    duration: 3,
    delay: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: content.value,
      start: 'top bottom'
    }
  })
})
</script>
<template>
  <section class="py-14 xl:py-28 overflow-hidden" ref="sectionRef">
    <div class="2xl:container mx-auto py-8 px-6 relative">
      <div class="grid grid-cols-12 grid-flow-row">
        <p
          ref="text1"
          class="text-red xl:text-DDISO text-MDISO text-nowrap xl:translate-x-[-60px] col-start-1 col-span-6 xl:col-span-6 xl:row-start-1 row-start-1"
        >
          1976--
        </p>
        <p
          ref="text2"
          class="text-red xl:text-DDISO text-MDISO relative col-start-1 col-span-12 xl:row-start-1 xl:col-start-7 xl:col-span-6 row-start-2 xl:z-10 xl:-ms-14"
        >
          Mazda
        </p>
        <p
          ref="text3"
          class="text-red xl:text-DDISO text-MDISO xl:translate-x-[-60px] col-start-1 col-span-12 xl:row-start-2 xl:col-start-1 xl:col-span-6 xl:translate-y-0 xl:relative z-30 row-start-3"
        >
          RX7s
        </p>
        <div
          ref="image1"
          class="row-start-3 col-start-1 col-span-12 xl:row-start-2 xl:col-start-4 xl:col-span-7 relative xl:-translate-y-72 xl:-mb-64 -translate-x-14 -translate-y-1 z-10 xl:z-20 xl:-translate-x-4"
        >
          <img
            :src="currentImage1"
            alt=""
            ref="image1Ref"
            class="object-cover w-full aspect-square xl:aspect-[10/7]"
          />
        </div>
        <div
          ref="image2"
          class="row-start-1 col-start-6 col-span-7 xl:col-start-9 xl:col-span-4 relative"
        >
          <img
            :src="currentImage2"
            alt=""
            ref="image2Ref"
            class="object-cover w-full aspect-[10/8] absolute xl:static translate-x-20 xl:translate-x-0 xl:-translate-y-8"
          />
        </div>
        <div
          ref="content"
          class="row-start-4 col-span-12 xl:row-start-3 xl:col-span-12 grid grid-cols-1 xl:grid-cols-2 flex-wrap-reverse xl:mt-0"
        >
          <div class="xl:px-28 py-6 flex flex-col">
            <p ref="mobileMovie" class="text-red text-MDISO text-right xl:hidden">Movie</p>
            <p ref="description" class="text-skin text-DB2 mb-10 flex">
              Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor
              commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa.
            </p>
            <div class="flex xl:items-start xl:gap-x-6 self-end items-center gap-x-3 relative">
              <div
                class="size-DB border border-skin rounded-full relative overflow-hidden scale-75 xl:scale-100"
              >
                <svg class="size-DB activer:bg-green hover:bg-green duration-300 cursor-pointer">
                  <line x1="20" y1="35" x2="43" y2="28" class="stroke-1 stroke-skin" />
                  <line x1="43" y1="28" x2="35" y2="23" class="stroke-1 stroke-skin" />
                </svg>
              </div>
              <div class="text-DH1 text-skin hidden xl:block">View All</div>
              <div class="text-DB2 text-skin xl:hidden">View Detail</div>
              <ThreeView />
            </div>
          </div>
          <p ref="desktopMovie" class="text-red xl:text-DDISO text-MDISO hidden xl:block">Movie</p>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <template> 修改之前
    <section class="py-14 xl:py-28 box-border overflow-hidden">
        <div class="2xl:container mx-auto py-8 px-6 relative">
            <div class="text-red xl:text-DDISO text-MDISO grid grid-cols-1 xl:grid-cols-2 relative overflow-visible">
                <p class="text-nowrap xl:translate-x-[-65px]">1976--</p>
                <p class="relative">Mazda</p>
                <p class="absolute bottom-0 translate-y-full xl:translate-x-[-65px] xl:translate-y-0 xl:relative z-20">RX7s</p>
            </div>
            <div class="absolute xl:top-1/2 xl:left-1/2 xl:-translate-x-1/2 xl:-translate-y-[65%]">
                <div class="relative z-10 aspect-square xl:aspect-[10/7] xl:w-[720px] -translate-x-10 -translate-y-1 overflow-hidden">
                <img :src="currentImage1" alt="" class="object-cover h-full w-full">
                </div>
                <div class="absolute -top-1/4 -right-6 xl:top-[-150px] xl:right-[-350px] w-40 xl:w-[500px] xl:aspect-[10/7] -z-10 overflow-hidden">
                <img :src="currentImage2" alt="" class="object-cover h-full w-full">
                </div>
            </div>
            <div class="grid grid-cols-1 xl:grid-cols-2 flex-wrap-reverse xl:mt-36 mt-[100%]">
                <div class="xl:px-28 py-6 flex flex-col">
                    <p class="text-red text-MDISO text-right xl:hidden">
                    Movie
                    </p>
                    <p class="text-skin text-DB2 mb-10 flex">
                        Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa. 
                    </p>
                    <div class="flex  xl:items-start xl:gap-x-6 self-end items-center gap-x-3">
                        <div class="size-DB border border-skin rounded-full relative overflow-hidden scale-75 xl:scale-100">
                            <svg class="size-DB activer:bg-green hover:bg-green duration-300 cursor-pointer">
                                <line x1="20" y1="35" x2="43" y2="28" class="stroke-1 stroke-skin"/>
                                <line x1="43" y1="28" x2="35" y2="23" class="stroke-1 stroke-skin"/>
                            </svg>
                        </div>
                        <div class=" text-DH1 text-skin hidden xl:block">
                            View All
                        </div>
                        <div class="text-DB2 text-skin xl:hidden">
                            View Detail
                        </div>
                    </div>
                </div>
                <p class="text-red xl:text-DDISO text-MDISO hidden xl:block">
                    Movie
                </p>
            </div>
        </div> 
    </section>
</template> -->
