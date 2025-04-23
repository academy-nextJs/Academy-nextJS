import { getClientCookie } from "../cookie/client-cookie";
import Jwt_decode from "./Jwt_decode";

const checkTokenExpiration = (
  cookieName: string,
  refetchToken: () => Promise<void>
) => {
  const Token = getClientCookie(cookieName);
  if (Token) {
    // alert()
    const decodedToken = Jwt_decode(Token);
    const nowTime = Math.floor(new Date().getTime() / 1000);
    const timeLeft = decodedToken?.exp - nowTime;
    // console.log(timeLeft);
    if (timeLeft <= 0)
      return refetchToken(); //If the expiration date has passed, it will be refetched.
    else if (timeLeft <= 120)
      return refetchToken(); // If the expiration date is less than 2 minute is refetched
    else {
      // if more than 2 minute is left ,set is timeout
      setTimeout(async () => {
        refetchToken();
      }, (timeLeft - 120) * 1000);
    }
  }
};

export default checkTokenExpiration;
