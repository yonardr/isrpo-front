import axios from "axios";
import {ref} from "vue";

export async function useDeleteContact(init = {}){
    const flag = ref(false)
    try {
        const res = await axios.delete(`${process.env.VUE_APP_API_URL}/contacts/id/${init.id}`)
        if(res.data > 0) flag.value = true
    }
    catch (e){
        alert('Ошибка')
    }
    return{flag}
}