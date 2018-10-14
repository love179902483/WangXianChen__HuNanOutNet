<template>
    <div class="lbz-login-mask" v-show="showLogin">
        <div class="lbz-login">
            {{showLogin}}
            <Icon class="lbz-login-close" type="md-close" @click="closeLogin()"/>
            <p class="lbz-login-title">用户登陆</p>
            <p class="lbz-login-input">
                <Icon type="md-person" />
                <input v-model="userName" type="text" placeholder="请输入用户名">
            </p>
            <p class="lbz-login-input">
                <Icon type="ios-unlock" />
                <input v-model="userPassord" type="password" placeholder="请输入用户名">
            </p>
            <p class="lbz-login-input">
                <Icon type="ios-unlock" />
                <input type="text" placeholder="请输入用户名">
            </p>
            <Button type="primary" @click="clickLogin()" style="height:35px,font-size:20px" shape='circle' long>登陆</Button>
        </div>
       
    </div>
</template>
<script>
    export default{
        data(){
            return{
                userName:'',
                userPassord:''
            }
        },
        methods:{
            closeLogin(){
                this.$store.commit('setShowLogin',false)
            },
            clickLogin(){
                this.$store.commit('setUsername',this.userName)
                setTimeout(this.closeLogin,1000)
            }
        },
        computed:{
            showLogin:function(){
                return this.$store.getters.getShowLogin
            }
        },
        mounted:function(){
            console.log('1111111111111111')
            console.log(this.$store.getters.getShowLogin)
        }
    }
</script>

<style scoped>
    .lbz-login-mask{
        width: 100%;
        height: 100vh;
        background-color:rgba(0, 0, 0,.3);
        z-index: 999;
        position: fixed;
    }
    .lbz-login{
        width: 420px;
        height: 400px;
        padding: 30px 40px;
        display: absolute;
        justify-content: center;
        background-color:#fff;
        border-radius: 5px;
        position:fixed;
        margin: 0 auto;
        left: 0;
        right: 0;
        top: 100px;
        z-index: 1000;
    }
    .lbz-login-close{
        font-size: 20px;
        position: absolute;
        right: 30px;
        top: 20px;
        cursor: pointer;
    }


    .lbz-login-title{
        font-size: 24px;
        color: #007FEB;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
    }
    .lbz-login input{
        border:1px solid transparent;
    }
    .lbz-login input:focus{
        outline: none
    }
    .lbz-login .lbz-login-input{
        width: 100%;
        height: 40px;
        margin-bottom: 35px;
        display: flex;
        flex-flow: row;
        align-items: center;
        border-bottom: 1px solid #cccccc;
        padding: 8px 0;
    }
    .lbz-login .lbz-login-input i{
        width: 10%;
        font-size: 22px;
        color: #007FEB;
    }
    .lbz-login .lbz-login-input input{
         width: 90%;
         font-size: 14px;
    }
</style>
