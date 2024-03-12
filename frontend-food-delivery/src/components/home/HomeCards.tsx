"use client";

import {
  Card,
  CardContent,
  Box,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RiceBowlOutlinedIcon from "@mui/icons-material/RiceBowlOutlined";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";

const data = [
  {
    icon: <ImportContactsRoundedIcon />,
    text1: "Хүргэлтийн төлөв хянах",
    text2: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    text1: "Шуурхай хүргэлт",
    text2: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <RiceBowlOutlinedIcon />,
    text1: "Эрүүл, баталгаат орц",
    text2: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    icon: <AccessTimeOutlinedIcon />,
    text1: "Хоолны өргөн сонголт",
    text2: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export const HomeCards = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: 6,
          borderWidth: "0px",
          marginBottom: "120px",
        }}
      >
        {data.map(({ icon, text1, text2 }, idx) => (
          <Card
            key={idx}
            sx={{
              width: "265px",
              height: "155px",
              borderRadius: 2,
              padding: "16px 16px",
              gap: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "4px 4px 12px 0px rgba(0, 0, 0, 0.2)",
            }}
          >
            <IconButton
              sx={{ width: "30px", height: "30px", color: "#18BA51" }}
            >
              {icon}
            </IconButton>
            <Box sx={{ width: "232px", height: "48px" }}>
              <Typography fontSize={18} fontWeight={700}>
                {text1}
              </Typography>
              <Typography fontSize={14} fontWeight={400}>
                {text2}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};
