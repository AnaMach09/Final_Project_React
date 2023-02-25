import React from "react";
import { Grid, Card, Box,styled, Typography, CardActions, Rating, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { rateProduct, removeFromCart, setSelectedProduct, useUserInfo } from "../../redux";
import { isUserAdmin } from "../../application";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux";
import { useCart } from "../../redux";

const StyledCardContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-beetween",
    padding: " 0 5px"
}));
const StyledBox = styled(Box) (() => ({
    display: "flex",
    justifyContent: "space-beetween",
    alignItems: "center",
}));

export const ProductCard = ({name, _id, image, price, description,category, brand,  averageRating, product,}) => {
    const userInfo = useUserInfo();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cartItems = useCart();
    const isProductInCart = cartItems?.find((item) => item.product._id === _id)
    const onEdit = () => {
        dispatch(setSelectedProduct(product))
        navigate(`/products/edit/${name}`);
    };

    const {pathName, search} = useLocation();

    const onAddToCart = () => {
        dispatch(addToCart(product))
    };

    const onRatingChange = (e) => {
        dispatch(rateProduct({
            productId: _id,
            userId: userInfo?._id,
            url: `${category}${search}&size=1`,
            isHome: pathName === "/",
            rating: e.target.value,
        }))

    }
    return (
        <Grid item>
            <Card sx={{ width: 350, borderRadius: 3}}>
                <Link to={`/products/categories/${category}/${name}`} style={{ textDecoration: "none"}} state={{id:  _id}}>
                    <img src={image} alt={`${category}-${name}`} width="100%"  height="200px" style={{ objectFit: "cover"}} />

                    <StyledCardContent>
                        <Typography>{name}</Typography>
                        <Typography>{price}</Typography>
                    </StyledCardContent>
                </Link>
                <CardActions>
                    <Rating value={averageRating} disabled={!userInfo} onChange={onRatingChange}></Rating>
                    <StyledBox>
                        {isProductInCart ? (
                            <StyledBox>
                            <Button onClick={() => dispatch(removeFromCart(_id))}>-</Button>
                            <Typography>{isProductInCart.quantify}</Typography>
                            <Button onClick={onAddToCart}>+</Button>
                            </StyledBox>
                        ) : (
                        <Button onClick={onAddToCart}>add to card</Button>
                        )}
                        {isUserAdmin(userInfo) && <Button onClick={onEdit}>edit</Button>}
                    </StyledBox>
                </CardActions>
            </Card>
        </Grid>
        
    );
};