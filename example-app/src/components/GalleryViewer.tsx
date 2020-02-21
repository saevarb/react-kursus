import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { useStore } from "hooks/useStore";
import { Sidebar } from "./Sidebar";
import { ImageGrid } from "./ImageGrid";

import badEmoji from "bad_emoji.png";

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

export const GalleryViewer = observer(function GalleryViewer() {
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
            <ImageGrid></ImageGrid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
});

function Logo() {
  return <img className="logo" src={badEmoji} alt="" />;
}
