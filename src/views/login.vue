<template>
    <div>
        <h4>LOGIN</h4>

        <form @submit.prevent="logIn">
            <div class="input form-group" >
                <label>EMAIL</label>
                <input class="form-control" type="email" v-model="loginForm.email" placeholder="Enter your Email" required>
            </div>
            <div class="input form-group">
                <label>PASSWORD</label>
                <input class="form-control" type="password" v-model="loginForm.password" placeholder="Enter your password" required>
            </div>
            <button type="button" class="btn shadow my-button" @click="logIn">Login</button>
            <div>
                <p>Forgot Password</p>
                <p>Create an Account</p>
            </div>
            
        </form>
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
            error:null
        }
    },
    methods:{
        logIn:function(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password)
            .then(() => {
                this.$router.replace({name: "Dashboard"});
            }).catch(err => {
                console.log(err)
                this.error = err.message;
            });
        } 
    }  
}
</script>
<style scoped>
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
}
h4{
    margin-top:30px;
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
</style>