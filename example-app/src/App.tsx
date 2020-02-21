import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import "./App.css";

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
import { Card, CardHeader, CardMedia, CardContent } from "@material-ui/core";
import { GalleryViewer } from "components/GalleryViewer";

function App() {
  return (
    <AppContext.Provider value={initializeRootStore()}>
      <GalleryViewer></GalleryViewer>
    </AppContext.Provider>
  );
}

export default App;
