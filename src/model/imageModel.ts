import mongoose from 'mongoose'
import Page from './pageModel';
const {Schema} = mongoose;
const imageSchema = new Schema({
    imageUrl: {type:String, required: true},
    page: {
        type : mongoose.SchemaTypes.ObjectId,
        required:true,
        ref: 'Page',
    },
    user:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref:"User"
    },
      createdAt:{
        type: Date,
        immutable: true,
        default: ()=>Date.now()
    }
})



const Image = mongoose.model('Image', imageSchema)
export default Image