import mongoose from 'mongoose'
import Page from './pageModel';
const {Schema} = mongoose;
const imageSchema = new Schema({
    imageUrl: {type:String, required: true},
    page: {
        type : mongoose.SchemaTypes.ObjectId,
        required:true,
        ref: 'Page',
    }
})



const Image = mongoose.model('Image', imageSchema)
export default Image