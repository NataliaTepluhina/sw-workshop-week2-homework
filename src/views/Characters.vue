<template>
  <b-row class="py-3">
    <div v-if="isLoading" class="spinner w-100">
      <b-spinner label="Spinning"></b-spinner>
    </div>
    <template v-else>
      <b-col cols="3" v-for="character in characters" :key="character.id">
        <b-card
          :title="character.name"
          :img-src="character.image"
          :img-alt="character.name"
          img-top
          class="mb-2"
        >
          <b-card-text>
            {{ character.location.name }}
          </b-card-text>
          <b-button variant="info">Add to favorites</b-button>
        </b-card>
      </b-col>
    </template>
  </b-row>
</template>

<script>
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';
export default {
  data() {
    return {
      characters: [],
      isLoading: false,
    };
  },
  created() {
    this.isLoading = true;
    axios
      .get('/character')
      .then((res) => {
        this.characters = res.data.results;
      })
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<style>
.colored {
  background-color: #c5f8f8;
}
</style>
