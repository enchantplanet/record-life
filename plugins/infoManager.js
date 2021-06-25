import Vue from 'vue'

export default ({ app }, inject) => {
    let info = {
        weightUnit: "g",
    }
    inject('infoManager', Vue.observable(info))
}