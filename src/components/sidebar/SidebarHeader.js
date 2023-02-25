import React from "react";
import { Box, styled } from "@mui/material";
import {Link} from "react-router-dom";
import logoImage from "./images/connect_logo.jpeg"


const StyledHeader = styled(Box)(() => ({
    padding: "22px 10px",
    background: "#173654"
}));

export const SidebarHeader = () => {
     return (
        <StyledHeader>
            <Link to="/">
              <img src={logoImage} style={{width: "160px", height: "100px"}}></img>
            </Link>
        </StyledHeader>
     )
};