import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function DashboardContainer({ pageTitle, links, children }) {
  return (
    <>
      <Typography variant="h6">{pageTitle}</Typography>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link to="/" style={{ color: "#0005", textDecoration: "none" }}>
          Dashboard
        </Link>
        {links.map((l, i) => (
          <Link
            key={i}
            to={l.href || "#"}
            style={{ color: "#0005", textDecoration: "none" }}
          >
            {l.title}
          </Link>
        ))}
      </Breadcrumbs>
      <div style={{ marginTop: "1rem" }}>{children}</div>
    </>
  );
}
