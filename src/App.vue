<template>
  <div id="app">
    <navbar></navbar>
    
    <div class="inner-app shadow">
      <div class="image-div">
        <h3 class="link">
          <router-link class="link" to='/signup'>SignUp</router-link>
          <router-link class="link"  to='/login'>Login</router-link>
        </h3>
      </div>
      <div class="form-div">
        <router-view />
      </div> 
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>
<style>
*{
  text-decoration: none;
}
#app{
  background-image: linear-gradient(to bottom right, #d76d77, #ffaf7b);
  padding:50px;
  font-size: 12px;
  height: 100vh; 
}
.inner-app{
  margin: 0 auto;
   width: 800px;
   height: 500px;  
}
.image-div{
  /* background-image:url('assets/imag2.png'); */
  background-color:#ffaf7b ;
  width:50%;
  height: 500px;
  display: inline-block;
  /* background-repeat: no-repeat; */
  
}
.form-div{
  background-color: #ffffff;
  width:50%;
  float:right;
  height: 500px;
  padding:0 25px;
  
  
}
.link{
  text-decoration: none;
  list-style-type: none;
  color: black;
  padding:30px;
  margin-top:20px;
}
.link:hover{
  text-decoration: none;
  list-style-type: none;
  color: #ffffff;
}

</style>

