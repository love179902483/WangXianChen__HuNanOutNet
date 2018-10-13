<template>
    <div>
        <div class="lbz-notice">
            <span class="lbz-notice-title">
                <Icon type="md-megaphone" />:
                通知公告
            </span>
            <p>
                关于《中国（湖南）出入境人员单一窗口》测试试运行的声明2018-03-20 
            </p>
            <a href="#">更多</a>
        </div>
        
    </div>

</template>
<script>
    export default {
        
    }
</script>
<style>
    .lbz-notice{
        display: flex;
        justify-content: space-around;
        height: 40px;
        align-items: center;
        border-top: 1px solid  #ffd77a;
        border-bottom: 1px solid  #ffd77a;
        background-color: #fff9e6;
        font-size: 13px;
    }
    .lbz-notice-title,
    .lbz-notice a{
        color: #cb8f05;
        
        font-weight: 600;
    }
    .lbz-notice p{
        padding-right: 400px; 
    }
    
</style>
