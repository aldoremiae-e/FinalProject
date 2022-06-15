<template>
  <div class="container">
    <h1 class="fontquick">Edit Movie</h1>
    <movie-form :movie="movie" action="update">
    </movie-form>
  </div>
</template>

<script>
  import MovieForm from '@/components/MovieForm.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'MovieEditView',
    components: { MovieForm },
    computed: {
      ...mapGetters(['movie', 'isMovie',])
    },
    methods: {
      ...mapActions(['fetchMovie'])
    },
    created() {
      this.fetchMovie(this.$route.params.moviePk)
    },
  }
</script>

<style>

</style>