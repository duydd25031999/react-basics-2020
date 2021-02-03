import React, { useEffect, useRef, useState } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const Counter = () => {
  // 1. khởi tạo variable
  const [count, setCount] = useState(0);
  console.log("1.", count);
  const preCount = useRef(count);

  console.log("1.1.", count, preCount);

  // 3. effect
  useEffect(() => {
    console.log("3.1", count, preCount);
    preCount.current = count;
    console.log("3.2", count, preCount);
  }, [count]);

  // 4. click Increase
  const handleIncreaseClick = () => {
    setCount(count + 1);
  };

  // 2. render
  return (
    <>
      <h2>Previous: {preCount.current}</h2>
      <h2>Current: {count}</h2>

      <button onClick={handleIncreaseClick}>Increase</button>
    </>
  );

  /**
   * 0. vào trang lần đầu
   * 0.1 gán cả preCount + count = 0
   * 0.2 render
   * 0.3 preCount = count = 0
   * 0.4 count = 1
   * 
   * 1. click "Increase" lần 1
   * 1.1. ko chạy lại khởi tạo => preCount = 0 (0.3), count = 1 (0.4) 
   * 1.2. render
   * 1.3. preCount = count = 1
   * 1.4. count = 2
   * 
   * 2. click "Increase" lần 2
   * 2.1. ko chạy lại khởi tạo => preCount = 1 (1.3), count = 2 (1.4) 
   * 2.2. render
   * 2.3. preCount = count = 2
   * 2.4. count = 3
   */

  const UseRefBasics = () => {
    const refContainer = useRef(null);

    console.log("UseRefBasics", refContainer);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("handleSubmit", refContainer.current.value);
    };
    useEffect(() => {
      console.log(refContainer.current);
      refContainer.current.focus();
    });
    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={refContainer} />
          </div>
          <button type="submit">submit</button>
        </form>
      </>
    );

    /**
     * 1. khởi tạo => refContainer = null
     * 2.1. render khởi tạo element
     * 2.2. refContainer = element
     * 3. sau đó giữ nguyên tham chiếu refContainer tới element đó
     */
  };
};

export default Counter;
// export default UseRefBasics;
