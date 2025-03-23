"use client";

import { TokenContext } from "@/Layout/SessionProvider";
import { RefreshToken } from "@/utils/service/api/post/RefreshToken";
import { useContext, useEffect } from "react";

export default function TokenRefresher() {
  const Token = useContext(TokenContext);
  console.log(Token.accessToken);

  useEffect(() => {
    if (Token.accessToken !== null) {
      // Call RefreshToken immediately, then every 15 seconds.
      RefreshToken();
      const intervalId = setInterval(() => {
        RefreshToken();
      }, 15000);

      // Clean up the interval on component unmount.
      return () => clearInterval(intervalId);
    }
  }, []);

  return null;
}
