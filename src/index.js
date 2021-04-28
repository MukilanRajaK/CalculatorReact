import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyName1 from "./Components/MyName1"
import reportWebVitals from './reportWebVitals';

function MyName(){
  return <h1>Hi Mukilan</h1>
}

function AboutMyself(){
  return <p>I am 21</p>
}

function MySpots(){
  return <ol>
    <li>aaa1</li>
    <li>aaa2</li>
    <li>aaa3</li>
  </ol>
}

function Myself()
{
  return <div>
    <MyName/>
    <AboutMyself/>
    <MySpots/>
  </div>
}

const element=<ol>
  <li>Pen</li>
  <li>Pencil</li>
  <li>eraser</li>
</ol>
ReactDOM.render(
  <App/>,
  document.getElementById('root1')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
