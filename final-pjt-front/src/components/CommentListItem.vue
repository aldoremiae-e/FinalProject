<template>
  <li class="comment-list-item">
    <router-link class="fontnav" :to="{ name: 'profile', params: { username: comment.user.username } }">
      {{ comment.user.username }}
    </router-link>: 
    
    <span class="fontnav" v-if="!isEditing">{{   payload.content }}</span>

    <span class="fontnav" v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button @click="onUpdate" class="btn btn-outline-primary btn-sm">Update</button> |
      <button @click="switchIsEditing" class="btn btn-outline-danger btn-sm">Cancle</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
    <div>      <button @click="switchIsEditing" class="btn btn-outline-secondary btn-sm">Edit</button> |
      <button @click="deleteComment(payload)" class="btn btn-outline-danger btn-sm">Delete</button>
    </div>

    </span>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        articlePk: this.comment.article,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
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