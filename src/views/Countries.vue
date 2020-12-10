<template>
  <h1>List of Countries</h1>
  <div v-for="country in arrData" :key="country.id">
      <router-link :to="`/countries/${country.name}`">
          {{country.name}}
      </router-link>
  </div>
</template>

<script>
import { useFetch} from '../hooks/useFetch';
import { onMounted, ref } from 'vue'
export default {
    setup() {
        const arrData = ref([]);
        return { ...useFetch('https://restcountries.eu/rest/v2/all')}
    }

}
</script>

<style>

</style>