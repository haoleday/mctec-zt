<!--
 * @Author: your name
 * @Date: 2020-09-28 11:34:56
 * @LastEditTime: 2020-09-28 14:25:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\views\layout\menue.vue
-->
<template>
<div class="container">
    <div class="main">
        <router-view />
    </div>
    <div class="menue">
        <ul>
            <li>
                <a href="/video/live">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{ active: $route.name == 'video-live' }">
                        实时视频1
                    </button>
                </a>
            </li>
            <li>
                <a href="/video/live2">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{ active: $route.name == 'video-live2' }">
                        实时视频2
                    </button>
                </a>
            </li>
            <li>
                <a href="/video/live3">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{ active: $route.name == 'video-live3' }">
                        实时视频3
                    </button>
                </a>
            </li>
        </ul>

        <a href="/home/history">

            <button type="button" class="layui-btn  cst-btn">
                <i class="layui-icon layui-icon-return"></i>
                返回
            </button>
        </a>
        <!-- 
        -->
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="less">
.container {
    display: flex;

    .main {
        flex: 1;
    }

    .menue {
        text-align: right;
        width: 25vw;
        padding-top: 100px;
        padding-right: 160px;
        box-sizing: border-box;

        .layui-btn {
            background-color: #3e7bc4;
            margin-bottom: 15px;
            font-size: 20px;
            width: 100%;
            text-align: center;
            font-family: "宋体";
            font-weight: bold;
        }

        .layui-btn:hover {
            background-color: #f79646;
            border-color: #fff;
            opacity: 1;
        }

        .layui-btn.active {
            background-color: #f79646;
            border-color: #fff;
        }

        .cst-btn:before {
            position: absolute;
            content: " ";
            border: transparent 14px solid;
            border-width: 13px 8px;
            border-right-color: red;
            top: 1px;
            left: -16px;
            height: 0;
            width: 0;
        }

        .cst-btn:after {}

        .btn2:before {
            position: absolute;
            content: " ";
            border: transparent 14px solid;
            border-width: 13px 8px;
            border-right-color: red;
            top: 1px;
            left: -16px;
            height: 0;
            width: 0;
        }

        .btn2 {
            position: relative;
            width: 165px;
            height: 30px;
            background: #4a886c;
            border-radius: 5px;
            margin-left: 14px;
            text-align: center;
            line-height: 28px;
            color: #ffffff;
            font-size: 14px;
            border: 1px solid red;
        }

        .btn2:after {
            position: absolute;
            content: " ";
            border: red 14px solid;
            border-width: 15px 8px;
            border-right-color: transparent;
            top: -1px;
            left: 158px;
            height: 0;
            width: 0;
        }
    }
}
</style>
