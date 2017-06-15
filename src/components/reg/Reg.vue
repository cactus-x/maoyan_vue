<template lang="html">
                  <div>
                 <h1>用户注册</h1>
                 <RegInputElement type="text" v-model="username.value" :validate="validateUsername" :info="username.info" :_style="username._style">账号:</RegInputElement>
                 <RegInputElement type="password" v-model="password.value" :validate="validatepassword" :info="password.info">密码:</RegInputElement>
                 <RegInputElement type="password" v-model="ispassword.value" :validate="validateispassword" :info="ispassword.info">确认密码:</RegInputElement>
                 <input type="button" value="注册" @click="reginfo"/>
                 </div>
</template>

<script>
import {ajax} from "@/js/tools"
import RegInputElement from "./RegInputElement"
export default {
    data:function(){
                return {
                    username:{
                        value:'',
                        _style:{},
                        info:'',
                        isok:false
                        
                    },
                        password:{
                        value:'',
                        _style:{},
                        info:'',
                        isok:false
                    },ispassword:{
                        value:'',
                        _style:{},
                        info:'',
                        isok:false
                    }
                }
            },
            methods:{
                validateUsername:function(){
                    if(/^\w{6,20}$/.test(this.username.value)){
                        this.username.info = "√";
                        this.username._style = {
                            color:"green"
                        };
                        
                    }else{
                        this.username.info = "格式不正确";
                        this.username._style = {
                            color:"red"
                        };
                    }
                },
                     validatepassword:function(){
                    if(/^\w{6,20}$/.test(this.password.value)){
                        this.password.info = "√";
                    }else{
                        this.password.info = "格式不正确"
                    }
                },
                     validateispassword:function(){
                    if(this.password.value===this.ispassword.value){
                        this.ispassword.info = "√";
                    }else{
                        this.ispassword.info = "格式不正确"
                    }
                },
                reginfo:function(){
                    console.log(this.username.value,this.password.value);
                }
            },
            components:{
                RegInputElement
            }
}
</script>

<style lang="css">

</style>
