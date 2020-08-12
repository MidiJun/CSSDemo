let car = window.JSON.parse(localStorage.getItem("cart") || "[]");

export default function() {
  return {
    //
    cart: car
  };
}
