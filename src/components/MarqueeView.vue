<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const textList = ref(['PURE', 'ORANGIC', 'TRUE ROMANCE','PURE', 'ORANGIC', 'TRUE ROMANCE','PURE', 'ORANGIC', 'TRUE ROMANCE'])
const Marquee = ref(null)
const MarqueeTop = ref(null)
const MarqueeBottom = ref(null)

gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: Marquee.value,
            start: 'top bottom',
            end: '+=300%',
            scrub: true
        }
    })
    const MarqueeWidth = MarqueeTop.value.clientWidth * 2
    tl
        .to(MarqueeTop.value, { x: -MarqueeWidth, duration: 1, }, 0)
        .fromTo(MarqueeBottom.value, {x: -MarqueeWidth}, { x: 10, duration: 1, }, 0)
})
</script>
<template>
    <section class="bg-skin text-MDIS2 md:text-DDIS2 py-2 text-yellow relative before:content-[''] before:w-full before:h-[1px] before:bg-yellow/30 before:absolute before:top-1/2 overflow-hidden" ref="Marquee">
        <div class="flex flex-nowrap gap-x-20 mt-5" ref="MarqueeTop">
            <div v-for="text in textList" :key="text" class="text-nowrap relative before:content-[''] before:w-[1px] before:h-5/6 before:bg-yellow before:absolute before:-left-10 before:font-thin before:rotate-12 before:-top-0.5 before:opacity-30">{{ text }}</div>
        </div>
        <div class="flex flex-nowrap gap-x-20 mt-10"  ref="MarqueeBottom">
            <div v-for="text in textList" :key="text" class="text-nowrap relative before:content-[''] before:w-[1px] before:h-5/6 before:bg-yellow before:absolute before:-left-10 before:font-thin before:rotate-12 before:-top-0.5 before:opacity-30">{{ text }}</div>
        </div>
    </section>
</template>
