import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import Post from "./Post";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Post img={require("../assets/photo1.jpeg").default} />
      <Post img={require("../assets/photo2.jpeg").default} />
      <Post img={require("../assets/photo3.jpeg").default} />
      <Post img={require("../assets/photo4.jpeg").default} />
    </Container>
  );
};

export default Feed;
