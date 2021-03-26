<template>
  <form @submit.prevent.stop="connect">
    <label for="name">Your Name:</label>
    <input
      required
      type="text"
      id="name"
      placeholder="Jonh"
      v-model.trim="name"
    />
    <br />
    <label for="group">Group you wanna join:</label>
    <SelectButton v-model="value1" :options="options" />
    <br />
    <button>Start chat</button>
  </form>
</template>
<script src="./portal.js"></script>
<style src="./portal.css"></style>