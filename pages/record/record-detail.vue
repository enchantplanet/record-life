<template>
    <div>
        <LayoutHeading2 :text="getName" />
        <record-detail v-if="detailData" :detailData="detailData" />
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            dataName:"",
            detailId:null,
            detailData: null
        }
   },
   computed:{
       getName(){
           return this.dataName + " detaile"
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
                    return;
                }
            });
        },
    }
}
</script>