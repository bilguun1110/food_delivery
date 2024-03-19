"use client";
import axios from "axios";

import { useRouter } from "next/navigation";
import { Children, ReactNode, createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

interface Props {
  children?: ReactNode;
}

type AuthUser = {
  email: string;
};

export type UserContextType = {
  userEmail: any;
  setUserEmail: any;
};

export const UserProvider = ({ children, ...Props }: Props) => {
  const [userEmail, setUserEmail] = useState<AuthUser | null>(null);
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     router.push("/");
  //     return;
  //   }

  //   const verifyToken = async () => {
  //     try {
  //       const { data } = await axios.post(
  //         "http://localhost:8000/loggedIn",
  //         {},
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "Content-type": "application/json",
  //           },
  //         }
  //       );
  //       setUserEmail(data);
  //       console.log(data);
  //       router.push("/userProfile");
  //     } catch (error) {
  //       console.log(error);
  //       localStorage.removeItem("token");
  //       router.push("/login");
  //     }
  //   };
  //   verifyToken();
  // }, []);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};
