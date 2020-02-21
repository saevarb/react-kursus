import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography
} from "@material-ui/core";

import { useStore } from "hooks/useStore";

export const ImageGrid = observer(function ImageGrid() {
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
