// import { getClientCookie } from "@/utils/helper/cookie/client-cookie";
import checkTokenExpiration from "@/utils/helper/jsonwebtoken/CheckTokenExpiration";
import { RefreshToken } from "@/utils/service/api/post/RefreshToken";
import { useEffect } from "react";

export default function TokenRefresher() {
  useEffect(() => {
    checkTokenExpiration("clientAccessToken", RefreshToken);
  }, []);

  return null;
}
