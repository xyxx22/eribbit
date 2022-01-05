<template>
  <div>
    APPGE {{$store.state.user.profile.account}}
    <button @click="$store.commit('user/setUser',{account:'zhousg'})">设置用户信息</button>
  </div>
</template>

<script>
export default {
  name: 'MyApp'
}
</script>
