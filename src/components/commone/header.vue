<template>
    <div >
        
        <Menu class="lbz-menu-top" mode="horizontal" theme="light" active-name="1">
            <div class="ivu-affix">
                <div class="ivu-anchor-wrapper">
                    <div class="ivu-anchor">
                         <a href="#business" data-scroll-offset="0" data-href="#business" title="Static Position" class="ivu-anchor-link-title">Static Position</a>
            
                    </div>
                </div>
            </div>
                <div class="lbz-menu-top-left">
                    <p>湖南</p>
                </div>
                <Anchor show-ink>
                    <AnchorLink href="#member" title="Basic Usage" />
                    <AnchorLink href="#business" title="Static Position" />
                   
                </Anchor>
                   <div class="lbz-menu-top-right">
                    <MenuItem :name="index" v-for="(item,index) in menus" :key="index">
                                        <!-- <AnchorLink href="#" title="item.name" /> -->
                    </MenuItem>
                </div>
                
        </Menu>
    </div>
    
</template>
<script>
    export default {
        data () {
            return {
                menus:[
                    {
                        name:'首页',
                        path:''
                    },
                     {
                        name:'业务办理',
                        path:''
                    },
                     {
                        name:'风险预警',
                        path:''
                    },
                     {
                        name:'政务公开',
                        path:''
                    },
                     {
                        name:'成员单位',
                        path:''
                    },
                     {
                        name:'留言板',
                        path:''
                    },
                ]
            }
        }
    }
</script>
<style scoped>
    .lbz-menu-top{
        display: flex;
         justify-content: space-around;
    }
    .lbz-menu-top-left{
        display: flex;
    }
    .lbz-menu-top-right{
        display: flex;
       
    }
</style>
