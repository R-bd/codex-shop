<script setup>
import SiteNav from './components/SiteNav.vue'
import HeroSection from './components/HeroSection.vue'
import DishesSection from './components/DishesSection.vue'
import WhySection from './components/WhySection.vue'
import ReviewsSection from './components/ReviewsSection.vue'
import VisitSection from './components/VisitSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="grain" aria-hidden="true"></div>
  <SiteNav />
  <main>
    <HeroSection />
    <DishesSection />
    <WhySection />
    <ReviewsSection />
    <VisitSection />
  </main>
  <SiteFooter />
</template>
