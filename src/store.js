import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        drawingColor:'black',
        lineDotVolume:30
    },
    mutations:{
        drawingColor(state,payload){
            state.drawingColor=payload
        }
    }
})

export default store