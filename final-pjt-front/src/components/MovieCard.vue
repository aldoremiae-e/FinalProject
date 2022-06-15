<template>
  <div class="col mb-5">
    
    <div class="card item">
      <router-link :to="{ name: 'movieDetail', params: { moviePk: movie.id }}">
        <img :src="movieImgURL" class="card-img-top" alt="movieImg">  
      </router-link>
      <div class="card-body d-flex justify-content-center align-item-center p-2">
        <h4 class="card-title fontquick">{{ movie.title }}</h4>
        <!--<p class="card-text overflow">{{ movie.overview }}</p>-->
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: Object,
  },
  computed : {
    movieImgURL () {
      return `https://themoviedb.org/t/p/w600_and_h900_bestv2${this.movie.poster_path}`
    },
  }
}
</script>

<style>
.overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
}
.fontquick {
  font-family: 'Do Hyeon', sans-serif;
}
</style>