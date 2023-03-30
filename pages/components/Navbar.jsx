import { useState } from "react";

import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";
import { Notifications, Mail, Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius,
}));
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  // if it's bigger this breakpoint (600px) it displays flex
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(!open);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Peter Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Enter a search" />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            onClick={() => handleClose()}
            sx={{ width: 30, height: 30 }}
            src="./peter.jpg"
          />
        </Icons>
        <UserBox onClick={() => handleClose()}>
          <Avatar sx={{ width: 30, height: 30 }} src="./peter.jpg" />
          <Typography variant="span">Peter</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={open}
        onClose={() => handleClose()}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
