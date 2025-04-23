<script>
import Navbar from '../components/navbar.vue';
import Middle from '../components/middle.vue';
import FavoriteBreeds from '../components/favoriteBreeds.vue';

export default {
  components: {
    Navbar,
    Middle,
    FavoriteBreeds
  }
}
</script>

<template>
    <div class="main">
      <Navbar />
      <Middle />
      <FavoriteBreeds/>
    </div>
</template>
 

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
          width: 100vw;
        background-color: #fff;
        overflow-x: hidden;
    }


    .main{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        border: 1px solid green;
    }
</style>
