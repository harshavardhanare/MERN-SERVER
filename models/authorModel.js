const mongoose=require('mongoose')
const authorSchema=  new mongoose.Schema({

authorname:{
    type:String,
    required:true,
},
age:{
    type:Number,
    required:true,
},
authorid:{
    type:String,
    required:true,
},
booksPublished:{
    type:Number,
    required:true,
}


})
module.exports=mongoose.model("Author",authorSchema);