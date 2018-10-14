<template>
    <div >
        <div class="lbz-menu-userinfo">
            <div class="lbz-menu-userinfo-left">
                <Icon type="md-person" />
                <span class="lbz-menu-username">{{userName}}</span>
                <span>您好，欢迎来到（湖南省）出入境管理平台</span>
            </div>
            <div class="lbz-menu-userinfo-right">
                
                <a v-show="showLogin" href="javascript:void(0)" @click="openLogin()">登陆</a>
                <a v-show="!showLogin" href="javascript:void(0)" @click="outLogin()">退出</a>
            </div>
        </div>
        <Menu class="lbz-menu-top" mode="horizontal" theme="light" active-name="1">
                <div class="lbz-menu-top-left">
                    <p>湖南省外事业务管理平台</p>
                </div>
                <div class="lbz-menu-top-right">
                        <MenuItem :name="index" v-for="(item,index) in menus" :key="index">
                            <Button type="primary" size='large' shape="circle"  @click="getOffset(item.path)">{{item.name}}</Button>
                        </MenuItem>

                        <div class="lbz-scroll-toTop" v-show="showBackToTop">
                            <Button type="error" @click="scrollTop()">我要回顶部去</Button>
                        </div>
                </div>
        </Menu>
    </div>
    
</template>
<script>
    export default {
        data () {
           
            return {
                 showBackToTop:false,
                menus:[
                    {
                        name:'留言板',
                        path:''
                    },
                     {
                        name:'业务办理',
                        path:'notice'
                    },
                    
                     {
                        name:'政务公开',
                        path:'affair'
                    },
                     {
                        name:'成员单位',
                        path:'member'
                    },
                    
                     {
                        name:'首页',
                        path:''
                    },
                ]
            }
        },
        methods:{
            getOffset(target){
                let targetDom = document.querySelector("#"+target)
                window.scrollTo({"behavior": "smooth", "top": targetDom.offsetTop});
            },
            scrollTop(){
                window.scrollTo({"behavior": "smooth", "top": 0});
            },
            watchScroll(){
                console.log(window.scrollY)
                if(window.scrollY >= 400){
                    this.showBackToTop = true;
                }else{
                    this.showBackToTop = false
                }
            },
            openLogin(){
                this.$store.commit('setShowLogin',true)
            },
            outLogin(){
                this.$store.commit('setShowLogin',true)
                this.$store.commit('setUsername','')
            }
        },
        computed:{
            userName:function(){
                return this.$store.getters.getUsername
            },
            showLogin:function(){
                return this.$store.getters.getShowLogin
            }
        },
        mounted:function(){
            console.log(111111111111111111111111111111)
            console.log(this.$store.getters.getUsername)
            window.addEventListener('scroll',this.watchScroll)
        },
    }
</script>
<style scoped>
    .lbz-menu-top{
        display: flex;
        justify-content: space-around;
        height: 80px;
        align-items: center;
    }
    .lbz-menu-top .ivu-menu-item.ivu-menu-item-active.ivu-menu-item-selected{
        /* color: #2d8cf0; */
        border-bottom: 2px solid transparent;
    }
    .lbz-menu-top.ivu-menu.ivu-menu-light.ivu-menu-horizontal  .ivu-menu-item:hover{
        border-bottom: 2px solid transparent!important;
    }
    .lbz-menu-userinfo{
        height: 30px;
        width: 100%;
        color: #727171;
        font-size: 12px;
        height: 32px;
        border-bottom: 1px solid #ddd;
        background-color:rgb(239,239,239);
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .lbz-menu-userinfo-left{
        width: 25%;
    }
    .lbz-menu-username{
        font-weight: bold;
    }
    .lbz-menu-userinfo-left i{
        font-size: 15px;
        margin-right: 10px;
    }
    .lbz-menu-userinfo-right{
        width: 45%;
        display: flex;
        flex-direction: row-reverse;
        padding-right: 20px;
    }

    .ivu-menu-item{
        height: 100%;
    }


    .lbz-menu-top-left{
        display: flex;
        font-size: 20px;
        width: 25%;
    }
    .lbz-menu-top-right{
        width: 45%;
        display: flex;
        flex-direction: row-reverse;
    }
    .lbz-menu-top-right li{
        
    }
    .lbz-menu-top-right button{
        flex-grow: 1;
        color: #000;
        font-size: 16px;
        color: #ffffff
    }
    
    .lbz-scroll-toTop{
        position:fixed;
        bottom: 10px;
        right: 20px;
    }
</style>
