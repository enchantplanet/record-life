<template>
    <div class="main-wrap">
        WELCOME~
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
                url: 'api/record/record-list'
            }
             await this.$axios(option).then((response) => {
                console.log("response : " , response.data)
            })
            .catch((err) => {
                console.log("error : " ,err)   
            });
        }
       
    }
}
</script>
<style lang="scss" src="./main-index.scss"></style>