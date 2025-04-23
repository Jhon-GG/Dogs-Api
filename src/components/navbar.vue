<script>
import { useRouter, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const isHomePage = ref(route.path === '/home');

    watch(() => route.path, (newPath) => {
      isHomePage.value = newPath === '/home';
    });

    const navigateToHome = () => {
      router.push('/home');
    };

    const searchQuery = ref('');
    const searchResults = ref([]);
    const isSearching = ref(false);
    const errorSearch = ref(false);

    const goToDetails = (breed) => {
    clearSearch(); 
    router.push({
        path: `/details/${encodeURIComponent(breed.name)}`,
        query: { id: breed.id }
    });
    };

    const fetchSearchResults = async () => {
      if (!searchQuery.value) {
        isSearching.value = false;
        searchResults.value = [];
        return;
      }

      try {
        isSearching.value = true;
        errorSearch.value = false;

        const response = await axios.get('https://api.thedogapi.com/v1/breeds');
        const results = response.data.filter(breed =>
          breed.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          (breed.temperament && breed.temperament.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
          (breed.origin && breed.origin.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
          (breed.bred_for && breed.bred_for.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
          (breed.weight?.metric && breed.weight.metric.toLowerCase().includes(searchQuery.value.toLowerCase()))
        );

        const resultsWithImages = await Promise.all(results.map(async (breed) => {
          if (breed.reference_image_id) {
            try {
              const imgRes = await axios.get(`https://api.thedogapi.com/v1/images/${breed.reference_image_id}`);
              breed.image = imgRes.data;
            } catch (err) {
              console.warn(`No se pudo obtener imagen para ${breed.name}`);
            }
          }
          return breed;
        }));

        searchResults.value = resultsWithImages;
        errorSearch.value = resultsWithImages.length === 0;

      } catch (err) {
        console.error(err);
        errorSearch.value = true;
        searchResults.value = [];
      }
    };

    watch(searchQuery, fetchSearchResults);

    const clearSearch = () => {
      searchQuery.value = '';
      searchResults.value = [];
      errorSearch.value = false;
      isSearching.value = false;
    };

    return {
      navigateToHome,
      isHomePage,
      searchQuery,
      searchResults,
      isSearching,
      errorSearch,
      goToDetails,
      clearSearch
    };
  }
}
</script>


<template>
    <div class="main-box">
      <nav class="navbar">
        <div class="logo">
          <img src="/src/assets/logo.svg" alt="logo" />
          <h1 class="logoTitle"><span>DOG</span> API</h1>
        </div>
        <ul class="ul">
          <a class="home" href="#" @click.prevent="navigateToHome">HOME</a>
          <li class="list">
            <select class="first" name="first" id="first">
              <option value="breeds">BREEDS</option>
            </select>
          </li>
          <li class="list">
            <select class="first" name="first" id="first">
              <option value="origin">ORIGIN</option>
            </select>
          </li>
          <li class="list">
            <select class="first" name="first" id="first">
              <option value="temperament">TEMPERAMENT</option>
            </select>
          </li>
          <li class="list">
            <select class="first" name="first" id="first">
              <option value="bred_for">BRED FOR</option>
            </select>
          </li>    
        </ul>
        <div class="search-box">
          <img class="searchImg" src="../assets/search.svg" alt="search">
          <input
            class="search"
            type="text"
            placeholder="Search"
            v-model="searchQuery"
          >
        </div>
      </nav>
    </div>
  
    <div v-if="isSearching" class="overlay-search">
      <button class="close-button" @click="clearSearch">X</button>
      <div class="orange-scroll"></div>
  
      <div v-if="errorSearch" class="error-container">
        <p class="error-text">Querido usuario, no fue posible encontrar esos datos</p>
        <img
          class="error-image"
          src="https://img.freepik.com/foto-gratis/mujer-bonita-sudadera-capucha-tiene-perro-sobre-fondo-rosa-encantadora-dama-cabello-oscuro-traje-gris-juega-corgi-aislado_197531-18537.jpg"
          alt="No results"
        />
      </div>
  
      <div v-else class="grid-container">
        <div v-for="breed in searchResults" :key="breed.id" class="cards">
          <img
            :src="breed.image?.url || 'https://placedog.net/300/200?id=1'"
            :alt="breed.name"
          />
          <p>
            {{ breed.name }}<br>
            <span>
              <button @click="goToDetails(breed)">MORE</button>
            </span>
          </p>
        </div>
      </div>
    </div>
</template>
  
  


<style scoped>

    .main-box{
    display: flex;
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    height: 10vh;
    }

    .navbar{
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: white;
        width: 90vw;
        height: 10vh;
        font-family: 'Quicksand';
        position: fixed;
        z-index: 2;
    }

    .logo{
        display: flex; 
        align-items: center;
        flex-direction: row;
        width: 10vw;
        height: 10vh;
        gap: 1rem;
    }

    .logo img{
        width: 2.8rem;
        height: 2.8rem;
    }

    .logoTitle{
        display: flex;
        color: #000;
        font-weight: bold;
        font-size: 1.1rem; 
        height: auto;
        width: auto;
        font-family: 'Quicksand';
        gap: 0.2rem;
    }

    .logoTitle span{
        color: #FD9B10;
        height: auto;
        width: auto;
    }

    .ul{
        display: flex;
        justify-content: start;
        align-items: center;
        list-style:none;
        width: 50vw;
        height: 10vh;
        gap: 2rem;
        margin-left: 10rem;  
    }

    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #000;
        font-size: 1rem;
        width: auto;
        height: auto;  
        text-decoration: none;
        font-weight: bold;
    }

    .home:hover{
        cursor: pointer;
        color: #FD9B10;
    }

    .list{
        display: flex;
        align-items: center;
        height: auto;
        width: auto;
    }

    .first{
        display: flex;
        width: auto;
        height: 3vh;
        color: #000;
        font-weight: bold;
        font-family: 'Quicksand';
        font-size: 1rem;
        border: none;
        background-color: transparent;
    }

    .first:hover{
        cursor: pointer;
        color: #FD9B10;
    }
    
    .search-box{
        display: flex;
        align-items: center;
        width: 18vw;
        height: 4vh;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        margin-left: 1rem;
        border: 1px solid #000;
    }
    
    .searchImg{
        display: flex;
        width: 1.3rem;
        height: 1.3rem;
        margin-left: 0.5rem;
    }

    .search{
        display: flex;
        border: none;
        width: 15vw;
        height: 4vh;
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        margin-left: 0.2rem;
        background-color: transparent;
    }

    .search::placeholder{
        color: #000;
        font-family: 'Quicksand';
    }

    .search:focus{
        outline:none;
    }


    

    @media (max-width: 1000px) {

        .navbar{
            display: flex;
            align-items: center;
            flex-direction: row;
            background-color: white;
            width: 90vw;
            height: 10vh;
            font-family: 'Quicksand';
            position: fixed;
            z-index: 2;
        }

        .logo{
            display: flex; 
            align-items: center;
            flex-direction: row;
            width: 7vw;
            height: 10vh;
            gap: .4rem;
        }

        .logo img{
            width: 1.7rem;
            height: 1.7rem;
        }

        .logoTitle{
            display: flex;
            color: #000;
            font-weight: bold;
            font-size: .8rem; 
            height: auto;
            width: auto;
            font-family: 'Quicksand';
            gap: 0.2rem;
        }

        .logoTitle span{
            color: #FD9B10;
            height: auto;
            width: auto;
        }

        .ul{
        display: flex;
        justify-content: start;
        align-items: center;
        list-style:none;
        width: 40vw;
        height: 10vh;
        gap: .8rem;
        margin-left: 5rem;  
        overflow-x: auto;
        scrollbar-width: none;
        }

        .home{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            font-size: .8rem;
            width: auto;
            height: auto;  
            text-decoration: none;
            font-weight: bold;
        }

        .list{
            display: flex;
            align-items: center;
            height: 10vh;
            width: auto;
        }

        .first{
            display: flex;
            width: auto;
            height: 3vh;
            color: #000;
            font-weight: bold;
            font-family: 'Quicksand';
            font-size: .8rem;
            border: none;
            background-color: transparent;
        }

        
        .search-box{
            display: flex;
            align-items: center;
            width: 24vw;
            height: 4vh;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;
            margin-left: 1rem;
            border: 1px solid #000;
        }
        
        .searchImg{
            display: flex;
            width: 1.3rem;
            height: 1.3rem;
            margin-left: 0.5rem;
        }

        .search{
            display: flex;
            border: none;
            width: 15vw;
            height: 4vh;
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;
            margin-left: 0.2rem;
            background-color: transparent;
        }

        .search::placeholder{
            color: #000;
            font-family: 'Quicksand';
        }

        .search:focus{
            outline:none;
        }
    }

    .overlay-search {
    position: fixed;
    top: 80px; 
    left: 0;
    width: 100vw;
    min-height: 100vh;
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 999;
    padding: 2rem;
    overflow-y: auto;
    scrollbar-width: auto;
    }

    .close-button {
  position: fixed; 
  top: 90px; 
  right: 2rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FD9B10;
  cursor: pointer;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid transparent;
  transition: border-bottom 0.3s ease;
  z-index: 1000; 
}

.close-button:hover {
  border-bottom: 3px solid #FD9B10;
}


.close-button::before {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;

  border-radius: 50%;
  z-index: -1;
}


.overlay-search {
  padding-top: 3.5rem; 
}

.overlay-search {
  position: fixed;
  top: 80px;
  left: 0;
  width: 100vw;
  max-height: calc(100vh - 80px);
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 999;
  padding: 2rem;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #FD9B10 transparent;
}


.overlay-search::-webkit-scrollbar {
  width: 8px;
}

.overlay-search::-webkit-scrollbar-track {
  background: transparent;
}

.overlay-search::-webkit-scrollbar-thumb {
  background-color: #FD9B10;
  border-radius: 20px;
}

@media (max-width: 1000px) {
  .ul::-webkit-scrollbar {
    height: 4px;
  }
  
  .ul::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .ul::-webkit-scrollbar-thumb {
    background-color: #FD9B10;
    border-radius: 20px;
  }
  
  .ul {
    scrollbar-color: #FD9B10 transparent;
    scrollbar-width: thin;
  }
}

</style>