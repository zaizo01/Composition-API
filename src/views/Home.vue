<template>
  <div>
    <h1
      :style="{'color': color}"
    >Counter: {{ counter }}</h1>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>


export default {
  data() {
    return {
      counter: 0
    }
  },
  computed: {
    color(){
      if (this.counter < 0) {
        return 'red'
      } else {
        return 'green'
      }
    }
  },
  methods: {
    increase(){
      this.counter++;
    },
    decrease(){
      this.counter--;
    }
  },
}
</script>
