<template>
    <div>
        <button
                  type="button"
                  class="btn shadow my-button" 
          >{{title}}
             <img src="../assets/5.gif"  alt="" v-if="loading">
          </button>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Save'
        },
    },
    data(){
        return{
            loading:false,
        }
    },
    methods:{
        ifLoading(){
            this.loading = !this.loading
        }
    }
}
</script>
<style scoped>
.my-button {
  background-color: rgb(53, 48, 48);
  border: 1px solid rgb(53, 48, 48);
  border-radius: 20px;
  padding: 5px 40px;
  margin-left: 110px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #ffffff;
}
.my-button:hover {
  background-color: #ffffff;
  border: 2px solid #ffaf7b;
  color: #4d4d4d;
  transition: 0.7s;
}
</style>