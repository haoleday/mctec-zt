<!--
 * @Author: your name
 * @Date: 2020-09-28 11:30:00
 * @LastEditTime: 2020-09-28 17:00:16
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
                <div class="focusimg">
                    <video width="600px" height="300px" controls>
                        <source src="rtmp://yn.liveplay.ybsjyyn.com/live/KEPI9GBSYCnoZNuDqiq5.0W0Bh7X_kFbeajuOGtZWHq95W.T3KtAV3l1sDwIfWD3?bizid=16847&txSecret=873123267852fe95e5e3ce9116bcbad1&txTime=5f6d6664" />
                        您的浏览器不支持 video 标签。
                    </video>
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
    mounted() {},
    data() {
        return {};
    },
};
</script>

<style lang="less">
.history {
    .container {
        padding: 50px;
        // display: block;

        .item {
            width: 720px;
            margin: 0 auto;
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
