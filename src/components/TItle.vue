<template>
  <h1>Counter Prop: {{ symbol }}</h1>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['counter','color'],
    setup(props) {
        const symbol = computed(() => {
            return '$' + props.counter
        })

        return { symbol}
    }
    // computed: {
    //     symbol(){
    //         return '$' + this.counter;
    //     }
    // },
}
</script>

<style>

</style>