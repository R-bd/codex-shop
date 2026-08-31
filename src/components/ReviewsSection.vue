<script setup>
const reviews = [
  {
    avatar: '林',
    av: '#c65d3b',
    quote: '「鸡汤面一上桌，香气就把整桌人征服了。汤是真的很鲜，没有半点味精味，像小时候外婆熬的那种。」',
    name: '林小满',
    role: '每周都来的回头客'
  },
  {
    avatar: '周',
    av: '#4c6b4f',
    quote: '「环境安静舒服，服务恰到好处，不会一直来打扰。煲仔饭的锅巴是全场最佳，香脆不粘牙。」',
    name: '周先生',
    role: '家庭聚餐常客'
  },
  {
    avatar: '陈',
    av: '#b08b3e',
    quote: '「带着父母来吃的，老人对荠菜馄饨赞不绝口，说就是记忆里的味道。已经安利给半个办公室了。」',
    name: '陈一舟',
    role: '大众点评 LV6'
  }
]
</script>

<template>
  <section class="section reviews" id="reviews">
    <div class="section-head" v-reveal>
      <p class="eyebrow">GUEST REVIEWS</p>
      <h2>食客怎么说</h2>
    </div>
    <div class="review-grid">
      <figure v-for="review in reviews" :key="review.name" class="review-card" v-reveal>
        <div class="stars" aria-label="五星好评">★★★★★</div>
        <blockquote>{{ review.quote }}</blockquote>
        <figcaption>
          <span class="avatar" :style="{ '--av': review.av }">{{ review.avatar }}</span>
          <div>
            <strong>{{ review.name }}</strong>
            <small>{{ review.role }}</small>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>
