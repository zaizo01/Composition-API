import { ref } from 'vue'
export function useCounter() {
    const counter = ref(0);

    const increase = () => {
        counter.value ++
    }
  
    const decrease = () => {
        counter.value --
    }

    return { counter, increase, decrease }
}