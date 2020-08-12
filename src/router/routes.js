import MainLayout from "layouts/MainLayout.vue";
import HomeContainer from "pages/tabbars/HomeContainer.vue";
import ExploreContainer from "pages/tabbars/MemberContainer.vue";
import ShopcarContainer from "pages/tabbars/ShopcarContainer.vue";
import SearchContainer from "pages/tabbars/SearchContainer.vue";
import NewsList from "pages/news/NewsList.vue";
import NewsInfo from "pages/news/NewsInfo.vue";
import PhotoList from "pages/photos/PhotoList.vue";
import PhotoInfo from "pages/photos/PhotoInfo.vue";
import GoodsList from "pages/goods/GoodsList.vue";
import GoodsInfo from "pages/goods/GoodsInfo.vue";
import GoodsDesc from "pages/goods/GoodsDesc.vue";
import GoodsComment from "pages/goods/GoodsComment.vue";

const routes = [
  {
    path: "/",

    component: MainLayout,
    children: [
      { path: "", redirect: "home" },
      { path: "home", component: HomeContainer },
      { path: "home/newslist", component: NewsList },
      { path: "home/photolist", component: PhotoList },
      { path: "home/goodslist", component: GoodsList },
      { path: "explore", component: ExploreContainer },
      { path: "shopcar", component: ShopcarContainer },
      { path: "search", component: SearchContainer },
      { path: "home/newsinfo/:id", component: NewsInfo, props: true },
      { path: "home/photoinfo/:id", component: PhotoInfo, props: true },
      { path: "home/goodsinfo/:id", component: GoodsInfo, props: true },
      { path: "home/goodsdesc/:id", component: GoodsDesc, props: true },
      // router.push({ name: 'user', params: { userId: 123 }})
      {
        path: "home/goodscomment/:id",
        component: GoodsComment,
        props: true,
        name: "goodscmt"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
