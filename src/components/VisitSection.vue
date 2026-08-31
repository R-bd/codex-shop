<script setup>
import { reactive, ref, nextTick } from 'vue'

const form = reactive({
  name: '',
  phone: '',
  date: '',
  guests: '',
  note: ''
})

const errors = reactive({
  name: false,
  phone: false,
  date: false,
  guests: false
})

const success = ref(false)

const nameInput = ref(null)
const phoneInput = ref(null)
const dateInput = ref(null)
const guestsInput = ref(null)
const successEl = ref(null)

function validate() {
  errors.name = !form.name.trim()
  errors.phone = !/^1\d{10}$/.test(form.phone.trim())
  errors.date = !form.date
  errors.guests = !form.guests
}

async function submit() {
  validate()

  if (errors.name) {
    nameInput.value?.focus()
    return
  }
  if (errors.phone) {
    phoneInput.value?.focus()
    return
  }
  if (errors.date) {
    dateInput.value?.focus()
    return
  }
  if (errors.guests) {
    guestsInput.value?.focus()
    return
  }

  success.value = true
  form.name = ''
  form.phone = ''
  form.date = ''
  form.guests = ''
  form.note = ''

  await nextTick()
  successEl.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
}
</script>

<template>
  <section class="section visit" id="visit">
    <div class="visit-info" v-reveal>
      <p class="eyebrow">VISIT US</p>
      <h2>到店信息</h2>
      <ul class="info-list">
        <li>
          <span class="info-icon">📍</span>
          <div><strong>地址</strong><p>湖畔路 88 号 · 青禾街区 2 层</p></div>
        </li>
        <li>
          <span class="info-icon">🕙</span>
          <div><strong>营业时间</strong><p>周二至周日 11:00 – 21:30<br />每周一店休</p></div>
        </li>
        <li>
          <span class="info-icon">📞</span>
          <div><strong>电话 / 微信</strong><p>0571-8888-6666<br />shan-ye-canteen</p></div>
        </li>
      </ul>
    </div>

    <div class="reserve" id="reserve" v-reveal>
      <p class="eyebrow">RESERVATION</p>
      <h2>预订座位</h2>
      <form novalidate @submit.prevent="submit">
        <div class="form-row">
          <label>
            <span>姓名</span>
            <input
              ref="nameInput"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="怎么称呼您"
              :class="{ 'field-error': errors.name }"
              @input="errors.name = false"
            />
          </label>
          <label>
            <span>手机号</span>
            <input
              ref="phoneInput"
              v-model="form.phone"
              type="tel"
              name="phone"
              placeholder="方便我们联系您"
              :class="{ 'field-error': errors.phone }"
              @input="errors.phone = false"
            />
          </label>
        </div>
        <div class="form-row">
          <label>
            <span>日期</span>
            <input
              ref="dateInput"
              v-model="form.date"
              type="date"
              name="date"
              :class="{ 'field-error': errors.date }"
              @input="errors.date = false"
            />
          </label>
          <label>
            <span>人数</span>
            <select
              ref="guestsInput"
              v-model="form.guests"
              name="guests"
              :class="{ 'field-error': errors.guests }"
              @change="errors.guests = false"
            >
              <option value="">请选择</option>
              <option>1 位</option>
              <option>2 位</option>
              <option>3 位</option>
              <option>4 位</option>
              <option>5 位及以上</option>
            </select>
          </label>
        </div>
        <label>
          <span>备注（选填）</span>
          <textarea v-model="form.note" rows="3" placeholder="忌口、儿童椅、靠窗位……告诉我们"></textarea>
        </label>
        <button type="submit" class="btn btn-primary btn-block">提交预订</button>
        <p class="form-tip">提交后我们会在 30 分钟内电话确认，无需预付定金。</p>
        <p v-if="success" ref="successEl" class="form-success">
          ✓ 已收到预订请求，我们会尽快与您确认，期待您的光临！
        </p>
      </form>
    </div>
  </section>
</template>
