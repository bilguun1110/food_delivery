import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "@/provider/UserProvider";
import { UserType } from "@/provider/UserProvider";
export const Photo = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);

  return (
    <Stack sx={{ alignItems: "center", gap: "30px" }}>
      <Image alt="" src="/profile.png" width={100} height={100} />
      <Stack sx={{ fontFamily: "sans-serif", fontSize: "30px" }}>
        {userData.name}
      </Stack>
    </Stack>
  );
};
