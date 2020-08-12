import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    // { path: "/", redirect: "/home" },
    // { path: "/home", component: HomeContainer }
    // { path: "/member", component: MemberContainer },
    // { path: "/shopcar", component: ShopcarContainer },
    // { path: "/search", component: SearchContainer },
    // { path: "/home/newslist", component: NewsList },
    // { path: "/home/newsinfo/:id", component: NewsInfo, props: true }, // 启用 props 来接收路由的参数
    // { path: "/home/photolist", component: PhotoList },
    // { path: "/home/photoinfo/:id", component: PhotoInfo, props: true },
    // { path: "/home/goodslist", component: GoodsList },
    // { path: "/home/goodsinfo/:id", component: GoodsInfo, props: true },
    // { path: "/home/goodsdesc/:id", component: GoodsDesc, props: true },
    // // router.push({ name: 'user', params: { userId: 123 }})
    // {
    //   path: "/home/goodscomment/:id",
    //   component: GoodsComment,
    //   props: true,
    //   name: "goodscmt"
    // }

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
