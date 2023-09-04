<template lang="">
    <div class="admin-container">
        <AdminHeader/>
        <RouterView class="right"/>
    </div>
</template>
<script setup>
import AdminHeader from '../components/AdminHeader.vue';

</script>
<style >
    .admin-container {
        display: flex;
    }


    .right {
        border: 1px solid red;
        width: 100%;
    }
</style>