<template>
    <div class="lbz-members-container">
        <div class="lbz-members-title">
            <Divider><span class="lbz-title">成员单位</span> </Divider>
        </div>
        <ul class="lbz-members-members-container">
            <li v-for="(item,index) in members" :key="index">
                <a href="#">
                    <img src="" alt="">
                    <span>{{item.name}}</span>
                </a>
              
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                members:[
                    {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },

                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                     {
                        name:"沈阳市人民政府",
                        img:""
                    },
                ]
            }
        }
    }
</script>

<style>
    .lbz-members-members-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    .lbz-members-members-container li{
        width: 300px;
        height: 90px;
        background-color: pink;
        font-size: 16px;
        line-height: 90px;
        margin: 8px;
        
        background-color: #fff;
    }
    .lbz-members-members-container li a{
        text-decoration: none;
        color: rgb(102, 102, 102); 
    }
</style>

