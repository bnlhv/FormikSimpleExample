import React from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginFormik from './components/LoginFormik'

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row">
            <div className="col-4">
              <h1>Formik</h1>
                <LoginFormik/>         
            </div>
         </div>
      </div>
    </div>
  );
}

export default App;
