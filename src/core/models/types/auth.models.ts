export type loginUserParams = {
  email: string;
  password: string;
};

export type loginUserResponse = {
  accessToken: string;
  refreshToken: string;
};
