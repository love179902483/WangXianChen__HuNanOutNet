<template>
    <div>
        <Divider>政务公开</Divider>
        <div class="lbz-affairs">
            <Tabs value="001" class="lbz-affairs-tabs">
                <TabPane v-for="(item,index) in affiarTabsData" :key="index" :label="item.label" :name="item.name">
                    <ul>
                        <li class="lbz-tabs-body" v-for="(thisLi,index) in item.children" :key="index">
                            <div class="lbz-tabs-body-date">
                                <p>{{thisLi.day}}</p>
                                <p>{{thisLi.date}}</p>
                            </div>
                            <div class="lbz-tabs-body-content">
                                <a href="#">{{thisLi.title}}</a>
                                <p>{{thisLi.body}}</p>
                            </div>
                        </li>
                    </ul>
                </TabPane>
            </Tabs>
            <div class="lbz-affairs-table">
                <p class="lbz-affairs-table-title">下载专区</p>
                <ul class="lbz-affairs-table-body">
                    <li v-for="(item,index) in affiarDownData" :key="index">
                        <Icon :type="item.icon" />
                        <a href="#">{{item.text}}</a>
                    </li>
                </ul>
            </div>
         
        </div>
        
    </div>
   
</template>
<script>
    export default {
        data(){
            return{
               affiarTabsData:[
                   {
                       label:"通知公告",
                       name:"001",
                       children:[
                           {
                               date:'2018/03',
                               day:'20',
                               title:"关于《中国（沈阳）出入境人员单一窗口》测试试运行的声明",
                               body:"中国（沈阳）出入境人员单一窗口是沈阳市打造国际化营商环境，“幸福沈阳 共同缔造”的重要举措。以“单一窗口”模式为出入境人员提供综合服务，纳入沈阳市11家部门涉外业务，属系统集成"
                           },
                       ]
                   },
                   {
                       label:"功能介绍",
                       name:"002",
                       children:[
                           {
                               date:'2018/03',
                               day:'20',
                               title:"定制旅行服务功能介绍",
                               body:"提供在线旅游咨询方案获取，申请人提供姓名、旅行时间、旅行国家、旅行人数等信息，便可获取路线设计、机票定制、酒店预约等服务。"
                           },
                           {
                               date:'2018/03',
                               day:'17',
                               title:"定制旅行服务功能介绍",
                               body:"提供在线旅游咨询方案获取，申请人提供姓名、旅行时间、旅行国家、旅行人数等信息，便可获取路线设计、机票定制、酒店预约等服务。"
                           },
                            {
                               date:'2018/03',
                               day:'17',
                               title:"定制旅行服务功能介绍",
                               body:"提供在线旅游咨询方案获取，申请人提供姓名、旅行时间、旅行国家、旅行人数等信息，便可获取路线设计、机票定制、酒店预约等服务。"
                           },
                            {
                               date:'2018/03',
                               day:'17',
                               title:"定制旅行服务功能介绍",
                               body:"提供在线旅游咨询方案获取，申请人提供姓名、旅行时间、旅行国家、旅行人数等信息，便可获取路线设计、机票定制、酒店预约等服务。"
                           },
                       ]
                   },
                   {
                       label:"政策法规",
                       name:"003",
                       children:[
                           {
                               date:'2018/03',
                               day:'20',
                               title:"沈阳市对外贸易经济合作局便企服务",
                               body:"沈阳市对外贸易经济合作局便企服务"
                           },
                            {
                               date:'2018/03',
                               day:'18',
                               title:"外国人居留证件的办理",
                               body:"外国人居留证件的办理"
                           },
                            {
                               date:'2018/03',
                               day:'11',
                               title:"邀请外国人来华办理《邀请确认函》注意事项",
                               body:"邀请外国人来华办理《邀请确认函》应提供如下材料"
                           },
                       ]
                   },
               ],
               affiarDownData:[
                   {
                       icon:"logo-wordpress",
                       text:"关于办理邀请确认函的请示（样式2）"
                   },
                   {
                       icon:"logo-wordpress",
                       text:"关于办理邀请确认函的请示（样式1）"
                   },
                   {
                       icon:"logo-wordpress",
                       text:"《外国留学人员来华签证申请表》JW202"
                   },
                   {
                       icon:"logo-wordpress",
                       text:"关于办理邀请确认函的请示（样式2）"
                   },
               ]
            }
        }
    }
</script>
<style scoped>
   
    .lbz-affairs{
        display: flex;
        justify-content:center;
    }

    .lbz-affairs .lbz-affairs-tabs{
        width: 45%;
        margin-right: 10%;
    } 
    .lbz-affairs .lbz-affairs-table{
        width: 30%;
    }
    .lbz-affairs .lbz-affairs-table .lbz-affairs-table-title{
        width: 80px;
        font-size: 14px;
        padding: 8px;
        border-bottom: 2px solid #007feb;
    }
    .lbz-affairs .lbz-affairs-table .lbz-affairs-table-body{
        border-top: 1px solid #dcdee2;
    }
     .lbz-affairs .lbz-affairs-table .lbz-affairs-table-body li{
         height: 40px;
         display: flex;
         align-items: center;
         border-bottom: 1px solid #efefef;
         font-size: 13px;
     }
     .lbz-affairs .lbz-affairs-table .lbz-affairs-table-body li i{
         font-size: 30px;
         color: #007feb;
         padding: 0 10px;
     }
     .lbz-affairs .lbz-affairs-table .lbz-affairs-table-body li a{
         color: #000;
     }
     .lbz-tabs-body{
         display: flex;
         flex-direction:row;
     }
     .lbz-tabs-body .lbz-tabs-body-date{
         min-width: 80px;
         padding: 5px;
        text-align: center;
        border-right: 1px solid #000;
        margin-bottom: 20px;
     }
     .lbz-tabs-body .lbz-tabs-body-date p:first-child{
        color: #727171;
        font-size: 52px;
        font-weight: 600px;
        
     }
     .lbz-tabs-body .lbz-tabs-body-content{
         padding: 8px 0 8px 10px;
         display: flex;
         flex-direction: column;
         justify-content: center;
     }
     .lbz-tabs-body .lbz-tabs-body-content a{
        color: #595757;
        font-size: 18px;
        font-weight: 500;
        padding: 5px 0;
     }
</style>
