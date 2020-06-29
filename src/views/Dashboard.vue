<template>
  <div>
    <layout>
        <div class="container">
          <h1>Welcome</h1>
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4"></div>
            <div class="col-sm-4"></div>
          </div>
        </div>
    </layout>
  </div>
</template>
<script>
import layout  from '../components/layout'
export default {
  name: 'dashboard',
  data() {
    return {
      message: 'Dashboard'
    }
  },
  components: {
    layout
  },
  created() {

  }
}
</script>