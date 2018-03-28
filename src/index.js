// import express from "express";
const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    return res.status(200).send('All is ok 44');
});

app.listen(8888, () => {
    console.log('ther server is up');
});
