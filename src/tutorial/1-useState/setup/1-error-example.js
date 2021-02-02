import React from 'react';

const ErrorExample = () => {
  let title = 'random title'
  const handleClick = () => {
    title = 'hello world' 
    console.log(title)
  }
  return <React.Fragment>
    {/* Đây là stateless => title chỉ đc render 1 lần */}
    <h2>{title}</h2>
    {/* Khi ấn thay đổi thì cx ko thể thay đổi đc */}
    <button type="button" className="btn" onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
};

export default ErrorExample;
