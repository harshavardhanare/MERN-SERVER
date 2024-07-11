const mongoose=require('mongoose')
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUniFiedTopology:true,

    })
    .then(()=>{console.log("harshsa vardhan")})
    .catch((err)=>{
        console.log("issue in Db Connnection");
        console.error(err.message);
        process.exit(1)
    })
        
}
module.exports=dbConnect;