"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import { Children, ReactNode, createContext, useEffect, useState } from "react";

export type UserContextType = {
  isUser: Boolean;
};
export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

interface Props {
  children?: ReactNode;
}

export const UserProvider = ({ children, ...Props }: Props) => {
  const [isUser, setIsUser] = useState<Boolean>(false);
  const [userEmail, setUserEmail] = useState<UserContextType>();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

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
        console.log(data, "data token");

        if (data === "invalid token" && data === "not found token") {
          setIsUser(false);
        } else {
          setIsUser(true);
          router.push("/");
        }
      } catch (error) {
        console.log(error);
        setIsUser(false);
      }
    };
    verifyToken();
  }, []);

  return (
    <UserContext.Provider value={{ isUser }}>{children}</UserContext.Provider>
  );
};
