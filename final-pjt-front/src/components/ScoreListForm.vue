<template>
  <form @submit.prevent="onSubmit" class="score-list-form mx-3">
    <label class="fontnav" for="score">평점: </label>
    <input type="number" id="score" min="0" max="10" step="1"
    v-model="score" required>
    <input type="text" id="review" v-model="review" required placeholder="간단한 리뷰를 적으세요.">
    <button class="btn btn-primary btn-sm">☆</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ScoreListForm',
  data() {
    return {
      review: '',
      score: 0
    }
  },
  computed: {
    ...mapGetters(['movie']),
  },
  methods: {
    ...mapActions(['createScore']),
    onSubmit() {
      console.log('hello')
      this.createScore({ moviePk: this.movie.id, score: this.score, review: this.review,})
      this.score = 0
      this.review = ''
      
    }
  }
}
</script>

<style>
.comment-list-form {
  border: 1px solid black;
  margin: 1rem;
  padding: 1rem;
}
</style>