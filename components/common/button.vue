<template>
    <div class="btn-wrap">
        <NuxtLink :to="urlLink" class="btn">{{text}}</NuxtLink>
    </div>
</template>
<script>
export default {
    props: {
        urlLink:{
            type : String,
            required:true
        },
        text:{
            type : String,
            required:true
        }
        
    },
    data: function () {
        return {
            link: null
        }
   },
}
</script>
