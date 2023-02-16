import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';


const userDetail = new Schema({
    email: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    }
});


const User = mongoose.model('userSignUp', userDetail);

export default User;

