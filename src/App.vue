<template>
    <div>
        {{msg}}
        <router-link to="/home">home</router-link>
        <router-link to="/about">about</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg:'this is App.vue'
            }
        }
    }
</script>
