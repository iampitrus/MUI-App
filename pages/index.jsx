import { Button, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";
import styled from "@emotion/styled";

function Home() {
  // Creating custom style like a reuseable component
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#fff",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
      color: "white",
      "&:disabled": {
        backgroundColor: "gray",
        color: "white",
      },
    },
  }));
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button
        startIcon={<Settings />}
        variant="contained"
        size="small"
        color="otherColor"
      >
        Settings
      </Button>
      <Button
        startIcon={<Add />}
        variant="contained"
        size="small"
        color="secondary"
      >
        Add New Post{" "}
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but it's a p tag
      </Typography>
      <BlueButton>My Button</BlueButton>
      <BlueButton>Another Button</BlueButton>
    </div>
  );
}

export default Home;
