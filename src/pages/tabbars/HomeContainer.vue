<template>
  <!-- 轮播图区域 -->
  <!-- <swiper :lunbotu="lunbotu" :imgname="'img'" :isfull="true"></swiper> -->
  <q-page padding>
    <div class="q-pa-md  parent absolute-top-left ">
      <router-link to="/home/newslist">
        <template>
          <q-btn flat class="child">
            <q-icon left size="5em" name="fiber_new" color="primary" />
            <div class="text-primary text-h4">新闻资讯</div>
          </q-btn>
        </template>
      </router-link>

      <router-link to="/home/photolist">
        <template>
          <q-btn flat class="child">
            <q-icon left size="5em" name="photo" color="primary" />
            <div class="text-primary text-h4">图片分享</div>
          </q-btn>
        </template>
      </router-link>
      <router-link to="/home/goodslist">
        <template>
          <q-btn flat class="child">
            <q-icon left size="5em" name="store" color="primary" />
            <div class="text-primary text-h4">商品购买</div>
          </q-btn>
        </template>
      </router-link>
    </div>
  </q-page>
</template>

<script>
// 导入自己封装的轮播图子组件
// import swiper from "../sub-components/Swiper.vue";

export default {
  data() {
    return {
      // lunbotu: [], // 轮播图的数组
    };
  },
  created() {
    // this.getlunbotu();
  },
  methods: {
    // async getlunbotu() {
    //   // 获取轮播图的方法
    //   const { data } = await this.$http.get("/api/getlunbo");
    //   if (data.status === 0) this.lunbotu = data.message;
    // },
  },
  components: {
    // 注册子组件
    // swiper,
  }
};
</script>

<style lang="scss" scoped>
// .mui-grid-view {
//   li {
//     img {
//       width: 60px;
//       height: 60px;
//     }
//     div {
//       font-size: 12px;
//     }
//   }
// }

// .mui-grid-view.mui-grid-9 {
//   background-color: #fff;
//   border: none;
// }

// .mui-grid-view.mui-grid-9 .mui-table-view-cell {
//   border: none;
// }

// .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
//   font-size: 13px;
// }
</style>
