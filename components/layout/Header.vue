<template>
  <header class="header">
    <div class="header__top">
      <h1><a href="#" @click.prevent="goHome">BOAST REPTILE</a></h1>
       <nav class="header__nav">
        <ul>
          <li>
              <NuxtLink to="/breeders/breeders-list">breeders</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/store/store-list">store</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/book/book-list">book</NuxtLink>
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
    goHome() {
      this.$router.push('/');
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
