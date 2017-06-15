<template lang="html">
      <div><input type="button" value="上一页" @click="uppage"/><input type="button" value="下一页" @click="downpage"/></div>
</template>

<script>
import {ajax} from "@/js/tools"
import Th_element from "./Th_element"
import Td_element from "./Td_element"
import {mapState} from "vuex"
export default {
//    props:["data_if","studata"]
//           ,
    
            methods:{
                uppage:function(){
                    if(this.data_if.page>1){
                        this.data_if.page--;
                    this.$emit("show",this.data_if);
                    }
                    
                },
                downpage:function(){
                    if(this.studata.maxpage>this.data_if.page){
                        this.data_if.page++;
                    this.$emit("show",this.data_if);
                    }
                }
            },
            components:{
                Th_element,Td_element
            },
     computed:{
        ...mapState({
            data_if:state => state.studentStore.data_if,
            studata:state => state.studentStore.studata
        })
    }
      
}
</script>

<style lang="css">

</style>