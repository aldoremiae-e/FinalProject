<template>
  <div>
    
    <h1 class="d-flex justify-content-center fontquick">Login</h1>

    <account-error-list v-if="authError"></account-error-list>

<div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-8 mx-auto my-2">
        <form @submit.prevent="login(credentials)" v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
          <div class="d-flex justify-content-center my-2">
            <label for="username"></label>
            <input v-model="credentials.username" type="text" id="username" placeholder="ID" required />
          </div>

          <div class="d-flex justify-content-center">
            <label for="password"></label>
            <input v-model="credentials.password" type="password" id="password" placeholder="Password" required />
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary my-3">Login</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
  computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
  }
</script>

<style scoped>
  .card {
    padding: 20px;
  }
</style>
