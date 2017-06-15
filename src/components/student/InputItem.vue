<template lang="html">
      <div>
                  <label><slot></slot></label>
                  <input :type="type" :value="value" @input="updateValue"/>
                  </div>
</template>

<script>
export default {
    props:["type","value"],
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
