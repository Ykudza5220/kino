import { useRef } from "react";
import React from "react";
import {Button, Paper,TextField} from  "@mui/material";
import { current } from "@reduxjs/toolkit";

const Register = () => {
        const fullNameRef= useRef("");
        const emailRef= useRef("");
        const passwordRef= useRef("");
        const hendleFormSubmit = (e) =>{
e.preventDefault();
const data ={
        fullName:fullNameRef.current.value,
        email:emailRef.current.value,
        password:passwordRef.current.value
};
console.log(data);
        }

return (
    
        <Paper sx={{padding:"50px"}}>
<form style={{display:"flex",flexDirection:"column",gap:"10px"}} onSubmit={hendleFormSubmit}>
    <h1>Registration</h1>
    <TextField inputRef={fullNameRef} type="text" name="fullName"/>
    <TextField inputRef={emailRef} type="email" name="email"/>
    <TextField inputRef={passwordRef} type="password" name="password"/>
    <Button type="sabmit">Register</Button>
</form>
        </Paper>
    
    
);
};
export default Register;