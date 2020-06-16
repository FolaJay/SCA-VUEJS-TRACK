<template>
    <div>
        <div class="row">
                <div class="col-sm-2">
                    <router-link class="navbar-link" to="#">Logo</router-link>
                </div>
                <div class="col-sm-10">
                    <div class="navbar-menu">
                        <router-link class="navbar-link"  to="/home">Home</router-link>

                        <router-link class="navbar-link" to="/login" v-if="!user.loggedIn">Login</router-link>
                        <router-link class="navbar-link" to="/" @click.native="logout" v-else>Logout</router-link>

                        <router-link class="navbar-link3 shadow" to="/signup" v-if="!user.loggedIn">SignUp</router-link>
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            this.$store.commit('SET_LOGGED_OUT');
            this.$router.push('/login');
        }
    },
    computed: {
        user() {
            console.log(this.$store.getters.user);
            return this.$store.getters.user;
        }
    },
    watch: {
        user(value) {
            if(value !== null) return value;
        }
    },
    mounted() {
        return this.$store.getters.user;
    }
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