<template>
        <div class="record-detail-wrap" v-if="detailData">
            <div class="info-parent">
                <div class="father">
                    <span class="name">{{detailData.father.name}}</span>
                    <div class="img-box">
                        <img :src="detailData.father.thumbnail" alt="" />
                    </div> 
                </div>
                <div class="mother">
                    <span class="name">{{detailData.mother.name}}</span>
                    <div class="img-box">
                        <img :src="detailData.mother.thumbnail" alt="" />
                    </div>
                </div>
            </div>
            <div class="info-detail">
                <div class="img-box">
                    <ul>
                        <li v-for="item in detailData.thumbnail" :key="item.thumbnail">
                            <img :src="item" alt="" />
                        </li>
                    </ul>
                </div>
                <ul class="info-list">
                    <li>
                        <div class="title">name</div><div class="desc">{{detailData.name}}</div>
                    </li>
                    <li>
                        <div class="title">birth</div><div class="desc">{{detailData.birth}}</div>
                    </li>
                    <li>
                        <div class="title">gender</div><div class="desc">{{detailData.gender}}</div>
                    </li>
                    <li>
                        <div class="title">morph</div><div class="desc">{{detailData.morph}}</div>
                    </li>
                    <li>
                        <div class="title">weight</div>
                        <div class="desc">
                            <ul class="weight-list">
                                <li  v-for="item in detailData.weight" :key="item.date">
                                    {{item.date}}   :   {{item.weight}}g
                                </li>
                            </ul>
                            
                        </div>
                    </li>
                </ul>
                
            </div>
            <p class="info-report">{{detailData.report}}</p>
        </div>
</template>
<script>

export default {
    data: function () {
        return {
            detailId:null,
            detailData: null
        }
   },
    mounted() {
        this.detailId = this.$route.query.recordData;
        this.loadList();
    },
    methods: {
        async loadList() {
            let option = {
                method: 'get',
                url: this.$urlManager.rest.recordDetail,
                parmas : {ID:this.detailId}
            }
            
             await this.$axios(option).then((response) => {
                 this.dataSet(response.data);
            })
            .catch((err) => {
                console.log("error : " ,err)   
            });
        },
        dataSet(data){
            let _this = this;
            data.list.forEach(item => {
                if(item.id == this.detailId ){
                    this.detailData = item;
                    return;
                }
            });
        },
    }
}
</script>
<style lang="scss" src="./record-detail.scss"></style>