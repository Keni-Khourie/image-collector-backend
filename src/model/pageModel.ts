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
        ref: 'User'
    }
})


const Page = mongoose.model('Page', pageSchema)
export default Page