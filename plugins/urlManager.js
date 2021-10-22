import Vue from 'vue'

export default ({ app }, inject) => {
    let url = {
        page: {
            recordView: '/record/record-detail',
            breeders: '/breeders/breeders-list',
            store:'/store/store-list',
            book:'/book/book-list',
            list:'/record/record-list'

        },
        rest :{
            recordList: 'api/record/record-list',
            recordDetail: 'api/record/record-detail'
        }
    }
    inject('urlManager', Vue.observable(url))
}