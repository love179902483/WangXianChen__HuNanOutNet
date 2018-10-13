<template>
    <div class="lbz-business-container">
        <div class="lbz-business-title">
            <Divider>业务办理</Divider>
        </div>
        
        <ul class="lbz-business-menu">
            <li v-for="(item,index) in projectTop" :key="index">
                <Icon :type="item.icon" />
                <span>{{item.name}}</span>
            </li>
        </ul>
      
       <div class="lbz-business-menu-body">
           <ul>
               <li>aaaaa</li>
           </ul>
       </div>
        <Divider style="width:80%;margin:auto"></Divider>
        <ul class="lbz-business-menu">
             <li v-for="(item,index) in projectBottom" :key="index">
                <Icon :type="item.icon" />
                <span>{{item.name}}</span>
            </li>
        </ul>
        <div class="lbz-business-menu-body">

       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                projectTop:[
                    {
                        name:'团组审批',
                        number:'TuanZuShenPi',
                        icon:"md-hand",
                        path:"/home/TuanZuShenPi"
                    },
                    {
                        name:'护照管理',
                        number:'HuZhaoGuanLi',
                        icon:"logo-buffer",
                        path:"/home/HuZhaoGuanLi"
                    },
                    {
                        name:'因公签证',
                        number:'YinGongQianZheng',
                        icon:"logo-vimeo",
                        path:"/home/YinGongQianZheng"
                    },
                    {
                        name:'因私签证',
                        number:'YinSiQianZheng',
                        icon:"ios-cash",
                        path:"/home/YinSiQianZheng"
                    },
                  
                ],
                projectBottom:[
                      {
                        name:'APEC',
                        number:'APEC',
                        icon:'ios-card',
                        path:"/home/APEC"
                    },
                    {
                        name:'外邀',
                        number:'WaiYao',
                        icon:"md-mail-open",
                        path:"/home/WaiYao"
                    },
                    {
                        name:'领事认证',
                        number:'LingShiRenZheng',
                        icon:"md-done-all",
                        path:"/home/LingShiRenZheng"
                    },
                    {
                        name:'收费',
                        number:'ShouFei',
                        icon:'logo-usd',
                        path:"/home/ShouFei"
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .lbz-business-container{
        display: flex;
        flex-direction: column
    }
    .lbz-business-title{
        display: flex;
        justify-content: space-around;
    }
    .lbz-business-menu{
        display: flex;
        justify-content: space-around;
        padding: 40px 0 0 0;
    }
    .lbz-business-menu li{
        width: 100px;
        height: 100px;
        display: flex;
        justify-content:center;
        flex-direction: column;
        text-align: center;
        cursor: pointer;
    }
    .lbz-business-menu li i{
        font-size: 60px;
        padding: 20px;
    }
    .lbz-business-menu li:hover{
        color: rgb(29, 29, 29)
    }
    .lbz-business-menu-body{
        height: 60px;
        width: 100%;
        display: flex;
        /* background-color:pink; */
        align-items:flex-end;
        justify-content: space-around
    }

</style>
