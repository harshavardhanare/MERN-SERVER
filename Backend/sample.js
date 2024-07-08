const express=require('express')
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.listen(3000,()=>{
console.log("harsha chowdary")
})
app.get("/",(req,res)=>{
    res.send("hello jeeee");
}
)
app.post("/api/cars",(req,res)=>{
    const {name,brand}=req.body;
    console.log(name);
    console.log(brand);
    response.send("running");
})