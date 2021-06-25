<template>
  <header>
    <h1><a href="#" @click.prevent="goHome">CREMOA</a></h1>
    <nav>
      <ul>
        <li class="depth">
            <button  v-on:click.stop="onSubToggle">info</button>
            <ul class="sub-depth" v-if="subView">
              <li><NuxtLink to="/">breed</NuxtLink></li>
              <li><NuxtLink to="/">용품</NuxtLink></li>
            </ul>
        </li>
        <li class="depth">
            <NuxtLink to="/record/record-list">my list</NuxtLink>
        </li>
      </ul>
    </nav>
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
