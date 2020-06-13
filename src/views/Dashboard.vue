<template>
  <div class="container">
    <div>
      <div>
        <div>
          <h2>Dashboard</h2>
          <div>
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
require('../firebaseConfig.js')

// import { user } from '../firebaseConfig';
export default {
  
  computed: {
    // map `this.user` to `this.$store.getters.user`

    // a helper that simply maps store getters to local computed properties.
    ...mapGetters({
      user: "user"
    })
  }

}