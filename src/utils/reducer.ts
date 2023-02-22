
export const reducer = (state: any, action: any) => {
//   if (action.type === "CLEAR_CART") {
//     return {
//       ...state,
//       cart: [],
//     };
//   }
//   if (action.type === "REMOVE") {
//     return {
//       ...state,
//       cart: state.cart.filter(
//         (cartItem: any) => cartItem.id !== action.payload
//       ),
//     };
//   }
//   if (action.type === "GET_TOTALS") {
//     let { total, amount } = state.cart.reduce(
//       (cartTotal: any, cartItem: any) => {
//         console.log("barbara", cartTotal);
//         const { price, amount } = cartItem;
//         const itemTotal = price * amount;
//         cartTotal.amount += amount;
//         cartTotal.total += itemTotal;
//         return cartTotal;
//       },
//       {
//         total: 0,
//         amount: 0,
//       }
//     );
//     total = parseFloat(total.toFixed(2));
//     return {
//       ...state,
//       total,
//       amount,
//     };
//   }
//   if (action.type === "LOADING") {
//     return { ...state, loading: true };
//   }
//   if (action.type === "DISPLAY_ITEMS") {
//     return { ...state, cart: action.payload, loading: false };
//   }
  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart: any = state.cart
      .map((cartItem: any) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem: any) => cartItem.amount > 0);
    return { ...state, cart: tempCart };
  }

  return state;
};

export default reducer;
