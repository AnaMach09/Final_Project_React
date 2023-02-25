import React, { useState } from 'react';
import {Avatar, Box, IconButton, Button,MenuItem, Menu} from "@mui/material";
import { getUserInitials, isUserAdmin } from '../../application';
import { useDispatch, useSelector } from 'react-redux';
import { useUserInfo } from '../../redux';
import { logoutUser } from '../../redux';
import { useNavigate } from 'react-router-dom';

export const UserIcon = () => {
    const userData = useUserInfo();
    const [anchor,setAnchor] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <Box>
            <IconButton  onClick={(e) => {
                setAnchor(e.currentTarget)
            }}>
            <Avatar>{getUserInitials(userData?.firstName, userData?.lastName)}</Avatar>
            </IconButton>
            <Box>
                <Menu 
                anchorEl={anchor}
                anchorOrigin={{
                    vertical: "button",
                    horizontal: "right",
                }}
                keepMounted
                open={Boolean(anchor)}
                onClose={() => setAnchor(null)}>
                    {!!userData  ? (
                        <MenuItem onClick={() => {
                            dispatch(logoutUser());
                            navigate("/")
                            }}>
                        <Button>logout</Button>
                        </MenuItem>
                    ):(
                    <Box>
                    <MenuItem onClick={() => navigate("/login")}>
                    <Button>
                        login
                    </Button>
                    </MenuItem>
                    <MenuItem onClick={() => navigate("/register")}>
                    <Button>
                        register
                    </Button>
                    </MenuItem>
                    </Box>
                    )}
                    {isUserAdmin(userData) && <MenuItem onClick={() => navigate ("/products/new")}>
                            <Button>
                                add product
                            </Button>

                    </MenuItem>}
                </Menu>
            </Box>
            
        </Box>
    );
};