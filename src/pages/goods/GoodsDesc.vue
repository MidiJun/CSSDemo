<template>
  <q-page padding>
    <div class="goodsdesc-container">
      <h3 class="title">{{ info.title }}</h3>
      <hr />
      <div class="content" v-html="info.content"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      info: {} // 商品的描述信息
    };
  },
  created() {
    this.getGoodsDesc();
  },
  methods: {
    async getGoodsDesc() {
      const { data } = await this.$http.get("/api/goods/getdesc/" + this.id);
      if (data.status === 0) return (this.info = data.message[0]);
    }
  },
  props: ["id"]
};
</script>

<style lang="scss">
.goodsdesc-container {
  .title {
    font-size: 18px;
    margin: 10px;
    text-align: center;
  }
  .content {
    margin: 10px;
    img {
      width: 100%;
    }
  }
}
</style>
