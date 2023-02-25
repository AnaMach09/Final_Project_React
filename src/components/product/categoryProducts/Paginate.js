import React from "react";
import { Pagination } from "@mui/material";

export const Paginate = ({currentPage,totalPages,changePage}) => {
    return (
       <Pagination count={totalPages} page={Number(currentPage)} onChange={(_, value) => {
        changePage("page", value)
       }}></Pagination>
    )
};