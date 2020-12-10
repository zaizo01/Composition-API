import { onMounted, ref } from 'vue'
export function useFetch(url){
    const arrData = ref([]);

        onMounted(async() => {
            try {
                const response = await fetch(url);
                arrData.value = await response.json();
            } catch (error) {
                console.log(error);
            }
        })

        return { arrData }
}