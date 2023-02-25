import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { useSelector } from "react-redux";
import { productReducer } from "./slice/ProductSlice";
import { cartReducer } from "./slice/cartSlice";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['user'],
};

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: false,
    }),
});    


export const persistor = persistStore(store);

export { authenticateUser} from "./slice/userSlice";
export { logoutUser } from './slice/userSlice';


export {saveProduct,fetchSingleProduct, fetchCategoryProducts,queryProducts, fetchHomePageProducts, setSelectedProduct, setSearchProducts,rateProduct} from './slice/ProductSlice';

export {
    fetchCart, saveCart,
    addToCart,
    removeFromCart,
    clearCart,
} from "./slice/cartSlice"


    export const useUserInfo = () => useSelector((state) => state.user.userInfo);
    export const useSelectedProduct = () => useSelector((state) => state.product.selectedProduct);
    export const useHomePageProducts = () => useSelector((state) => state.product.homePageProducts);
    export const useCategories = () => useSelector((state) => state.product.categories);
    export const useCart = () => useSelector((state) => state.cart.cartItems);
    export const useCategoryProducts = () => useSelector((state) => state.product.categoryProducts);

    export const useSearchResults = () => useSelector((state) => state.product.searchResults);
    export const useSingleProduct = () => useSelector((state) => state.product.singleProduct);
    export const useProductLoading = () => useSelector((state) => state.product.loading)


    
