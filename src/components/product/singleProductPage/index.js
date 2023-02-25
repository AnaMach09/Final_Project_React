import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { fetchSingleProduct, useSingleProduct } from "../../../redux";


 const SingleProductPage = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const { categoryName} = useParams();
    const singleProduct = useSingleProduct();
    useEffect(() => {
        dispatch(fetchSingleProduct({id:state.id, category: categoryName}))
    }, [state.id]);

    return (
        <div>{singleProduct?.name}</div>
    )
}

export default SingleProductPage;