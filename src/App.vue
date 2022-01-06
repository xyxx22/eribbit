<template>
<RouterView></RouterView>
<button @click="$store.state.user.profile.token = '1'">修改数据</button>
<button @click="$store.state.user.profile.token = ''">修改数据2</button>
<button @click="$store.commit('user/setUser',{account:'路飞'})">修改数据2</button>

</template>
