<template>
  <div>
    <li class="score-list-item">

    <span class="fontnav" v-if="!isEditing">{{ payload.score }} | {{payload.review}}&nbsp;&nbsp;</span>

    <span v-if="isEditing">
      <input type="text" v-model="payload.score">
      <button @click="onUpdate" class="btn btn-outline-primary btn-sm">Update</button>&nbsp;
      <button @click="switchIsEditing" class="btn btn-outline-danger btn-sm">Cancle</button>
    </span>

    <span v-if="currentUser.username === score.user.username && !isEditing">
      <button @click="switchIsEditing" class="btn btn-outline-secondary btn-sm">&nbsp;Edit&nbsp;</button>&nbsp;
      <button @click="deleteComment(payload)" class="btn btn-outline-danger btn-sm">Delete</button>
    </span>
  </li>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ScoreListItem',
  props: { score: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        moviePk: this.score.movie,
        scorePk: this.score.pk,
        score: this.score.score,
        review: this.score.review,
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateScore', 'deleteScore']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateScore(this.payload)
      this.isEditing = false
    }
  },
}
</script>

<style>
/* .comment-list-item {
  border: 1px solid green;

} */
</style>