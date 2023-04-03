import { Box } from "@mui/material";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      src: "/ggmu.jpg",
      text:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      src: "/ggmu.jpg",
      text:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      src: "/ggmu.jpg",
      text:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  ];

  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post src={post.src} postText={post.text} />
      ))}
    </Box>
  );
}

export default Feed;
