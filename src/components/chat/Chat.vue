<template>
  <div class="chatContainer">
    <p class="chatHeader">{{ group }} lovers</p>
    <div class="messagesListWrapper">
      <div>
        <Message
          v-for="(item, index) in messages"
          :key="index"
          :message="item.message"
          :user="item.user"
          :owner="item.user === user"
        />
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="messageComposer">
      <input
        type="text"
        id="message"
        v-model.trim="message"
        @keyup.enter="submit"
        placeholder="Type your message..."
      />
      <button type="submit">Send</button>
    </form>
  </div>
</template>
<script src="./chat.js"/>
<style src="./chat.css"/>