"use client";
import Link from "next/link";

// export default function Header() {
//   return (
//     <div>
//       <li key={1}>
//         <Link href={"/page1"} scroll={false}>
//           Page1
//         </Link>
//       </li>{" "}
//       <li key={2}>
//         <Link href={"/page2"}>Page2</Link>
//       </li>{" "}
//       <li key={3}>
//         <Link href={"/dashboard"}>dashboard</Link>
//       </li>{" "}
//     </div>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import KLabel from "@/uikit/Label";
import APIManager from "@/services";
import { useUser } from "@/contexts/UserContext";
import { STORAGE_KEYS, StorageEnhance } from "@/core/storage";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const { user, setUser } = useUser();

  console.log(user, "sbgvsbvbsbvs")

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <KLabel.Text
            flexGrow={1}
            color={"red"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            LOGO123
          </KLabel.Text>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <KLabel.Text
            color={"red"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
            }}
          >
            LOGO1
          </KLabel.Text>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <KLabel.Text textAlign="center">{setting}</KLabel.Text>
                </MenuItem>
              ))}
              <MenuItem
                onClick={async () => {
                  const res = await APIManager.request({
                    url: "api/user/login",
                    method: "POST",
                    body: {
                      username: "1qqq2ư123",
                      hashed_password: "125hrhr34",
                    },
                  });

                  console.log(res, "shvshvhshvsh");
                  setUser(res?.data);
                  StorageEnhance.set(STORAGE_KEYS.user, res?.data ?? {})
                }}
              >
                <KLabel.Text textAlign="center">Login</KLabel.Text>
              </MenuItem>

              <MenuItem
                onClick={async () => {
                  const res = await APIManager.request({
                    url: "api/user/get-all-user",
                    method: "GET"
                  });

                  console.log(res, "shvshvhshvsh");
                }}
              >
                <KLabel.Text textAlign="center">Get all user</KLabel.Text>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
