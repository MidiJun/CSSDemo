<template>
  <q-page padding class="bg-grey-2">
    <!-- 商品信息 -->
    <div v-if="selectedcount != 0">
      <q-card class="my-card" v-for="item in goodslist" :key="item.id" flat>
        <q-card-section class="q-pb-none">
          <img :src="item.thumb_path" alt="" />
          <div class="goodsInfo">
            <div class="text-subtitle2  text-grey-7">
              {{ item.title }}
            </div>
            <div>￥{{ item.sell_price }}</div>
          </div>
        </q-card-section>

        <q-card-actions align="left">
          <nobox :initcount="countObj[item.id]" :id="item.id"></nobox>
          <q-btn
            class="q-ml-md"
            flat
            rounded
            color="grey"
            icon="delete"
            label="删除"
            @click.prevent="del(item.id)"
          />
        </q-card-actions>
      </q-card>
      <!-- 结算区域 -->
      <q-card flat class="my-card bg-grey-1">
        <q-card-section class="text-body1">
          <div>商品总数</div>
          <div>{{ selectedcount }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-body1">
          <div>商品总价</div>
          <div>￥{{ amount }}</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="text-weight-bold">总计</div>
          <div class="text-weight-bold text-blue">￥{{ amount }}</div>
        </q-card-section>
      </q-card>
      <div class=" btnSubmit">
        <q-btn
          class="full-width btn"
          unelevated
          rounded
          color="primary"
          label="去结算"
        />
      </div>
    </div>
    <div class="cartEmpty column items-center" v-if="selectedcount === 0">
      <img src="../../img/cart.svg" alt="" />
      <div class="text-h6 text-grey-8 text-center">购物车竟然是空的</div>
      <q-btn outline color="primary" @click="toShop" label="去逛逛" />
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import nobox from "../sub-components/shopcar_nobox.vue";

export default {
  data() {
    return {
      goodslist: [] // 商品列表
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    ...mapMutations(["delFromCart"]),
    async getGoodsList() {
      if (this.idstr.length <= 0) return;
      const { data } = await this.$http.get(
        "/api/goods/getshopcarlist/" + this.idstr
      );
      if (data.status === 0) return (this.goodslist = data.message);
    },
    del(id) {
      // 删除商品
      // console.log(id);
      // 从界面上删除数据
      this.goodslist.some((item, i) => {
        if (item.id == id) {
          this.goodslist.splice(i, 1);
          return true;
        }
      });
      // 从 vuex 中删除数据
      this.delFromCart(id);

      this.$q.notify({
        message: "此商品已删除",
        position: "center",
        timeout: 100
      });
    },
    toShop() {
      this.$router.push("/home/goodslist");
    }
  },
  computed: {
    ...mapGetters([
      "idstr",
      "countObj",
      "seletedObj",
      "selectedcount",
      "amount"
    ])
  },
  components: {
    nobox
  }
};
</script>

<style lang="scss" scoped>
.my-card {
  margin: 10px 18px;
  border-radius: 15px;
  .q-card__section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      margin-left: 15px;
      width: 60px;
      height: 60px;
    }
    .goodsInfo {
      width: 60%;
      div:last-child {
        font-weight: bold;
        margin-top: 5px;
      }
    }
  }
}
.btnSubmit {
  margin: 20px;
  .btn {
    line-height: 40px;
  }
}
.danger {
  color: red;
  font-weight: bold;
  font-size: 16px;
}

.jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cartEmpty {
  margin-top: 40%;
  img {
    margin-bottom: 5%;
  }
  button {
    width: 80px;
    margin-top: 5%;
  }
}
</style>
