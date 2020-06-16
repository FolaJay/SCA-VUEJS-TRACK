<template>
    <div>
        <div class="row" >
            <div class="col-sm-2">
                <div class="sidebar-menu">
                    <router-link class="navbar-link" to="#">Logo</router-link>
                    <h3>Hello</h3>
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
.sidebar-menu{
    border-right: 5px solid red;
    background-color: blueviolet;
    position: absolute; bottom: 10%;
    height: 100vh;
}
</style>