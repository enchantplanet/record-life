<template>
        <div class="record-list-wrap">
            <div class="select_box">
                <select v-model="selected" @change="onChange($event)">
                    <option v-for="record in selectData" v-bind:value="record.id" :key="record.id">
                        {{ record.name }}
                    </option>
                </select>
            </div>
            <ul>
                <li v-for="item in listArrData" :key="item.id">
                    <a href="#"  @click.prevent="goDetail(item)">
                    <div class="detail-info-wrap">
                        <div class="info-parent">
                            <div class="father"><span class="name">{{item.father.name}}</span></div>
                            <div class="mother"><span class="name">{{item.mother.name}}</span></div>
                        </div>
                        <div class="img-box">
                            <img :src="item.thumbnail[item.thumbnail.length-1].image" alt="" />
                        </div>
                        <div class="info-box">
                            <ul class="info-list">
                                <li>
                                    <div class="title">name</div><div class="desc">{{item.name}}</div>
                                </li>
                                <li>
                                    <div class="title">birth</div><div class="desc">{{item.birth}}</div>
                                </li>
                                <li>
                                    <div class="title">gender</div><div class="desc">{{item.gender}}</div>
                                </li>
                                <li>
                                    <div class="title">morph</div><div class="desc">{{item.morph}}</div>
                                </li>
                                <li class="info-weight" v-if="item.weight">
                                    <div class="title">weight</div>
                                    <div class="desc">
                                        {{item.weight[item.weight.length -1].date}} : {{item.weight[item.weight.length -1].weight}} {{$infoManager.weightUnit}}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
</template>
<script>

export default {
    data: function () {
        return {
            apiData:null,
            listArrData: null,
            selected:0,
            selectData:null
        }
   },
    mounted() {
        this.loadList();
    },
    methods: {
        async loadList() {
            let option = {
                method: 'get',
                url: this.$urlManager.rest.recordList
            }
             await this.$axios(option).then((response) => {
                 this.dataSet(response.data);
            })
            .catch((err) => {
                console.log("error : " ,err)   
            });
        },
        dataSet(data){
            this.apiData = data.list;
            this.listArrData = this.apiData;
            this.selectData = [{id:0,name:"all"},{id:'adult',name:"성체"},{id:'male',name:"male"},{id:'female',name:"female"},{id:'unkonwn',name:"미구분"},...data.list];
        },
        goDetail(data){
            this.$router.push({ path: this.$urlManager.page.recordView, query: { "recordData": data.id }});
        },
        onChange(event){
            console.log(event.target)
            if(event.target.value == 0){
                this.listArrData = this.apiData;
            }else if(event.target.value == 'adult'){
                this.listArrData = this.apiData.filter((list) => {
                    return  30 < list.weight[list.weight.length -1].weight;
                });
            }else if(event.target.value == 'male'){
                this.listArrData = this.apiData.filter( list => list.gender == 'male' );
            }else if(event.target.value == 'female'){
                this.listArrData = this.apiData.filter( list => list.gender == 'female' );
            }else if(event.target.value == 'unkonwn'){
                this.listArrData = this.apiData.filter( list => list.gender != 'male' && list.gender != 'female' );
            }else{
                this.listArrData = this.apiData.filter( list => list.id == event.target.value );
            }
        }
    }
}
</script>
<style lang="scss" src="./record-list.scss"></style>