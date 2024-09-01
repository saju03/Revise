import { User } from "../Database/Model/userModal.js";
export const addNewUser = async (user) => {
    try {
        const addUser = await User.create(user);
        if (addUser) {
            return {
                status: 201,
                message: 'User created successfully',
                user: addUser,
            };
        }
        return {
            status: 500,
            message: 'An error occurred while creating the user',
        };
    }
    catch (error) {
        console.error(error);
        if (error.code === 11000) { // Duplicate key error
            return {
                status: 409,
                message: 'User already exists',
            };
        }
        // Handle other potential errors
        return {
            status: 500,
            message: 'An error occurred while creating the user',
        };
    }
};