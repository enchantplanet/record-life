import Vue from 'vue'

export default ({ app }, inject) => {
    let url = {
        page: {
            recordView: '/record/record-detail'
        },
        rest :{
            recordList: '/json/record/record-list.json',
            recordDetail: '/json/record/record-detail.json'
        }
    }
    inject('urlManager', Vue.observable(url))
}