import React from "react";
import { GridComponent } from "../../shared";
import { ProductCard } from "../ProductCard";
import { Fragment } from "react";

export const CategoryProductList = ({products}) => {
    return (
        <GridComponent>
            {products?.map((product) => {
                return (
                    <React.Fragment  key={product._id}>
                        <ProductCard {...product} product={product}></ProductCard>
                    </React.Fragment>
                )
            })}
        </GridComponent>
    )
}