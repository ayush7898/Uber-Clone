const mongoose = require('mongoose')
const  bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlenght:[3,'First name must be at least 3 characters']
        },
        lastname:{
            type: String,
            minlenght:[3,'Last name must be at least 3 characters']
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlenght:[3,'Email must be at least 5 characters long']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String,
    }
})
userSchema.methods.generateAuthToken = ()=>{
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token
}
userSchema.methods.comparePassword = async function (password){
    console.log(this.password ,"hello password")
    return await bcrypt.compare(password,this.password)

}
userSchema.statics.hashPassword = async (password)=>{
    return await bcrypt.hash(password,10)
}
const  userModel = mongoose.model('user', userSchema)
module.exports = userModel