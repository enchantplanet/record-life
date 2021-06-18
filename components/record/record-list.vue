<template>
        <div class="record-list-wrap">
            <ul>
                <li v-for="item in listArrData" :key="item.id">
                    <a href="#"  @click.prevent="goDetail(item)">
                    <div class="detail-info-wrap">
                        <div class="img-box">
                            <img :src="item.thumbnail[0]" alt="" />
                        </div>
                        <div class="info-box">
                            <div class="info-parent">
                                <div class="father"><span class="name">{{item.father.name}}</span></div>
                                <div class="mother"><span class="name">{{item.mother.name}}</span></div>
                            </div>
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
            listArrData: null
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
            this.listArrData = data.list;
        },
        goDetail(data){
            this.$router.push({ path: this.$urlManager.page.recordView, query: { "recordData": data.id }});
        }
    }
}
</script>
<style lang="scss" src="./record-list.scss"></style>