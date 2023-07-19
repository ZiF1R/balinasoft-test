<template>
  <footer>
    <div class="footer__info">
      <div class="footer__logo">
        <img src="@/assets/logo.svg" alt="tickets logo">
        <SubscribeForm />
      </div>
      <div class="footer__quick-links">
        <div v-for="section in quickLinks" :key="section.name"
             class="quick-links__section">
          <h3>{{section.name}}</h3>
          <ul class="quick-links__list">
            <li v-for="link in section.subLinks" :key="link.name">
              <a :href="link.link">{{link.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <SubscribeForm class="subscribe-form_adaptive" />
    </div>
    <div class="credentials">
      <div class="credentials__companies">
        <a v-for="company in companies" :key="company.image"
           class="companies__company"
           :href="company.link">
          <img :src="getImageSrc(company.image)" :alt="company.image">
        </a>
      </div>
      <p class="policy">
        <a href="">Политика конфиденциальности</a>,
        <a href="">Договор публичной оферты</a>
      </p>
      <p>© 2023 ООО «Кино-инвест», г. Минск, ул. Матроскина, 23 УНП 101333338 тел: 8 017 217-11-77</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SubscribeForm from "@/components/Footer/SubscribeForm.vue";
import {reactive} from "vue";

const quickLinks = reactive([
  {
    name: "Кино",
    subLinks: [
      {
        name: "Кинотеатр «Октябрь»",
        link: "",
      },
      {
        name: "Кинотеатр «Ноябрь»",
        link: "",
      },
    ],
  },
  {
    name: "Мероприятия",
    subLinks: [
      {
        name: "Концерты",
        link: "",
      },
      {
        name: "Бои",
        link: "",
      },
      {
        name: "Семинары",
        link: "",
      },
      {
        name: "Прочее",
        link: "",
      },
    ],
  },
  {
    name: "Спорт",
    subLinks: [
      {
        name: "Разовое посещение",
        link: "",
      },
      {
        name: "Купить абонемент",
        link: "",
      },
    ],
  },
]);
const companies = reactive([
  {
    link: "",
    image: "belcart",
  },
  {
    link: "",
    image: "belcart-small",
  },
  {
    link: "",
    image: "mastercard",
  },
  {
    link: "",
    image: "mastercard-long",
  },
  {
    link: "",
    image: "visa",
  },
  {
    link: "",
    image: "webpay",
  },
]);

function getImageSrc(imageName) {
  return new URL(
    `/src/assets/footer-icons/${imageName}.png`, import.meta.url
  ).href;
}
</script>

<style scoped lang="scss">
@use "@/assets/_variables";

footer {
  position: relative;
  padding: 35px 0 15px;
  background: variables.$secondary;
  margin-top: 45px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    background-color: variables.$secondary;
    transform: translateX(-50%);
    z-index: -1;
  }
}

.footer__info {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.footer__quick-links {
  display: flex;
  gap: 30px;
  margin-top: 15px;

  h3 {
    color: variables.$color-text-mute;
    padding-bottom: 15px;
  }
}

.quick-links__section {
  width: 170px;
}

.quick-links__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.credentials {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  p {
    font-size: 0.8em;
    font-weight: 400;
    color: #ffffff50;
    line-height: 1.7em;

    a {
      color: variables.$primary;
    }
  }
}

.credentials__companies {
  display: flex;
  gap: 5px;
  padding-bottom: 15px;
}

.companies__company {
  display: flex;
  padding: 5px 6px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #FFF;
}

.subscribe-form_adaptive {
  display: none;
}

@media screen and (max-width: variables.$tablet) {
  .footer__info {
    align-items: center;
    flex-direction: column;
  }

  .footer__logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
    max-width: 200px;
    position: relative;

    img {
      width: 100%;
    }

    form {
      display: none;
    }
  }

  .footer__quick-links {
    text-align: center;
    align-items: center;
    flex-direction: column;

    h3 {
      color:  variables.$color-text;
      font-weight: 700;
    }
  }

  .credentials__companies {
    flex-wrap: wrap;
    justify-content: center;
  }

  .companies__company {
    padding: 3.5px 6px;
  }

  .credentials {
    p {
      text-align: center;
      max-width: 85%;
    }
  }

  .subscribe-form_adaptive {
    display: block;
  }
}
</style>
