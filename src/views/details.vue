<script>
import Navbar from '../components/navbar.vue';
import detailsContent from '../components/detailsContent.vue';

export default {
  components: {
    Navbar,
    detailsContent
  },
  props: {
    breed: {
      type: String,
      default: 'GOLDEN RETRIEVER'
    }
  }
}
</script>

<template>
    <div class="mainDetails">
        <Navbar/>
        <detailsContent />
    </div>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        background-color: #fff;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }


    .mainDetails{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
    }
</style>