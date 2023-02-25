import {Box} from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts,useCategoryProducts } from "../../../redux";
import { Sort } from "./Sort";
import { CategoryProductList} from "./CategoryProductList"
import { Paginate } from "./Paginate";
import { useQueryParams } from "../../../application";



export const CategoryProducts = () => {

    const { categoryName} = useParams();
    console.log("cate", categoryName);
    const dispatch = useDispatch();
    const {products, totalPages} = useCategoryProducts();
    const{value:sort, changeQueryValue:changeSort} = useQueryParams("sort");
    const{value:page,changeQueryValue:changePage} = useQueryParams("page");

    useEffect(() => {
        dispatch(fetchCategoryProducts(`${categoryName}?page=${page}&size=3&sort=${sort}`))
    },[categoryName,sort,page]);

    useEffect(() => {
        changePage("page",1);
    },[sort]);

    return <Box>
        <Sort sort={sort} changeSort={changeSort}></Sort>
        <CategoryProductList products={products}></CategoryProductList>
        <Paginate totalPages={totalPages} currentPage={page} changePage={changePage}></Paginate>
    </Box>
}