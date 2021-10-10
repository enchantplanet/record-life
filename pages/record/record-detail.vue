<template>
    <div>
        <LayoutHeading2 :text="getName" />
        <record-detail v-if="detailData" :detailData="detailData" />
        <div class="masonry-container">
            <vue-masonry-wall :items="imageItems" :options="{width: 250, padding: 5}">
            <template v-slot:default="{item}">
                <div class="item" @click="imgSelect(item.image)">
                    <img :src="item.image"/>
                    <p v-if="item.content" class="content">{{item.content}}</p>
                </div>
            </template>
        </vue-masonry-wall>
        </div>
        <div v-show="isImgView" class="pop-img-viewer">
            <button class="btn_close" @click="imgViewClose">닫기</button>
            <div class="img_container">
                <img :src="isSelectImg" />
            </div>
        </div>
    </div>
</template>
<script>
import VueMasonryWall from "vue-masonry-wall";
export default {
    components: {VueMasonryWall},
    data: function () {
        return {
            dataName:"",
            detailId:null,
            detailData: null,
            imageItems:[],
            isImgView :false,
            isSelectImg:""
        }
   },
   computed:{
       getName(){
           return this.dataName;
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
            data.list.forEach(item => {
                if(item.id == this.detailId ){
                    this.detailData = item;
                    this.dataName = item.name;
                    this.imageItems = item.thumbnail;
                    return;
                }
            });
        },
        imgViewClose(){
            this.isImgView = false;
        },
        imgSelect(imgPath){
            this.isImgView = true;
            this.isSelectImg = imgPath;
        }
       
    }
}
</script>
