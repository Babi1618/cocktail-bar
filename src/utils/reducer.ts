
export const reducer = (state: any, action: any) => {
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
