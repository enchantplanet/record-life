<template>
    <div class="heading-wrap">
        <h2>{{text}}</h2>
    </div>
</template>
<script>
export default {
    props: {
        text:{
            type : String,
            required:true
        }
        
    },
  
}
</script>