import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 三个独立的模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件(可以配置多个插件，这里只配置持久化插件)
  plugins: [createPersistedState({
    // 本地存储的名字
    key: 'erabbit-client-pc-124-store',
    // 指定需要存储的模块
    paths: ['user', 'cart']

  })]
})
