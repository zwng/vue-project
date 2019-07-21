<template>
    <div class="newsinfo-container">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.add_time | dateFormat}}</span>
            <span>阅读: {{ newsInfo.click }}次</span>
        </p>
        <hr>
        <div class="content" v-html="newsInfo.content">
        </div>
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comment.vue'
import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            axios.get('/api/getnew/' + this.id)
            .then(res => {
                // console.log(res);
                if(res.data.status === 0) {
                    this.newsInfo = res.data.message[0]
                }else {
                    Toast('获取新闻详情失败。。。')
                }
            })

        }
    },
    components: {
        'comment-box':comment,
        Toast
    }
}
</script>

<style scoped>
.newsinfo-container {
    padding: 0 4px;
}
.newsinfo-container .title {
    font-size: 16px;
    margin: 15px 0;
    color:red;
    text-align:center;
}
.newsinfo-container .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;

}
.newsinfo-container .content img{
    width:100%;
}
</style>
