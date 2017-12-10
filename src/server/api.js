import express from 'express';
import cookieParser from 'cookie-parser';
import apicache from 'apicache'
import axios from 'axios';

const express = require('express');
const app = express();
const cache = apicache.middleware;
const onlyStatus200 = (req, res) => res.statusCode === 200;
const port = process.env.API_PORT || 3000;

app.use(cookieParser());

axios.defaults.baseURL = `http://localhost:${port}`;

// Set cookie for axios
app.use((req, res, next) => {
    axios.defaults.headers = req.headers;
    next();
});
// 获取新碟上架
app.get(axios.defaults.baseURL+'/top/album',{
    
}
)
export default app;