<template>
  <!-- First form -->
  <!-- <h1>Details: {{ $route.params.name }}</h1> -->
  <h1>Details: {{ name }}</h1>
  <div v-for="country in arrData" :key="country.id">
      {{ country.name }} - {{ country.region }}
  </div>
</template>

<script>
import { useFetch} from '../hooks/useFetch';
import { useRoute } from 'vue-router'
export default {
    // Second form
    props: ['name'],
    setup(props) {
        const nameParams = useRoute();
        //console.log(nameParams.params.name);
        const { arrData } = useFetch(`https://restcountries.eu/rest/v2/name/${nameParams.params.name}`);
        return { arrData }
    }
}
</script>

<style>

</style>