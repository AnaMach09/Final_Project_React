import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
    return <CircularProgress></CircularProgress>
};

export const LoadingWrapper = ({ isLoading, children}) => {
    if(isLoading){
        return <Loading></Loading>
    }
    return children
};