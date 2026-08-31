/**
 * 滚动显现指令：元素进入视口后添加 .visible
 * 用法：<div v-reveal>...</div>
 */
export default {
  mounted(el, binding) {
    el.classList.add('reveal')

    if (!('IntersectionObserver' in window)) {
      el.classList.add('visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: binding.value?.threshold ?? 0.12 }
    )

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  }
}
