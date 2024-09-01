import jwt from 'jsonwebtoken';
import { TokenResponse, userHashDetails } from '../interfaces.js';

const hashKey: string = process.env.JWT_CLIENT_SECRET || 'NEWHASH#12';

// Define a type for the return value of the createToken function

// Update the createToken function to specify the types
export const createToken = async (userDetails: userHashDetails): Promise<TokenResponse> => {
  // Generating the access token with a 10-minute expiry time
  const accessToken = jwt.sign(userDetails, hashKey, { expiresIn: '10m' });

  // Generating the refresh token with a 15-minute expiry time
  const refreshToken = jwt.sign(userDetails, hashKey, { expiresIn: '15m' });

  // Return both tokens as an object
  return { accessToken, refreshToken };
};

export const verifyToken = async (cookie) => {
  try {
    const tokenDetails = jwt.verify(cookie.accessToken, hashKey);
  } catch (error) {

  }
};
