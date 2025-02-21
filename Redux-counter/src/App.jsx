// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import Counter from './Counter';

function App(){
  
  return(
    <>
    <Provider store={store}>
    <Counter/>
    </Provider>
    </>
  )
}

export default App;

