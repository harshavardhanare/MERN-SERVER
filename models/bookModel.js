const mongoose=require('mongoose')
const bookSchema=  new mongoose.Schema({

bookname:{

    type:String,
    required:true,
},
authorid:{
    type:String,
    required:true,
},
cost:{
    type:String,
    required:true,
},
published:{
    type:String,
    required:true,
}


})
module.exports=mongoose.model("Book",bookSchema);