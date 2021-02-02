import React, { useState } from "react";

const UseStateBasics = () => {
  // usestate() => manage variable => return array[2]
  // array[0] = value của state, reference
  // array[1] = function control value => value tự thay đổi theo reference
  // không thể tự động cập nhật value
  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
