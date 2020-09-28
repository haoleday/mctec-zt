<!--
 * @Author: your name
 * @Date: 2020-09-28 09:33:08
 * @LastEditTime: 2020-09-28 11:11:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\components\baseBorder.vue
-->
<template>
<div>
    <div class="b-container">
        <div class="content">
            <slot></slot>
        </div>
        <div class="lt"></div>
        <div class="rt"></div>
        <div class="lb"></div>
        <div class="rb"></div>

        <div class="t-line"></div>
        <div class="b-line"></div>
        <div class="r-line"></div>
        <div class="l-line"></div>
        <!---
        -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="less">
.b-container {
    position: relative;
    min-width: 50px;
    min-height: 50px;
    padding: 25px 40px;
    padding-right: 35px;
    z-index: 10;
    // border: 5px solid rgba(230, 0, 18);

    .content {
        background: rgba(213, 32, 36, .5);
        padding: 20px;
    }

    .lt,
    .rt,
    .lb,
    .rb {
        width: 130px;
        height: 50px;
        position: absolute;
        z-index: 5;
    }

    .lt,
    .lb {
        left: 0;
        top: 0;
        background: url(~@/assets/images/lt.png) no-repeat
    }

    .lb {
        height: 100px;
        top: auto;
        bottom: 0;
        background: url(~@/assets/images/lb.png) no-repeat;
    }

    .rt,
    .rb {
        height: 100px;
        right: 0;
        top: 0;
        background: url(~@/assets/images/rt.png) no-repeat;
    }

    .rb {

        top: auto;
        bottom: 0;
        background: url(~@/assets/images/rb.png) no-repeat;
    }

    .t-line,
    .r-line,
    .b-line,
    .l-line {
        z-index: 2;
        position: absolute;
    }

    .t-line,
    .b-line {
        top: 0;
        left: 0;
        width: calc(~"(100% - 260px)");
        margin-left: 130px;
        height: 17px;
        background: url(~@/assets/images/line-t.png) repeat-x;
    }

    .b-line {
        top: auto;
        bottom: 0;
        background: url(~@/assets/images/line-b.png) repeat-x;
    }

    .l-line,
    .r-line {
        top: 0;
        left: 0;
        height: calc(~"(100% - 100px)");
        width: 35px;
        margin-top: 50px;
        background: url(~@/assets/images/line-l.png) repeat-y;
    }

    .r-line {
        width: 27px;
        left: auto;
        right: 0;
        background: url(~@/assets/images/line-r.png) repeat-y;
    }
}
</style>
