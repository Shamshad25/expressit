import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feeds = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        title="Jack Reacher"
        date="August 12th, 2022"
        image={
          "https://img.freepik.com/premium-photo/beautiful-moraine-lake-banff-national-park-alberta-canada_131985-98.jpg?w=2000"
        }
        alt="boats"
      />
      <Post
        title="Jack Reacher"
        date="July 29th, 2022"
        image={
          "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325466_1100-800x825.jpg"
        }
        alt="lake"
      />
      <Post
        title="Jack Reacher"
        date="July 15th, 2022"
        image={
          "https://www.eea.europa.eu/themes/biodiversity/state-of-nature-in-the-eu/state-of-nature-2020-subtopic/image"
        }
        alt="flowers"
      />
      <Post
        title="Jack Reacher"
        date="July 1st, 2022"
        image={
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
        alt="boats"
      />
      <Post
        title="Jack Reacher"
        date="June 25th, 2022"
        image={
          "https://images.theconversation.com/files/292780/original/file-20190917-19083-9zi9jy.jpg?ixlib=rb-1.1.0&rect=350%2C0%2C3337%2C2268&q=45&auto=format&w=926&fit=clip"
        }
        alt="boats"
      />
      <Post
        title="Jack Reacher"
        date="August 12th, 2022"
        image={
          "https://drexel.edu/news/~/media/Drexel/Sites/News/Images/v2/story-images/2022/April/nature-relatedness-stock-bcsize/nature-relatedness-stock-bcsize_16x9.ashx"
        }
        alt="boats"
      />
    </Box>
  );
};

export default Feeds;
