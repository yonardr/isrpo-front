import { createStore } from 'vuex'
import {contactsModule} from "@/store/contactsModule";

export default createStore({
    modules: {
        contacts: contactsModule
    }
})