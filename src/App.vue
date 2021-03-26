<template>
  <div id="app">
    <router-link to="/"><img alt="Logo" src="./assets/logo.png" height="100"/></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Portal from './components/portal/Portal.vue';
import Chat from './components/chat/Chat.vue';

export default {
  data() {
    return {
      connected: false
    }
  },
  components: { Chat, Portal },
  name: "App"
};
</script>

<style>
</style>
