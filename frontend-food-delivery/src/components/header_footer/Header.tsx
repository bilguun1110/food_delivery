"use client";
import Image from "next/image";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";
import { UserContext } from "@/provider/UserProvider";
import { useContext } from "react";

export const Header = () => {
  const [foodName, setFoodNmae] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // const users = useContext(UserContext);

  const getName = async () => {
    router.push(`/search/${foodName}`);
  };

  return (
    <Box
      sx={{
        marginTop: "10px",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "57px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "1400px",

          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
            paddingLeft: "24px",
          }}
        >
          <Image src="/Vector.png" alt="" width={32} height={26} />
          <Typography
            onClick={() => router.push("/")}
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",

              color: `${pathname === "/" ? "green" : "black"}`,
            }}
          >
            НҮҮР
          </Typography>
          <Typography
            onClick={() => router.push("/menu")}
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              cursor: "pointer",
              color: `${pathname === "/menu" ? "green" : "black"}`,
            }}
          >
            ХООЛНЫ ЦЭС
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "700" }}>
            ХҮРГЭЛТИЙН БҮС
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginLeft: "255px", gap: "20px" }}>
          <Box
            sx={{
              width: "260px",
              height: "40px",
              alignItems: "center",
              justifyItems: "center",
              borderRadius: "8px",
              paddingLeft: 2,
              gap: 1,

              display: "flex",
              border: "solid",
              borderWidth: "1px",
            }}
          >
            <SearchIcon onClick={getName} />
            <InputBase
              value={foodName}
              onChange={(e) => setFoodNmae(e.target.value)}
              placeholder="Хайx"
              sx={{}}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
              justifyContent: "center",
              button: {
                fontSize: 22,
                fontWeight: 700,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <ShoppingBasketOutlinedIcon />
              <Button>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: "700", color: "black" }}
                >
                  Сагс
                </Typography>
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <PermIdentityIcon />
              {/* {!users ? (
                <Button onClick={() => router.push("/login")}>
                  <Typography
                    sx={{ fontSize: "14px", fontWeight: "700", color: "black" }}
                  >
                    Нэвтрэх
                  </Typography>
                </Button>
              ) : (
                <Button onClick={() => router.push("/userProfile")}>
                  <Typography color={"green"}>Хэрэглэгч</Typography>
                </Button>
              )} */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
