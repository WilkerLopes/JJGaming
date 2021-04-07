<template>
    <main class="mt-16">
     <v-container>
      <v-row>
        <v-col cols="4" v-for="(game, index) in games" :key="index">
          <v-card class="rounded-lg" elevation="4" :to="'/game/'+game.dev+'/'+game.title">
            <v-card-text>
                <h1>{{game.title}}</h1>
                <p>{{game.dev}}</p>
                <p>{{game.description}}</p>
            </v-card-text>
          </v-card>
          
        </v-col>
      </v-row>
     </v-container>
    </main>
</template>

<script>
export default {
  name: 'Games',
  data() {
    return {
      games:[{
        title:'OnlyCube',
        dev:'wilker',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam non id totam ratione omnis, ab modi harum, delectus vel cum optio distinctio facilis ea laboriosam rem aliquid consequatur debitis.'}
      ,{
        title:'TowerClimb',
        dev:'wilker',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique magnam non id totam ratione omnis, ab modi harum, delectus vel cum optio distinctio facilis ea laboriosam rem aliquid consequatur debitis.'}
      ]
    }
  },
}
</script>

<style scoped lang="scss" src="./games.scss"></style>