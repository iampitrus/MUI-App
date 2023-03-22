import { Box } from "@mui/material";

function Sidebar() {
  return (
    <Box
      flex={6}
      p={2}
      bgcolor={"skyblue"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
}

export default Sidebar;
