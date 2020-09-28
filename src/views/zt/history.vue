<!--
 * @Author: your name
 * @Date: 2020-09-28 11:30:00
 * @LastEditTime: 2020-09-28 13:29:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\views\zt\history.vue
-->
<template>
<div class="history">
    <div class="container">
        <div class="item cstbg">
            <h2 class="i-title">民族团结进步之花开遍红河大地</h2>
            <base-border>
                <img src="/static/imgs/2.jpg" alt="" />
            </base-border>
        </div>
        <div class="item">
            <h2 class="i-title">民族团结进步之花开遍红河大地</h2>
            <base-border>
                <div class="focusimg">
                    <div class="layui-carousel" id="test1">
                        <div carousel-item>
                            <div>
                                <img src="/static/imgs/3.jpg" alt="">
                            </div>
                            <div><img src="/static/imgs/2.jpg" alt=""></div>
                            <div><img src="/static/imgs/3.jpg" alt=""></div>
                            <div><img src="/static/imgs/2.jpg" alt=""></div>
                            <div><img src="/static/imgs/3.jpg" alt=""></div>
                        </div>
                    </div>
                </div>
            </base-border>
        </div>
    </div>
</div>
</template>

<script>
import BaseBorder from "@/components/BaseBorder";
export default {
    components: {
        BaseBorder,
    },
    mounted() {
        //建造实例
        layui.use("carousel", function () {
            var carousel = layui.carousel;
            //建造实例
            carousel.render({
                elem: "#test1",
                width: "100%", //设置容器宽度
                arrow: "always", //始终显示箭头
                //,anim: 'updown' //切换动画方式
            });
        });
    },
    data() {
        return {};
    },
};
</script>

<style lang="less">
.history {
    .container {
        padding: 50px;
        display: flex;

        .item {
            flex: 1;
            margin: 0 35px;
        }

        .cstbg .content {
            background-color: rgba(247, 150, 47, 0.5);
        }

        .focusimg {
            min-height: 290px;
        }

        .i-title {
            font-size: 32px;
            line-height: 50px;
            font-family: "宋体";
            color: red;
            font-weight: bold;
        }
    }
}
</style>
