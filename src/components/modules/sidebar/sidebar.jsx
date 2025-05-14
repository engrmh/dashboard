import { Stack } from "@mui/material";
import { SideBarMenuData } from "./sideBarMenuData";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <Stack sx={{ backgroundColor: "#0A1727", padding: "1rem" , height: "100vh"}} spacing={4}>
      <div>Logo</div>
      {SideBarMenuData.map((item, index) => (
        <div key={index}>
          <Link to={item.path} style={{
            color: "#fff",
            textDecoration: "none"
          }}>
            <Stack spacing={2} direction={'row'} alignItems="center">
              <p>{item.icon}</p>
              <div>{item.title}</div>
            </Stack>
          </Link>
        </div>
      ))}
      <div>Item 3</div>
    </Stack>
  );
}
