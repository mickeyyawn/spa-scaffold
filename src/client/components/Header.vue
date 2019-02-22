<template>
    <div id="header">
        <span>
            <span class='logo'>THE COMPANY</span>
            <span style='float:right'>
                <router-link to="/" class='header-link'>HOME</router-link>
                <router-link to="/about" class='header-link'>ABOUT</router-link>
                <router-link to="/contact" class='header-link'>CONTACT</router-link>
            </span>
        </span>
        <br>
    </div>
</template>


<script>
    console.log('in the header component...');
</script>

<style lang="css">

  #header {
      margin-bottom:40px;
      margin-top:20px;
  }

  .logo {

    font-size:1.2em;
    font-weight: bold;

  }

  .header-link {
      
      margin-left:20px;
      font-size:1.0em;
      font-weight: bold;
      text-decoration: none;
      outline: none !important;
  }



</style>