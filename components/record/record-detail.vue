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
                    <li>
                        <div class="title">report</div><div class="desc">{{detailData.report}}</div>
                    </li>
                </ul>
                
            </div>
        </div>
</template>
<script>

export default {
    props: {
        detailData:{
            type : Object,
            required:true
        }
    },
    mounted(){
        console.log(this.detailData)
    }
}
</script>
<style lang="scss" src="./record-detail.scss"></style>