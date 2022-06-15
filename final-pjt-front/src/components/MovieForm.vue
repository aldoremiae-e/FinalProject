<template>
  <form @submit.prevent="onSubmit">
    <div class="my-2">
      <label class="fontnav" for="title">title: </label>
      <input v-model="newMovie.title" type="text" id="title" />
    </div>
    <div class="my-2">
      <label class="fontnav" for="overview">overview: </label>
      <textarea v-model="newMovie.overview" type="text" id="overview"></textarea>
    </div>
    <div>
      <button class="btn btn-primary btn-sm">{{ action }}</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MovieForm',
  props: {
    movie: Object,
    action: String,
  },
  data() {
      return {
        newMovie: {
          title: this.movie.title,
          overview: this.movie.content,
        }
      }
    },

    methods: {
      ...mapActions(['createMovie', 'updateMovie']),
      onSubmit() {
        if (this.action === 'create') {
          this.createMovie(this.newMovie)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.movie.pk,
            ...this.newMovie,
          }
          this.updateMovie(payload)
        }
      },
    },
}
</script>

<style>

</style>