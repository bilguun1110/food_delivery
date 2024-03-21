"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export type UserContextType = {
  isUser: boolean;
  setIsUser: Dispatch<SetStateAction<boolean>>;
};
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

interface Props {
  children?: ReactNode;
}

export const UserProvider = ({ children, ...Props }: Props) => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<UserContextType>();
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
          console.log(data);
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
    <UserContext.Provider value={{ isUser, setIsUser }}>
      {children}
    </UserContext.Provider>
  );
};
