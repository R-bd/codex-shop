<script setup>
const dishes = [
  {
    icon: '🍜',
    bg: '#fdebd8',
    name: '山菌鸡汤面',
    desc: '十二小时慢炖的土鸡汤，配上野生菌与手擀面，一碗下肚，从胃暖到心。',
    price: '¥38',
    tag: '每桌必点'
  },
  {
    icon: '🥟',
    bg: '#e7f0e3',
    name: '荠菜鲜肉馄饨',
    desc: '春日限定的荠菜与黑毛猪前腿肉，薄皮大馅，咬开是满口鲜甜。',
    price: '¥26',
    tag: '春日限定'
  },
  {
    icon: '🍲',
    bg: '#f7e8e0',
    name: '砂锅腊味煲仔饭',
    desc: '明火煲出的金黄锅巴，腊味油脂渗进每一粒米，上桌时还滋滋作响。',
    price: '¥42',
    tag: '人气爆款'
  },
  {
    icon: '🍢',
    bg: '#fdf3d7',
    name: '炭烤时蔬拼盘',
    desc: '当季蔬菜裹上薄油炭烤，撒一把海盐与香料，简单却最见功力。',
    price: '¥32',
    tag: '素食友好'
  },
  {
    icon: '🍚',
    bg: '#f3e4f0',
    name: '桂花酒酿小圆子',
    desc: '手工搓制的小圆子配上自家酿的桂花酒酿，是很多食客的收尾仪式。',
    price: '¥18',
    tag: '甜品招牌'
  },
  {
    icon: '🍵',
    bg: '#e3edf2',
    name: '云雾高山茶',
    desc: '来自海拔一千二百米的春茶，配餐解腻，饭后一壶，甘甜回韵。',
    price: '¥20',
    tag: '可续水'
  }
]
</script>

<template>
  <section class="section dishes" id="dishes">
    <div class="section-head" v-reveal>
      <p class="eyebrow">SIGNATURE DISHES</p>
      <h2>招牌菜品</h2>
      <p class="section-sub">菜单随季节流转，以下是我们最舍不得下架的几道。</p>
    </div>

    <div class="dish-grid">
      <article v-for="dish in dishes" :key="dish.name" class="dish-card" v-reveal>
        <div class="dish-icon" :style="{ '--bg': dish.bg }">{{ dish.icon }}</div>
        <h3>{{ dish.name }}</h3>
        <p>{{ dish.desc }}</p>
        <div class="dish-meta">
          <span class="price">{{ dish.price }}</span>
          <span class="tag">{{ dish.tag }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
