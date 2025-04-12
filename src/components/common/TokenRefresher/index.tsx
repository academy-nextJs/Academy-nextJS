import { getClientCookie } from "@/core/models/cookie/client-cookie";
import { RefreshToken } from "@/utils/service/api/post/RefreshToken";
import { useEffect } from "react";

export default function TokenRefresher() {
  const Token = getClientCookie("clientAccessToken");
  useEffect(() => {
    if (Token) {
      // Call RefreshToken immediately, then every 15 minutes.
      // RefreshToken();
      const intervalId = setInterval(() => {
        alert();
        RefreshToken();
      }, 9000);

      // Clean up the interval on component unmount.
      return () => clearInterval(intervalId);
    }
  }, []);

  return null;
}
