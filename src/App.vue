<template>
<div id="app" class="app">
<div class="nav-new">
 <div class="nav">

<nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar toggleable-lm">
  <div class="container-fluid bg-dark" style="background-color:#FDFEFE" position="left">
    <button class="navbar-toggler navbar toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <img class="navbar-brand logo-img d-inline-block align-top" src="http://altagracia.gob.ar/consejodelamujer/wp-content/uploads/2018/05/iconomujer-1.png">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <div class="navbar-nav nav-justify mx-auto">
        <a class="nav-link active text-light font-weight-light h4" aria-current="page" href="/">Inicio</a>
        <a class="nav-link text-light font-weight-light h4" href="/AboutUs">Nosotros</a>
        <a v-if="is_auth" class="nav-link text-light font-weight-light h4" href="/user/home">Denuncias</a>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-light font-weight-light h4" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a text-light font-weight-light v-if="!is_auth" v-on:click="loadLogIn" class="dropdown-item" href="/user/login">Iniciar Sesion</a></li>
            <li><a text-light font-weight-light  v-if="!is_auth" v-on:click="loadSignUp" class="dropdown-item" href="/user/signUp">Registrar</a></li>
            <li><a text-light font-weight-light v-if="is_auth" v-on:click="logOut" class="dropdown-item" href="/">Cerrar Sesion</a></li>
          </ul>
        </li>
      </div>
      <div class="navbar-nav mr-auto">
        <a class="btn btn-danger font-weight-light h5" href="/denuncia"> DENUNCIAR</a>
      </div>
    </div>
  </div>
</nav>

</div>
</div> <!-- Fin nav new -->
 <!-- <div class="header">
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="loadAccount"> Cuenta </button>
        <button v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadLogIn" > Iniciar Sesión </button>
        <button v-if="!is_auth" v-on:click="loadSignUp" > Registrarse </button>
        <button v-if="is_auth" v-on:click="loadAboutUs"> Nosotros </button>
</div> -->
<div class="main-component">
  <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut">
   </router-view>
</div>
<div class="btn-contact">
  <a href="/denuncia"><img src="https://image.flaticon.com/icons/png/512/15/15895.png"></a>
</div>

 <footer class="bg-dark">
      <section>
        <h2>Misión TIC 2021</h2>
        <a href="#app">Ir al comienzo</a>
      </section>
        &copy; {{ 2021 }}, Designed by Kevin Londoño, Juliana Murcia, Jhon Lasso, Miguel Blanco, Adriana Mejia Y David Fajardo.
    </footer>
 </div>
</template>






<script>

export default {
  name: 'App',

  data: function(){
      return{
        is_auth: false
      }
  },

  components: {
  },

  methods:{
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
		
			  if (this.is_auth == true){
      //    //this.$router.
      //    //this.$router.push({ name: "logIn" });
          this.$router.push({ name: "UserHome" });
       } 
    },

    loadLogIn: function(){
      this.$router.push({name: "logIn"})
    },

    loadSignUp: function(){
      this.$router.push({name: "signUp"})
    },

    loadHome: function() {
      this.$router.push({ name: "home" });
    },

    loadDenuncia: function() {
      this.$router.push({ name: "denuncia" });
    },

    loadUserHome: function() {
      this.verifyAuth();
      this.$router.push({ name: "UserHome" });
    },

    completedLogIn: function(data) {
			localStorage.setItem("isAuth", true);
			localStorage.setItem("username", data.username);
			localStorage.setItem("token_access", data.token_access);
			localStorage.setItem("token_refresh", data.token_refresh);
			alert("Autenticación Exitosa");
			this.verifyAuth();
      this.loadUserHome();
    },

    completedSignUp: function(data) {
			alert("Registro Exitoso");
			this.completedLogIn(data);
    },

    completedDenuncia: function(data){
      alert("Denuncia Enviada" + data.cosas);
    },

    logOut: function () {
			localStorage.clear();
			alert("Sesión Cerrada");
			this.verifyAuth();
		},
  },

  created: function(){
    this.verifyAuth()
  }

}
</script>






<style>

body {
  margin: 0 0 0 0;
}

.navbar {
    box-shadow: 0 1.5px 1px white;
    border-bottom: 12px solid #6c757d26;
}

.navbar-brand {
    font-family: 'Spicy Rice', cursive;
    font-size: 1.5rem;
  }

.logo-img {
  width: 80px;
}

div .nav {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.main-component {
  background-color: #efefef;
  padding: 1rem 0;
}

/* FOOTER */
footer {
  padding: 3rem;
  color: #fff;
}

footer section {
  float: right;
}
  
  .btn-contact {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }
  .btn-contact > a > img {
    width: 3rem;
    background: #ff0;
    border-radius: 50%;
   }
  img {
    border-radius: 10%;
  }
  /* FOOTER */ 
  footer {
    position: relative;
    bottom: 0;
  }
</style>
