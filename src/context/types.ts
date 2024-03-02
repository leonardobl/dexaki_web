
import { Dispatch, ReactNode, SetStateAction } from "react";

export type Props = {
  children: ReactNode;
};

export type TUser = {
  email: string;
  password: string;
};


export type AuthContextData = {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  user: TUser;

};


