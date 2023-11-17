import {onMounted, ref} from "vue";
import axios from "axios";
export function useFetch(){
    const contacts = ref([])
    const fetch = async ()=>{
        try{
            const res = await axios.get(`${process.env.VUE_APP_API_URL}/contacts`)
            contacts.value = res.data
        }
        catch (e){
            alert('Ошибка')
        }
    }
    onMounted(fetch)
    return {contacts}
}