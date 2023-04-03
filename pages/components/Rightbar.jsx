import React from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

function Rightbar() {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];

  const avatarList = [
    {
      img: {
        src: "/sia.jpg",
        alt: "Remy Sharp",
      },
      primary: "Brunch this weekend?",
      primaryText: "Ali Connors",
      message: " — I'll be in your neighborhood doing errands this…",
    },
    {
      img: {
        src: "/elon.jpg",
        alt: "Travis Howard",
      },
      primary: "Summer BBQ",
      primaryText: "to Scott, Alex, Jennifer",
      message: "— Wish I could come, but I'm out of town this…",
    },
    {
      img: {
        src: "/lion.jpg",
        alt: "Cindy Baker",
      },
      primary: "Oui Oui",
      primaryText: "Sandra Adams",
      message: "— Do you have Paris recommendations? Have you ever…",
    },
  ];
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          {avatarList.map(({ img }) => (
            <Avatar alt={img.alt} src={img.src} />
          ))}
          <Avatar alt="Remy Sharp" src="/tech.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} my={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {avatarList.map((list) => (
            <>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={list.img.alt} src={list.img.src} />
                </ListItemAvatar>
                <ListItemText
                  primary={list.primary}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {list.primaryText}
                      </Typography>
                      {list.message}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
