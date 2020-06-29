<template>
    <div class="body">
        <div class="form-div shadow">
            <h4>LOGIN</h4>
            <form @submit.prevent="logIn">
                <div class="input form-group" >
                    <label>EMAIL</label>
                    <input class="form-control" type="email" v-model="loginForm.email" placeholder="Enter your Email" required/>
                </div>
                <div class="input form-group">
                    <label>PASSWORD</label>
                    <input class="form-control" type="password" v-model="loginForm.password" placeholder="Enter your password" required/>
                </div>
                <button type="button" class="btn shadow my-button" @click="logIn">
                    Login <img src="../assets/5.gif"  alt="" v-if="loading">
                </button>
                <div>
                    <p>Forgot Password</p>
                    <p><router-link to='/signup'>Create an Account</router-link></p>
                </div>
                
            </form>
        </div>
    </div>
</template>

                
<script>
require('../firebaseConfig.js')
import firebase from 'firebase'

export default {
     name:'login',
    data() {
        return{
            loginForm:{
                email:'',
                password:''
            },
            loading:false,
            error:null
        }
    },
    methods:{
        logIn() {
            this.loading = !this.loading
            firebase.auth()
            .signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
            .then(() => {
                this.$router.push({name: "dashboard"});
            }).catch(err => {
                console.log(err)
                this.error = err.message;
            });
        } 
    }  
}
</script>
<style scoped>
.body{
    background-image: linear-gradient(to bottom right, #d76d77, #ffaf7b);
    padding-top:100px ;
    height: 100vh;
}
.input{
    padding: 10px;
    text-align: left; 
    
}
.my-button{
    background-color: rgb(53, 48, 48);
    border: 1px solid rgb(53, 48, 48);
    border-radius: 20px;
    padding:5px 40px;
    margin-left:110px;
    margin-top:20px;
    margin-bottom:20px;
    color: #ffffff;
    
}
.my-button:hover{
    background-color: #ffffff;
    border: 2px solid #ffaf7b;
    color:#4d4d4d;
    transition: 0.7s;
}
h4{
    
    text-align: center;
    color:#ffaf7b;
}
div p{
    
    text-align:center;
    color:#4d4d4d;
    display: inline-block;
    margin-left:50px;
    margin-top:20px;
}
.form-div{
  background-color: #ffffff;
  width:400px;
  height: 400px;
  padding: 25px 35px;
  margin:0 auto;  
  border-radius: 5px;
}
</style>