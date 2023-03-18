import { Button } from "@mui/material";

function Home() {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
    </div>
  );
}

export default Home;
