import {
  FavoriteOutlined,
  FavoriteBorder,
  ShareSharp,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Typography,
  IconButton,
} from "@mui/material";

function Post({ src, postText, author, date }) {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={author}
        subheader={date}
      />
      <CardMedia component="img" height="20%" image={src} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {postText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<FavoriteOutlined sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareSharp />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
