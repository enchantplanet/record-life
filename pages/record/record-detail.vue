<template>
    <div>
        <LayoutHeading2 :text="getName" />
        <record-detail />
    </div>
</template>
<script>
export default {
    data: function () {
        return {
            dataName:"",
        }
   },
   computed:{
       getName(){
           return this.dataName + " 상세"
       }
   },
    mounted() {
        this.dataName = this.$route.query.recordData.name;
    }
}
</script>