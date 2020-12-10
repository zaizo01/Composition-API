<template>
  <h1>Counter: {{ counter }}</h1>
  <Btn :textButton="'Increase'" @accion="increase" />
  <Btn :textButton="'Dicrease'" @accion="decrease" />
</template>

<script>
import { useCounter } from '../hooks/useCounter';
import Btn from '../components/Btn'
export default {
    components:{
        Btn
    },
    setup() {
        return { ...useCounter() }
    }
}
</script>

<style>

</style>