<template>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <router-link to="/" style="text-decoration: none"><h5 class="text-white h4">Главная</h5></router-link>
      <router-link to="/add" style="text-decoration: none"><h5 class="text-white h4">Добавление контакта</h5></router-link>

    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>