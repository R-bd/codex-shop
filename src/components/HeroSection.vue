<script setup>
const embers = [
  { left: '8%', drift: '26px', duration: '11s', delay: '0s' },
  { left: '18%', drift: '-18px', duration: '14s', delay: '2.6s' },
  { left: '29%', drift: '34px', duration: '12s', delay: '5.2s' },
  { left: '41%', drift: '-24px', duration: '16s', delay: '1.4s' },
  { left: '55%', drift: '20px', duration: '13s', delay: '3.8s' },
  { left: '66%', drift: '-30px', duration: '10s', delay: '6.6s' },
  { left: '76%', drift: '16px', duration: '15s', delay: '0.8s' },
  { left: '90%', drift: '-22px', duration: '12.5s', delay: '4.4s' }
]
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-scene" aria-hidden="true">
      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="hero-beam"></div>

      <span class="bokeh bokeh-1" style="--s:130px; left:6%; top:24%;"></span>
      <span class="bokeh bokeh-2" style="--s:90px; left:30%; top:12%;"></span>
      <span class="bokeh bokeh-3" style="--s:170px; right:5%; top:34%;"></span>
      <span class="bokeh bokeh-4" style="--s:70px; right:24%; top:20%;"></span>
      <span class="bokeh bokeh-5" style="--s:110px; left:48%; top:8%;"></span>

      <svg class="mountains mountains-far" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#2a1810" stop-opacity="0.92" />
            <stop offset="1" stop-color="#2a1810" stop-opacity="0.5" />
          </linearGradient>
          <linearGradient id="gMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#3c2314" stop-opacity="0.96" />
            <stop offset="1" stop-color="#3c2314" stop-opacity="0.78" />
          </linearGradient>
          <linearGradient id="gNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#4a2b18" />
            <stop offset="1" stop-color="#351d10" />
          </linearGradient>
        </defs>
        <path fill="url(#gFar)" d="M0 218 L110 168 L200 202 L320 138 L430 182 L545 148 L660 188 L775 132 L890 178 L1010 148 L1140 194 L1255 158 L1440 198 L1440 320 L0 320 Z" />
      </svg>
      <svg class="mountains mountains-mid" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="url(#gMid)" d="M0 248 L135 202 L255 232 L395 178 L512 222 L650 192 L788 238 L928 182 L1070 224 L1210 194 L1380 232 L1440 216 L1440 320 L0 320 Z" />
      </svg>
      <svg class="mountains mountains-near" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="url(#gNear)" d="M0 282 L175 242 L310 272 L470 222 L630 258 L805 232 L985 272 L1165 228 L1340 262 L1440 246 L1440 320 L0 320 Z" />
        <path d="M0 282 L175 242 L310 272 L470 222 L630 258 L805 232 L985 272 L1165 228 L1340 262 L1440 246" fill="none" stroke="#9a6b45" stroke-width="2.4" stroke-opacity="0.4" />
      </svg>
      <div class="hero-mist"></div>

      <span
        v-for="(ember, index) in embers"
        :key="index"
        class="ember"
        :style="{
          left: ember.left,
          '--drift': ember.drift,
          animationDuration: ember.duration,
          animationDelay: ember.delay
        }"
      ></span>
    </div>

    <!-- 首屏沉入正文的柔和过渡 -->
    <svg class="hero-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 62 C240 122 480 22 720 52 C960 82 1200 12 1440 56 L1440 120 L0 120 Z" fill="#faf5ee" />
    </svg>

    <div class="hero-content">
      <p class="eyebrow">HOMEMADE · SEASONAL · SINCE 2012</p>
      <h1>用一顿饭<br />遇见山川湖海</h1>
      <p class="hero-sub">
        我们每天清晨从山野与市集挑选当季食材，
        用最朴素的手法，做出最打动人心的味道。
      </p>
      <div class="hero-actions">
        <a href="#reserve" class="btn btn-primary">预订座位</a>
        <a href="#dishes" class="btn btn-ghost">看看今天吃什么</a>
      </div>
      <div class="hero-meta">
        <div><strong>12年</strong><span>深耕料理</span></div>
        <div><strong>38道</strong><span>招牌菜</span></div>
        <div><strong>4.9分</strong><span>食客口碑</span></div>
      </div>
    </div>

    <div class="hero-art" aria-hidden="true">
      <svg viewBox="0 0 420 420">
        <defs>
          <linearGradient id="bowlGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#ffffff" />
            <stop offset="1" stop-color="#f1e3d2" />
          </linearGradient>
          <linearGradient id="soupGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#e9a23b" />
            <stop offset="1" stop-color="#d97f1f" />
          </linearGradient>
        </defs>

        <g stroke="#e8d9c4" stroke-width="7" stroke-linecap="round" fill="none" class="steam">
          <path d="M150 92c-6-12 8-14 2-28M210 70c-6-12 8-14 2-28M270 92c-6-12 8-14 2-28">
            <animate attributeName="opacity" values="0.25;0.9;0.25" dur="3.2s" repeatCount="indefinite" />
            <animateTransform attributeName="transform" type="translate" values="0 0;0 -14;0 0" dur="3.2s" repeatCount="indefinite" />
          </path>
        </g>

        <g stroke="#9b6a3c" stroke-width="8" stroke-linecap="round">
          <line x1="270" y1="96" x2="335" y2="180" />
          <line x1="296" y1="88" x2="361" y2="172" />
        </g>

        <ellipse cx="210" cy="196" rx="122" ry="40" fill="url(#soupGrad)" />
        <path d="M96 200c26-36 202-36 228 0" fill="none" stroke="#f3b453" stroke-width="6" />
        <ellipse cx="210" cy="196" rx="116" ry="35" fill="#f6c268" />
        <path d="M130 188c34-8 70-10 106-4M150 202c32-6 62-6 88 0M168 174c22 2 40 2 58-1" fill="none" stroke="#d9892a" stroke-width="5" stroke-linecap="round" />

        <path d="M88 208c0 78 55 132 122 132s122-54 122-132h-38c0 56-36 96-84 96s-84-40-84-96H88z" fill="url(#bowlGrad)" />
        <path d="M88 208h244" stroke="#e0c9ac" stroke-width="5" />
        <path d="M72 208c0-8 5-14 16-14h244c11 0 16 6 16 14v14H72v-14z" fill="#e8d5bb" />
        <path d="M96 318c10 16 30 26 56 28h116c26-2 46-12 56-28" fill="none" stroke="#d8bfa0" stroke-width="4" />

        <rect x="30" y="360" width="360" height="10" rx="5" fill="#cbb293" />
        <rect x="60" y="378" width="300" height="8" rx="4" fill="#b9a183" />
      </svg>
      <div class="art-tag art-tag-left">每日现熬骨汤</div>
      <div class="art-tag art-tag-right">时令手作 · 无添加</div>
    </div>
  </section>
</template>
