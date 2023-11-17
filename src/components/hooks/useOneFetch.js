import {onMounted, reactive} from "vue";
import axios from "axios";

export function useOneFetch(init= {}){
    const contact = reactive({value:{}})
    const fetch = async() =>{
        try {
            const res = await axios.get(`${process.env.VUE_APP_API_URL}/contacts/id/${init.id}`)
            contact.value = res.data
        }
        catch (e){
            alert('Такого контакта не существует')
        }
    }
    onMounted(fetch)
    return {contact}
}