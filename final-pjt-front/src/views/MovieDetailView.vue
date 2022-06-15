<template>
  <div class="flex-column align-items-center my-5 pb-5 mx-auto"
    :style="{'background-image': 'url(' + url + movie.backdrop_path + ')',
    'background-size' : 'cover', 'width' : '95vw', 'height': '95vh'}"
    >
    <b-card class="overflow-hidden" style="max_width: 400px; margin: 4px auto; display: inline-block; margin-top: 10%; margin-left: 250px; margin-right: 250px;">
    <b-row no-gutters>
     <b-col md="1"></b-col>
     <b-col md="3">
       <b-card-img :src="url + movie.poster_path" class="my-3"></b-card-img>

     </b-col>
     <b-col md="1"></b-col>
     <b-col md ="5">
    <h1 class="fontquick">{{ movie.title }}</h1>
    <h5 class="d-flex justify-content-end">♥ {{ likeCount }}</h5>
    <!-- <p>{{ movie.release_date }}</p>
    <p>{{ movie.popularity }}</p> -->
    <hr>
    <p class="fontnav">{{ movie.overview }}</p>
    <p class="fontnav">[ 평점 ]</p>
    <p class="fontnav">{{ movie.vote_average }}</p>
    <!-- <p>{{ movie.vote_count }}</p> -->
    <p class="fontnav">[ 제공 언어 ]</p>
    <p class="fontnav">{{ movie.original_language }}</p>
    
    </b-col>
        
    <div class="d-flex mx-5">
      <score-list :scores="scores" class="d-flex justify-content-end" ></score-list>
    </div>
    <div class="d-flex justify-content-end">
      <button
        @click="likeMovie(moviePk)"
        class="btn btn-outline-danger"
      >♥</button>
    </div>
    </b-row>
    </b-card>

    <hr>
    <div class="d-flex justify-content-end">
      <p class="fontnav">관리자 권한</p>
      <router-link :to="{ name: 'movieEdit', params: { moviePk } }">
        <button class="btn btn-warning fontnav">수정</button>
      </router-link>
      |
      <button @click="deleteMovie(moviePk)" class="btn btn-danger fontnav">삭제</button>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import ScoreList from '@/components/ScoreList.vue'
  
  export default {
    name: 'MovieDetail',
    components: { ScoreList },
    data() {
      return {
        moviePk: this.$route.params.moviePk,
        url:'https://themoviedb.org/t/p/w500',
      }
    },
    computed: {
      ...mapGetters(['movie', 'scores']),
      movieImgURL () {
        return `https://themoviedb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`
      },
      likeCount() {
        return this.movie.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchMovie',
        'likeMovie',
        'deleteMovie',
      ])
    },
    created(){
      this.fetchMovie(this.moviePk)
    },
  }
</script>

<style>

</style>