<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    
    const goToDetails = (breed) => {
      router.push({
        path: `/details/${encodeURIComponent(breed)}`
      })
    }
    
    return {
      goToDetails
    }
  }
}
</script>

<template>
    <div class="title">
        <h1>Meet your favorite breeds</h1>
    </div>
    <div class="grid-container">
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 1">
        <p>GOLDEN RETRIEVER <br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
        <div class="cards">
        <img src="https://placedog.net/300/200?id=3" alt="Dog 3">
        <p>GOLDEN RETRIEVER<br> <span><button @click="goToDetails('GOLDEN RETRIEVER')">MORE</button></span></p>
        </div>
    </div>
</template>

<style>

    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90vw;
        height: 10vh; 
        background-color: transparent;
        margin-top: 2rem;
    }

    .title h1{
        display: flex;
        height: auto;
        width: auto;
        font-family: 'Quicksand';
        font-size: 2.5rem;
        font-weight: bold;
        background-color: transparent;
        color: #FD9B10;
    }


    /* ---------------------------------- CARDS ------------------------------------- */

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 5rem;
        justify-items: center;
        font-family: 'Quicksand';
        max-width: 100%;
        margin-top: 2rem;
        padding-bottom: 3.4rem;
    }


    .cards {
        border: 1px solid #FD9B10;
        border-radius: 10px;
        width: 200px;
        text-align: center;
        padding: 15px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }

    .cards img {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .cards p {
        margin-top: 10px;
        font-weight: bold;
    }

    .cards span{
        color: #FD9B10;
    }

    .cards span button{
        border: none;
        color: #FD9B10;
        background-color: transparent;
        font-weight: bold;
        font-size: 1rem;
    }

    .cards span button:hover{
        cursor: pointer;
        color: #ff9500;
    }
    
</style>