<template>
  <section class="similar-films">
    <h2>Похожие по жанру</h2>

    <ul class="similar-films__list">
      <li v-for="film in similarFilms" :key="film.id" class="list__item">
        <a :href="film.link">
          <img :src="getImageSrc(film.image)"
               :alt="film.title">
          <div class="item__info">
            <div class="info__main">
              <h2>{{film.title}}</h2>
              <p>{{film.description}}</p>
            </div>
            <div class="info__footer">
              <div class="item__rate">
                <img src="@/assets/icons/star.svg" alt="star icon">
                <span>{{film.rate}}</span>
              </div>
              <span>{{film.type}}</span>
              <span>{{film.restriction}}+</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {SimilarFilms} from "@/types/types";

const similarFilms = reactive<SimilarFilms>([
  {
    id: 1,
    title: "Меган",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "1",
    link: "/film/1",
  },
  {
    id: 2,
    title: "Быстрее пули",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "2",
    link: "/film/2",
  },
  {
    id: 3,
    title: "Земун",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "3",
    link: "/film/3",
  },
  {
    id: 4,
    title: "Элвис",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "4",
    link: "/film/4",
  },
  {
    id: 5,
    title: "Изумительный Морис",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "5",
    link: "/film/5",
  },
  {
    id: 6,
    title: "Крушение",
    description: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция",
    rate: 6.5,
    type: "Премьера",
    restriction: 16,
    image: "6",
    link: "/film/6",
  },
]);

function getImageSrc(imageName) {
  return new URL(
    `/src/assets/film-posters/${imageName}.png`, import.meta.url
  ).href;
}
</script>

<style scoped lang="scss">
@use "@/assets/_variables";

$film-width: 380px;

h2 {
  border-radius: variables.$radius-secondary;
  background: #503449;
  padding: 15px;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
}

.similar-films__list {
  display: flex;
  flex-wrap: wrap;
  gap: variables.$gap;
  margin-top: variables.$gap;

  .list__item {
    flex-grow: 1;
    width: $film-width;
  }

  .list__item > a {
    display: flex;
    width: 100%;
    padding: 15px;
    gap: 12px;

    border-radius: variables.$radius-primary;
    background: #392534;
    box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.15);

    &:hover {
      background: lighten(#392534, 5%);
    }
  }

  h2 {
    text-align: left;
    background: none;
    padding: 0;
  }

  p {
    font-size: 1em;
    font-weight: 400;
    color: variables.$color-text-mute;
  }
}

.item__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.info__footer {
  display: flex;
  gap: variables.$gap;
}

.item__rate {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
