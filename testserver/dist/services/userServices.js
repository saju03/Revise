import { addNewUser } from '../repositories/userRepository.js';
import { hashPassword } from '../utils/hashPasswords.js';
import { createToken } from './tokenServices.js';
export const createNewUser = async (userCredential) => {
    try {
        // Hash the user's password
        const securedCredentials = await hashPassword(userCredential);
        if (!securedCredentials) {
            return {
                status: 500,
                message: 'Error occurred during password hashing',
            };
        }
        // Add the new user to the database
        const response = await addNewUser(securedCredentials);
        if (response.status == 201) {
            const data = { name: response.user?.userName, type: 1, permission: 1 };
            const token = await createToken(data);
            return { ...response, token }; // Successful response
        }
        return {
            status: response.status,
            message: response.message,
        };
    }
    catch (error) {
        console.error('Error creating new user:', error);
        return {
            status: 500,
            message: 'Internal server error',
        };
    }
};
