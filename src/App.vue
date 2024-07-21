<script setup>
import { ref } from 'vue'
import NavView from './components/NavView.vue'
import BannerView from './components/BannerView.vue'
import StoryView from './components/StoryView.vue'
import ServiceView from './components/ServiceView.vue'
import MarqueeView from './components/MarqueeView.vue'
import GalleryView from './components/GalleryView.vue'
import CallMeView from './components/CallMeView.vue'
import FooterView from './components/FooterView.vue'

const aboutRef = ref(null)
const storyRef = ref(null)
const galleryRef = ref(null)
const contactRef = ref(null)

const scrollTo = (section) => {
  const refMap = {
    about: aboutRef,
    story: storyRef,
    gallery: galleryRef,
    contact: contactRef
  }

  const targetRef = refMap[section]
  if (targetRef.value) {
    const element = targetRef.value.$el || targetRef.value
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <NavView @scrollTo="scrollTo" />
  <BannerView ref="aboutRef" />
  <StoryView ref="storyRef" />
  <ServiceView />
  <MarqueeView />
  <GalleryView ref="galleryRef" />
  <CallMeView ref="contactRef" />
  <FooterView @scrollTo="scrollTo"/>
</template>
