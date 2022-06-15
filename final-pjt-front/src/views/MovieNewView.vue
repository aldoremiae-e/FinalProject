<template>
  <div class="container">
    <h1 class="fontquick">New Movie</h1>
    <movie-form :movie="movie" action="create"></movie-form>
  </div>
</template>

<script>
  import MovieForm from '@/components/MovieForm.vue'

  export default {
  name: 'MovieNewView',
    components: { MovieForm },
    data() {
      return {
        movie: {
          pk: null,
          title: '',
          content: '',
        }
      }
    },
  }
</script>

<style>
</style>