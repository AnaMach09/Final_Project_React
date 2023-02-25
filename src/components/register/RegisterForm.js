import { FormControl, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { useForm } from "../../application/hooks/useForm"; 
import { authenticateUser } from "../../redux";


export const generateRegisterFormValues = () => {
    return {
        firstName:{
            value: "",
            required: true,
            error: "",
            validateInput: (name) => 
            name.length > 3 ? null : "name should have at least 3 character",
        },
        lastName:{
            value: "",
            required: true,
            error: "",
            validateInput: (lastName) => 
            lastName.length > 3 ? null : "last name should have at least 3 character",
        },
        email:{
            value: "",
            required: true,
            error: "",
            validateInput: (email) => 
            email.includes("@gmail.com") ? null : "email is not valid",
        },
        password: {
            value: "",
            required: true,
            error: "",
            validateInput: (password) => 
            password.length > 6 ? null : "password should have at least 6 character",
        },
    };
};

export const RegisterForm = () => {
    const {formValues,onInputChange} = useForm({defaultFormValues: generateRegisterFormValues() });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onRegister = (e) => {
        e.preventDefault();
        const firstName = formValues.firstName.value;
        const lastName=formValues.lastName.value;
        const email = formValues.email.value;
        const password = formValues.password.value;
        dispatch(authenticateUser(
            {
                formValues: {
                    firstName,
                    lastName,
                    email,
                    password,
                },
                isLogin: false
            })
            )
            .unwrap()
            .then(() => navigate("/"));

    };
    return (
        <FormControl fullWidth>
            <TextField
            variant="outlined"
            name="firstName"
            label="firstName"
            value={formValues.firstName.value}
            onChange={onInputChange}
            error={!!formValues.firstName.error}
            helperText={formValues.firstName.error}
            ></TextField>
            <TextField
            variant="outlined"
            name="lastName"
            label="lastName"
            value={formValues.lastName.value}
            onChange={onInputChange}
            error={!!formValues.lastName.error}
            helperText={formValues.lastName.error}
            ></TextField>
            <TextField
            variant="outlined"
            name="email"
            label="email"
            value={formValues.email.value}
            onChange={onInputChange}
            error={!!formValues.email.error}
            helperText={formValues.email.error}
            ></TextField>
            <TextField
            variant="outlined"
            name="password"
            label="password"
            value={formValues.password.value}
            onChange={onInputChange}
            error={!!formValues.password.error}
            helperText={formValues.password.error}
            ></TextField>
            <button onClick={onRegister}>Register</button>
            
        </FormControl>
    );
};

