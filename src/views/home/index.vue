<template>
  <!-- 首页入口(分类+广告) -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory></HomeCategory>
      <!-- 轮播图 -->
      <HomeBanner></HomeBanner>
   </div>
  </div>
  <!-- 新鲜好物 -->
  <HomeNew></HomeNew>
  <!-- 人气推荐 -->
  <HomeHot></HomeHot>

</template>

<script>
import HomeCategory from '@/views/home/components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
import HomeNew from './components/home-new.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'Home',
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot
  }
}
</script>

<style lang='less' scoped>
.container{
  .hoverShadow();
  color: @xtxColor;
}
</style>
