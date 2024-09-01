import bcrypt from 'bcrypt';
import { IUser } from '../interfaces.js';

export const hashPassword = async (userCredential: IUser): Promise<IUser | null> => {
    try {
        // Hash the password with a salt of 10 rounds
        userCredential.password = await bcrypt.hash(userCredential.password, 10);
        return userCredential;
    } catch (error) {
        console.error('Error hashing password:', error);
        return null; // Return null if hashing fails
    }
};
