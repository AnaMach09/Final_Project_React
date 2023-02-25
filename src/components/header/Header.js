import { AppBar, Box,Button,styled, Toolbar, Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import {AiOutlineShoppingCart} from "react-icons/ai";
import { useCart } from "../../redux";
import { CartDrawer } from "./CartDrawer";
import { useState } from "react";

const StyledAppBar = styled(AppBar)(() => ({
    background: "#413675",
    width: "calc(100% - 155px)",
    padding: "0 100px 0 30px",
    
}));
const StyledToolbar = styled(Toolbar)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
}));

const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        width: "20px",
        height : "21px",
        color: "@fff",
        background: "#433451",
        top: "2px",
        right: "-3px",
    },
}));

export const Header = () => {

    const cartItems = useCart();
    const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
    const cartItemsQuantify = cartItems?.reduce((acc,curr) => acc + curr.quantify, 0 );
    return (
        <div>
            <Box>
                <StyledAppBar>
                    <StyledToolbar>
                    <Link>home</Link>
                    <SearchBar></SearchBar>
                    <UserIcon></UserIcon>
                    <Button onClick={() => setIsCartDrawerOpen(true)}>
                        <StyledBadge badgeContent={cartItemsQuantify}>
                            <AiOutlineShoppingCart  size={35}/>
                        </StyledBadge>
                    </Button>
                <CartDrawer   cartItems={cartItems} isCartDrawerOpen={isCartDrawerOpen} setIsCartDrawerOpen={setIsCartDrawerOpen}/>
                    </StyledToolbar>   
                </StyledAppBar>
            </Box>
        </div>
    );
};