<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import Navbar from '../components/navbar.vue';
import DetailsContent from '../components/detailsContent.vue';

const route = useRoute();
const breedName = ref(decodeURIComponent(route.params.breed || ''));
const breedId = ref(route.query.id);
const breedData = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchBreedDetails = async () => {
  try {
    loading.value = true;
    error.value = null;

    const apiKey = import.meta.env.VITE_DOG_API_KEY;

    if (breedId.value) {
      const response = await axios.get(`https://api.thedogapi.com/v1/breeds/${breedId.value}`, {
        headers: { 'x-api-key': apiKey }
      });
      breedData.value = response.data;
    } else {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
        headers: { 'x-api-key': apiKey }
      });
      const breed = response.data.find(b => b.name.toLowerCase() === breedName.value.toLowerCase());
      if (breed) {
        breedData.value = breed;
      } else {
        throw new Error('Breed not found');
      }
    }

  } catch (err) {
    console.error('Error fetching breed details:', err);
    error.value = 'Error loading breed details. Please try again later.';
  } finally {
    loading.value = false;
  }
};


watch(() => route.fullPath, () => {
  breedName.value = decodeURIComponent(route.params.breed || '');
  breedId.value = route.query.id;
  fetchBreedDetails();
});

onMounted(() => {
  fetchBreedDetails();
});
</script>


<template>
  <div class="mainDetails">
    <Navbar/>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <DetailsContent v-else :breed-data="breedData" />
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

.loading, .error {
    margin-top: 20rem;
    font-size: 1.5rem;
    color: #FD9B10;
    font-family: 'Quicksand';
}
</style>