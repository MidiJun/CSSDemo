/*
export function someMutation (state) {
}
*/

export const addToCar = (state, goods) => {
  // 将商品添加到购物车
  // 如果购物车中，之前曾经有这条商品，则只更新数量即可；如果曾经没有，则 直接push
  // state.cart.push(goods)
  let flag = false;
  state.cart.some(item => {
    if (item.id == goods.id) {
      // 如果找到了对应的商品，则直接更新数量
      item.count += goods.count;
      flag = true;
      // 终止后续循环
      return true;
    }
  });
  // 如果没找到，则直接 push 到购物车
  if (!flag) {
    state.cart.push(goods);
  }

  // 为了持久化存储购物车的数据，可以把 购物车的商品，序列化出来，存储到 localStorage 中
  localStorage.setItem("cart", window.JSON.stringify(state.cart));
};
export const updateGoodsCount = (state, goods) => {
  // 根据传递过来的商品的信息，更新购物车中商品的数量
  state.cart.some(item => {
    if (item.id == goods.id) {
      item.count = goods.count;
      return true;
    }
  });

  // 为了持久化存储购物车的数据，可以把 购物车的商品，序列化出来，存储到 localStorage 中
  localStorage.setItem("cart", window.JSON.stringify(state.cart));
};
export const delFromCart = (state, id) => {
  // 根据id删除 vuex 中对应的商品
  state.cart.some((item, i) => {
    if (item.id == id) {
      state.cart.splice(i, 1);
      return true;
    }
  });
  // 为了持久化存储购物车的数据，可以把 购物车的商品，序列化出来，存储到 localStorage 中
  localStorage.setItem("cart", window.JSON.stringify(state.cart));
};
export const changeSelectState = (state, obj) => {
  //根据提供的obj对象的 id 和 selected 属性，更改购物车中商品的选中状态
  state.cart.some(item => {
    if (item.id == obj.id) {
      item.selected = obj.selected;
      return true;
    }
  });
  // 为了持久化存储购物车的数据，可以把 购物车的商品，序列化出来，存储到 localStorage 中
  localStorage.setItem("cart", window.JSON.stringify(state.cart));
};
