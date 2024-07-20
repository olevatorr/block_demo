<template>
    <section class="w-full bg-brown py-28 border-t border-green relative overflow-hidden">
      <div class="2xl:container mx-auto">
        <div class="flex flex-col items-center gap-6 mt-96 md:mt-0">
          <h2 class="text-DH2 font-RD text-green">Story</h2>
          <p class="text-green max-w-[450px] text-center">
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi nostrud dolore. Et labore minim laboris esse amet eu eu exercitation ea esse velit tempor culpa. 
          </p>
        </div>
      </div>
      <div class="absolute -top-16 md:top-1/2 -translate-y-1/2 w-full" ref="marqueeContainer">
        <div class="flex items-center gap-6 md:gap-72 flex-col md:flex-row" ref="marqueeContent">
          <p class="text-MDIS1 md:text-DDIS1 text-green">Story</p>
          <img src="../../public/unicorn.png" alt="" class="h-full animate-[spin_5s_linear_infinite]">
          <p class="text-MDIS1 md:text-DDIS1 text-green mt-60 md:mt-0">Story</p>
          <img src="../../public/unicorn.png" alt="" class="h-full md:animate-[spin_8s_linear_infinite]">
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  import { gsap } from 'gsap';
  
  const marqueeContainer = ref(null);
  const marqueeContent = ref(null);
  
  const setupMarquee = () => {
    const content = marqueeContent.value;
    const contentWidth = content.offsetWidth;
    content.innerHTML += content.innerHTML;
  
    gsap.to(content, {
      x: -contentWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

  };
  
  onMounted(() => {
    setupMarquee();
    window.addEventListener('resize', setupMarquee);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', setupMarquee);
  });
  </script>