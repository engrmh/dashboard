import { Avatar, Badge, Button, Popover, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function NavbarT() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const popoverOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const popoverClose = () => {
    setAnchorEl(null);
  };

  const popoverOptions = [
    {
      title: "Profile",
      path: "/profile",
      color: "#000",
    },
    {
      title: "Exit",
      path: "#",
      color: "#f00",
    },
  ];

  return (
    <Stack bgcolor="#fff" padding={1}>
      <Stack
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        gap="1rem"
      >
        <Link
          to="/notifications"
          style={{
            color: "var(--bgGray)",
          }}
        >
          <Badge badgeContent={4} color="error">
            <NotificationsNoneIcon fontSize="large" />
          </Badge>
        </Link>
        <Button onClick={popoverOpen}>
          <Avatar alt="John Doe" />
          <Typography marginLeft=".5em" color="#000">
            John Doe
          </Typography>
        </Button>

        <Popover
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          onClose={popoverClose}
        >
          <Stack padding={1}>
            {popoverOptions.map((o, i) => (
              <Stack key={i} paddingY={1} paddingX={2}>
                <Link
                  to={o.path}
                  style={{
                    color: o.color,
                    textDecoration: "none",
                  }}
                >
                  {o.title}
                </Link>
              </Stack>
            ))}
          </Stack>
        </Popover>
      </Stack>
    </Stack>
  );
}
