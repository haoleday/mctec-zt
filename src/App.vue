<!--
 * @Author: your name
 * @Date: 2020-09-27 18:20:48
 * @LastEditTime: 2020-09-28 09:21:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\App.vue
-->
<template>
<div id="app" class="wrap" :style="{transform: 'scale('+scale+') translate(-50%, -50%)'}">
    <router-view />
</div>
</template>

<script>
import {
    debounce
} from 'lodash';
export default {
    data() {
        return {
            ratio: 3.556,
            scale: 1,
            defaultWidht: 1920,
            screenWidth: 1920, //屏幕宽度
            screenHeight: 720,
        };
    },
    mounted() {
        var _this = this;
        this.getWindowWidth();
        window.addEventListener('resize', debounce(() => {
            _this.getWindowWidth();
            console.log('防抖');
        }, 300));
    },
    methods: {
        getWindowWidth() {
            // 获取窗口宽度
            if (window.innerWidth)
                this.screenWidth = window.innerWidth;
            else if ((document.body) && (document.body.clientWidth))
                this.screenWidth = document.body.clientWidth;

            // 通过深入 Document 内部对 body 进行检测，获取窗口大小
            if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
                this.screenWidth = document.documentElement.clientWidth;
            }

            // this.screenHeight = this.screenWidth / this.ratio; ///窗口高度
            console.log('_this.screenHeight:', this.screenHeight);
            this.scale = this.screenWidth / this.defaultWidht;
        },
        initWidth() {},
    },
};
</script>

<style lang="less">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.wrap {
    width: 1920px;
    height: 540px;
    background-image: url("/static/imgs/bg.jpg");
    background-size: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transition: .3s all;
    display: flex;
    flex-direction: column;
    transform-origin: 0 0;
}
</style>
