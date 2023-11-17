<template>
  <div>
    <h2>Редактирование контакта {{contact.value.name}}</h2>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" placeholder="//" v-model="form.name.value">
      <label >{{contact.value.name}}</label>
    </div>
    <div class="form-floating mb-3">
      <input type="email" class="form-control" placeholder="//" v-model="form.email.value">
      <label>{{contact.value.email}}</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" placeholder="//" v-model="form.address.value">
      <label>{{contact.value.address}}</label>
    </div>
    <div class="form-floating mb-3">
      <input type="tel" class="form-control" placeholder="//" v-model="form.tel.value">
      <label>{{contact.value.tel}}</label>
    </div>
    <button type="button" @click="submit(contact.value.id)" class="btn btn-primary btn-lg">Изменить</button>

  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {useOneFetch} from "@/components/hooks/useOneFetch";
import {useEdit} from "@/components/hooks/useEdit";
export default {
setup(){
  const {contact} = useOneFetch({id: useRoute().params.id})
  const form = {
    name: {
      value: contact.value.name
    },
    address: {
      value: contact.value.name
    },
    tel:{
      value: contact.value.name
    },
    email:{
      value: contact.value.name
    }
  }

  async function submit(id){
    const {flag} = await useEdit({form, id})
    if(flag) alert('Данные изменены')
    else console.log(flag)
  }
  return{contact, form, submit}
}
}
</script>

<style lang="scss" scoped>
h2{
  margin-bottom: 50px;
}

</style>