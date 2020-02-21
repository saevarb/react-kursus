import React, { useEffect } from "react";
import "./App.css";
import { observer } from "mobx-react";

import { AppContext, initializeRootStore } from "./config";

import { useService } from "./hooks/useService";
import { useStore } from "./hooks/useStore";

function App() {
  return (
    <AppContext.Provider value={initializeRootStore()}>
      <GalleryViewer></GalleryViewer>
    </AppContext.Provider>
  );
}

const GalleryViewer = observer(function GalleryViewer() {
  const imgurStore = useStore("imgurStore");
  useEffect(() => {
    imgurStore.loadGallery("hot");
  }, []);

  return (
    <div>
      {imgurStore.loadedGalleries.map(([name, count]) => (
        <div key={name}>
          {name} - {count}
        </div>
      ))}
    </div>
  );
});

export default App;
