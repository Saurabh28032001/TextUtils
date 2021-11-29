// eslint-disable-next-line
import React, {useState} from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  };
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = '#131417';
      showAlert("Dark Mode Enabled !!", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled !!", "success");
    }
  };
  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm heading="Try TextUtils - Word Counter, Character Counter and many more" mode={mode} showAlert={showAlert} />
          </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
