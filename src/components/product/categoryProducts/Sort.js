import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({sort = "",changeSort}) => {
    return (
        <Select 
        value={sort}
        onChange={(e) => {
            changeSort("sort", e.target.value)
        }}
        >
            <MenuItem value="price,desc">fasi klebadobit</MenuItem>
            <MenuItem value="price,asc">fasi zrdadobit</MenuItem>
            <MenuItem value="name,desc">saxeli klebadobit</MenuItem>
            <MenuItem value="name,asc">saxeli zrdadobit</MenuItem>

        </Select>
    )
}