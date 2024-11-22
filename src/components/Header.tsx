// "use client";
// import Link from "next/link";

// // export default function Header() {
// //   return (
// //     <div>
// //       <li key={1}>
// //         <Link href={"/page1"} scroll={false}>
// //           Page1
// //         </Link>
// //       </li>{" "}
// //       <li key={2}>
// //         <Link href={"/page2"}>Page2</Link>
// //       </li>{" "}
// //       <li key={3}>
// //         <Link href={"/dashboard"}>dashboard</Link>
// //       </li>{" "}
// //     </div>
// //   );
// // }

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import KLabel from "@/uikit/Label";
// import APIManager from "@/services";
// import { useUser } from "@/contexts/UserContext";
// import { STORAGE_KEYS, StorageEnhance } from "@/core/storage";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function ResponsiveAppBar() {
//   const { user, setUser } = useUser();

//   console.log(user, "sbgvsbvbsbvs")

//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     // <AppBar position="static">
//     //   <Container maxWidth="xl">
//     //     <Toolbar disableGutters>
//     //       <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//     //       <KLabel.Text
//     //         flexGrow={1}
//     //         color={"red"}
//     //         sx={{
//     //           mr: 2,
//     //           display: { xs: "none", md: "flex" },
//     //         }}
//     //       >
//     //         LOGO123
//     //       </KLabel.Text>

//     //       <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//     //         <IconButton
//     //           size="large"
//     //           aria-label="account of current user"
//     //           aria-controls="menu-appbar"
//     //           aria-haspopup="true"
//     //           onClick={handleOpenNavMenu}
//     //           color="inherit"
//     //         >
//     //           <MenuIcon />
//     //         </IconButton>
//     //         <Menu
//     //           id="menu-appbar"
//     //           anchorEl={anchorElNav}
//     //           anchorOrigin={{
//     //             vertical: "bottom",
//     //             horizontal: "left",
//     //           }}
//     //           keepMounted
//     //           transformOrigin={{
//     //             vertical: "top",
//     //             horizontal: "left",
//     //           }}
//     //           open={Boolean(anchorElNav)}
//     //           onClose={handleCloseNavMenu}
//     //           sx={{
//     //             display: { xs: "block", md: "none" },
//     //           }}
//     //         >
//     //           {pages.map((page) => (
//     //             <MenuItem key={page} onClick={handleCloseNavMenu}>
//     //               <Typography textAlign="center">{page}</Typography>
//     //             </MenuItem>
//     //           ))}
//     //         </Menu>
//     //       </Box>
//     //       <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//     //       <KLabel.Text
//     //         color={"red"}
//     //         sx={{
//     //           mr: 2,
//     //           display: { xs: "flex", md: "none" },
//     //           flexGrow: 1,
//     //         }}
//     //       >
//     //         LOGO1
//     //       </KLabel.Text>
//     //       <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//     //         {pages.map((page) => (
//     //           <Button
//     //             key={page}
//     //             onClick={handleCloseNavMenu}
//     //             sx={{ my: 2, color: "white", display: "block" }}
//     //           >
//     //             {page}
//     //           </Button>
//     //         ))}
//     //       </Box>

//     //       <Box sx={{ flexGrow: 0 }}>
//     //         <Tooltip title="Open settings">
//     //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//     //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//     //           </IconButton>
//     //         </Tooltip>
//     //         <Menu
//     //           sx={{ mt: "45px" }}
//     //           id="menu-appbar"
//     //           anchorEl={anchorElUser}
//     //           anchorOrigin={{
//     //             vertical: "top",
//     //             horizontal: "right",
//     //           }}
//     //           keepMounted
//     //           transformOrigin={{
//     //             vertical: "top",
//     //             horizontal: "right",
//     //           }}
//     //           open={Boolean(anchorElUser)}
//     //           onClose={handleCloseUserMenu}
//     //         >
//     //           {settings.map((setting) => (
//     //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
//     //               <KLabel.Text textAlign="center">{setting}</KLabel.Text>
//     //             </MenuItem>
//     //           ))}
//     //           <MenuItem
//     //             onClick={async () => {
//     //               const res = await APIManager.request({
//     //                 url: "api/user/login",
//     //                 method: "POST",
//     //                 body: {
//     //                   username: "1qqq2ư123",
//     //                   hashed_password: "125hrhr34",
//     //                 },
//     //               });

//     //               console.log(res, "shvshvhshvsh");
//     //               setUser(res?.data);
//     //               StorageEnhance.set(STORAGE_KEYS.user, res?.data ?? {})
//     //             }}
//     //           >
//     //             <KLabel.Text textAlign="center">Login</KLabel.Text>
//     //           </MenuItem>

//     //           <MenuItem
//     //             onClick={async () => {
//     //               const res = await APIManager.request({
//     //                 url: "api/user/get-all-user",
//     //                 method: "GET"
//     //               });

//     //               console.log(res, "shvshvhshvsh");
//     //             }}
//     //           >
//     //             <KLabel.Text textAlign="center">Get all user</KLabel.Text>
//     //           </MenuItem>
//     //         </Menu>
//     //       </Box>
//     //     </Toolbar>
//     //   </Container>
//     // </AppBar>
//     <></>
//   );
// }
// export default ResponsiveAppBar;

"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import KColor from "@/constant/colors";
import { useThemeContext } from "@/contexts/ThemeContext";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Trang chu", "Gioi thieu", "Dich vu"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { theme } = useThemeContext();

  console.log(theme, "theme123");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          style={{
            background: KColor.primary.normal1,
          }}
        >
          <Toolbar className="container-custom flex row justify-between">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block", md: "flex" } }}>
              <Link className="p-large" href="/dashboard">
                <Typography>Trang Chu</Typography>
              </Link>

              <Link className="p-large" href="/introduce">
                <Typography color={"primary"}>Giới thiệu</Typography>
              </Link>

              <Link className="p-large" href="/service">
                <Typography color={"primary"}>Dịch Vụ</Typography>
              </Link>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block", md: "flex" } }}>
              <Link className="p-large" href="/product">
                <Typography color={"primary"}>Sản Phẩm</Typography>
              </Link>

              <Link className="p-large" href="/news">
                <Typography color={"primary"}>Tin Tức</Typography>
              </Link>

              <Link className="p-large" href="/contact">
                <Typography color={"primary"}>Liên Hệ</Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}
