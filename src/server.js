import express from "express";
import bodyParser from "body-parser"; // /user?id=7 thi tren phia sever muon lay id=7 phai goi thu vien bodyParser
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';

require('dotenv').config(); //dung de goi den ham config cua thu vien env

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//PORT === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Backend Nodejs is running on the port : " + port)
})