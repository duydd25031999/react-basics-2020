// import React from "react";
// import ReactDom from "react-dom";

// function Greeting() {
//   // muốn làm component thì phải return JSX
//   // return React.createElement('h4', {}, 'this is my first component')
//   return <h4>this is my first component</h4>;
// }

// function Greeting() {
//   // muốn làm component thì phải return JSX
//   // return React.createElement('div', {}, React.createElement('h4', {}, 'this is my first component'))
//   return (
//     // chỉ có 1 tag là root tag
//     <div> 
//       <h4>this is my first component</h4>;
//     </div>
//   );
// }

// function Greeting() {
//   return (
//     // React.Fragment = tag nhưng không tạo ra html node 
//     // React.Fragment = <template> trong Vue
//     <React.Fragment>
//       {/* className vì class */}
//       <h3 className='' >hello people</h3> 
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li> 
//       </ul>
//     </React.Fragment>
//   );
// }

// const Person = () => <h1>Person A</h1>
// const Message = () => {
//   return <p>this is a message</p>
// }

// function Greeting() {
//   return <div>
//     <Person />
//     <Message />
//   </div>
// }

// const global = {
//   img:
//    'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
//   title: 'I Love You to the Moon and Back',
//   author: 'Amelia Hepworth',
// }

// function BookList() {
//   return (
//     <section>
//       <Book job={`developer`} />
//     </section>
//   )
// }

// const Book = (props) => {
//   return <article>
//     {/* component có thể nhận giá trị từ global variable */}
//     <img src={global.img} /> 
//     <h1>{global.title}</h1>
//     <h4>{global.author}</h4>
//     <p>{props.job}</p>
//     <p>{props.title}</p>
//   </article>
// }

// CSS
// import './index.css';

// import {data} from './books'
// import SpecificBook from './Book'
// import {greeting} from './testing/testing'

// function BookList() {
//   console.log(greeting);

//   function listBooks() {
//     const bookElements = data.map((book, index) => {
//       return <SpecificBook key={book.id} {...book}></SpecificBook>;
//     })
//     return bookElements
//   }

//   return (
//     <section className='booklist'>
//       {/* {data.map((book, index) => {
//         return <SpecificBook key={book.id} {...book}></SpecificBook>;
//       })} */}
//       {listBooks()}
//     </section>
//   );
// }

// ReactDom.render(
//   <BookList />, //gọi root component dưới dạng tag
//   document.getElementById("root") //reference tới 1 html elemenet cụ thể trong <body>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  // Strict Mode = Fragment + nghiêm ngặt kiểm tra log | lifecycle của hệ thống
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


