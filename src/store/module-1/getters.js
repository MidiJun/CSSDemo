/*
export function someGetter (state) {
}
*/

export const totalcount = state => {
  // 徽标中商品数量
  let c = 0;
  // getters 的特性，只要依赖的数据变化了，必然会重新计算 这个 getters 的值；
  state.cart.forEach(item => (c += item.count));
  return c;
};
export const idstr = state => {
  // 获取购物车中所有的商品的Id字符串
  let arr = [];
  state.cart.forEach(item => arr.push(item.id));
  return arr.join(",");
};
export const countObj = state => {
  /* 获取 购物车中 商品的Id和商品数量的键值对对应关系 */
  let o = {};
  state.cart.forEach(item => (o[item.id] = item.count));
  return o;
  /* {
            88: 3,
            89: 5
          } */
};
export const seletedObj = state => {
  // id 对用的商品是否被选中了
  let o = {};
  state.cart.forEach(item => (o[item.id] = item.selected));
  return o;
};
export const selectedcount = state => {
  // 勾选商品的数量
  let c = 0;
  state.cart.forEach(item => {
    // 只有这一项商品被选中了，才把数量加起来
    if (item.selected) {
      c += item.count;
    }
  });
  return c;
};
export const amount = state => {
  /* 总价 */
  let c = 0;
  state.cart.forEach(item => {
    // 只有这一项商品被选中了，才把数量加起来
    if (item.selected) {
      c += item.count * item.price;
    }
  });
  return c;
};
