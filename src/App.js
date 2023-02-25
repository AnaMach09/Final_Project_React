import { Box, styled } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";
import { fetchHomePageProducts,fetchCart, useUserInfo } from "./redux";
import { RoutesComponent } from "./Routes";

const StyledContentContainer = styled(Box)(() => ({
  padding: "0 0 0 37px",
  width: "calc(100% - 255px)",
  marginLeft: "255px",
  marginTop: "100px",
  minHeight:"100vh,"
}));


 const App = () => {
  const dispatch = useDispatch();
  const userInfo = useUserInfo();
  useEffect(() => {
    dispatch(fetchHomePageProducts())
  },[]);
  useEffect(() => {
    if(userInfo) {
      dispatch(fetchCart(userInfo._id));
    }
  }, [userInfo]);
  return (
    <Box>
      <Sidebar></Sidebar>
      <Header></Header>
      <StyledContentContainer>
      {RoutesComponent()}
      </StyledContentContainer>
      </Box>
  );
};



export default App;
