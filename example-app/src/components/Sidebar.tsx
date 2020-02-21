import React from "react";
import { observer } from "mobx-react";
import { GalleryController } from "./GalleryController";
import { GalleryList } from "./GalleryList";

export const Sidebar = observer(function Sidebar() {
  return (
    <div className="sidebar">
      <GalleryController />
      <GalleryList />
    </div>
  );
});
