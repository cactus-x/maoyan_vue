<template lang="html">
      <div>
                 <h1>添加学生信息</h1>
                 <InputItem type="text" v-model="studentinfo.name">姓名:</InputItem>
                 <InputItem type="text" v-model="studentinfo.id">学号:</InputItem>
                 <InputItem type="text" v-model="studentinfo.age">年龄:</InputItem>
                 <RadioItem v-model="studentinfo.sex">性别</RadioItem>
                 <InputItem type="text" v-model="studentinfo.address">籍贯:</InputItem>
                 <input type="button" value="添加" @click="adddata"/>
                 </div>
</template>

<script>
import {ajax} from "@/js/tools"
import InputItem from "./InputItem"
import RadioItem from "./RadioItem"
export default {
    data:function(){
                return {
                   studentinfo:{
                       name:"",
                       id:"",
                       age:"",
                       sex:"",
                       address:""
                   }
                }
            },
            methods:{
              adddata:function(){
                  ajax({
                    type:"get",
                    url:"/info/add",
                    data:this.studentinfo,
                    success:function(data){
                 this.studentinfo={
                       name:"",
                       id:"",
                       age:"",
                       sex:"",
                       address:""
                   }
                    }.bind(this)
                })
                  console.log(this.studentinfo);
              }
            },
            components:{
                InputItem,RadioItem
            }
      
}
</script>

<style lang="css">

</style>