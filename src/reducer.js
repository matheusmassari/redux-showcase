import {
  DECREASE,
  INCREASE,
  CLEAR_CART,
  REMOVE,
  GET_TOTAL,
  GET_AMOUNT,
} from "./actions";

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };
    case DECREASE:
      console.log("Decrease action");
      return { ...state };
    case INCREASE:
      let tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === action.payload.id) {
            cartItem = {...cartItem, amount: cartItem.amount + 1}
        }  
        return cartItem
      })    
      return { ...state, cart: tempCart };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case GET_TOTAL:
      console.log("GET_TOTAL action");
      return { ...state };
    case GET_AMOUNT:
      console.log("GET_AMOUNT action");
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
