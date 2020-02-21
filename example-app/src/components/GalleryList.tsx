import React from "react";
import { observer } from "mobx-react";
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

import { useStore } from "hooks/useStore";

export const GalleryList = observer(function GalleryList() {
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
