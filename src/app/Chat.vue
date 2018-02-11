<style lang="scss">
  $color-black: #111;
  $color-grey: #f0f0f0;
  $color-light-grey: #f8f8f8;
  $color-light: #f9f9f9;

  .chat {
    border: 2px solid $color-black;
    border-radius: 6px;
    background: $color-grey;
    box-sizing: border-box;
    min-height: 300px;
    margin: auto;
    max-width: 800px;
    overflow: hidden;
    padding-bottom: 52px;
    position: relative;
  }

  .chat__title,
  .chat__message {
    text-align: center;
  }

  .chat__title {
    margin-top: 80px;
  }

  .chat-list {
    list-style: none;
    padding: 8px;
    overflow-y: auto;
    max-height: 300px;
  }

  .chat-list__item {
    background: $color-light;
    padding: 8px;
    margin-bottom: 8px;
  }

  .chat__input {
    border: 0;
    box-sizing: border-box;
    width: 100%;
    font-size: 22px;
    line-height: 28px;
    padding: 8px 16px;
    position: absolute;
    bottom: 0;

    &:focus {
      background: $color-light-grey;
      outline: none;
    }
  }
</style>

<template>
  <div class="chat">
    <header class="chat__header">
      <h1 class="chat__title">Hi</h1>
      <div class="chat__message" v-text="initialMessage"></div>
    </header>

    <main class="chat__content">
      <ul class="chat-list" ref="chatList">
        <li
          class="chat-list__item"
          v-for="message in chatMessages"
        >
          <div
            class="chat-list__text"
            v-text="message.text"
          ></div>
        </li>
      </ul>

      <input
        class="chat__input"
        v-model="newMessage"
        type="text"
        placeholder="Введите сообщение и нажмите Enter"
        @keydown.enter="sendMessage"
      />

    </main>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          initialMessage: 'Сообщение из модели',
          chatMessages: [],
          newMessage: ''
        }
      },

      methods: {
        sendMessage() {
          const newMessage = {
            text: this.newMessage
          }
          this.chatMessages.push(newMessage);
          this.newMessage = '';

          this.$nextTick(this.scrollChatDown);
        },

        scrollChatDown() {
          const chatList = this.$refs.chatList;
          chatList.scrollTop = chatList.scrollHeight;
        }
      },

      mounted() {
        setTimeout(() => {
          this.chatMessages = [
            {text: 'Первое сообщение'},
            {text: 'Второе сообщение'}
          ]
        }, 2000);
      }
    }
</script>
