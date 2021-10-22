<template>
  <header class="header">
    <div class="header__top">
      <h1><a href="#" @click.prevent="goLink('home')"><img src="/images/common/logo_with_name.png" alt="" /></a></h1>
       <nav class="header__nav">
        <ul>
          <!-- <li>
            <a href="#" @click.prevent="goLink('breeders')">breeders</a>
          </li>
          <li>
            <a href="#" @click.prevent="goLink('store')">store</a>
          </li> -->
          <li>
            <a href="#" @click.prevent="goLink('book')">BOOK</a>
          </li>
          <li>
            <a href="#" @click.prevent="goLink('list')">LIST</a>
          </li>

        </ul>
      </nav>
      <!--<LayoutHeaderSearch /> -->
    </div>
  </header>
</template>
<script>

export default {
  components:{
  },
  data() {
    return {
      subView:false,
      closeOnClickOutside : false
    }
  },
  mounted(){
    this.$nextTick(() => {
      window.addEventListener("click",this.hideSubNav);
    })
  },
  methods: {
    goLink(urlName){
      if(urlName == "home"){
        this.$router.push('/');
      }else{
        this.$router.push({ path: this.$urlManager.page[urlName]});
      }

      // }else if(urlName == "breeders"){
      //   this.$router.push({ path: this.$urlManager.page.breeders});
      // }else if(urlName == "store"){
      //   this.$router.push({ path: this.$urlManager.page.store});
      // }else if(urlName == "book"){
      //   this.$router.push({ path: this.$urlManager.page.book});
      // }
            
    },
    hideSubNav(e){
      e.preventDefault();
      if(this.closeOnClickOutside){
        this.subView = false;
        this.closeOnClickOutside = false;
      }
      
    }
  }
}
</script>
