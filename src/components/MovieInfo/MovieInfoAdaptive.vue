<template>
  <div class="movie__container">
    <div class="movie__picture">
      <div class="picture-player">
        <img :src="getImageSrc(film.image)" :alt="film.title">
        <div class="play-button">
          <img src="@/assets/play.svg" alt="play">
        </div>
      </div>
      <header class="movie__header">
        <p>{{film.shortInfo}}</p>
        <h1>{{film.title}}</h1>
      </header>
    </div>
    <div class="movie__content">
      <ul class="movie__tags">
        <li class="tags__tag movie__rate">
          <img src="@/assets/icons/star.svg" alt="star icon">
          <span>{{film.rate}}</span>
        </li>
        <li v-for="tag in film.tags" :key="tag" class="tags__tag">
          {{tag}}
        </li>
      </ul>

      <div class="rates__container">
        <button>Купить билет (от {{film.ticketPrice}} руб.)</button>
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
      </div>

      <div class="movie__info">
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
        <div class="info__divider"></div>

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
  image: "big2",
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
@use "@/assets/_variables.scss";
@import "@/assets/movie-info";

@media screen and (max-width: variables.$desktop) {
  .movie__picture {
    position: relative;

    img {
      width: 100%;
    }
  }

  .movie__header {
    display: flex;
    flex-direction: column-reverse;
    position: absolute;
    bottom: 0;
  }

  .rates__container {
    display: flex;
    gap: 20px;
    flex-direction: row-reverse;
    align-items: center;

    .movie__other-rates p {
      width: max-content;
    }

    button {
      border-radius: 12px;
      height: 60px;
    }
  }
}

@media screen and (max-width: variables.$tablet) {
  .movie__container {
    padding-top: 0;
  }

  .picture-player {
    min-height: 500px;
    position: relative;

    & > img {
      position: absolute;
      height: 100%;
      min-width: 100vw;
      left: 50%;
      transform: translateX(-50%);
      width: fit-content;
    }
  }

  .rates__container {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 20px;

    .movie__other-rates {
      border: none;
      padding-left: 0;
      padding-right: 0;
      flex-wrap: wrap;
    }

    button {
      border-radius: 8px;
      height: 100%;
    }
  }

  .tags__tag {
    font-size: 12px;
  }

  .info__divider {
    display: none;
  }

  .info__facts {
    flex-direction: column;
    gap: 12px;
  }

  .movie__fragments {
    flex-wrap: wrap;
  }
}
</style>
