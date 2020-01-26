import React from "react";
import "./ImageLinkForm.css";
const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="">
      <p className="f3">
        {"This Magic Brain Can Detect Faces From You Pictures, Give it a try!"}
      </p>
      <div className="center">
        <div className="form  center pa4 br-3 shadow-4">
          <input
            className="   f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer "
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
