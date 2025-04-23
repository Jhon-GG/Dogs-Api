<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const breeds = ref([])
const error = ref(null)
const currentPage = ref(0)
const limit = 50
const showErrorImage = ref(false)

const fetchBreeds = async () => {
  const apiKey = import.meta.env.VITE_DOG_API_KEY

  if (!apiKey) {
    error.value = '¡No se pudo cargar la información porque falta la clave de API!'
    showErrorImage.value = true
    return
  }

  try {
    error.value = null
    showErrorImage.value = false

    const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': apiKey
      },
      params: {
        limit,
        page: currentPage.value
      }
    })

    breeds.value = response.data
  } catch (err) {
    error.value = 'Oops! No pudimos cargar las razas. Inténtalo de nuevo más tarde.'
    showErrorImage.value = true
    console.error(err)
  }
}

const goToDetails = (breedName) => {
  router.push({
    path: `/details/${encodeURIComponent(breedName)}`
  })
}

const nextPage = () => {
  if (currentPage.value < 3) { 
    currentPage.value++
    fetchBreeds()
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
    fetchBreeds()
  }
}

onMounted(() => {
  fetchBreeds()
})
</script>

<template>
  <div id="breeds-section" class="title">
    <h1>Meet your favorite breeds</h1>
  </div>

  <div v-if="error" class="error-container">
    <div class="error-text">{{ error }}</div>
    <img
      v-if="showErrorImage"
      class="error-image"
      src="https://img.freepik.com/foto-gratis/perro-pequeno-siendo-adorable_23-2149016874.jpg?t=st=1745427700~exp=1745431300~hmac=dddee429c0773342fc6cbd6811d340e29801c271e04ad1c1c4d65cda347dea7d&w=1060"
      alt="Error loading breeds"
    />
  </div>

  <div v-else class="grid-container">
    <div v-for="breed in breeds" :key="breed.id" class="cards">
      <img :src="breed.image?.url || 'https://placedog.net/300/200?id=1'" :alt="breed.name">
      <p>
        {{ breed.name }}<br>
        <span><button @click="goToDetails(breed.name)">MORE</button></span>
      </p>
    </div>
  </div>

  <div v-if="!error" class="pagination">
    <button @click="prevPage" :disabled="currentPage === 0">Anterior</button>
    <span>Página {{ currentPage + 1 }}</span>
    <button @click="nextPage" :disabled="currentPage === 3">Siguiente</button> 
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
    




    @media (max-width: 768px){
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
        justify-content: center;
        align-items: center;
        height: auto;
        width: auto;
        font-family: 'Quicksand';
        font-size: 2.5rem;
        font-weight: bold;
        background-color: transparent;
        color: #FD9B10;
        text-align: center;
    }


    /* ---------------------------------- CARDS ------------------------------------- */

    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: .5rem;
        justify-items: center;
        font-family: 'Quicksand';
        max-width: 100%;
        margin-top: 2rem;
        padding-bottom: 3.4rem;
    }


    .cards {
        border: 1px solid #FD9B10;
        border-radius: 10px;
        width: 170px;
        text-align: center;
        padding: 15px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        margin-top: 1.5rem;
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
    }

    .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
    font-family: 'Quicksand';
    }

    .pagination button {
    background-color: #FD9B10;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    cursor: pointer;
    }

    .pagination button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    }

    .error-container {
    text-align: center;
    margin-top: 2rem;
    font-family: 'Quicksand';
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

    .error-text {
    font-size: 1.3rem;
    color: #ff3c3c;
    font-weight: bold;
    margin-bottom: 1rem;
    }

    .error-image {
    max-width: 90%;
    max-height: 400px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    button {
    font-family: 'Quicksand';
    font-weight: bold;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    background-color: transparent;
    color: #FD9B10;
    border: 2px solid #FD9B10;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    button:hover {
        background-color: #FD9B10;
        color: white;
    }

    button:disabled {
        opacity: 0.4;
        cursor: not-allowed;
    }


</style>