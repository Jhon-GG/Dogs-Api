<script>
import Navbar from '../components/navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<template>
    <div>
      <Navbar />
    </div>
</template>
 

<style>
    html{
        margin: 0;
        padding:0;
        background-color: #fff;
    }

    *{
        margin: 0;
        padding:0;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        scrollbar-width: none;
    }
</style>
