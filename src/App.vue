<template>
  <div>
      <router-view/>
      <alert v-if="showModal" :show="showModal"/>
  </div>
</template>

<script>

    import Alert from "./components/Alert";
    export default {
        name: 'App',
        components: {
            'alert': Alert
        },
        computed: {
            showModal() {
                return this.$store.getters.show_modal
            }
        },
        watch: {
            showModal: val => val || ''
        }
    }
</script>
<style>
*{
  font-size: 12px; 
  overflow:hidden;
}

</style>

