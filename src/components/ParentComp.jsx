import React, { useState } from "react";

function ParentComp() {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  
  const handleLowerCase=()=>{
    let result = text.toLowerCase();
    setText(result)
  }

  const handleUpperCase=()=>{
    let result = text.toUpperCase();
    setText(result)
  }
  
  return (
    <div className="container">
      <div className="header">Word Counter</div>
      <div className="full">
        <div className="count-word word">
          Word
          <p>{text ? text.trim().split(/\s+/).length : 0}</p>
        </div>
        <div className="count-word letter">
          Letter
          <p>{text.length}</p>
        </div>
        <div className="count-word paragaraph">
          Paragaraph
          <p>
            {
              text
                .trim()
                .split(/\n+/)
                .filter((e) => e !== "").length
            }
          </p>
        </div>
      </div>
      <textarea
        name="text"
        id=""
        cols="100"
        rows="20"
        placeholder="Enter/Paste Your Text here"
        onChange={handleChangeText}
        value={text}
      ></textarea>
      <div className="button">
        <button className="btn uppercase" onClick={handleUpperCase}>Click to Uppercase</button>
        <button className="btn lowercase" onClick={handleLowerCase}>Click to Lowercase</button>
      </div>
    </div>
  );
}

export default ParentComp;
