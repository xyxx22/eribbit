<template>
  <div>
    APP根组件
    <hr>
    <button @click="fn">测试request工具函数</button>
  </div>
</template>

<script>
import request from '@/utils/request.js'

export default {
  name: 'MyApp',
  setup () {
    const fn = () => {
      request(' /member/profile', 'get', { a: 10 })
    }

    return { fn }
  }
}
</script>
