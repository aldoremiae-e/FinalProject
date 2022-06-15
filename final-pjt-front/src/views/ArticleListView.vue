<template>
  <div class="container">
    <h1 class="fontquick">게시판</h1>
    <hr>
    <ul>
      <li v-for="article in articles" :key="article.pk">
        <!-- 작성자 -->
        <div>
          <h4>       
            <router-link class="fontnav"
          :to="{ name: 'article', params: {articlePk: article.pk} }">
          {{ article.title }} ({{ article.comment_count }})
            </router-link>
          </h4>
          
        </div>
        <div>
          <h4 >♡ {{ article.like_count }}</h4>
        </div>

        작성자 : {{ article.user.username }}
        <hr>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ArticleList',
    computed: {
      ...mapGetters(['articles'])
    },
    methods: {
      ...mapActions(['fetchArticles'])
    },
    created() {
      this.fetchArticles()
    },
  }
</script>

<style></style>
