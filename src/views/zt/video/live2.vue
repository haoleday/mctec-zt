<!--
 * @Author: your name
 * @Date: 2020-09-28 11:30:00
 * @LastEditTime: 2020-09-28 18:12:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\views\zt\history.vue
-->
<template>
  <div class="history">
    <div class="container">
      <div class="item cstbg">
        <h2 class="i-title">红河弥勒可邑旅游小镇景区</h2>
        <base-border>
          <div class="focusimg">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
        </base-border>
      </div>
    </div>
  </div>
</template>

<script>
import BaseBorder from "@/components/BaseBorder";
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
export default {
  components: {
    BaseBorder,
    videoPlayer
  },
  mounted() {},
  data() {
    return {
      // 视频播放
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        techOrder: ["flash", "html5"], // 兼容顺序
        flash: {
          hls: { withCredentials: false },
          swf: "/static/videojs/video-js.swf", // 引入静态文件swf
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            // 流配置，数组形式，会根据兼容顺序自动切换
            type: "rtmp/flv",
            src:
              "rtmp://yn.liveplay.ybsjyyn.com/live/Umxj2D6D.VgS1LDUS_RUPbAsBUziK8S85r5woNjND14BsMLKQJvWA50i1qgAbxn_?bizid=16847&txSecret=af62f9a8880ef237212911b8a5007d73&txTime=5f6d660e",
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
};
</script>

<style lang="less">
.history {
  .container {
    padding: 40px;
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
      font-size: 30px;
      line-height: 30px;
      font-family: "宋体";
      color: red;
      font-weight: bold;
    }
    .video-js .vjs-big-play-button{
        left: 250px;
        top: 130px;
    }
  }
}
</style>
