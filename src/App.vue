<script setup lang="ts">
import Header from "@/components/Header.vue";
import MovieInfo from "@/components/MovieInfo/MovieInfo.vue";
import SimilarFilms from "@/components/SimilarFilms.vue";
import Footer from "@/components/Footer/Footer.vue";
import MovieInfoAdaptive from "@/components/MovieInfo/MovieInfoAdaptive.vue";
</script>

<template>
  <Header />

  <main>
    <MovieInfo class="movie-info" />
    <MovieInfoAdaptive class="movie-info_adaptive" />

    <SimilarFilms />
  </main>

  <Footer />
</template>

<style scoped lang="scss">
@use "@/assets/_variables";

.movie-info_adaptive {
  display: none;
}

@media screen and (max-width: variables.$desktop) {
  .movie-info {
    display: none;
  }

  .movie-info_adaptive {
    display: block;
  }
}
</style>
