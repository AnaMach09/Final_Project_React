import { Box, styled, Drawer, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { saveCart, useUserInfo } from "../../redux";
import { clearCart } from "../../redux";

const StyledBox = styled(Box)(() => ({
    width:500,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
}));

export const CartDrawer = ({isCartDrawerOpen, setIsCartDrawerOpen,cartItems }) => {
    const userInfo = useUserInfo();
    const dispatch = useDispatch();
    const onSaveCart =  (isClear) => {
        dispatch(saveCart({userId:userInfo?._id, cartItems: isClear ? [] : cartItems})
        );
    };
    return (
        <Drawer open={isCartDrawerOpen} onClose={() => setIsCartDrawerOpen(false)} anchor="right">
            {cartItems.map((item) => {
                const { product, quantify} = item;
                const {price,name, _id, image} = product;
                return (
                <StyledBox key={_id}>
                    <img src={image} alt={`${name}`} width="100px" height="100px" style={{objectFit: "cover"}}></img>
                    <Box>
                    <Typography>{name}</Typography>
                    <Typography>quantify:{quantify}</Typography>
                    <Typography>total price:{price * quantify}$</Typography>
                    </Box>
                    
                </StyledBox>
                );
            })};
            <Box>
            <Button onClick={() => {dispatch(clearCart()); setIsCartDrawerOpen(false); onSaveCart(true);
            }}>clear cart</Button>
            {userInfo && (<Button onClick={() => onSaveCart(false)}>save cart</Button>)}
            </Box>
            
            
        </Drawer>
    );
};