<template>
  <div>
    <div>app根组件</div>
    <p>{{ $store.state.userName }}</p>
    <p>{{ $store.getters.newName }}</p>
    <button @click="btnChangeName">改变值</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'MyApp',
  setup () {
    const store = useStore()
    const btnChangeName = () => {
      store.commit('updateName')
    }
    return {
      btnChangeName
    }
  }
}
</script>
