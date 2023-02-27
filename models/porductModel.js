const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,'please enter the name']
        },
        quantity:{
            type:Number,
            required:true,
            default:0     
        },
        price:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps : true
    }
)

const Products = mongoose.model('Products',productSchema);
module.exports = Products;