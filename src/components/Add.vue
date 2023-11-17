<template>
  <div>
    <h2>Создание контакта</h2>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" placeholder="//" v-model="contactForm.name.value">
      <label>Имя</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" placeholder="//" v-model="contactForm.email.value">
      <label>Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" placeholder="//" v-model="contactForm.address.value">
      <label>Адрес</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" placeholder="//" v-model="contactForm.tel.value">
      <label>Телефон</label>
    </div>
    <button type="button" @click="submit" class="btn btn-primary btn-lg">Создать</button>
  </div>
</template>

<script>
import {useAdd} from "@/components/hooks/useAdd";
import {computed, reactive} from "vue";

export default {
  setup() {
    const form = () => ({
      name: {
        value: ''
      },
      address: {
        value: ''
      },
      tel: {
        value: ''
      },
      email: {
        value: ''
      }
    })
    const contactForm = reactive(form())
    async function submit(){
      const {flag} = await useAdd(contactForm)
      if(flag){
        alert('Контакт добавлен')
        Object.assign(contactForm, form());
      }
      else alert('Что то пошло не так')
    }
    return{contactForm, submit}
  }
}
</script>

<style lang="scss" scoped>

</style>