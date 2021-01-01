<template>
  <div>
    <p>{{ name }} in {{ group }} group</p>
    <div>
      <p v-for="(payload, index) in messages" :key="index">{{payload.user}}: {{payload.message}}</p>
    </div>
    <form @submit.prevent="sendMessage">
        <input type="text" id="message" v-model="message" @keyup.enter="submit" placeholder="Type your message...">
        <button type="submit">Send</button>
    </form>
  </div>
</template>
<script src="./chat.js"/>
<style src="./chat.css"/>