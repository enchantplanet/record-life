<template>
        <div class="record-list-wrap">
            <ul>
                <li v-for="item in listArrData" :key="item.id">
                    
                    <div class="detail-info-wrap">
                        <div class="img-box">
                            <img :src="item.thumbnail" alt="" />
                        </div>
                        <div class="info">
                            <div class="parent-info-box">
                                <div>
                                    father : {{item.father.name}}
                                </div>
                                <div>
                                    mother : {{item.mother.name}}
                                </div>
                            </div>
                            <ul>
                                <li>name : {{item.name}}</li>
                                <li>birth : {{item.birth}}</li>
                                <li>gender : {{item.gender}}</li>
                                <li>morph : {{item.morph}}</li>
                            </ul>
                            <common-button :url-link="item.link" text="view"></common-button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
</template>
<script>

export default {
    data: function () {
        return {
            listArrData: null
        }
   },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
             await this.$axios.$get('/json/record/record-list.json').then((response) => {
                 this.dataSet(response);
            })
            .catch((err) => {
                console.log("error : " ,err)   
            });
        },
        dataSet(data){
            this.listArrData = data.list;
        }
    }
}
</script>
<style lang="scss" src="./record-list.scss"></style>