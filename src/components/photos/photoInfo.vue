<template>
  <div class="photoinfo-container">
    <h3>{{ photoInfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoInfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoInfo.click }}次</span>
    </p>

    <hr />

    <!-- 缩略图区域 -->
    <div>
      <vue-preview :slides="imgs"></vue-preview>
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoInfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://www.liulongbin.top:3005";
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      imgs: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getimgList()
  },
  methods: {
    getPhotoInfo() {
      axios.get("/api/getimageInfo/" + this.id).then(res => {
        if (res.data.status === 0) {
          this.photoInfo = res.data.message[0];
          // console.log(this.photoInfo);
        }
      });
    },
    getimgList() {
        axios.get("/api/getthumimages/" + this.id).then(res => {
            if (res.data.status === 0) {
            this.imgs = res.data.message;
            this.imgs.forEach(item => {
                item.w = 600;
                item.h = 400;
                item.msrc = item.src;
            })
            }
        });
      }

  },
  components: {
      "cmt-box": comment
  }
};
</script>

<style >
.photoinfo-container {
  padding: 3px;
}
.photoinfo-container h3 {
  color: #26a2ff;
  font-size: 15px;
  text-align: center;
  margin: 15px 0;
}
.photoinfo-container .subtitle {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
}
.photoinfo-container .content {
  font-size: 13px;
  line-height: 30px;
}
.my-gallery {
    text-align: center;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px;
    /* justify-content: space-between; */
}
figure {
    float: left;
    width: 33.333%;
    text-align: center;
    display: block;
    padding: 0 5px;
    margin: 5px 0 0 0;
}
.my-gallery figure img {
    text-align: center;
    margin: 0 auto;
    width: 100%;
}
</style>
