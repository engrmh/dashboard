import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";
import { Grid, Stack } from "@mui/material";
import SideBar from "./components/modules/sidebar/Sidebar";

function App() {
  const router = useRoutes(routes);

  return (
    <Grid container>
      <Grid size={{ md: 1.5, lg: 1.5 }}>
          <SideBar />
      </Grid>
      <Grid size={{ md: 10.5 }}></Grid>
    </Grid>
  );
}

export default App;
