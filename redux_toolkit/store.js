const { configureStore } = require("@reduxjs/toolkit");
import Artistssl from "./Feature";


const store = configureStore({
    reducer: {
        artistxx: Artistssl
    }
})

export default store;