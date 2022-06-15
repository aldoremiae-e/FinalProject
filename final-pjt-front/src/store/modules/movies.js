//import router from '@/router'
import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'
//import _ from 'lodash'

export default {
  state: {
    movies: [],
    movie: {},
    scores: [],
    recomends: [],
  },
  getters: {
    movies: state => state.movies,
    movie: state => state.movie,
    scores: state => state.scores,
    recomends: state => state.recomends,
    //isMovie: state => !_.isEmpty(state.movie),
  },
  mutations: {
    //HomeView
    FETCH_MOVIES: (state, movies) => state.movies = movies,
    FETCH_MOVIE: (state, movie) => state.movie = movie,
    SET_MOVIE_SCORES: (state, scores) => state.scores = scores,
    FETCH_RECOMEND: (state, movies) => state.recomends = movies,
    },
  actions: {
    fetchMovies ({ commit, getters }) {
      // 영화 목록 받아오기
      axios ({
        url: drf.movies.movies(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => commit('FETCH_MOVIES', res.data))
      .catch(err => console.error(err.response))
    },
    fetchMovie ({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.movie(moviePk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('FETCH_MOVIE', res.data))
        .catch(err => {
          console.log('dfd')
          console.error(err.response)
          if (err.response.status === 404){
            router.push({name: 'NotFound404'})
          }
        })
    },
    likeMovie({ commit, getters }, moviePk) {
      axios({
        url: drf.movies.likeMovie(moviePk),
        method: 'post',
        headers: getters.authHeader,
      })
      .then(res => commit('FETCH_MOVIE', res.data))
      .catch(err => console.error(err.response))
    },
    createMovie({ commit, getters }, movie) {
      if (confirm('관리자가 아니라면 생성되지 않습니다.')) {
        axios({
          url: drf.movies.movies(),
          method: 'post',
          data: movie,
          headers: getters.authHeader,
        })
        .then(res => {
          commit('FETCH_MOVIE',res.data)
          router.push({
            name: 'movies',
            params: { moviePk: getters.movie.pk }
          })
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 400){
            router.push({name: 'home'})
          }
        })
      }
    },
    updateMovie({ commit, getters }, { pk, title, overview }) {
      if (confirm('관리자가 아니라면 수정되지 않습니다.')) {
        axios({
          url: drf.movies.movie(pk),
          method: 'put',
          data: { title, overview },
          headers: getters.authHeader,
        })
        .then(res => {
          commit('FETCH_MOVIE', res.data)
          router.push({
            name: 'movie',
            params: { moviePk: getters.movie.pk }
          })
        })
        .catch(err => {
          //console.error(err.response)
          if (err.response.status === 404){
            router.push({name: 'home'})
          }
        })
      }
    },
    deleteMovie({ commit, getters }, moviePk) {
      if (confirm('관리자가 아니라면 삭제되지 않습니다.')) {
        axios({
          url: drf.movies.movie(moviePk),
          method: 'delete',
          headers: getters.authHeader,
        })
        .then(() => {
          commit('FETCH_MOVIE', {})
          router.push({ name: 'movies' })
        })
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 400){
            router.push({name: 'home'})
          }
        })
      }
    },
    //scores
    createScore({ commit, getters }, { moviePk, score, review }) {
      const body = { score, review }
      
      axios({
        url: drf.movies.scores(moviePk),
        method: 'post',
        data: body,
        headers: getters.authHeader,
      })
      .then(res => {
        commit('SET_MOVIE_SCORES', res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err.response))
    },
    fetchRecomendMovies ({ commit, getters }) {
      // 영화 목록 받아오기
      axios ({
        url: drf.movies.recomend(),
        method: 'get',
        headers: getters.authHeader,
      })
      .then(res => {
        console.log(res)
        commit('FETCH_RECOMEND', res.data)})
      .catch(err => console.error(err.response))
    },
    
  },
}