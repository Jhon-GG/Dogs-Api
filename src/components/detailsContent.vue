<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
  breedData: {
    type: Object,
    required: true
  }
});

const breedImage = ref(null);
const imageLoading = ref(true);

const fetchBreedImage = async () => {
  if (!props.breedData) return;
  
  try {
    imageLoading.value = true;
    
    if (props.breedData.image && props.breedData.image.url) {
      breedImage.value = props.breedData.image.url;
      imageLoading.value = false;
      return;
    }

    const apiKey = import.meta.env.VITE_DOG_API_KEY;
    
    if (props.breedData.id) {
      const response = await axios.get(`https://api.thedogapi.com/v1/images/search`, {
        headers: {
          'x-api-key': apiKey
        },
        params: {
          breed_id: props.breedData.id,
          limit: 1
        }
      });
      
      if (response.data && response.data.length > 0) {
        breedImage.value = response.data[0].url;
        imageLoading.value = false;
        return;
      }
    }
    
    const response = await axios.get(`https://api.thedogapi.com/v1/images/search`, {
      headers: {
        'x-api-key': apiKey
      },
      params: {
        breed_name: props.breedData.name,
        limit: 1
      }
    });
    
    if (response.data && response.data.length > 0) {
      breedImage.value = response.data[0].url;
    } else {

      breedImage.value = `https://placedog.net/300/200?id=${props.breedData.id || 1}`;
    }
  } catch (err) {
    console.error('Error fetching breed image:', err);

    breedImage.value = `https://placedog.net/300/200?id=${props.breedData.id || 1}`;
  } finally {
    imageLoading.value = false;
  }
};

onMounted(() => {
  fetchBreedImage();
});


watch(() => props.breedData, () => {
  fetchBreedImage();
}, { deep: true });
</script>

<template>
  <div class="content">
    <div class="contImg">
      <div v-if="imageLoading" class="loading-image">
        Loading image...
      </div>
      <img v-else :src="breedImage" :alt="breedData.name">
    </div>
    <div class="titleDt">
      <h1>{{ breedData.name }}</h1>
      <div class="breed-details">
        <p v-if="breedData.weight?.metric"><strong>Weight:</strong> {{ breedData.weight.metric }} kg</p>
        <p v-if="breedData.height?.metric"><strong>Height:</strong> {{ breedData.height.metric }} cm</p>
        <p v-if="breedData.bred_for"><strong>Bred For:</strong> {{ breedData.bred_for }}</p>
        <p v-if="breedData.breed_group"><strong>Breed Group:</strong> {{ breedData.breed_group }}</p>
        <p v-if="breedData.life_span"><strong>Life Span:</strong> {{ breedData.life_span }}</p>
        <p v-if="breedData.temperament"><strong>Temperament:</strong> {{ breedData.temperament }}</p>
        <p v-if="breedData.origin"><strong>Origin:</strong> {{ breedData.origin }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    height: 85vh;
    margin-top: 20rem;
}

.contImg{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #FD9B10;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: auto;
    height: auto;
    padding: 1.5rem;
}

.contImg img{
    display: flex;
    width: 28vw;
    height: auto;
    border-radius: 10px; 
}

.loading-image {
    display: flex;
    width: 28vw;
    height: 300px;
    justify-content: center;
    align-items: center;
    color: #FD9B10;
    font-family: 'Quicksand';
    font-size: 1.2rem;
}

.titleDt{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 50vw;
    height: 68vh;
    margin-top: 0rem;
    font-family: 'Quicksand';
    color: #FD9B10;
    gap: 1.5rem;
    margin-bottom: 1rem;
}

.titleDt h1{
    font-size: 3rem;
    margin-bottom: 1rem;
}

.breed-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.breed-details p{
    font-size: 1.2rem;
    color: #000;
    font-weight: normal;
    text-align: justify;
}

.breed-details p strong {
    color: #FD9B10;
    font-weight: bold;
}

@media (max-width: 768px){
    .content{
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-around;
        align-items: center;
        width: 90vw;
        height: auto;
        margin-top: 20rem;
        padding-bottom: 2rem;
    }

    .contImg{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #FD9B10;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        width: auto;
        height: auto;
        padding: 1.5rem;
        margin-top: 2rem;
    }

    .contImg img{
        display: flex;
        width: 72vw;
        height: auto;
        border-radius: 10px; 
    }
    
    .loading-image {
        width: 72vw;
        height: 200px;
    }

    .titleDt{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 70vw;
        height: auto;
        margin-top: 1rem;
        font-family: 'Quicksand';
        color: #FD9B10;
        gap: 1rem;
    }

    .titleDt h1{
        font-size: 2.7rem;
        margin-bottom: 1rem;
    }
    
    .breed-details p{
        font-size: 1.1rem;
        color: #000;
        text-align: justify;
    }
}
</style>