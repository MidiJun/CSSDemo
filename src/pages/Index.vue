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

<style lang="scss" scoped></style>

<script>
export default {
  name: "PageIndex"
};
</script>
