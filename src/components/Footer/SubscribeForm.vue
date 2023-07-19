<template>
  <form @submit.prevent="">
    <p>
      Подпишись, оставь телефон или e-mail для получения рекламных сообщений.
    </p>
    <button>Подписаться</button>
  </form>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use "@/assets/_variables";

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
</style>
