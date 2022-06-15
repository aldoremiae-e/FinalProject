<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid align-items-center">
      <div class="navbar-brand">
        <router-link class="fontnav" :to="{ name: 'home' }">VVWorld</router-link>
      </div>
      <div class="navbar-navbar-collapse">
          <router-link class="fontnav" :to="{ name: 'articles' }">Article</router-link> |
      </div>
      <div class="navbar-navbar-collapse">
          <router-link class="fontnav" :to="{ name: 'recomend' }">&nbsp;Recommend</router-link>
      </div>
      <div class="collapse navbar-collapse flex-row-reverse " id="navbarNav">
        
        <ul class="navbar-nav">  
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="fontnav" :to="{ name: 'login' }">Login</router-link> |
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link class="fontnav" :to="{ name: 'signup' }">Signup</router-link> |
          </li>

          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="fontnav" :to="{ name: 'articleNew' }">New</router-link> |
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="fontnav" :to="{ name: 'profile', params: { username } }">
              {{ currentUser.username }}'s Page
            </router-link> |
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="fontnav" :to="{ name: 'logout' }">Logout</router-link> |
          </li>
        </ul>
      </div>
    </div>
    
  </nav>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'NavBar',
    computed: {
      ...mapGetters(['isLoggedIn', 'currentUser']),
      username() {
        return this.currentUser.username ? this.currentUser.username : 'guest'
      },
    },
  }
</script>

<style>
.fontnav {
  font-family: 'NanumSquareAcb';
}
</style>
