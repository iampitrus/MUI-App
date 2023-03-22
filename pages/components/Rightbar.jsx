import { Box } from "@mui/material";

function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      bgcolor={"lightcoral"}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
}

export default Rightbar;
