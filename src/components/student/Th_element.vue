<template lang="html">
      <thead><tr><th v-for="thtext in theadtext">{{thtext}}</th></tr></thead>
</template>

<script>
import store from "@/store"
import {mapState} from "vuex"
export default {
//    props:["theadtext"],
            data:function(){
                return {
                }
            },
            methods:{
            },
            components:{
            },
            computed:{
               ...mapState({
            theadtext:state => state.studentStore.theadtext
                })
            }
      
}
</script>

<style lang="css">

</style>