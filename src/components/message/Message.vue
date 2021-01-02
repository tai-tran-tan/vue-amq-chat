<template>
  <div>
      <div v-if="owner" class="message mine-message">
          {{message}} <span class="user-name">me</span>
      </div>
      <div v-else class="message their-message">
          <span class="user-name">{{user}}</span> {{message}}
      </div>
  </div>
</template>

<script src="./message.js">
</script>

<style src="./message.css">
</style>