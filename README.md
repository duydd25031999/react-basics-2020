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

## React.useState
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

# Event
chỉ chuyền function vào event
```
onClick={() => setPeople([])}
```