import { createStore } from 'vuex'

// 三个独立的模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  modules: {
    cart,
    user,
    category
  }
})
