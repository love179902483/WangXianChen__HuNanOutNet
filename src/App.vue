<template>
    <div class="lbz-layout">
        <Layout>
            <Header></Header>
            <Carouse></Carouse> 
            <Notice id='notice'></Notice>
            <Business id='business'></Business>
            <Affair id='affair'></Affair>
            <Members id='member'></Members>
            <Login></Login>   
            <Footer></Footer>
            <!-- <Content>Content</Content> -->
            <!-- <Footer>Footer</Footer> -->
        </Layout>
    </div>
</template>

<script>
    import Header from './components/commone/header.vue'
    import Footer from './components/commone/footer.vue'
    import Carouse from './components/homeParts/carouse.vue'
    import Notice from './components/homeParts/notice.vue'
    import Business from './components/homeParts/business.vue'
    import Affair from './components/homeParts/affairs.vue'
    import Members from './components/homeParts/members.vue'
    import Login from './components/login/login.vue'
    export default{
        data(){
            return{
                msg:'this is App.vue'
            }
        },
        components:{
            Header,
            Footer,
            Carouse,
            Notice,
            Business,
            Affair,
            Members,
            Login
        }
    }
</script>
