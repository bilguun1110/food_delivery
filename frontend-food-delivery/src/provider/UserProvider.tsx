"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
export type UserType = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  OTB: string;
};

export type UserContextType = {
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
  userData: UserType;
};
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

interface Props {
  children?: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserType>({
    _id: "",
    email: "",
    name: "",
    OTB: "",
    phone: "",
  });
  const router = useRouter();

  const token = typeof window !== "undefined" && localStorage.getItem("token");
  if (!token) {
    router.push("/");
  }

  useEffect(() => {
    if (token) {
      const verifyToken = async () => {
        try {
          const { data } = await axios.post(
            "http://localhost:8000/loggedIn",
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
            }
          );
          console.log(data, "data");
          setUserData(data.user);
          setIsUser(true);
          router.push("/");
        } catch (error) {
          console.log(error);
          setIsUser(false);
        }
      };
      verifyToken();
    }
  }, []);

  return (
    <UserContext.Provider value={{ isUser, setIsUser, userData }}>
      {children}
    </UserContext.Provider>
  );
};
