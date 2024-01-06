import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Welcome from './components/Welcome/Welcome';
import ClientDetails from './components/ScheduleMeet/ClientDetails';
import MemberDetails from './components/ScheduleMeet/MemberDetails';
import Pending from "./components/pending/Pending"
import Calender from './components/calender/Calender'
import Confirmd from './components/confirmd/Confirmd';
import Calendarcomponent from './components/calendarcomponent/Calendarcomponent';
import Calender1 from './components/calender1/Calender1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      <BrowserRouter>
          <Routes>
              <Route exact path='/' element={<Login/>}></Route>
              <Route exact path='/welcome' element={<Welcome/>}></Route>
              <Route exact path='/ClientDetails' element={<ClientDetails/>}></Route>
              <Route exact path='/MemberDetails' element={<MemberDetails/>}></Route>
              <Route exact path='/Pending' element={<Pending/>}></Route>
              <Route exact path='/Calender' element={<Calender/>}></Route>
              <Route exact path='/Confirmd' element={<Confirmd/>}></Route>
              <Route exact path='/Calendarcomponent' element={<Calendarcomponent/>}></Route>
              {/* <Route exact path='/Nomeeting' element={<Nomeeting/>}></Route> */}
              <Route exact path='/Calender1' element={<Calender1/>}></Route>
          </Routes>
      </BrowserRouter>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
