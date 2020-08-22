<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn flat class="child" @click="goBack" v-show="flag">
          <q-icon left size="2em" name="arrow_back_ios" color="white" />
        </q-btn>
        <q-toolbar-title>
          Vue&Quasar
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container style="height:100%">
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        align="justify"
        active-color="primary"
        class="text-grey my-tabs"
        v-model="tab"
        exact
      >
        <q-route-tab to="/home" name="home" icon="home" label="首页" exact />

        <q-route-tab
          to="/explore"
          name="explore"
          icon="explore"
          label="发现"
          exact
        />

        <q-route-tab
          to="/shopcar"
          name="cart"
          icon="shopping_cart"
          label="购物车"
          exact
        >
          <q-badge color="red" floating>{{ totalcount }}</q-badge>
        </q-route-tab>

        <q-route-tab
          to="/search"
          name="account"
          icon="account_circle"
          label="我"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      flag: true // 默认显示返回按钮
    };
  },
  methods: {
    goBack() {
      // 点击返回按钮，向后跳转
      this.$router.go(-1);
    }
  },
  created() {
    if (this.$route.path === "/home") {
      this.flag = false;
    } else {
      this.flag = true;
    }
  },
  watch: {
    // 当页面刷新的时候，不会触发 watch 中监听的 路由地址的变化
    "$route.path": function(newVal, oldVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  },
  computed: {
    ...mapGetters(["totalcount"])
  }
};
</script>

<style lang="scss">
.q-toolbar__title {
  margin-left: 50px;
  position: fixed;
}
.parent {
  padding-top: 60px;
  padding-bottom: 83px;
  height: 100%;
  width: 100%;
  button {
    height: 33.33%;
    width: 100%;
    border-radius: 0px;
    border-bottom-color: #97d3cd;
    border-bottom-width: 1px;
    border-style: solid;
  }
}
.my-tabs {
  div {
    display: flex;
    justify-content: space-around;
  }
  a {
    text-decoration: none;
    color: #9e9e9e;
  }
}
</style>
