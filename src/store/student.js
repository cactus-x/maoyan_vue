import {
    SHOW_DATA,
    SHOW_STUDENT,
    SHOW_TABLETH,
    SHOW_SEARCH
} from "./mutations";
const studentStore = {
    state:{
        theadtext:["姓名","学号","年龄","性别","区域"],
        studata:{maxpage:0},
        currentdata:{sex:""},
        data_if:{
                  page:1,
                  rows:5,
                  name:"",
                  age:"",
                  sex:"",
                  address:""
                    }
    },
    mutations:{
        [SHOW_DATA](state,studata){
            state.studata = studata;
        },
        [SHOW_STUDENT](state,currentdata){
            state.currentdata = currentdata;
        },
        [SHOW_TABLETH](state,theadtext){
            state.theadtext = theadtext;
         },
        [SHOW_SEARCH](state,data_if){
            state.data_if = data_if;
         }
    }
}
export {studentStore as default}
