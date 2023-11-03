// import About from './About';
import React from "react";
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Textform from './Textform';
import Alert from './Alert';
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      setColor('dark')
      setColor1('dark')
      setColor2('dark')
      document.body.style.backgroundColor = '#00122f'
      document.body.style.Color = 'white'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light')
      setColor('light')
      setColor1('light')
      setColor2('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
      showAlert('light mode has been enabled', 'success');
    }
  }
  const [color, setColor] = useState('light')
  const toggleColor = ()=>{
    if(color === 'light'){
      setColor('dark')
      setColor1('dark')
      setColor2('dark')
      setMode('dark')
      document.body.style.backgroundColor = '#800000'
      document.body.style.Color = 'white'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setColor('light')
      setColor1('light')
      setColor2('light')
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
      showAlert('light mode has been enabled', 'success');
    }
  }
  const [color1, setColor1] = useState('light')
  const toggleColor1 = ()=>{
    if(color1 === 'light'){
      setColor1('dark')
      setColor2('dark')
      setColor('dark')
      setMode('dark')
      document.body.style.backgroundColor = '#006400'
      document.body.style.Color = 'white'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setColor1('light')
      setColor2('light')
      setColor('light')
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
      showAlert('light mode has been enabled', 'success');
    }
  }
  const [color2, setColor2] = useState('light')
  const toggleColor2 = ()=>{
    if(color2 === 'light'){
      setColor1('dark')
      setColor2('dark')
      setColor('dark')
      setMode('dark')
      document.body.style.backgroundColor = '#696969'
      document.body.style.Color = 'white'
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setColor1('light')
      setColor2('light')
      setColor('light')
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.Color = 'black'
      showAlert('light mode has been enabled', 'success');
    }
  }
  const [alert, setAlert]=useState(null)
  const showAlert = (massage, type)=>{
    setAlert({
      msg:massage,
      type:type,
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }
  return (
    <>
    <Navbar title="TextStylize" color1={color1} toggleColor1={toggleColor1} color2={color2} toggleColor2={toggleColor2} color={color}  mode={mode} toggleColor={toggleColor} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
            {/* <About /> */}
      <Textform showAlert = {showAlert} heading="TEXTSTYLIZE" mode={mode}/>
    </>
  );
}

export default App;