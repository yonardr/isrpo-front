import {ref} from "vue";
import axios from "axios";

export async function useEdit(init = {}) {
    const flag = ref(false)
    try {
        const res = await axios.put(`${process.env.VUE_APP_API_URL}/contacts/id/${init.id}`, {
            name: init.form.name.value,
            address: init.form.address.value,
            email: init.form.email.value,
            tel: init.form.tel.value,
        })
        if (res.data > 0) flag.value = true
    } catch (e) {
        alert('Ошибка')
    }
    return {flag}
}