import jwt, { JwtPayload } from 'jsonwebtoken';

const secret = 'mysecret';
export const generateToken = (payload: JwtPayload) => {
    const options = {
        expiresIn: '1d',
    };
    return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string) => {
    try {
        const decoded: string | JwtPayload = jwt.verify(token, secret, { ignoreExpiration: false });
        return decoded
    } catch (err) {
        return null;
    }
}