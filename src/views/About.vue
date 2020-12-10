<template>
  <div class="about">
    <Title :counter="counter" :style="{'color': color}"/>
    <!-- <h1
      :style="{'color': color}"
    >Counter: {{ counter }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button> -->
    <Btn :textButton="'Increase'" @accion="increase"/>
    <Btn :textButton="'Decrease'" @accion="decrease"/>
    <hr>
    <input type="text" v-model="text">
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Title from '../components/TItle'
import Btn from '../components/Btn'
import { ref, computed } from 'vue'
export default {
  components: {
    Title, Btn
  },
  setup() {
    const counter = ref(0);
    const text = ref('');

    const increase = () => {
      counter.value ++
    }

    const decrease = () => {
      counter.value --
    }
  
    const color = computed(() => {
        if (counter.value < 0) {
          return 'red'
        } else {
          return 'green'
        }
    })

    return {counter, increase, decrease, color, text}
  }
}
</script>