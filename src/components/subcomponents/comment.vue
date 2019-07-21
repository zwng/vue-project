<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论的内容" maxlength="120" v-model="msg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item , i) in commentList" :key="i">
        <div class="cmt-title">
            第{{ i + 1 }}位楼主&nbsp;&nbsp;用户名:{{ item.user_name }}&nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
            {{ item.content === 'undefined'||'' ? '真懒,啥也没写' : item.content}}
        </div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="addcmt">加载更多</mt-button>
  </div>
</template>

<script>

import { Toast } from 'mint-ui'

import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'

export default {
    data() {
        return {
            pageCurrent: 1,
            commentList: [],
            msg:''
        }
    },
    props: ['id'],
    created() {
        this.getCommentList()
    },
    methods: {
        getCommentList() {
            axios.get('/api/getcomments/' + this.id + '?pageindex=' + this.pageCurrent)
            .then(res => {
                // console.log(res);
                if(res.data.status === 0) {
                    this.commentList = this.commentList.concat(res.data.message);
                }else {
                    Toast('获取评论内容失败。。。')
                }
            })
        },
        addcmt() {
            this.pageCurrent++,
            this.getCommentList()
        },
        postComment() {
            if(this.msg.trim().length === 0) {
                return Toast('请输入有效文字')
            }
            axios.post('/api/postcomment/' + this.id,{
                content: this.msg.trim()
            })
            .then(res => {
                if(res.data.status === 0) {
                    let newcmt = {
                        user_name: '匿名用户',
                        add_time: Date.now(),
                        content: this.msg.trim()
                    }
                    this.commentList.unshift(newcmt);
                    this.msg = ''
                }else {
                    Toast('提交请求失败了。。。')
                }
            })
        }
    }
    // components: {
    //     Toast
    // }
};
</script>

<style scoped>
.cmt-container h3{
    font-size: 18px;
}
.cmt-container textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list {
    margin: 5px 0;
}
.cmt-list .cmt-item {
    font-size: 13px;
}
.cmt-list .cmt-title {
    line-height: 30px;
    background-color: #ccc;
}
.cmt-list .cmt-body {
    line-height: 35px;
    text-indent: 2em;
}
</style>
