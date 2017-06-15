<template lang="html">
      <div>
                 <h1>查询学生信息</h1>
                 <select  @change="seach_text">
                   <option value="姓名">姓名</option>
                   <option value="学号">学号</option>
                   <option value="年龄">年龄</option>
                   <option value="性别">性别</option>
                   <option value="籍贯">籍贯</option>
                 </select>
                 <input type="text" v-model="val"/>
                 <input type="button" value="查询" @click="seachdata"/>
                 </div>
</template>

<script>
import {ajax} from "@/js/tools"
import {mapState} from "vuex"
export default {
//    props:["data_if"],
            data:function(){
                return {
                   name:"",
                   val:""
                             
                }
            },
            methods:{  
              seachdata:function(){
                  this.data_if.name="";
                  this.data_if.page=1;
                  this.data_if.id="";
                  this.data_if.age="";
                  this.data_if.sex="";
                  this.data_if.address="";
                  if(this.name=="姓名"){
                      this.data_if.name=this.val;
                  }else if(this.name=="学号"){
                      this.data_if.id=this.val;
                  }else if(this.name=="年龄"){
                      this.data_if.age=this.val;
                  }else if(this.name=="性别"){
                      this.data_if.sex=this.val;
                  }else if(this.name=="籍贯"){
                      this.data_if.address=this.val;
                  }
                  this.$emit("show",this.data_if);
              },
                  seach_text:function(e){
                      console.log(e.target.options[e.target.selectedIndex].value);
                      this.name=e.target.options[e.target.selectedIndex].value;
                  }
            },
            components:{
//                InputItem,RadioItem
            },
    computed:{
        ...mapState({
            data_if:state => state.studentStore.data_if
        })
    }
      
}
</script>

<style lang="css">

</style>