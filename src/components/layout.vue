<template>
   <main>
       <sidebar :isPanelOpen="isPanelOpen"/>
       <div class='app-layout'>
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
            isPanelOpen: false
        }
    },
    methods: {
        toggleSidebar() {
            this.isPanelOpen =  !this.isPanelOpen
        }
    }
}
</script>
<style>
.app-layout  {
    
 
}
</style>