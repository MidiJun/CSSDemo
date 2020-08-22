<template>
  <q-page padding>
    <!-- 图片分类区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <span
            :class="['mui-control-item', item.id === 0 ? 'mui-active' : '']"
            v-for="item in category"
            :key="item.id"
            @tap="getPhotoByCategory(item.id)"
          >
            {{ item.title }}
          </span>
        </div>
      </div>
    </div>

    <!-- 图片的列表区域 -->
    <router-link
      tag="div"
      v-for="item in photolist"
      :key="item.id"
      :to="'/home/photoinfo/' + item.id"
      class="q-pa-md row items-start q-gutter-md"
    >
      <q-card class="my-card">
        <q-img :src="item.img_url" spinner-color="white" :ratio="16 / 9" basic>
          <div class="absolute-bottom text-subtitle2 text-center">
            {{ item.title }}
          </div>
        </q-img>
      </q-card>
    </router-link>
  </q-page>
</template>

<script>
// 导入 mui 的JS文件， 这样，就可以使用 mui 来初始化 滑动控件了
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      category: [], // 所有的图片分类数据
      photolist: [] // 图片列表
    };
  },
  created() {
    this.getPhotoCategory();
    this.getPhotoByCategory(0);
  },
  methods: {
    async getPhotoCategory() {
      // 获取图片的分类数据
      const { data } = await this.$http.get("/api/getimgcategory");
      if (data.status === 0) {
        // 手动补全分类的信息
        data.message.unshift({ title: "全部", id: 0 });
        this.category = data.message;
      }
    },
    async getPhotoByCategory(id) {
      // 根据图片分类的Id获取图片的数据
      const { data } = await this.$http.get("/api/getimages/" + id);
      if (data.status === 0) return (this.photolist = data.message);
    }
  },
  mounted() {
    // 当此钩子函数执行的时候，我们才可以进行控件或插件的初始化工作；
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style lang="scss" scoped>
.mui-slider {
  touch-action: pan-x;
}
.mui-segmented-control.mui-segmented-control-inverted
  .mui-control-item.mui-active {
  color: #26a69a;
}

.my-card {
  width: 100%;
}
</style>
