<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleNav = () => {
    isOpen.value = !isOpen.value
}

</script>

<template>
    <header>
        <nav class="mx-auto md:px-12 px-6 md:pt-8 pt-4 2xl:container flex justify-between relative">
            <div class="text-white font-RD md:text-DLOGO text-MLOGO">ZOENW</div>
            <div class="flex flex-col items-end justify-between w-12 px-4 py-3.5 rounded-nav md:hidden"
                @click="toggleNav" :class="isOpen ? 'bg-green' : 'bg-skin'">
                <div class="w-full h-[2px] transition-all duration-300 ease-in-out"
                    :class="isOpen ? 'rotate-45 translate-y-[5px] translate-x-[5px] w-6 bg-white' : 'bg-black'"></div>
                <div class="w-full h-[2px] bg-black transition-all duration-300 ease-in-out"
                    :class="isOpen ? 'hidden' : ''"></div>
                <div class="w-3/5 h-[2px] transition-all duration-300 ease-in-out origin-left"
                    :class="isOpen ? 'rotate-[-45deg] translate-y-[3px] bg-white translate-x-[8px] w-6' : 'bg-black'"></div>
            </div>
            <div class="flex bg-skin items-center text-DNAV rounded-2xl md:static md:flex-row md:max-h-full md:overflow-visible md:rounded-nav md:px-10 md:py-4 absolute right-6 top-[110%] flex-col gap-5 md:gap-0 overflow-hidden"
                :class="isOpen ? 'max-h-[200px] px-10 py-4' : 'max-h-0'">
                <a href="" class="md:mr-10 hover:text-green duration-200">About</a>
                <a href="" class="md:mr-10 hover:text-green duration-200">Story</a>
                <a href="" class="md:mr-12 hover:text-green duration-200">Gallery</a>
                <a href=""
                    class="flex gap-x-2 items-start relative hover:text-green duration-200 before:content-[''] before:absolute before:left-[-35%] before:top-0 before:translate-y-[-20%] before:rotate-[20deg] before:w-[1px] before:bg-[#DBBB76] before:h-6 md:before:block before:hidden">
                    <img src="../../public/phone.svg" alt="" class="md:inline hidden" />Contact
                </a>
            </div>
        </nav>
    </header>
</template>
