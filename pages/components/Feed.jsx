import { Box } from "@mui/material";
import Post from "./Post";
import { posts } from "../../data";

function Feed() {
  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Post
          src={post.src}
          postText={post.text}
          author={post.author}
          date={post.date}
        />
      ))}
    </Box>
  );
}

export default Feed;
