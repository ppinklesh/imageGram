import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

//upload form component
const UploadForm = () => {
  const [file, setFile] = useState(null); // in the begining no file selected (Using hooks)
  const [error, setError] = useState(null); //Error states.

  const types = ["image/png", "image/jpeg"]; //image type allowed to upload.

  //on change handler function to uplaod files.
  const handleChange = e => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected); //if file selected will update the file
      setError(""); //reseting the error msg.
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg only)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
