import React, { useEffect, useState } from "react";
import "./App.css";
import { observer } from "mobx-react";
import badEmoji from "./bad_emoji.png";

import { AppContext, initializeRootStore } from "./config";

import { useService } from "./hooks/useService";
import { useStore } from "./hooks/useStore";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  ListSubheader,
  Card,
  CardHeader,
  CardMedia,
  CardContent
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    mainContent: {
      minHeight: "50%",
      margin: theme.spacing(2),
      padding: theme.spacing(2)
    }
  })
);

function App() {
  return (
    <AppContext.Provider value={initializeRootStore()}>
      <GalleryViewer></GalleryViewer>
    </AppContext.Provider>
  );
}

function Logo() {
  return <img className="logo" src={badEmoji} alt="" />;
}

const GalleryViewer = observer(function GalleryViewer() {
  const imgurStore = useStore("imgurStore");
  const uiStore = useStore("uiStore");
  const classes = useStyles();

  useEffect(() => {
    imgurStore.loadGallery("hot").then(() => uiStore.selectGallery("hot"));
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Really bad imgur clone
            <Logo />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Paper elevation={2} className={classes.mainContent}>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar></Sidebar>
          </Grid>
          <Grid item xs={10}>
            <Main></Main>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
});

const Sidebar = observer(function Sidebar() {
  return (
    <div className="sidebar">
      <GalleryController></GalleryController>
      <GalleryList></GalleryList>
    </div>
  );
});

const Main = observer(function Main() {
  const uiStore = useStore("uiStore");
  return (
    <Grid container spacing={1}>
      {uiStore.selectedGallery?.map(img => (
        <Grid item xs={4}>
          <Card>
            <CardMedia
              component={img.images![0].mp4 ? "video" : "img"}
              title={img.title}
              height="140"
              image={img.images![0].link}
            ></CardMedia>
            <CardContent>
              <Typography variant="h6">{img.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
});

const GalleryList = observer(function GalleryList() {
  const imgurStore = useStore("imgurStore");
  const uiStore = useStore("uiStore");
  return (
    <div className="gallery-list">
      <List subheader={<ListSubheader>Loaded galleries</ListSubheader>}>
        {imgurStore.loadedGalleries.map(([name, count]) => (
          <ListItem
            onClick={() => uiStore.selectGallery(name)}
            button
            key={name}
          >
            <ListItemText
              primary={name}
              secondary={count.toString()}
            ></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
});

// This component is reponsible for rendering input fields for loading a new gallery
const GalleryController = observer(function GalleryController() {
  const imgurStore = useStore("imgurStore");
  const [userInput, setInput] = useState("");
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    imgurStore.loadGallery(userInput);
  }
  return (
    <div className="gallery-controller">
      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          label="Gallery topic"
          value={userInput}
          onChange={ev => setInput(ev.target.value)}
        ></TextField>
      </form>
    </div>
  );
});

export default App;
