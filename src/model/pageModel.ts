import mongoose from 'mongoose'
import Image from './imageModel';
import User from './userModel';
const {Schema} = mongoose;
const pageSchema = new Schema({
    pageName: {type:String, required:true},
    pageUrl: {type:String, required:true},
    pageDescription: {type:String},
    images: {
        type : [mongoose.SchemaTypes.ObjectId],
        ref: 'Image'
    },
    user:{
        type : mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
      createdAt:{
        type: Date,
        immutable: true,
        default: ()=>Date.now()
    },
    updatedAt:{
        type: Date,
        default: ()=>Date.now()
    }

})


const Page = mongoose.model('Page', pageSchema)
export default Page