<template>
  <div class="wrapper">
  <div v-for="(item, index) in contacts" :key="item.id">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Email: {{item.email}}</li>
        <li class="list-group-item">Адрес: {{item.address}}</li>
        <li class="list-group-item">Номер телефона: {{item.tel}}</li>
      </ul>
      <div class="card-body">
        <router-link :to="{path: 'edit' + `/${item.id}`}" class="card-link">Редактировать</router-link>
        <div><button @click="deleteEvent(item.id, index)" type="button" class="btn btn-outline-danger" style="margin-top: 5px">Удалить</button></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {useFetch} from "@/components/hooks/useFetch";
import {useDeleteContact} from "@/components/hooks/useDeleteContact";

export default {
setup(){
  const {contacts} = useFetch()

  async function deleteEvent(id, index){
    if(localStorage.getItem('token')) {
      contacts.value.splice(index, 1);
      const {flag} = await useDeleteContact({id: id})
      if(!flag) alert('Контакт не удален')
    }
  }

  return{contacts, deleteEvent}
}
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card{
  margin: 10px;
}

</style>