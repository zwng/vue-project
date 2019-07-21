<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <router-link :to="'/home/newsInfo/' + item.id" class>
          <img
            class="mui-media-object mui-pull-left"
            :src="item.img_url"
          />
          <div class="mui-media-body">
            <h4>{{ item.title }}</h4>
            <p class="mui-ellipsis">
                <span>发布于：{{ item.add_time | dateFormat}}</span>
                <span>阅读：{{ item.click }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    
    </ul>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
export default {
    data() {
        return {
            newsList: []
        }
    },
    created() {
        this.getNewsList()
    },
    methods: {
        getNewsList() {
            axios.get('/api/getnewslist')
            .then(res => {
                // console.log(res);
                if(res.data.status === 0) {
                    this.newsList = res.data.message
                }else {
                    Toast('获取新闻列表失败。。。')
                }
            })
        }
    },
    components: {
        Toast
    }
};
</script>

<style scoped>
.mui-media-body h4{
    padding: 0;
    /* margin: 0; */
    font-style: 14px;
    text-align: left;
    font-weight: normal;
}
.mui-ellipsis {
    display:flex;
    justify-content:space-between;
    color:#26a2ff;
}
</style>
