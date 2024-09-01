import { verifyToken } from "../services/tokenServices.js";
export const auth = (req, res, next) => {
    res.removeHeader('X-powered-by');
    res.setHeader('Referrer-Policy', 'origin');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Strict-Transport-Security', 'max-age=3600; includesSubDomains; preload');
    debugger;
    const authentication = verifyToken(req.cookies);
    next();
};
