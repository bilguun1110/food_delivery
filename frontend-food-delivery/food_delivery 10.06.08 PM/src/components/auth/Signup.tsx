import { Container, Box, InputBase, Button, Checkbox } from "@mui/material";
import Typography from "@mui/material/Typography";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const Signup = async () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "448px",
          height: "722px",
          marginTop: "74px",

          padding: 4,
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "700",
            marginBottom: "48px",
          }}
        >
          Бүртгүүлэх
        </Typography>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нэр
          </Typography>
          <InputBase
            sx={{
              padding: "8px 16px",
              bgcolor: "#F7F7F8",
              width: "384px",
              borderRadius: "4px",
              borderWidth: "1px",
              marginBottom: 2,
            }}
            placeholder="Нэрээ оруулна уу"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            И-мэйл
          </Typography>
          <InputBase
            sx={{
              padding: "8px 16px",
              bgcolor: "#F7F7F8",
              width: "384px",
              borderRadius: "4px",
              borderWidth: "1px",
              marginBottom: 2,
            }}
            placeholder="И-мэйл хаягаа оруулна уу"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Хаяг
          </Typography>
          <InputBase
            sx={{
              padding: "8px 16px",
              bgcolor: "#F7F7F8",
              width: "384px",
              borderRadius: "4px",
              borderWidth: "1px",
              marginBottom: 2,
            }}
            placeholder="Та хаягаа оруулна уу"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг
          </Typography>
          <InputBase
            sx={{
              padding: "8px 16px",
              bgcolor: "#F7F7F8",
              width: "384px",
              borderRadius: "4px",
              borderWidth: "1px",
              marginBottom: 2,
            }}
            placeholder="Нууц үгээ оруулна уу"
          />
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            Нууц үг давтах
          </Typography>
          <InputBase
            sx={{
              padding: "8px 16px",
              bgcolor: "#F7F7F8",
              width: "384px",
              borderRadius: "4px",
              borderWidth: "1px",
            }}
            placeholder="Нууц үгээ оруулна уу"
          />
        </Box>
        <Box sx={{ marginTop: "48px" }}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              padding: "8px 16px 8px 0px",
              alignItems: "center",
              marginBottom: 4,
            }}
          >
            <Checkbox />
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Үйлчилгээний нөхцөл зөвшөөрөх
            </Typography>
          </Box>
          <Button
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              bgcolor: "#EEEFF2",
              color: "#1C20243D",
              width: "384px",
              padding: "8px 16x",
              borderRadius: "4px",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
