<template>
  <!-- 顶部通栏 -->
  <AppNavbar></AppNavbar>
  <!-- 吸顶头部组件 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 内容容器 -->
  <div class="app-body">
    <RouterView></RouterView>
  </div>
  <!-- 底部组件 -->
  <AppFooter></AppFooter>
</template>

<script>
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang='less'>
// .app-body{
//   // min-height: 1200px;
// }
</style>
