<template>
  <div class="movie__container">
    <div class="movie__picture">
      <img :src="getImageSrc(film.image)" :alt="film.title">
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
@use "@/assets/_variables";

$rates-divider-gap: 25px;

.movie__container {
  display: flex;
  gap: variables.$gap;
  padding: 40px 0;
}

p, h3 {
  color: variables.$color-text-mute;
}

.movie__tags {
  display: flex;
  gap: 5px;
  padding: 10px 0;
}

.tags__tag {
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.50);
  cursor: pointer;
}

.movie__other-rates {
  display: flex;
  position: relative;
  padding: 10px 20px;
  align-items: flex-start;
  gap: $rates-divider-gap;

  width: fit-content;
  border-radius: 12px;
  border: 1px solid #695965;

  h3 {
    color: variables.$color-text;
  }
}

.other-rates__rate {
  display: flex;
  position: relative;
  gap: 40px;
  align-items: center;
  padding-left: $rates-divider-gap;

  &:after {
    content: "";
    height: 100%;
    width: 1px;
    background: rgba(255, 255, 255, 0.20);
    position: absolute;
    right: -$rates-divider-gap;
  }

  &:last-child:after {
    content: unset;
  }

  &:first-child {
    padding-left: 0;
  }

  .rate {
    display: flex;
    align-items: center;
  }
}

.movie__info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
}

.info__divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.30);
}

h3 {
  font-size: 0.85em;
}

.info__facts {
  display: flex;
  gap: 63px;
}

.actors__list {
  display: flex;
  flex-wrap: wrap;
  gap: 0 5px;

  li:after {
    content: ",";
  }
  li:last-child:after {
    content: unset;
  }
}

.movie__fragments {
  display: flex;
  gap: 10px;

  li {
    position: relative;
  }

  img {
    border-radius: 10px;
  }
}

.movie__description {
  p {
    padding: 20px 0 10px;
    color: variables.$color-text;
  }
}

summary {
  display: flex;
  align-items: center;
  list-style: none;
  cursor: pointer;
  color: variables.$primary;

  img {
    width: 30px;
    height: 30px;
  }
}
</style>
