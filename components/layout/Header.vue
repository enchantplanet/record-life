<template>
  <header>
    <h1><a href="#" @click.prevent="goHome">RECORD LIFE</a></h1>
    <nav>
      <ul>
        <li>
            <NuxtLink to="/record/record-list">record list</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>