<template>
    <div>
        <div class="row">
                <div class="col-sm-2">
                    <router-link class="navbar-link" to="#">Logo</router-link>
                </div>
                <div class="col-sm-10">
                    <div class="navbar-menu">
                        <router-link class="navbar-link"  to="/home">Home</router-link>
                        <router-link class="navbar-link" to="/login">Login</router-link>
                        <router-link class="navbar-link" to="/expenlist">Expenses</router-link>
                        <router-link class="navbar-link3 shadow" to="/signup">SignUp</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
div{
    background-color: #28334AFF;
}
.navbar-menu{
    float:right;
    padding: 25px 20px;
}
.navbar-link{
    padding: 0 80px 0px 0px;
    color:#ffffff;
    font-size: 14px;
    text-decoration: none;
}
.navbar-link:hover{
    color:#808080;
}
.navbar-link3{
    background-color: #ffffff;
    padding:8px 30px;
    border-radius: 20px;
    font-size: 14px;
    color:#28334AFF;
    text-decoration: none;
}
.navbar-link3:hover{
    background-color: #28334AFF;
    color:#ffffff;
    border: 1px solid #ffffff;
    transition: 0.9s;
}
</style>