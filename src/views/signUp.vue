<template>
  <div>
        <h4>SIGNUP</h4>
        <form class="">
            <div class=" input form-group">
                <label>USERNAME</label>
                <input class="form-control"  v-model="username" placeholder="Enter your username">
            </div>
            
            <div class="input form-group">
                <label>EMAIL</label>
                <input class="form-control" type="email" v-model="email" placeholder="Enter your Email" required>
            </div>
            <div class="input form-group">
                <label>PASSWORD</label>
                <input class="form-control" type="password" v-model="password" placeholder="Enter your password" required>
            </div>
            <div class="input form-check">
                <input class="form-check-input" type="checkbox">
                <label>I agree with Terms and Conditions</label>
            </div>
            <p>Already have an account 
                <router-link to='/login'>Login</router-link>
            </p>
            <button type="button" class="btn shadow  my-button"  @click="signUp">SignUp</button>
        </form>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'signUp',

  data(){
      return{
          username:'',
          email:'',
          password:'',
          error:null
      }
      
  },
  methods:{
        signUp: function () {

            console.log({username:this.username, email:this.email, password:this.password})
            // All future sign-in request now include tenant ID.
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(data => {
                alert('Your account has been created!')
                data.user
                .updateProfile({
                    displayName: this.username
                    
                })
                .then(() => {});
            })
            .catch(err => {
                this.error = err.message;
            });
            this.email=''
            this.password=''
            this.username=''
        }
          
    }
  
}
</script>
<style scoped>
.input{
    padding-bottom: 10px;
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
    padding:0 10px;
    text-align:center;
    color:#4d4d4d;
}
</style>

