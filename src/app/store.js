import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import productReducer from "../features/product/productSlice";
import miceReducer from "../features/mice/miceSlice";
import keyboardsReducer from "../features/keyboards/keyboardsSlice";
import headsetsReducer from "../features/headsets/headsetsSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer,
    mice: miceReducer,
    keyboards: keyboardsReducer,
    headsets: headsetsReducer,
  },
});
