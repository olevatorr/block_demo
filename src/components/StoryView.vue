<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const desktopMarqueeContainer = ref(null)
const desktopMarqueeContent = ref(null)
const mobileMarqueeContainer1 = ref(null)
const mobileMarqueeContent1 = ref(null)
const mobileMarqueeContainer2 = ref(null)
const mobileMarqueeContent2 = ref(null)
const desktopStoryContent = ref(null)
const mobileStoryContent = ref(null)
const desktopStoryTitle = ref(null)
const mobileStoryTitle = ref(null)
const sectionRef = ref(null)

const setupDesktopMarquee = () => {
  const content = desktopMarqueeContent.value
  const contentWidth = content.offsetWidth
  content.innerHTML += content.innerHTML

  gsap.to(content, {
    x: -contentWidth,
    duration: 20,
    ease: 'none',
    repeat: -1,
  })
}

const setupMobileMarquee = (content) => {
  const contentWidth = content.offsetWidth / 2
  gsap.to(content, {
    x: -contentWidth,
    duration: 10,
    ease: 'none',
    repeat: -1,
  })
}

const setupMarquees = () => {
  if (window.innerWidth >= 768) {
    setupDesktopMarquee()
  } else {
    setupMobileMarquee(mobileMarqueeContent1.value)
    setupMobileMarquee(mobileMarqueeContent2.value)
  }
}

onMounted(() => {
  setupMarquees()
  window.addEventListener('resize', setupMarquees)
  gsap.from([desktopStoryContent.value, desktopStoryTitle.value], {
    y: '100%',
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top center',
    }
  })
  gsap.from([mobileStoryContent.value, mobileStoryTitle.value], {
    y: '100%',
    duration: 2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top center',
    }
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', setupMarquees)
})
</script>
<template>
  <section class="w-full bg-brown md:py-28 border-t border-green relative overflow-hidden h-auto md:h-auto" ref="sectionRef">
    <div class="2xl:container mx-auto">
      <!-- 桌面版內容和跑馬燈 -->
      <div class="hidden md:block">
        <div class="flex flex-col items-center gap-6">
          <h2 class="text-DH2 font-RD text-green" ref="desktopStoryTitle">Story</h2>
          <p class="text-green max-w-[450px] text-center" ref="desktopStoryContent">
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa. 
          </p>
        </div>
        <div class="absolute top-1/2 -translate-y-1/2 w-full" ref="desktopMarqueeContainer">
          <div class="flex items-center gap-72" ref="desktopMarqueeContent">
            <p class="text-DDIS1 text-green whitespace-nowrap">Story</p>
            <img src="../../public/unicorn.png" alt="" class="h-full animate-[spin_5s_linear_infinite]">
            <p class="text-DDIS1 text-green whitespace-nowrap">Story</p>
            <img src="../../public/unicorn.png" alt="" class="h-full animate-[spin_8s_linear_infinite]">
          </div>
        </div>
      </div>
      <!-- 手機版跑馬燈和內容 -->
      <div class="md:hidden">
        <div class="overflow-hidden py-4 -mt-16" ref="mobileMarqueeContainer1">
          <div class="flex whitespace-nowrap" ref="mobileMarqueeContent1">
            <p class="text-MDIS1 text-green px-4">Story</p>
            <p class="text-MDIS1 text-green px-4">Story</p>
          </div>
        </div>
        <div class="flex justify-center">
          <img src="../../public/unicorn.png" alt="" class="h-full animate-[spin_5s_linear_infinite]">
        </div>
        <div class="flex flex-col items-center gap-6 mt-8">
          <h2 class="text-DH2 font-RD text-green" ref="mobileStoryTitle">Story</h2>
          <p class="text-green max-w-[450px] text-center px-6" ref="mobileStoryContent">
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa. 
          </p>
        </div>
        <div class="overflow-hidden py-4 -mb-16" ref="mobileMarqueeContainer2">
          <div class="flex whitespace-nowrap" ref="mobileMarqueeContent2">
            <p class="text-MDIS1 text-green px-4">Story</p>
            <p class="text-MDIS1 text-green px-4">Story</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>