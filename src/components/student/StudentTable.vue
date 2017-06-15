<template lang="html">
     <table border=1>
            <Th_element></Th_element>
            <Td_element @show="show"  @edit="edit"></Td_element>
            </table> 
</template>

<script>
import {ajax} from "@/js/tools"
import Th_element from "./Th_element"
import Td_element from "./Td_element"
//import {mapState} from "vuex"
export default {
    props:["show","edit"]
           ,
            methods:{
            },
            components:{
                Th_element,Td_element
            }
//    ,
//    computed:{
//        ...mapState({
//            theadtext:state => state.studentStore.theadtext,
//            studata:state => state.studentStore.studata,
//            currentdata:state => state.studentStore.currentdata,
//            data_if:state => state.studentStore.data_if
//        })
//    }
      
}
</script>

<style lang="css">

</style>