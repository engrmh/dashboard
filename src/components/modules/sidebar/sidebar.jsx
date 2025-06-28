import { Avatar, Stack, Typography } from "@mui/material";
import { SideBarMenuData } from "./sideBarMenuData";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Stack
      sx={{
        backgroundColor: "var(--sidebarColor)",
        padding: "1rem",
        height: "100vh",
      }}
      spacing={4}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Logo"
          src="/images/logo.png"
          style={{
            width: "4rem",
            height: "4rem",
          }}
        />
        <Typography
          color="#fff"
          variant="h5"
          marginTop="1rem"
          marginBottom="2rem"
        >
          Ooredoo
        </Typography>
      </div>
      {SideBarMenuData.map((item, index) => (
        <div key={index}>
          <Link
            to={item.path}
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Stack spacing={2} direction={"row"} alignItems="center">
              <p>{item.icon}</p>
              <div>{item.title}</div>
            </Stack>
          </Link>
        </div>
      ))}
      {/* <div>Item 3</div> */}
    </Stack>
  );
}
