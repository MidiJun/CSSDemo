<template>
  <q-page padding>
    <div class="newsinfo-container">
      <h3 class="title text-h5">{{ newsinfo.title }}</h3>
      <p class="info text-primary">
        <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
        <span>点击：{{ newsinfo.click }}次</span>
      </p>
      <hr />
      <!-- 新闻内容 -->
      <div class="content text-body1" v-html="newsinfo.content"></div>
      <!-- 这里评论组件的位置 -->
      <!-- 父组件向子组件传值，通过 属性绑定的形式 -->
      <comment :newsid="id"></comment>
    </div>
  </q-page>
</template>

<script>
// 导入 Comment.vue 子组件
import comment from "../sub-components/Comment.vue";

export default {
  data() {
    return {
      newsinfo: {} // 新闻详情
    };
  },
  methods: {
    async getNewsInfo() {
      // 根据Id获取新闻的详情
      const { data } = await this.$http.get("/api/getnew/" + this.id);
      if (data.status === 0) return (this.newsinfo = data.message[0]);
    }
  },
  created() {
    // console.log(this);
    this.getNewsInfo();
  },
  props: ["id"],
  components: {
    // 为当前的 NewsInfo.vue 组件注册私有的子组件
    comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 3px;
  .info {
    display: flex;
    justify-content: space-between;
  }
}
</style>
