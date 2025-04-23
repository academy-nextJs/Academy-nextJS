import jwt from "jsonwebtoken";

const Jwt_decode = (token: string) : string | jwt.JwtPayload | null=> {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    console.error("Token verification failed:", error);
    throw error;
  }
};

export default Jwt_decode;
