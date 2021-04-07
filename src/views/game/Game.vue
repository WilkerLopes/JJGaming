<template>
 <main class="fill-height">
   <v-app-bar
      color=""
      dark
      fixed
      height="48px"
    >
         <v-btn text icon color="primary" to="/user/games">
           <v-icon>mdi-close</v-icon>
         </v-btn>        
          <v-toolbar-title>{{$route.params.game_name}}</v-toolbar-title>
    </v-app-bar>
<div class="box-game">
  <v-progress-circular
      indeterminate
      color="primary"
      class="infinite"
      size="75"
    ></v-progress-circular>

  <iframe 
    :src="'/games/'+$route.params.dev_name+'/'+$route.params.game_name+'/index.html'"
    frameborder="0"
  ></iframe>
</div>
    
 </main>
</template>

<script>
export default {
  name: 'GameView',
  data() {
    return {
      
    }
  },
  created() {
    
  },
}
</script>

<style>
.box-game{
  width: 100%;
  height: 100%;
}
  iframe{
    width: 100%;
    height: calc(100% - 48px);
    margin-top: 48px;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: transparent !important;
  }
  .infinite{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
  }
</style>