const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
        default:'https://www.google.com/search?q=product+image&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiY0-6-3o3wAhUE4YMBHf-pA-0Q8aUDigQIABAA&biw=1920&bih=973#imgrc=0z7x9o0x0w0y',
    },
    stock:{
        type:Number,
        required:true,
        default:0,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category',
        required:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
},{timstamps: true});

export const Product = mongoose.model('Product',productSchema);