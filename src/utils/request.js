// 1、创建一个新的axios实例
// 2、做一个请求拦截器，如果有token进行头部携带
// 3、相应拦截器：1、剥离无效数据2、处理token失效
// 4、导出一个函数，调用当前的axios实例发送请求，返回值promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'

export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'

const instance = axios.create({
  // axios的一些配置
  baseURL,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, (err) => { return Promise.reject(err) })

instance.interceptors.response.use(res => res.data, err => {
  if (err.response && err.response.status === 401) {
    // 1、清空无效用户信息
    // 2、跳转到登陆页面
    // 3、跳转需要传参(当前路由地址)给登录页码
    store.commit('user/setUser', {})
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具封装
export default (url, method, submitData) => {
  // 这个函数负责发请求，请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
