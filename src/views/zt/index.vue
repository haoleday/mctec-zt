<!--
 * @Author: your name
 * @Date: 2020-09-27 18:35:20
 * @LastEditTime: 2020-09-28 18:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\views\zt\index.vue
-->
<template>
<div class="container">
    <h2 class="i-title">创建成果</h2>
    <base-border>
        <p class="i-desc">
            州委、州政府始终坚持以人民为中心的发展思想，大力推进兴边富民、沿边三年行动计划、直过民族和人口较少民族发展，抓好“十县百乡千村万户”示范创建工程建设，促进少数民族和民族地区经济社会稳步发展，各族群众获得感、幸福感、安全感不断增强，民族团结、边疆稳定、经济发展、社会和谐的良好局面更加巩固。
        </p>
        <router-link to="/history">
            <div class="i-btn">进入</div>
        </router-link>
    </base-border>
    <!-- banner

    <div class="flowplayer" data-swf="flowplayer.swf" data-ratio="0.4167">
        <video>
            <source type="video/mp4" src="rtmp://yn.liveplay.ybsjyyn.com/live/KEPI9GBSYCnoZNuDqiq5.0W0Bh7X_kFbeajuOGtZWHq95W.T3KtAV3l1sDwIfWD3?bizid=16847&txSecret=873123267852fe95e5e3ce9116bcbad1&txTime=5f6d6664" />
        </video>
    </div>
    -->

</div>
</template>

<script>
import BaseBorder from '@/components/BaseBorder'
export default {
    components: {
        BaseBorder
    },
    mounted() {
        // layui.use('element', function () {
        //     var element = layui.element
        // })
    },
    methods: {},
};
</script>

<style scoped>
.container {
    padding-top: 50px;
    width: 50%;
    margin: 0 auto;
    flex-flow: column;
}

.i-title {
    font-size: 40px;
    font-family: "宋体";
    color: red;
    font-weight: bold;
    line-height: 2em;
}

.i-desc {
    font-size: 18px;
    line-height: 2.5em;
    color: #fff;
    text-align: left;
    text-indent: 2em;
}

.i-btn {
    color: #fff;
    font-size: 38px;
    width: 150px;
    padding: 0 50px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
    cursor: pointer;
    background-image: url(~@/assets/images/btn.png);
    background-position: 0;
    background-size: cover;
    background-repeat: no-repeat;

}
</style>
