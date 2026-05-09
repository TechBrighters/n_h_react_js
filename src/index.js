import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import ClassComp from './ClassComp';
// import FuncComp from './FuncComp';
import reportWebVitals from './reportWebVitals';
// import MainRoute from './MainRoute';
// import LifeCycleFun from './LifeCycleFun';
// import StateComp from './StateComp';
// import EffectComp from './EffectComp';
//import ReducerComp from './ReducerComp';
//import RefComp from './RefComp';
//import ImprtvComp from './ImprtvComp';
// import ContextComp from './ContextComp';
import MemoCallbackComp from './MemoCallbackComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
let phone = 8786876;
root.render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    {/* <ClassComp name="Test" id="35"></ClassComp>
    <FuncComp phone={phone} city="Surat"/> */}
    {/* <MainRoute></MainRoute> */}
    {/* <LifeCycleFun></LifeCycleFun> */}
    {/* <EffectComp></EffectComp> */}
    {/* <ReducerComp></ReducerComp> */}
    {/* <RefComp></RefComp> */}
    {/* <ImprtvComp></ImprtvComp> */}
    {/* <ContextComp></ContextComp> */}
    <MemoCallbackComp></MemoCallbackComp>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
