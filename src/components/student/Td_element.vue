<template lang="html">
      <tbody>
                          <tr v-for="trtext in studata.rows">
                          <td>{{trtext.name}}</td>
                          <td>{{trtext.id}}</td>
                          <td>{{trtext.age}}</td>
                          <td>{{trtext.sex}}</td>
                          <td>{{trtext.address}}</td>
                          <td>
                          <input type="button" value="删除" @click="del" :id="trtext._id">
                          <input type="button" value="修改" @click="edit" :id="trtext._id">
                          </td>
                          </tr>
                          </tbody>
</template>

<script>
import {ajax} from "@/js/tools"
//import InputElement from "./RegInputElement"
import store from "@/store"
import {mapState} from "vuex"
import {SHOW_SEARCH} from "@/store/mutations"
export default {
//    props:["studata","data_if"],
            data:function(){
                return {
                    
                }
            },
            methods:{
                del:function(e){
                    ajax({
                    type:"get",
                    url:"/info/del",
                    data:{_id:e.target.id},
                    success:function(data){
                       this.$emit("show");
                    }.bind(this)
                })
                },
                edit:function(e){
                       this.$emit("edit",e.target.id);
                }
            },
            components:{
            },
    computed:{
        ...mapState({
            studata:state => state.studentStore.studata,
            data_if:state => state.studentStore.data_if
            
        })
    }
      
}
</script>

<style lang="css">

</style>