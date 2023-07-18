<template>
  <header>
    <img src="@/assets/logo.svg" alt="ticket logo" />

    <nav>
      <ul class="nav__list">
        <li class="list__item list__marker"></li>
        <li v-for="item in menu" :key="item.id" class="list__item"
            :class="{'item_active': activeItemId === item.id}"
            @click="setActiveItem($event, item)"
        >
          {{item.name}}
        </li>
      </ul>
    </nav>

<!--    TODO: smooth transition for search opening -->
    <label class="header__search">
      <img src="@/assets/icons/search.svg" alt="search icon">
      <input type="text" placeholder="Search">
    </label>
  </header>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {Menu, MenuItem} from "@/types/types";

const menu = reactive<Menu>([
  {
    id: 1,
    name: "Кино",
    link: "/",
  },
  {
    id: 2,
    name: "События",
    link: "/events",
  },
  {
    id: 3,
    name: "Спорт",
    link: "/sport",
  },
]);
const activeItemId = ref<number>(menu[0].id);

// onMounted(() => {
//   setMarker(
//     document.body.querySelector(".list__item")
//   );
// });

function setMarker(target: EventTarget | null) {
  const marker = document.querySelector(".list__marker") as HTMLLIElement;
  if (target instanceof HTMLLIElement) {
    marker.style.left = target.offsetLeft + "px";
    marker.style.width = target.offsetWidth + "px";
  }
}

function setActiveItem(event: MouseEvent, item: MenuItem) {
  activeItemId.value = item.id;
  setMarker(event.target);
}
</script>

<style scoped lang="scss">
@use "@/assets/_variables";

$item-horizontal-padding: 35px;

header {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
}

.nav__list {
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: variables.$f-4;
  width: fit-content;
  border-radius: 100px;
  padding: 2px;
}

.list__item {
  position: relative;
  transition: variables.$transition;
  color: variables.$color-text-mute;
  padding: 8px $item-horizontal-padding;
  border-radius: 100px;
  cursor: pointer;
}

.list__marker {
  position: absolute;
  transition: variables.$transition;
  background: variables.$primary;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.item_active {
  font-weight: 600;
}

.header__search {
  padding: 8px;
  background: variables.$f-4;
  border-radius: 100%;
  cursor: pointer;

  width: 36px;
  height: 36px;

  input {
    display: none;
  }
}

@media screen and (max-width: variables.$tablet) {
  header {
    justify-content: center;
  }

  .nav__list {
    display: none;
  }

  .header__search {
    position: absolute;
    right: 0;
  }
}
</style>
