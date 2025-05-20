import mongoose from 'mongoose'
const {Schema} = mongoose;


interface userInterface{
    firstName: String;
    lastName: String;
    email: String;
    password: String;
}

const userSchema = new Schema({
    firstName : {type: String, required:true},
    lastName: {type: String, required: true},
    email: {
        type: String, 
        lowercase: true, 
        unique:true
    },
    refreshToken:{type:String},
    password: {type:String, required:true},
    pages:{
        type:[mongoose.SchemaTypes.ObjectId],
        ref: 'Page'
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

const User = mongoose.model('User', userSchema)
export default User