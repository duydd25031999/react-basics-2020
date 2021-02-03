import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call effect')
    document.title = `Effect = ${value}`
    return () => {
      console.log('cleanup')
    }
  }, [value])

  console.log('render component')

  return <React.Fragment>
    <h1>{value}</h1>
    <button className="btn" onClick={() => setValue(value + 1)}>+ 1</button>
  </React.Fragment>;
};

export default UseEffectBasics;
