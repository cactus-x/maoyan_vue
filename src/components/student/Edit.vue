<template lang="html">
      <div>
                 <h1>修改学生信息</h1>
                 <InputItem type="text" v-model="currentdata.name">姓名:</InputItem>
                 <InputItem type="text" v-model="currentdata.id">学号:</InputItem>
                 <InputItem type="text" v-model="currentdata.age">年龄:</InputItem>
                 <RadioItem v-model="currentdata.sex" :currentdata="currentdata">性别</RadioItem>
                 <InputItem type="text" v-model="currentdata.address">籍贯:</InputItem>
                 <input type="button" value="修改" @click="editdata"/>
                 </div>
</template>

<script>
import {ajax} from "@/js/tools"
import InputItem from "./InputItem"
import RadioItem from "./RadioItem"
import {mapState} from "vuex"
export default {
//    props:["currentdata"],
            data:function(){
                return {
                }
            },
//                updated:function(){
//                  console.log(this.currentdata.sex);  
//                },
            methods:{
              editdata:function(){
                  ajax({
                    type:"get",
                    url:"/info/update",
                    data:this.currentdata,
                    success:function(data){
                        this.$emit("show");
                    }.bind(this)
                })
              }
            },
            components:{
                InputItem,RadioItem
            },
    
    computed:{
        ...mapState({
            currentdata:state => state.studentStore.currentdata
        })
    }
      
}
</script>

<style lang="css">

</style>