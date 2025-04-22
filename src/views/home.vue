<script>
import Navbar from '../components/navbar.vue';
import Middle from '../components/Middle.vue';

export default {
  components: {
    Navbar,
    Middle
  }
}
</script>

<template>
    <div class="main">
      <Navbar />
      <Middle />
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

    .main{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border: 1px solid green;
    }
</style>
