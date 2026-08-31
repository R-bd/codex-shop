<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

function updateNav() {
  scrolled.value = window.scrollY > 24
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', updateNav, { passive: true })
  updateNav()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateNav)
})
</script>

<template>
  <header class="nav" :class="{ scrolled }">
    <div class="nav-inner">
      <a href="#hero" class="brand" aria-label="山野食堂 首页">
        <svg viewBox="0 0 40 40" width="38" height="38" aria-hidden="true">
          <circle cx="20" cy="20" r="19" fill="#c65d3b" />
          <path d="M20 9c5 3 8 7 8 12a8 8 0 1 1-16 0c0-5 3-9 8-12z" fill="#faf5ee" />
          <path
            d="M13 21c1.8-1 3.6-1.4 5-1.2M22 18.5c1.8.7 3.3 2 4.2 3.7"
            stroke="#4c6b4f"
            stroke-width="1.6"
            stroke-linecap="round"
            fill="none"
          />
          <path
            d="M15.5 24.5l-3 5M24.5 24.5l3 5"
            stroke="#faf5ee"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <span class="brand-text">山野食堂</span>
      </a>

      <nav id="menu" class="menu" :class="{ open: menuOpen }" aria-label="主导航">
        <a href="#dishes" @click="closeMenu">招牌菜品</a>
        <a href="#why" @click="closeMenu">我们的坚持</a>
        <a href="#reviews" @click="closeMenu">食客评价</a>
        <a href="#visit" @click="closeMenu">到店信息</a>
        <a href="#reserve" class="menu-cta" @click="closeMenu">预订座位</a>
      </nav>

      <button
        class="nav-toggle"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? '关闭菜单' : '打开菜单'"
        aria-controls="menu"
        @click="toggleMenu"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>
