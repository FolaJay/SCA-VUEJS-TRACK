<template>
   <main>
       <sidebar :isPanelOpen="isPanelOpen"/>
       <div :class="`${spaceLeft}`">
           <navbar v-on:toggle="toggleSidebar"/>
           <div class='app-layout_slot'>
               <slot/>
           </div>
       </div>
    </main> 
</template>
<script>
import sidebar from './sidebar'
import navbar  from './navbar'

export default {
    name:'layout',
    components: {
        navbar,
        sidebar,
    },
    data(){
        return {
            isPanelOpen: false,
            spaceLeft:""
        }
    },
    methods: {
        toggleSidebar() {
            this.isPanelOpen =  !this.isPanelOpen
            if(this.isPanelOpen){
                this.spaceLeft = "space-left"
            }else{
                this.spaceLeft = ""
            }
        }
    }
}
</script>
<style>
.space-left{
    padding-left:200px;
}
</style>