# Folder Structure
## "src" folder
Chứa "index.js" và toàn bộ js, css của project
### "index.js"
import React & ReactDom

ReactDom.render ở đây
```
ReactDom.render(<BookList />, document.getElementById('root'));
```
## "public" folder
Chứa các resource có thể truy cập trực tiếp qua URL

base url = "%PUBLIC_URL%/..."

### "index.html"
root html của cả hệ thống

```
<body> chứa <div id="root">
```

# React from 'react'
## React.createElement
Tạo Component thủ công = js

muốn làm component thì phải return JSX
- chỉ có 1 tag là root tag

component có thể nhận giá trị từ global variable
```
<img src={global.img} /> 
```

```
ReactDom.render(
  <BookList />, //gọi root component dưới dạng tag
  document.getElementById("root") //reference tới 1 html elemenet cụ thể trong <body>
);
```

## React.Fragment
React.Fragment = tag nhưng không tạo ra html node 
- React.Fragment = \<template\> trong Vue

## React.StrictMode
Strict Mode = Fragment + nghiêm ngặt kiểm tra log | lifecycle của hệ thống

## PropTypes
Defaul props type của react không phải object
- Phải khai báo qua 'prop-types'

```
// khao báo type
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}

// khợi tạo default
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: false,
};
```

## React hooks
Chỉ sử dụng ở functional component
- Không cần dùng ở class component
- bắt đầu từ version 16.8
- thay thế cho lifecycle trong class component

### React.useState
khi truyền thủ công variable vào JSX thì update variable đó sẽ KO THAY ĐỔI VALUE trêm UI
- Cần sử dụng 1 func chuyên dụng để update variable

`React.useState` = Builder func
- usestate() => manage variable => return array[2]
- array[0] = value của state, reference
- array[1] = function control value => value tự thay đổi theo reference
- không thể tự động cập nhật value

`setState(value)` cần truyền vào value mới hoàn toàn
- Array thì phải tạo array mới rồi truyền vào `setState(value)`
- Object thì {...obj_cũ, value_mới}

mỗi lần gọi setState => render lại component

### React.useEffect
Gọi sau khi render xong
- Paramester = function xử lý sau khi render xong
- Sau mỗi lần setState thì lại gọi effect 1 lần
- Dùng để update document.title

Side effect: những xử lý ngoài lề
- Không clean up:
  - Gọi API
  - Tương tác với DOM
- Cần clean up:
  - subcriptions
  - setTimeout
  - setInterval


```
React.useEffect(
  callback: để call effect sau khi render,
  dependency[]:
)
```
- callback return "cleanup" function
  - MOUNTING
    - rendering
    - run `useEffect() callback`
  - UPDATING
    - rendering
    - run `useEffect() cleanup` nếu dependencies thay đổi.
    - run `useEffect() callback` nếu dependencies thay đổi.
  - UNMOUNTING
    - run `useEffect() cleanup`.
- `dependency[]: !== undefinded`
  - useEffect sẽ kiểm tra value của `dependency[]`
    - Nếu thay đổi thì sẽ gọi lại `useEffect() callback` 
    - gọi đến khi nào value của `dependency[]` KHÔNG THAY ĐỔI thì thôi
  - `dependency[] = []` thì UPDATING chỉ gọi callback & cleanup đúng 1 lần

### React.useReducer
useReducer là 1 kiểu khác của useState

```
const [state, dispatch] = useReducer(
  reducer(state, action),
  initValue
)
```
- state: giống với useState để get value
- dispatch(action = {type: string, payload: object}): gọi để update state
  - action trong dispatch sẽ truyền nguyên vào reducer
- reducer phải RETURN 1 giá trị mới cho state

### React.useRef
Tạo 1 biến reference, không bị ảnh hưởng bới re-render
- Thường dùng để lấy previous value của 1 state
- có thể access trực tiếp value của variable

```
const variable  = useRef(initValue) // hàm này chỉ chạy 1 lần lúc init
=> variable = { current: initValue }
```

### React.useContext
Lấy ra value của 1 React Context từ parent conponent
- Sử dụng để Parent truyền data qua nhiều tầng Child mà ko cần dùng tới Props

```
const _Context = React.createContext();

function Parent() {
  return <_Context.Provider value={ any }>
    <Child />
  </_Context.Provider>

function Child() {
  const valueContext = useContext(_Context)
}
```

## React.memo
`React.memo` = components builder mà component sẽ chỉ render 1 lần, không render lại

```
function MyComponent(props) {
  /* Render sử dụng props */
}

function areEqual(prevProps, nextProps) {
  /* Trả về true nếu nextProps bằng prevProps, ngược lại trả về false */
  true thì ko render, false thì render
}

export default React.memo(MyComponent, areEqual);
```

tuy nhiên khi truyền 1 function vào props của 1 memo component thì memo lại tự render

## React.useCallback
Function Builder cho props của memo components
- Khi dùng useCallback thì event ở parent của memo component ko re-render
- Nhưng event của memo component vẫn làm re-render

## React.useMemo
Tạo ra 1 const không bị khai báo lại khi re-render

# Tip
## show
Show normal
```
{show && <Item />}
```

Show error
```
{isError && <h1>Error...</h1>}
```


# Event
chỉ chuyền function vào event
```
onClick={() => setPeople([])}
```

# react-router-dom

## `<BrowserRouter>`
`BrowserRouter as Router` là parent component chứa các trang khác khi routing

```
Router>
  <Navbar />
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>
    <Route path='/about'>
      <About />
    </Route>
    <Route path='/people'>
      <People />
    </Route>
    <Route path='/person/:id' children={<Person />}></Route>
    <Route path='*'>
      <Error />
    </Route>
  </Switch>
</Router>
```

## `<Switch>`
Chứa các `<Route>` để chuyển giữa các `<Route>`

## `<Route>`
Mỗi `<Route>` tương ứng với 1 trang

## `<Redirect>`
Dùng để redirect
- Nằm trong `<Route>`

``` 
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
```

## `<Link>`
`<a>` để routing

 