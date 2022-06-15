<template>
  <div class="container">
    <h1 class="fontquick">{{ article.title }}</h1>
    <h5 class="d-flex justify-content-end">♥ {{ likeCount }}</h5>
    <p class="fontnav">
      {{ article.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div v-if="isAuthor">
      <router-link :to="{ name: 'articleEdit', params: { articlePk } }">
        <button class="btn btn-outline-secondary btn-sm">Edit</button>
      </router-link>
      |
      <button @click="deleteArticle(articlePk)" class="btn btn-outline-danger btn-sm">Delete</button>
    </div>

    <!-- Article Like UI -->

    <div>
      <button
          @click="likeArticle(articlePk)"
          class="btn btn-outline-danger btn-sm"
        >♥</button>
    </div>

    <hr />
    <h4 class="fontquick">Comment</h4>
    <!-- Comment UI -->
    <comment-list :comments="article.comments"></comment-list>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'



  export default {
    name: 'ArticleDetail',
    components: { CommentList },
    data() {
      return {
        articlePk: this.$route.params.articlePk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'article']),
      likeCount() {
        return this.article.like_users.length
      }
    },
    methods: {
      ...mapActions([
        'fetchArticle',
        'likeArticle',
        'deleteArticle',
      ])
    },
    created() {
      this.fetchArticle(this.articlePk)
    },
  }
</script>

<style></style>
