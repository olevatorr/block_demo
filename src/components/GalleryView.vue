<template>
    <section class="py-20 md:py-28 overflow-hidden">
        <div class="2xl:container mx-auto px-4 md:px-16">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    </section>
</template>
<script setup>
    import SectionOne from '@/components/Gallery/SectionOne.vue'
    import SectionTwo from '@/components/Gallery/SectionTwo.vue'
    import SectionThree from '@/components/Gallery/SectionThree.vue'
    import SectionFour from '@/components/Gallery/SectionFour.vue'
</script>