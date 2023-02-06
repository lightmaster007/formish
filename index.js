import express from "express";
import * as dotenv from 'dotenv'
dotenv.config();
import bodyParser from "body-parser";
import url from "url"
import calculateResult from "./middlewares/result.js"
import sendEmail from "./middlewares/email.js";
import savetoDB from "./middlewares/saveToDB.js";
import "./dbConnect.js"

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.json());

app.use(express.static('public'));

let __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.get("/sw.js",(req,res)=>{
    // res.send("hello")
    res.sendFile(__dirname + "/public/sw.js");
})

//First and last page loads

app.get("/",(req,res)=>{
    // res.send("hello")
    res.sendFile(__dirname + "/views/index.html");
})


app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})

app.get("/page",(req,res)=>{
    res.sendFile(__dirname+"/views/browser/want/wanxiety.html");
})


//Want help pages
app.post("/waxt",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwanxiety.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wanxiety.html");
    }
    
})

app.post("/wsts",(req,res)=>{
    res.sendFile(__dirname+"/views/browser/want/wstress.html");
})

app.post("/wdpr",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwdepress.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wdepress.html");
    }
})

app.post("/wpsd",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwptsd.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wptsd.html");
    }
})

app.post("/wrls",(req,res)=>{
    
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwrls.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wrls.html");
    }
    
})

app.post("/wobs",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwobs.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wobs.html");
    }
    
})

app.get("/waxt",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwanxiety.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wanxiety.html");
    }
})

app.get("/wsts",(req,res)=>{
    res.sendFile(__dirname+"/views/browser/want/wstress.html");
})

app.get("/wdpr",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwdepress.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wdepress.html");
    }
    
})

app.get("/wpsd",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwptsd.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wptsd.html");
    }
})

app.get("/wrls",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwrls.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wrls.html");
    }
})

app.get("/wobs",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/want/mwobs.html");
    }else{
        res.sendFile(__dirname+"/views/browser/want/wobs.html");
    }
})

//End

//Want to help pages

app.post("/taxt",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtanxiety.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tanxiety.html");
    }
})

app.post("/tsts",(req,res)=>{
    res.sendFile(__dirname+"/views/browser/to/tstress.html");
})

app.post("/tdpr",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtdepress.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tdepress.html");
    }
    
})

app.post("/tpsd",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtptsd.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tptsd.html");
    }
    
})

app.post("/trls",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtrls.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/trls.html");
    }
})

app.post("/tobs",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtobs.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tobs.html");
    }
})

app.get("/taxt",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtanxiety.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tanxiety.html");
    }
})

app.get("/tsts",(req,res)=>{
    res.sendFile(__dirname+"/views/browser/to/tstress.html");
})

app.get("/tdpr",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtanxiety.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tdepress.html");
    }
})

app.get("/tpsd",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtptsd.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tptsd.html");
    }
    
})

app.get("/trls",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtrls.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/trls.html");
    }
})

app.get("/tobs",(req,res)=>{
    let width = +req.body["help"];
    if(width<625){
        res.sendFile(__dirname+"/views/mobile/to/mtobs.html");
    }else{
        res.sendFile(__dirname+"/views/browser/to/tobs.html");
    }
})




app.post("/email",sendEmail,(req,res)=>{
    res.sendFile(__dirname+"/views/final.html");
});

app.post("/result",savetoDB,calculateResult,(req,res)=>{
    try{
        res.send(req.newBody);

    }
    catch(e){
        console.log("some error occured "+e)
        res.send("<h1>An Error has Occured, Please Reload</h1>")
    }
})



//App listen
app.listen(process.env.PORT || 5500,()=>{
    console.log("The server is opened on port 5500");
})




