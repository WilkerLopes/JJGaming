<template>
<div>
 <v-app-bar
      color=""
      dark
      fixed
    >
    <v-container class="d-flex align-center justify-space-between">
      <div>
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                        <a href="#" class="brand-logo">JJGaming</a>
      </div>
        <div>
          <v-btn to="/download" text color="success" class="mr-2">Baixe agora</v-btn>
                        <v-btn to="/login" color="success">Login</v-btn>
        </div>
                        
    </v-container>
    </v-app-bar>

<v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <ul id="slide-out" class="sidenav">
        <li>
            <div class="lineColor"></div>
            <div class="titleSideNav">JJGaming</div>
        </li>
        <li><a href="login.html"><i class="material-icons bgAnimate">vpn_key</i>Login</a></li>
        <li><a href="login.html"><i class="material-icons bgAnimate">videogame_asset</i>Jogue online</a></li>
        <li>
            <div class="divider"></div>
        </li>
        <li><a class="subheader">Dowload</a></li>
        <li><a href="login.html"><i class="material-icons bgAnimate">arrow_downward</i>Baixe agora</a></li>
        <li>
            <div class="divider"></div>
        </li>
        <li><a class="subheader">Contato</a></li>
        <li><a href="#slide04"><i class="material-icons bgAnimate">share</i>Compartilhar</a></li>
        <li><a href="login.html"><i class="material-icons bgAnimate">contact_support</i>Entre em Contato</a></li>
    </ul>
    </v-navigation-drawer>

 <main>
<splide>
  <splide-slide>
    <section class="video-container">
                    <video src="assets/video/The forest awakens animation.mp4" autoplay loop playsinline muted></video>
                    <div class="callout">
                        <h1>The Game Project</h1>
                        <div>
                            <p>Aventura, diversão, contrução, habilidades e muito mais.
                                <br>Explore esse novo mundo com seus amigos!</p>
                                <v-btn
        class="waves-effect waves-light btn-large deep-purple darken-4 lighten-2" to="/user"
      
      >Play
      </v-btn>
                        </div>
                    </div>
                    <div class="support">
                        <a href="https://get.webgl.org" target="_blank">Verifique a compatibilidade do seu navegador</a><br>
                    </div>
                    <div class="btnNewPage"></div>
                </section>
  </splide-slide>

  <splide-slide>
    <section class="info-container pink darken-2">
                    <div class="navbarSpacing pink darken-4"></div>
                    Infomações do jogo
                </section>
  </splide-slide>

  <splide-slide>
    <section class="contact-container cyan darken-2">
                    <div class="navbarSpacing cyan  darken-4"></div>
                    <div class="compartilhar">compartilhar</div>
                    <div class="contato">contato</div>
                </section>
  </splide-slide>

  <splide-slide>
   <section class="footer-container ">
                    <div class="navbarSpacing blue darken-4">sdf</div>
                    <footer class="page-footer blue darken-3">
                        <div class="container">
                            <div class="row">
                                <div class="col l6 s12">
                                    <h5 class="white-text "><span class="brand-logo">JJGaming</span>.inc</h5>
                                    <p class="grey-text text-lighten-4">Trabalhamos constantemente para dar-lhe uma experiencia <span class="purple-text text-darken-4">ÚNICA</span> de jogo</p>
                                </div>
                                <div class="col l4 offset-l2 s12">
                                    <h5 class="white-text">Links</h5>
                                    <ul>
                                        <li><a class="grey-text text-lighten-3" href="#!">GitHub</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Facebook</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">Twiter</a></li>
                                        <li><a class="grey-text text-lighten-3" href="#!">INtagran</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer-copyright ">
                            <div class="container">
                                JJGaming © 2020 Copyright
                                <a class="grey-text text-lighten-4 right" href="#!"> JamelãoJR </a>
                            </div>
                        </div>
                    </footer>
                </section>
  </splide-slide>
</splide>
    </main>
</div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'Index',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      drawer:false
    }
  },
}
</script>

<style scoped lang="scss" src="./index.scss"></style>