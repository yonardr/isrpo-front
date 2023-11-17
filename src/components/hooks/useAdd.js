import {ref} from "vue";
import axios from "axios";

export async function useAdd(init = {}){
    const flag= ref(false)
    try {
        const res = await axios.post(`${process.env.VUE_APP_API_URL}/contacts/`, {
            name: init.name.value,
            address: init.address.value,
            email: init.email.value,
            tel: init.tel.value,
        })
        if (res.status === 201) flag.value = true
    } catch (e) {
        alert('Ошибка')
    }
    return {flag}
}