<template>
	<div id="app">
        <Header/>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
        <Footer/>
	</div>
</template>


<script>
    console.log('in the app component...');

    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'

    export default {
        components: {
            Header,
            Footer
        }
    }

</script>

<style lang="css">

    @import url("https://fonts.googleapis.com/css?family=Montserrat:200,300,400,700");

    #app {
        margin: 0 auto;
        line-height: 1.4;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: black;
        width:700px;
    }

    h1 {
        text-align: center;
    }

    a {
  color: #42b983;
}

</style>