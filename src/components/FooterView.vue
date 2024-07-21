<script setup>
const emit = defineEmits(['scrollTo'])

const handleNavClick = (section) => {
    emit('scrollTo', section)
}
</script>
<template>
    <footer class="grid bg-skin text-red py-5 md:py-10 md:grid-cols-3 text-center items-center">
        <div class="flex justify-center gap-x-6">
            <a href="">Privacy Policy</a>
            <a href="" class="relative before:content-[''] before:absolute before:w-[1px] before:h-4 before:bg-red before:rotate-12 before:-left-3 before:top-1">Brand Site</a>
        </div>
        <div  class=" font-RD md:text-DLOGO text-MLOGO mb-4 order-first md:order-none md:mb-0 cursor-pointer" @click="handleNavClick('about')">ZOENW</div>
        <p>&copy original COSME JAPAN CO.,LTD</p>
    </footer>
</template>