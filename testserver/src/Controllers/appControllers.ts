import { Request, Response } from 'express';
import { createNewUser } from '../services/userServices.js';
import { TokenResponse } from '../interfaces.js';

export const userLogin = async (req: Request, res: Response) => {
  try {
    const { userName, password, email } = req.body;
    const userRes = await createNewUser({ email, userName, password });
    if (userRes.status == 201 && userRes.token ) {
      const { accessToken, refreshToken }:TokenResponse = userRes.token;

      
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });

      res.cookie('refreshToken',refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      })
      res.json({ data: 'success' }).status(200);
    } else {
      res.json({ userRes }).status(400);
    }
  } catch (error) {
    res.json({ error }).status(500);
  }
};
