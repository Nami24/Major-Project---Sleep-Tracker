const express=require ('express');
const path=require ('path');
const mongoose=require('mongoose');
const ejsMate=require('ejs-mate');
const methodOverride=require('method-override');

const sleeptracker=require('./models/tracker')

mongoose.connect('mongodb://localhost:27017/sleep-tracker',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});