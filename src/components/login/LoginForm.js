import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../application/hooks/useForm";
import { authenticateUser } from "../../redux";


const generateLoginFormValues = () => {
    return{
        email: {
            value: "",
            required: true,
            error:null,
            validateInput: (email) => 
            email.includes("@gmail.com") ? "" : "email is not valid "
        },
        password: {
            value: "",
            required: true,
            error:null,
            validateInput: (password) => 
            password.length > 6 ? "" : "password should have at least 6 characters",
        },
    };
};

export const LoginForm = () => {
    const {formValues:loginFormValues, onInputChange} = useForm ({defaultFormValues:generateLoginFormValues(),
    });


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onLogin = (e) => {
        e.preventDefault();
        const email = loginFormValues.email.value;
        const password = loginFormValues.password.value;
        dispatch(authenticateUser({
            isLogin: true,
            formValues: {
                email,
                password,
            },
        })
        )
        .unwrap()
        .then(() => navigate("/"));
    };


    return (
    <FormControl fullWidth>
    <TextField
    name="email"
    label="email"
    value={loginFormValues.email.value}
    onChange={onInputChange}
    error={!!loginFormValues.email.error}
    helperText={loginFormValues.email.error}
    ></TextField>
    <TextField
    name="password"
    label="password"
    type="password"
    value={loginFormValues.password.value}
    onChange={onInputChange}
    error={!!loginFormValues.password.error}
    helperText={loginFormValues.password.error}
    ></TextField>
    <Button onClick={onLogin}>Login</Button>
    
</FormControl>
    )
};