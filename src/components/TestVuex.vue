<template lang="html">
  <div class="">
      <input type="button" name="name" value="计数" @click="addCount"><span>{{myCount}}</span>
  </div>
</template>

<script>
import store from "@/store"
import {mapState} from "vuex"
export default {
    methods:{
        addCount(){
            store.commit("addCount");
            // console.log(this.$store.state.count);

        }
    },
    computed:{
        ...mapState({
            myCount:state => state.count
        })
    }
}
</script>

<style lang="css">
</style>
