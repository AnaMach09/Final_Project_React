import React from "react";
import { useHomePageProducts, useProductLoading } from "../../redux";
import { GridComponent, LoadingWrapper } from "../shared";
import { ProductCard } from "./ProductCard";

export const HomePageProducts = () => {
    const homePageProducts = useHomePageProducts();
    const isLoading = useProductLoading();
    return (
        <LoadingWrapper isLoading={isLoading}>
        <GridComponent>
        {homePageProducts.map((product) => {
            return <ProductCard key={product._id} {...product}  product={product}></ProductCard>
        })}

       </GridComponent>
        </LoadingWrapper>
       
    );
};