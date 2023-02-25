import { Route, Routes } from "react-router-dom";
import { isUserAdmin, ProtectedRoute } from "./application";
import { CategoryProductsPage, HomePage, LoginPage, ProductFormPage, RegisterPage, SingleProductPage } from "./pages";
import { useUserInfo } from "./redux";

export const RoutesComponent = () => {
    const userInfo = useUserInfo();
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/products/new" element={
                <ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
                    <ProductFormPage></ProductFormPage>
                </ProtectedRoute>
            }></Route>
            <Route path="/products/edit/:name" element={
                <ProtectedRoute hasAccess={isUserAdmin(userInfo)}>
                    <ProductFormPage></ProductFormPage>
                </ProtectedRoute>
            }></Route>
            <Route path="/products/categories/:categoryName" element={<CategoryProductsPage />}></Route>
            <Route path="/products/categories/:categoryName:name" element={<SingleProductPage />}></Route>
        </Routes>
    );
};