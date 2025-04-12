export type loginUserParams = {
  email: string;
  password: string;
};

export type loginUserResponse = {
  accessToken: string;
  refreshToken: string;
};

export type RegisterUserParamsType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type RegisterUserResponseType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: "buyer" | "seller";
  fullName: string;
  createdAt: string;
};
