<template>
  <q-page>
    <div class="q-pa-none">
      <q-carousel animated v-model="slide" arrows navigation swipeable infinite>
        <q-carousel-slide
          v-for="(item, index) in photolist"
          :key="index"
          :name="index"
          :img-src="item.src"
        />
      </q-carousel>
    </div>

    <div class="photoinfo-container q-pa-md">
      <h3 class="title">{{ photoinfo.title }}</h3>

      <p class="info">
        <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
        <span>点击：{{ photoinfo.click }}次</span>
      </p>

      <hr />

      <!-- 内容区域 -->
      <div class="content" v-html="photoinfo.content"></div>

      <!-- 评论子组件 -->
      <!-- 注意：在使用评论子组件的时候，人家必须要接收一个 newsid 的属性 -->
      <comment :newsid="id"></comment>
    </div>
  </q-page>
</template>

<script>
// 导入评论子组件
import comment from "../sub-components/Comment.vue";

export default {
  data() {
    return {
      photoinfo: {}, // 图片信息
      photolist: [], // 缩略图的数组
      slide: 1
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbImg();
  },
  methods: {
    async getPhotoInfo() {
      // 当调用一个异步的方法，同时，这个异步方法的返回值是 Promise 对象的时候，才可以使用 await 和 async
      const { data } = await this.$http.get("/api/getimageInfo/" + this.id);
      if (data.status === 0) return (this.photoinfo = data.message[0]);
    },
    async getThumbImg() {
      // 获取图片的缩略图数据
      const { data } = await this.$http.get("/api/getthumimages/" + this.id);
      if (data.status === 0) {
        //  为 每一张图片设置 宽和高
        data.message.forEach(item => {
          item.w = 600;
          item.h = 400;
        });

        this.photolist = data.message;
      }
    }
  },
  props: ["id"],
  components: {
    comment
  }
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  margin: 15px 0;
}
.info {
  font-size: 13px;
  display: flex;
  justify-content: space-between;
}
.content {
  font-size: 13px;
  line-height: 30px;
}
</style>
