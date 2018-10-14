<template>
    <Carousel autoplay :autoplay-speed="speed" v-model="value2" loop>
         <CarouselItem >
            <div class="demo-carousel">
                <img src="../../../resource/images/001.jpg" alt="">
            </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../resource/images/002.jpg" alt="">
            </div>
        </CarouselItem>
         <CarouselItem>
            <div class="demo-carousel">
                <img src="../../../resource/images/003.jpg" alt="">
            </div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0,
                speed:3000,
                imgs:[
                    {
                        name:"001",
                        src:'../../../resource/images/001.jpg'
                    },
                     {
                        name:"002",
                        src:'../../../resource/images/002.jpg'
                    },
                     {
                        name:"003",
                        src:'../../../resource/images/003.jpg'
                    },
                     {
                        name:"004",
                        src:'../../../resource/images/004.jpg'
                    }, {
                        name:"005",
                        src:'../../../resource/images/005.jpg'
                    }
                ]
            }
        }
    }
</script>
<style scoped>
    .demo-carousel{
        height: 450px;
    }
    .demo-carousel img{
        width: 100%;
    }
</style>
