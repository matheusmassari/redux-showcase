import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// Redux Stuff
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
