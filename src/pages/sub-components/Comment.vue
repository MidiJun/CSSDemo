<template>
  <div>
    <textarea
      placeholder="说点什么..."
      maxlength="120"
      v-model="msg"
    ></textarea>

    <q-btn
      color="primary"
      class="full-width"
      @click="postMsg"
      label="发表评论"
    />

    <!-- 评论列表区域 -->
    <q-list class="q-mt-md">
      <div v-for="(item, i) in cmtlist" :key="i">
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey cmt-user">{{
              item.user_name
            }}</q-item-label>
            <q-item-label>{{ item.content }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>{{
              item.add_time | dateFormat
            }}</q-item-label>
          </q-item-section>
        </q-item>

        <q-separator spaced inset />
      </div>
    </q-list>

    <mt-button type="danger" size="large" plain @click="loadMore"
      >加载更多</mt-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1, // 默认展示第一页的评论
      cmtlist: [], // 评论数组
      msg: "" // 即将发表的评论内容
    };
  },
  created() {
    this.getCommentByPage();
  },
  methods: {
    async getCommentByPage() {
      // 根据页数来获取评论的数据
      const { data } = await this.$http.get(
        "/api/getcomments/" + this.newsid + "?pageindex=" + this.page
      );
      if (data.status === 0)
        return (this.cmtlist = this.cmtlist.concat(data.message));
    },
    loadMore() {
      // 点击按钮，加载更多的评论
      // 当触发这个加载更多方法的时候，应该让 page 页码 + 1 之后，再调用 getCommentByPage 方法
      this.page++;
      this.getCommentByPage();
    },
    async postMsg() {
      // 点击发表评论：
      // 如果用户没有填写评论内容，则阻止其发表评论
      if (this.msg.trim().length <= 0) return Toast("请填写评论内容！");
      // 发表评论的逻辑：
      const { data } = await this.$http.post(
        "/api/postcomment/" + this.newsid,
        {
          content: this.msg.trim()
        }
      );
      if (data.status === 0) {
        // 刷新评论列表
        // 1. 再次调用 getCommentByPage()
        // console.log("ok");
        // // 获取评论之前，先把之前所有的评论清空
        // this.cmtlist = [];
        // this.getCommentByPage();

        // 为了防止重新调用 getCommentByPage 方式时候，会把 之前的所有评论清空的问题：
        // 我们 在客户端，手动拼接出一个 评论的对象，并把 这个评论对象， unshift 到 cmtlist 中
        this.cmtlist.unshift({
          user_name: "匿名用户",
          add_time: new Date(),
          content: this.msg.trim()
        });
        this.msg = "";
      }
    }
  },
  props: ["newsid"] // 接收父组件传递过来的新闻Id
};
</script>

<style lang="scss" scoped>
textarea {
  font-size: 14px;
  margin: 0;
}
.cmt-user {
  font-size: 14px;
}
</style>
