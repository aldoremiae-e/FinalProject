<template>
  <div class="container">
    <h1 class="fontquick">PAGE {{ profile.username }}</h1>

    <h3 class="fontnav">{{ profile.username }}님이 작성한 글</h3>
    <ul>
      <li v-for="article in profile.articles" :key="article.pk">
        <router-link class="fonth4" :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <h3 class="fontnav">{{ profile.username }}님이 좋아요 한 글</h3>
    <ul>
      <li v-for="article in profile.like_articles" :key="article.pk">
        <router-link class="fonth4" :to="{ name: 'article', params: { articlePk: article.pk } }">
          {{ article.title }}
        </router-link>
      </li>
    </ul>

    <h3 class="fontnav">{{ profile.username }}님이 좋아요 한 영화</h3>
    
      <!-- <div class="card item">
      <router-link :to="{ name: 'movieDetail', params: { moviePk: movie.id }}">
        <img :src="movieImgURL" class="card-img-top" alt="movieImg">  
      </router-link>
        </div> -->
        <div class="row mb-5">
          <div v-for="movie in profile.like_movies" :key="movie.pk" class="card item col-2 col-md-3 mx-2">
            <router-link :to="{ name: 'movieDetail', params: { moviePk: movie.id } }">
              <img :src="`https://themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`" class="card-img-top" alt="movieImg">  
            </router-link>
          </div>
        </div>
           
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile','movie']),
    },
  
  methods: {
    ...mapActions(['fetchProfile', 'fetchMovie'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)

  },
}
</script>
