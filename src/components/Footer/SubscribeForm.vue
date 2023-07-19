<template>
  <form class="subscribe-form" @submit.prevent="" v-if="!close">
    <header class="subscribe-form__header">
      <h2>Подписка</h2>
      <img src="@/assets/close.svg" alt="close" @click="close = true">
    </header>
    <p>
      Подпишись, оставь телефон или e-mail для получения рекламных сообщений.
    </p>
    <button>Подписаться</button>
  </form>
</template>

<script setup lang="ts">
import {ref} from "vue";

const close = ref(false);
</script>

<style scoped lang="scss">
@use "@/assets/_variables";

.subscribe-form__header {
  display: none;
}

p {
  max-width: 300px;
  color: #DCD6DB;
  line-height: 1.3;
  padding: 10px 0 20px;
}

button {
  width: fit-content;
  padding: 8px 40px;
}

@media screen and (max-width: variables.$tablet) {
  .subscribe-form__header {
    display: block;
    position: relative;
    padding-bottom: 15px;
    text-align: center;
    width: 100%;

    img {
      top: 0;
      right: 0;
      position: absolute;
      transition: variables.$transition;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  button {
    width: 100%;
    padding: 12px 20px;
  }

  form.subscribe-form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 85%;
    max-width: 500px;

    border-top: 1px solid rgba(255, 255, 255, 0.20);
    border-bottom: 1px solid rgba(255, 255, 255, 0.20);
    padding: 30px 0;

    p {
      max-width: 85%;
    }
  }
}
</style>
