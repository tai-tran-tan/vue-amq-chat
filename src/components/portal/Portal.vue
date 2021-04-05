<template>
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
    <div v-for="gr in groupList" :key="gr.id" >
      <button type="button" height="20px" class="group" @click="activate(gr)">{{gr.group}}</button>
    </div>
    
    <br />
    <router-view v-if="!!group"></router-view>
</template>
<script src="./portal.js"></script>
<style src="./portal.css"></style>