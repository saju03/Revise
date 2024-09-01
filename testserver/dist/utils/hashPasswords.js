import bcrypt from 'bcrypt';
export const hashPassword = async (userCredential) => {
    try {
        // Hash the password with a salt of 10 rounds
        userCredential.password = await bcrypt.hash(userCredential.password, 10);
        return userCredential;
    }
    catch (error) {
        console.error('Error hashing password:', error);
        return null; // Return null if hashing fails
    }
};
