import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    userName: { type: String, required: [true, 'Name is required'], unique: false },
    email: { type: String, required: [true, 'Email is required'], unique: false },
    password: { type: String, required: [true, 'Password is required'] },
});
export const User = model('User_test', userSchema);
