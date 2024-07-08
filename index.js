const express = require('express')
 const mongoose = require('mongoose') //npm i mongoose mongodb
 const typeDefs = require('./models/schema')
const resolvers=require("./resolvers")
const Users=require("./models/schema")
const { gql } = require('apollo-server-express')
const {ApolloServer}=require('apollo-server-express')
 const app = express()
 const port = 3001;

 app.use(express.json())
 const url ="mongodb+srv://harshachowdary35:UaOPybba8SO5P6Kx@harshavardhan.7azywun.mongodb.net/?retryWrites=true&w=majority&appName=harshavardhan"
 
 //connecting my express app to my mongodb server
 mongoose.connect(url,{
   useUnifiedTopology:true}).then(()=>{
    console.log('MongDB connected')})
 .catch((err)=>console.log(err));
//route to handle /users api endpoint


 const server =new ApolloServer({typeDefs,resolvers});
 app.get('/users', async(req,res)=>{
   try{
   const name=req.params.name
  const{data,errors}=await  server.executeOperation({
   query:gql`query{ getUsers{ name email}}`
  })
  if(errors)
   res.status(500).send(data)
   }
   catch(err){
      res.status(500).send(err)
   }
 })

app.get('/users/search', async(req,res) => {
   try{
     const id=req.body.id;
     const{data,errors}=await server.executeOperation({
       query:gql`query{user(id:"${id}"){id name email}}`
   })
 
 if(errors){return console.log(errors)
    res.status(404).send({errors:errors});
 };
 return res.send(data);
 }
 catch(err){
   res.status(500).send(err);
 }
 });
 
 async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
app.listen(port,()=>
console.log('server'))

 }

 StartServer()


