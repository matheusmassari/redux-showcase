import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTALS,
  TOGGLE_AMOUNT,
} from "./actions";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
function reducer(state = initialStore, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    // === //
    case DECREASE:
      let tempCart1 = [];
      if (action.payload.amount === 1) {
        tempCart1 = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        tempCart1 = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            cartItem = { ...cartItem, amount: cartItem.amount - 1 };
          }
          return cartItem;
        });
      }
      return { ...state, cart: tempCart1 };
    // === //
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };
    // === //
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    // === //
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    // === //
    case TOGGLE_AMOUNT:
      console.log("GET_AMOUNT action");
      return { ...state };
    // === //
    default:
      return state;
  }
}

export default reducer;
