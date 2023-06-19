<template>
    <header>
    <div class="mainheader">
        <router-link to="/">
                    <img src="" id="logo">
                 </router-link>
        <ul>
                
                 <li> <router-link to="/">Home</router-link> </li>
                <li> <router-link to="/condutor">Condutor</router-link></li>
                <li> <router-link to="/marca">Marca</router-link></li>
                <li> <router-link to="/modelo">Modelo</router-link></li>
                <li> <router-link to="/veiculo">Veiculo</router-link></li>
                <li> <router-link to="/configuracoes">Configurações</router-link></li>
         </ul>
        </div>
    </header>
  </template>
  
  <script lang="ts">
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>


a:link,
a:visited {
  color: white;
  text-decoration: none;

}

a:hover{
color: red;
transition: color 0.3s ease;
}



  * {

margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'poppins', sans-serif;

}
header{

height: 75px;


}

.mainheader ul{

list-style: none;

}



.mainheader li{

display: inline;
padding: 10px;
}

.mainheader li:hover {
  color: red;
}

.mainheader{

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
background-color: black;
color: white;
}





  </style>
  