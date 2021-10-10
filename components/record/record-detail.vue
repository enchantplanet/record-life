<template>
        <div class="record-detail-wrap" v-if="detailData">
            <div class="info-parent">
                <div class="father" >
                    <span class="name">{{detailData.father.name}}</span>
                    <div @click="imgSelect(detailData.father.thumbnail)" class="img-box" v-if="detailData.father.thumbnail">
                        <img :src="detailData.father.thumbnail" alt="" />
                    </div> 
                </div>
                <div class="mother">
                    <span class="name">{{detailData.mother.name}}</span>
                    <div @click="imgSelect(detailData.mother.thumbnail)" class="img-box" v-if="detailData.mother.thumbnail">
                        <img :src="detailData.mother.thumbnail" alt="" />
                    </div>
                </div>
            </div>
            <div class="info-detail">
                <ul class="info-list">
                    <li>
                        <div class="title">morph</div><div class="desc">{{detailData.morph}}</div>
                    </li>
                    <li>
                        <div class="title">gender</div><div class="desc">{{detailData.gender}}</div>
                    </li>
                    <li v-if="detailData.birth">
                        <div class="title">birth</div><div class="desc">{{detailData.birth}}</div>
                    </li>
                    <li class="info-weight" v-if="detailData.weight">
                        <div class="title">weight</div>
                        <div class="desc">
                            <button type="button" @click="toggleWeightList">{{detailData.weight[detailData.weight.length -1].date}} : {{detailData.weight[detailData.weight.length -1].weight}} {{$infoManager.weightUnit}}</button>
                            <ul class="weight-list" v-if="isViewWeight">
                                <li  v-for="item in detailData.weight" :key="item.date">
                                    {{item.date}}   :   {{item.weight}} {{$infoManager.weightUnit}}
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li v-if="detailData.breeder.team">
                        <div class="title">breeder</div><div class="desc"><span>{{detailData.breeder.team}}</span> - <span v-if="detailData.breeder.name">{{detailData.breeder.name}}</span> </div>
                    </li>
                    <li class="info-report" v-if="detailData.report">
                        <div class="title">report</div><div class="desc">{{detailData.report}}</div>
                    </li>
                </ul>
                
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
import Button from '../common/button.vue';

export default {
  components: {Button },
    props: {
        detailData:{
            type : Object,
            required:true
        }
    },
    data : function(){
        return {
            isViewWeight: false,
            isImgView :false,
            isSelectImg:""
        }
    },
    mounted(){
        console.log(this.detailData)
    },
    methods :{
        toggleWeightList(){
            this.isViewWeight = !this.isViewWeight;
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
<style lang="scss" src="./record-detail.scss"></style>