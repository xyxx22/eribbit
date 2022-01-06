// 分类模块
import { topCategory } from '@/api/constants.js'
import { findAllCategory } from '@/api/category'

export default {
  namespaced: true,
  state () {
    return {
      list: topCategory.map(item => ({ name: item }))
    }
  },
  mutations: {
    setList (state, payload) {
      state.list = payload
    }
  },
  actions: {
    async getList ({ commit }) {
      const data = await findAllCategory()
      commit('setList', data.result)
    }
  }
}
