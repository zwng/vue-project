<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id === 0 ? 'mui-active' : '']"
            v-for="item in cates"
            :key="item.id"
            @click="getimageByid(item.id)"
          >{{ item.title }}</a>
        </div>
      </div>
    </div>

    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
        <img v-lazy="item.img_url" />
        <div class="info">
          <h4 class="info-title">
            {{ item.title }}
          </h4>
          <p class="info-body" v-html="item.content">
          </p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Lazyload } from "mint-ui";
import mui from "../../assets/lib/dist/js/mui.js";
import axios from "axios";
axios.defaults.baseURL = "http://www.liulongbin.top:3005";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getCatesList();
    this.getimageByid(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCatesList() {
      axios.get("/api/getimgcategory").then(res => {
        // console.log(res);
        if (res.data.status === 0) {
          res.data.message.unshift({ title: "全部", id: 0 });
          this.cates = res.data.message;
        }
      });
    },
    getimageByid(id) {
      axios.get("/api/getimages/" + id).then(res => {
        if (res.data.status === 0) {
          // console.log(res);
          
          this.list = res.data.message;
        }
      });
    }
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}
.mui-slider {
  margin-bottom: 10px;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 0 30px;
}
.photo-list li {
  background-color: #fff;
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 15px;
  box-shadow: 0 0 9px #999;
  position: relative;
}
.photo-list li img {
  width:100%;
  vertical-align: middle;
}
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.info {
  color:#fff;
  background:rgba(0,0,0,0.5);
  position:absolute;
  width: 100%;
  bottom:0;
  text-align: left;
  max-height: 100px;
  padding: 0 5px;
}
.info .info-title {
  font-size: 18px;
  margin: 8px auto;
  width:95%;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis; 
}
.info .info-body {
  margin: auto;
  color:#fff;
  font-size: 14px;
  line-height: 20px;
  width:95%;
  overflow:hidden;
  text-overflow:ellipsis; 
  white-space:pre-wrap;
}
</style>
