<template>
  <div>
    <layout>
      {{ message }}
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