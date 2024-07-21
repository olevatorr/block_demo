<template>
    <section class="w-full" ref="service">
        <div class="2xl:container mx-auto flex-nowrap grid grid-cols-[70%_70%] md:grid-cols-2 overflow-x-auto">
            <div class="text-green flex flex-col gap-4 md:gap-6 border-r px-10 py-28">
                <svg width="156" height="210" viewBox="0 0 156 210" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center flex-grow" @mouseenter="mouseAnimation">
                    <path ref="handPath" d="M110.988 5C102.987 5 95.9865 12 95.9865 20C95.9865 32 95.9865 48 95.9865 60V85C95.9865 85 95.9865 71 95.9865 60C95.9865 37 65.9831 37 65.9831 60V86C65.9831 86 65.9831 78 65.9831 69C65.9831 46 35.9796 46 35.9796 69C35.9796 71 35.9796 86 35.9796 86C35.9796 86 35.9796 84 35.9796 80C35.9796 57 5.9762 57 5.9762 80C5.9762 96 5.9762 158 5.9762 165V166C9.97666 179 21.978 205 45.9808 205C62.9827 205 80.9848 205 91.9861 205C97.9868 205 102.987 203 106.988 199L144.992 158C150.993 150 151.993 140 145.992 132L125.99 105V20C125.99 12 118.989 5 110.988 5Z" stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <h2 class="text-MH1 md:text-DH1">
                    Cinquième Élément
                </h2>
                <p class="text-MDB2 md:text-DB2 md:flex-grow">
                    Its plot occurs out of chronological order.
                </p>
                <div>
                    <button
                        class="text-MDB2 md:text-DB2 rounded-[100px] bg-skin px-6 py-3 flex items-center hover:bg-green hover:text-skin duration-200">
                        LEARN MORE
                    </button>
                </div>
            </div>
            <div class="text-green flex flex-col gap-6 px-10 py-28">
                <h2 class="text-MH1 md:text-DH1">
                    Cinquième Élément
                </h2>
                <p class="text-MDB2 md:text-DB2">
                    Tarantino wrote Pulp Fiction in 1992 and 1993, incorporating scenes that Avary originally wrote for True Romance (1993). Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa.
                </p>
                <div>
                    <button
                        class="text-MDB2 md:text-DB2 rounded-[100px] bg-skin px-6 py-3 flex items-center hover:bg-green hover:text-skin duration-200">
                        LEARN MORE
                    </button>
                </div>
                <svg width="210" height="211" viewBox="0 0 210 211" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center" @mouseenter="animateFacePath">
                    <path ref="leftEye" d="M149.444 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path ref="rightEye" d="M60.5555 61.0555V83.2778" stroke="#288E3E" stroke-width="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path ref="norse"
                        d="M105 61.0555V116.611L71.6666 149.944C71.6666 149.944 82.7777 161.056 105 161.056C127.222 161.056 138.333 149.944 138.333 149.944"
                        stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path ref="left"
                        d="M49.4444 205.5H27.2222C15 205.5 5 195.5 5 183.278V27.7222C5 15.5 15 5.5 27.2222 5.5H49.4444"
                        stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path ref="right"
                        d="M160.556 205.5H182.778C195 205.5 205 195.5 205 183.278V27.7222C205 15.5 195 5.5 182.778 5.5H160.556"
                        stroke="#288E3E" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const service = ref(null)
const handPath = ref(null)

//face icon
const left = ref(null)
const right = ref(null)
const norse = ref(null)
const leftEye = ref(null)
const rightEye = ref(null)

gsap.registerPlugin(ScrollTrigger)

const mouseAnimation = () => {
    animateHandPath()
}

const animateHandPath = () => {
    const length = handPath.value.getTotalLength()

    gsap.set(handPath.value, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1
    })

    gsap.to(handPath.value, {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power4.inOut',
    })
}

const animateFacePath = () => {

    gsap.set([left.value, right.value, norse.value, leftEye.value, rightEye.value], {
        strokeDasharray: (_, target) => target.getTotalLength(),
        strokeDashoffset: (_, target) => target.getTotalLength(),
        opacity: 1
    });

    const tl = gsap.timeline();

    tl.to([left.value, right.value], {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power4.inOut',
    },0)
    .to([leftEye.value, rightEye.value], {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power4.inOut',
    },0)
    .to(norse.value, {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power4.inOut',
    },0);
};

onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: service.value,
            start: 'top center',
        },
    });

    tl
      .from(service.value, { y: '10%', opacity: 0, duration: 1 }, 0)
      .add(animateHandPath, 0)
      .add(animateFacePath, 0)
})
</script>