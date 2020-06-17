<template>
  <div>
    <sidebar/>
    <div>
      <h2>{{ message }}</h2>
      <div>
        <!-- <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div> -->
      </div>
    </div>
  </div>
</template>
<script>
// import sidebar from "../components/sidebar";
import sidebar from "../components/sidebar";

export default {
  name: 'dashboard',
  data() {
    return {
      message: 'Dashboard'
    }
  },
  components: {
    sidebar,
  },
  created() {

  }
}
</script>