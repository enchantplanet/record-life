<template>
  <header class="header">
    <div class="header__top">
      <h1><a href="#" @click.prevent="goLink('home')">CRE<br/>PLANET</a></h1>
       <nav class="header__nav">
        <ul>
          <li>
            <a href="#" @click.prevent="goLink('breeders')">breeders</a>
          </li>
          <li>
            <a href="#" @click.prevent="goLink('store')">store</a>
          </li>
          <li>
            <a href="#" @click.prevent="goLink('book')">book</a>
          </li>

          <!-- <li class="depth">
              <button  v-on:click.stop="onSubToggle">book</button>
              <ul class="sub-depth" v-if="subView">
                <li><NuxtLink to="/">breed</NuxtLink></li>
              </ul>
          </li> -->
        </ul>
      </nav>
      <!--<LayoutHeaderSearch /> -->
      <div class="user-info">
        <NuxtLink to="/record/record-list">my list</NuxtLink>
      </div>
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
      }else if(urlName == "breeders"){
        this.$router.push({ path: this.$urlManager.page.breeders});
      }else if(urlName == "store"){
        this.$router.push({ path: this.$urlManager.page.store});
      }else if(urlName == "book"){
        this.$router.push({ path: this.$urlManager.page.book});
      }
            
    },
    onSubToggle(){
      this.subView = !this.subView;
      if(this.subView){
        this.closeOnClickOutside = true;
      }else{
        this.closeOnClickOutside = false;
      }
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
