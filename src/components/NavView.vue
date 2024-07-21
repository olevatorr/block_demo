<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleNav = () => {
    isOpen.value = !isOpen.value
}

const emit = defineEmits(['scrollTo'])

const handleNavClick = (section) => {
    emit('scrollTo', section)
    if (isOpen.value) {
        isOpen.value = false
    }
}
</script>
<template>
    <header class="w-full fixed top-0 left-0 z-50">
        <nav class="mx-auto md:px-12 px-6 md:pt-8 pt-4 2xl:container flex justify-between relative">
            <div class="text-white font-RD md:text-DLOGO text-MLOGO cursor-pointer" @click="handleNavClick('about')">ZOENW</div>
            <div class="flex flex-col items-end justify-between w-12 px-4 py-3.5 rounded-nav md:hidden"
                @click="toggleNav" :class="isOpen ? 'bg-green' : 'bg-skin'">
                <div class="h-[1px] transition-all duration-300 ease-in-out"
                    :class="isOpen ? 'rotate-45 translate-y-[6px] translate-x-[4px] bg-white w-[24px]' : 'bg-black w-full'"></div>
                <div class="w-full h-[1px] bg-black transition-all duration-300 ease-in-out"
                    :class="isOpen ? 'hidden' : ''"></div>
                <div class="h-[1px] transition-all duration-300 ease-in-out origin-left"
                    :class="isOpen ? 'rotate-[-45deg] translate-y-[3px] bg-white translate-x-[7px] w-[24px]' : 'bg-black w-3/5'">
                </div>
            </div>
            <div class="flex bg-skin items-center text-DNAV rounded-2xl md:static md:flex-row md:max-h-full md:overflow-visible md:rounded-nav md:px-10 md:py-4 absolute right-6 top-[110%] flex-col gap-5 md:gap-0 overflow-hidden"
                :class="isOpen ? 'max-h-[200px] px-10 py-4' : 'max-h-0'">
                <a href="#" @click.prevent="handleNavClick('about')" class="md:mr-10 hover:text-green duration-200">About</a>
                <a href="#" @click.prevent="handleNavClick('story')" class="md:mr-10 hover:text-green duration-200">Story</a>
                <a href="#" @click.prevent="handleNavClick('gallery')" class="md:mr-12 hover:text-green duration-200">Gallery</a>
                <a href="#" @click.prevent="handleNavClick('contact')"
                    class="group flex gap-x-2 items-start relative hover:text-green duration-200 before:content-[''] before:absolute before:left-[-35%] before:top-0 before:translate-y-[-20%] before:rotate-[20deg] before:w-[1px] before:bg-[#DBBB76] before:h-6 md:before:block before:hidden">
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.4048 8.45557L10.3736 7.42432C10.0662 7.11938 9.65123 6.94745 9.21824 6.94561C8.78525 6.94377 8.36887 7.11216 8.05888 7.41447C7.89347 7.58082 7.67526 7.68433 7.44179 7.70717C7.20831 7.73001 6.97417 7.67077 6.77966 7.53963C6.01194 7.02727 5.35241 6.36901 4.83857 5.60229C4.70974 5.40561 4.65264 5.17053 4.67689 4.93667C4.70114 4.7028 4.80525 4.48444 4.97169 4.31838C5.27127 4.0081 5.43749 3.59288 5.43477 3.16159C5.43205 2.7303 5.26062 2.31721 4.95716 2.01072L3.92591 0.979474C3.61717 0.67179 3.19906 0.499023 2.76318 0.499023C2.3273 0.499023 1.90919 0.67179 1.60044 0.979474L1.30372 1.27666C-0.243151 2.82354 -0.12737 6.07572 3.09107 9.29229C5.03169 11.2334 6.98497 12.0462 8.56888 12.0462C9.03513 12.0617 9.49981 11.9843 9.93583 11.8184C10.3719 11.6526 10.7705 11.4016 11.1086 11.0801L11.4058 10.7829C11.714 10.474 11.887 10.0554 11.8869 9.61905C11.8867 9.18267 11.7133 8.7642 11.4048 8.45557ZM10.742 10.1201L10.4448 10.4173C9.22607 11.636 6.53591 11.4134 3.75294 8.62994C0.969974 5.8465 0.746849 3.15447 1.9656 1.93572L2.26044 1.63901C2.3932 1.50673 2.57296 1.43246 2.76036 1.43246C2.94777 1.43246 3.12753 1.50673 3.26029 1.63901L4.29154 2.67026C4.42188 2.80125 4.49586 2.978 4.4977 3.16278C4.49954 3.34757 4.42909 3.52575 4.30138 3.65932C3.98463 3.97808 3.78705 4.39601 3.74174 4.8431C3.69643 5.29018 3.80613 5.73926 4.05247 6.1151C4.63632 6.98881 5.38712 7.73849 6.26169 8.32104C6.6364 8.56742 7.0843 8.67777 7.53058 8.63366C7.97686 8.58955 8.39449 8.39366 8.71372 8.07869C8.84703 7.94947 9.02572 7.87772 9.21138 7.87886C9.39703 7.88 9.57483 7.95394 9.70654 8.08479L10.7378 9.11604C10.8043 9.18154 10.8571 9.25954 10.8933 9.34555C10.9295 9.43155 10.9484 9.52387 10.9487 9.61719C10.9491 9.71051 10.9311 9.80298 10.8956 9.88929C10.8601 9.9756 10.8079 10.054 10.742 10.1201Z" class="group-hover:fill-green fill-black duration-200"/>
                    </svg>Contact
                </a>
            </div>
        </nav>
    </header>
</template>
