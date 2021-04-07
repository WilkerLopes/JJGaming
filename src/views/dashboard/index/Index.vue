<template>
<div>
<v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/user"
        text
        class="mr-2"
      >
        <span >Perfil</span>
      </v-btn>
      <v-btn
        to="/user/games"
        text
      >
        <span class="ml-2">Games</span>
        
      </v-btn>
      <v-btn
        to="/"
        text
      >
        <span class="ml-2">Sair</span>
        
      </v-btn>
    </v-app-bar>
      <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Index',
  
}
</script>

<style scoped lang="scss" src="./index.scss"></style>