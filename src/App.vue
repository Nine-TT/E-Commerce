<script setup>
import AppHeader from "./components/common/Header.vue"
import Home from "./views/Home.vue";

</script>

<template>
    <AppHeader/>
    <Home class="home"/>

    <RouterView></RouterView>
</template>

<style scoped>
 .home {
    width: 2200px;
    
 }

</style>
