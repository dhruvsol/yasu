<template>
  <div class="container">
    <Navbar />
    <div class="home">
      <h1>Hello World <fa :icon="['fas', 'search']" /></h1>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Home',
  components: { Navbar },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 2.5rem;

  .home {
    width: 100%;
  }
}
</style>
