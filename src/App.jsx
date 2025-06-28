import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { Grid, Stack } from "@mui/material";
import SideBar from "./components/modules/sidebar/Sidebar";
import NavbarT from "./components/modules/navbar/navbar";

function App() {
  const router = useRoutes(routes);

  return (
    <Grid container>
      <Grid size={{ md: 2, lg: 1.5 }} display={{ xs: "none", md: "block" }}>
        <SideBar />
      </Grid>
      <Grid size={{ xs: 12, md: 10, lg: 10.5 }}>
        <Stack bgcolor="var(--bgGray)">
          <Stack padding={2}>
            <NavbarT />
          </Stack>
          <Stack overflow="hidden" paddingTop={2} paddingX={2}>
            <div className="mainStack">{router}</div>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
