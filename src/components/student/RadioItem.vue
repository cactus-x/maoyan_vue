<template lang="html">
      <div>
                  <label><slot></slot></label>
                  <input type="radio" id="boy" value="男" :checked="sexboy" name="stusex" @click="updateValue"/><label>男</label>
                  <input type="radio" id="girl" value="女" name="stusex" @click="updateValue" :checked="sexgirl"/><label>女</label>
                  </div>
</template>

<script>
import store from "@/store"
import {SHOW_STUDENT} from "@/store/mutations";
import {mapState} from "vuex"

export default {
//    props:["currentdata"],
            data:function(){
                return {
                      sexboy:false,
                      sexgirl:false    
                }
            },
                updated:function(){
//                    console.log(this.currentdata.sex);
                    if(this.currentdata.sex=="男"){
                        this.sexboy=true,
                        this.sexgirl=false
                    }else if(this.currentdata.sex=="女"){
                        
                        this.sexboy=false,
                        this.sexgirl=true
                    }else{
//                        console.log("wosinvde");
                        this.sexboy=false,
                        this.sexgirl=false
                    }
                },
            methods:{
                updateValue:function(e){
                    console.log(e.target.value);
                    this.$emit("input",e.target.value);
                }
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