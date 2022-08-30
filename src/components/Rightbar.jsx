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
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={350}>
        <Typography varient="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://assets.vogue.com/photos/5e738f594fc08a00086af5ee/master/w_2560%2Cc_limit/GettyImages-1206321276.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f94/0a5/d045c65f1ebe767a9cd630a494.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://assets.vogue.com/photos/6226846b921b9eb00286c6ea/master/pass/GettyImages-77731940.jpg"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f94/0a5/d045c65f1ebe767a9cd630a494.jpg"
          />
          <Avatar alt="Mark Weins" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/f94/0a5/d045c65f1ebe767a9cd630a494.jpg"
          />
        </AvatarGroup>
        <Typography varient="h6" fontWeight={200} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={150} gap={5}>
          <ImageListItem>
            <img
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jennifer-lopez-hair-ponytail-1645010827.jpg?crop=0.822xw:0.786xh;0.102xw,0.0661xh&resize=480:*"
              alt="jenifer"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/731/104/dadc3a55ecade1901deff39705.jpg"
              alt="peter"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://wl-brightside.cf.tsp.li/resize/728x/jpg/473/6f7/3813505c50920e4a12617de710.jpg"
              alt="harry"
            />
          </ImageListItem>
        </ImageList>
        <Typography varient="h6" fontWeight={200} mt={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
