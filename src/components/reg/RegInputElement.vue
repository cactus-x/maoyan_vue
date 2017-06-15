<template lang="html">
                  <div>
                  <label><slot></slot></label>
                  <input :type="type":value="value"@input="updateValue"@blur="validate"/>
                  <span :style="_style">{{info}}</span>
                  </div>
</template>

<script>
export default {
    props:["type","info","validate","value","_style"],
            data:function(){
                return {

                }
            },
            methods:{
                updateValue:function(e){
                    this.$emit("input",e.target.value);
                }
            }
}
</script>

<style lang="css">
</style>
