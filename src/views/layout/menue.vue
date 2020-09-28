<!--
 * @Author: your name
 * @Date: 2020-09-28 11:34:56
 * @LastEditTime: 2020-09-28 14:34:56
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
                <a href="/home/history">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn " :class="{active:$route.name=='history-home'}">
                        共同意识更坚牢
                    </button>
                </a>
            </li>
            <li>
                <a href="/home/economics">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name=='economics-home'}">
                        经济高质量发展
                    </button>
                </a>
            </li>
            <li>
                <a href="/home/facilities">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name=='facilities-home'}">
                        基础设施建设不断改善
                    </button>
                </a>
            </li>
            <li>
                <a href="/home/sociology">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name=='sociology-home'}">
                        社会事业不断进步
                    </button>
                </a>
            </li>
            <li>
                <a href="/home/government">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name=='government-home'}">
                        边疆治理能力不断提升
                    </button>
                </a>
            </li>
            <li>
                <a href="/home/county">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name=='county-home'}">
                        县市专题片展示
                    </button>
                </a>
            </li>
            <li>
                <a href="/video">
                    <button type="button" class="layui-btn layui-btn-lg cst-btn" :class="{active:$route.name.indexOf('video')!=-1}">
                        实时视频
                    </button>
                </a>
            </li>
        </ul>
        <!-- <div class="btn2">按钮测试</div>
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
        width: 22vw;
        padding-top: 100px;
        padding-right: 160px;
        box-sizing: border-box;

        .layui-btn {
            background-color: #3e7bc4;
            margin-bottom: 10px;
            font-size: 18px;
            width: 100%;
            text-align: center;
            font-family: '宋体';
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
