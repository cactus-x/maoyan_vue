import Vue from "vue";
import Vuex from "vuex";
import studentStore from "./student"
// const SHOW_DATA = "SHOW_DATA";
// const SHOW_STUDENT = "SHOW_STUDENT";

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        count:0

    },
    modules:{
        studentStore
    },

    mutations:{
        addCount(state){
            state.count++;
        }
    }
});

export {store as default}
