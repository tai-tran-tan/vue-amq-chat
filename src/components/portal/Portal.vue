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
    <div v-for="gr in groupList" :key="gr.group" >
      <button type="button" height="20px" class="group" @click="activate(gr)">{{gr.name}}</button>
    </div>
    
    <br />
    <Chat v-if="!!group" :user="name" :group="group"></Chat>
</template>
<script src="./portal.js"></script>
<style src="./portal.css"></style>