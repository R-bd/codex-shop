<script setup>
const reasons = [
  {
    num: '01',
    title: '新鲜看得见',
    desc: '食材每天清晨现采现送，当日用不完的，绝不留在第二天的锅里。'
  },
  {
    num: '02',
    title: '一菜一火候',
    desc: '掌勺十二年的主厨坚持小锅出菜，不赶时间，只赶火候。'
  },
  {
    num: '03',
    title: '回家般的自在',
    desc: '没有花哨的摆盘与喧闹的音乐，只想让你像回家吃饭一样放松。'
  }
]
</script>

<template>
  <section class="section why" id="why">
    <div class="section-head" v-reveal>
      <p class="eyebrow">WHY US</p>
      <h2>我们的坚持</h2>
    </div>
    <div class="why-grid">
      <div v-for="reason in reasons" :key="reason.num" class="why-card" v-reveal>
        <div class="why-num">{{ reason.num }}</div>
        <h3>{{ reason.title }}</h3>
        <p>{{ reason.desc }}</p>
      </div>
    </div>
  </section>
</template>
