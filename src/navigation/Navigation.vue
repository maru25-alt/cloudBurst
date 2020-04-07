<template>
<div class="navigation">
 <nav class="navbar navbar-expand-lg ">
       <a class="navbar-brand" href="/">
           <img class="logo" src="../assets/logo.jpg" alt="logo"> 
       </a>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
    <div class="search_bar">
            <SearchBar></SearchBar>      
    </div>
  <div class="link-items collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav nav_links justify-content-end">
      <li class="nav-item">
        <a class="nav-link link" href="/map">Map</a>
      </li>
       <li class="nav-item">
        <a class="nav-link link" href="/aboutus">About</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle link" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         More
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item link" href="/table">7 Day Weather Forecast</a>
          <a class="dropdown-item link" href="/calender">1 Month Weather Forecast</a>
          <a class="dropdown-item link" href="/graph">Weather Graphs</a>
          
 
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="nav_date">
  <h3 class="nav_date_location"> Laoshan , <span class="atm_state"> Clear</span> <span class="degrees">8 &#8451; <span class="date">07/04/2020</span></span></h3>
</div>
</div>   
</template>

<script>
import SearchBar from "./SearchBar.vue"

export default {
    components:{
        SearchBar
    }

}
</script>

<style>

</style>
