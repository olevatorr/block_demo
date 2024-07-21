<template>
    <section class="py-14 md:py-28 box-border overflow-hidden">
        <div class="2xl:container mx-auto py-8 px-6 relative">
            <div class="text-red md:text-DDISO text-MDISO grid grid-cols-1 md:grid-cols-2 relative overflow-visible">
                <p class="text-nowrap md:translate-x-[-65px]">1976--</p>
                <p class="relative">Mazda</p>
                <p class="absolute bottom-0 translate-y-full md:translate-x-[-65px] md:translate-y-0 md:relative z-20">RX7s</p>
            </div>
            <div class="absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-[65%]">
                <div class="relative z-10 aspect-square md:aspect-[10/7] md:w-[720px] -translate-x-10 -translate-y-1 overflow-hidden">
                <img :src="currentImage1" alt="" class="object-cover h-full w-full">
                </div>
                <div class="absolute -top-1/4 -right-6 md:top-[-150px] md:right-[-350px] w-40 md:w-[500px] md:aspect-[10/7] -z-10 overflow-hidden">
                <img :src="currentImage2" alt="" class="object-cover h-full w-full">
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 flex-wrap-reverse md:mt-36 mt-[100%]">
                <div class="md:px-28 py-6 flex flex-col">
                    <!-- mobile -->
                    <p class="text-red text-MDISO text-right md:hidden">
                    Movie
                    </p>
                    <p class="text-white text-DB2 mb-10 flex">
                        Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proidtation ea esse velit tempor culpa. 
                    </p>
                    <div class="flex  md:items-start md:gap-x-6 self-end items-center gap-x-3">
                        <div class="size-DB border border-white rounded-full relative overflow-hidden scale-75 md:scale-100">
                            <svg class="size-DB activer:bg-green hover:bg-green duration-300 cursor-pointer">
                                <line x1="20" y1="35" x2="43" y2="28" class="stroke-1 stroke-white"/>
                                <line x1="43" y1="28" x2="35" y2="23" class="stroke-1 stroke-white"/>
                            </svg>
                        </div>
                        <!-- destop -->
                        <div class=" text-DH1 text-white hidden md:block">
                            View All
                        </div>
                        <!-- mobile -->
                        <div class="text-DB2 text-white md:hidden">
                            View Detail
                        </div>
                    </div>
                </div>
                <!-- destop -->
                <p class="text-red md:text-DDISO text-MDISO hidden md:block">
                    Movie
                </p>
            </div>
        </div> 
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const image1Src = '../../public/banner1.png';
const image2Src = '../../public/banner2.png';

const currentImage1 = ref(image1Src);
const currentImage2 = ref(image2Src);

const swapImages = () => {
  [currentImage1.value, currentImage2.value] = [currentImage2.value, currentImage1.value];
};

onMounted(() => {
  setInterval(swapImages, 5000);
});
</script>