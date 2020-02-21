import React, { useState } from "react";
import { observer } from "mobx-react";
import TextField from "@material-ui/core/TextField";

import { useStore } from "hooks/useStore";

// This component is reponsible for rendering input fields for loading a new gallery

export const GalleryController = observer(function GalleryController() {
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
