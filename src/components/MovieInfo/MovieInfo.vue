<template>
  <div class="movie__container">
    <div class="movie__picture">
      <div class="picture-player">
        <img :src="getImageSrc(film.image)" :alt="film.title">
        <div class="play-button">
          <img src="@/assets/play.svg" alt="play">
        </div>
      </div>
      <button>Купить билет (от {{film.ticketPrice}} руб.)</button>
    </div>
    <div class="movie__content">
      <header class="movie__header">
        <p>{{film.shortInfo}}</p>
        <h1>{{film.title}}</h1>
      </header>

      <ul class="movie__tags">
        <li class="tags__tag movie__rate">
          <img src="@/assets/icons/star.svg" alt="star icon">
          <span>{{film.rate}}</span>
        </li>
        <li v-for="tag in film.tags" :key="tag" class="tags__tag">
          {{tag}}
        </li>
      </ul>

      <div class="movie__other-rates">
        <div v-for="rate in film.otherRates" :key="rate.source"
             class="other-rates__rate">
          <div class="rate__info">
            <h3>{{rate.source}}</h3>
            <p>{{rate.ratesCount}} отзывов</p>
          </div>
          <div class="rate">
            <img src="@/assets/icons/star-gray.svg" alt="star icon">
            <span>{{rate.rate}}</span>
          </div>
        </div>
      </div>

      <div class="movie__info">
        <ul class="info__facts">
          <li>
            <h3>Премьера</h3>
            <span>{{film.preview}}</span>
          </li>
          <li>
            <h3>Возраст</h3>
            <span>{{film.restriction}}+</span>
          </li>
          <li>
            <h3>Страна</h3>
            <span>{{film.country}}</span>
          </li>
          <li>
            <h3>Режиссер</h3>
            <span>{{film.director}}</span>
          </li>
        </ul>

        <div class="info__divider"></div>
        <div class="info__actors">
          <h3>В ролях</h3>
          <ul class="actors__list">
            <li v-for="actor in film.actors" :key="actor">{{actor}}</li>
          </ul>
        </div>
        <div class="info__divider"></div>

        <div class="info__additional">
          <h2>Фрагменты и описание</h2>
          <ul class="movie__fragments">
            <li v-for="fragment in film.fragmentsLink" :key="fragment">
              <img :src="getImageSrc(fragment)" :alt="fragment">
            </li>
          </ul>
          <div class="movie__description">
            <p>{{film.description}}</p>
            <details>
              <summary>
                <span>Развернуть</span>
                <img src="@/assets/icons/arrow-down.svg" alt="arrow down">
              </summary>
              {{film.description}}
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue";
import {MainFilm} from "@/types/types";

const film = reactive<MainFilm>({
  id: 1,
  title: "Операция «Фортуна»: Искусство побеждать",
  description:
    "Наёмник под кодовым именем Божья Коровка отправляется на новую миссию: вместо заболевшего коллеги он должен сесть в скоростной поезд Токио — Киото, выкрасть чемоданчик и сойти на промежуточной станции. Но выполнение простого задания сильно осложняется, когда выясняется, что состав просто кишит всевозможными киллерами.",
  restriction: 12,
  image: "big1",
  rate: 6.5,
  preview: "16 февраля 2023",
  country: "США",
  director: "Дэвид Литч",
  shortInfo: "2022, США, 1ч 45 мин, В прокате до 26 ноября",
  ticketPrice: 6,
  actors: ["Брэд Питт", "Джои Кинг", "Аарон Тейлор-Джонсон", "Брайан Тайри", "Генри Эндрю", "Кодзи Хироюки", "Санада Бэд Банни", "Логан Лерман", "Зази Битц", "Майкл Шеннон"],
  otherRates: [
    {
      source: "IMDb",
      rate: 9.2,
      ratesCount: 256,
    },
    {
      source: "КИНОПОИСК",
      rate: 8.7,
      ratesCount: 135,
    },
  ],
  fragmentsLink: ["small1", "small2", "small2"],
  tags: ["Премьера", "Боевик", "Детектив", "16+"],
});

function getImageSrc(imageName) {
  return new URL(
    `/src/assets/film-posters/${imageName}.png`, import.meta.url
  ).href;
}
</script>

<style scoped lang="scss">
@import "@/assets/movie-info";
</style>
