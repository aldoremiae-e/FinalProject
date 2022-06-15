<template>
  <div>
    <div>
      <h1 class="d-flex justify-content-center align-item-center p-3 fontquick">VV MOVIE</h1>
      <h4 class="d-flex justify-content-center align-item-center p-2 fonth4">뷰에 빠진게 죄는 아니잖아</h4>
      
    </div>
    <div class="row mx-2 my-2">
      <movie-card
        class="col-2 col-md-3"
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
      ></movie-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'HomeView',
  components: {
    MovieCard,
  },
  methods: {
    ...mapActions([
      'fetchMovies'
    ])
  },
  computed: {
    ...mapGetters(['movies']),
  },
  created() {
    this.fetchMovies()
  },
}
</script>
<style>
  .fonth4{
    font-family: 'Song Myung', serif;
  }
  body {
        background-color: #e4f2ff !important;
      }
  
</style>
