import React from 'react';
import ReactDOM from 'react-dom';

import Hello  from "./App";



import './index.css';

import reportWebVitals from './reportWebVitals';

function Main(){
return(
  <React.Fragment>
  
      <Hello/>
      </React.Fragment>
  
)
  }
  
  ReactDOM.render(
  <Main/>,document.getElementById("root")
  
  )
reportWebVitals();
