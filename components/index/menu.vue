<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseleave">
      <dt>全部分类</dt>
      <dd v-for="(item, idx) in menu" :key="idx" @mouseenter="mouseenter">
        <i :class="item.type"/>{{ item.title }}<span class="arrow"/>
      </dd>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="enter" @mouseleave="leave"> <!-- 这里当我用v-show的时候会报child undefined -->
      <template v-for="(item, idx) in curDetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      menu: [
        { type: 'food', title: '美食', child: [
          { title: '美食', child: ['美食1', '美食2', '美食3'] }
        ]},
        { type: 'takeout', title: '外卖', child: [
          { title: '外卖', child: ['外卖1', '外卖2', '外卖3'] }
        ]},
        { type: 'hotel', title: '酒店', child: [
          { title: '酒店', child: ['酒店1', '酒店2', '酒店3'] }
        ]},
      ],
      time: ''
    }
  },
  computed: {
    curDetail() {
      return this.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseleave() {
      this.time = setTimeout(() => {
        this.kind = ''
      }, 150)
    },
    mouseenter(e) {
      this.kind = e.target.querySelector('i').className
    },
    enter() {
      clearTimeout(this.time)
    },
    leave() {
      this.kind = ''
    }
  }
}
</script>

<style lang="scss">

</style>
