<template lang="html">
      <div><Add ></Add><Edit @show="show"></Edit><Seach  @show="show"></Seach><StudentTable :theadtext="theadtext" :studata="studata" :currentdata="currentdata" :data_if="data_if" :show="show" :edit="edit"></StudentTable><Page :data_if="data_if" @show="show" :studata="studata"></Page></div>
</template>

<script>
import {ajax} from "@/js/tools"
import Add from "./Add"
import Edit from "./Edit"
import Seach from "./Seach"
import StudentTable from "./StudentTable"
import Page from "./Page"
import store from "@/store"
import {SHOW_STUDENT} from "@/store/mutations"
import {SHOW_DATA} from "@/store/mutations"
import {mapState} from "vuex"
export default {
    data:function(){
                return {
//                    theadtext:["姓名","学号","年龄","性别","区域"],
//                    studata:{maxpage:0},
//                    currentdata:{sex:""},
//                    data_if:{
//                        page:1,
//                        rows:5,
//                        name:"",
//                        age:"",
//                        sex:"",
//                        address:""
//                    }
                }
            },
                created:function(){//初始化数据
                    this.show();
                },
            methods:{
                show:function(new_if=this.data_if){//显示刷新表单
                    console.log(new_if);
//                    this.currentdata={};
                   store.commit("SHOW_STUDENT","");
                    ajax({
                    type:"get",
                    url:"/info/find",
                    data:new_if,
                    success:function(data){
//                        this.studata=data;
            store.commit("SHOW_DATA",data);
                        console.log(data);
                    }.bind(this)
                    })
               
                },
                edit:function(id){
                    ajax({
                    type:"get",
                    url:"/info/find",
                    data:{_id:id},
                    success:function(data){
//                        this.currentdata=JSON.parse(data);
                        store.commit("SHOW_STUDENT",JSON.parse(data));
//                        console.log(this.currentdata);
                    }.bind(this)
                })
                    }
            },
        components:{
                Add,Edit,Seach,StudentTable,Page
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