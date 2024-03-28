// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// Important
//Ab hum ny react router do ko remove isleye kiya hai kyo k yeh git hub pr easily 
// deplpayment nhi hopsakhti kyo k github support nhi karta but agr aapkisi domain pr dalogy to chalygi

// import About from './Components/About';

//  yeh hamain enable karta ke hum bagher apny navbar or dosry compoent ko change kiye kisi selected
//  part ko change karsakhe is se web ki speed bhot achi hoti or kyo k react single page application hai to isko 
// page reload nhi karna parhta
// import {
//   BrowserRouter as Router,
//   Route,
//   // Switch,
//   // Link,
//   Routes
// } from "react-router-dom";



function App() {
  // dark mode is enable or not
  const [mode, setMode] =useState('light');
  const [alert, setAlert] =useState(null);

  const showAlert=(message,type) =>{
    setAlert({
    msg : message,
    type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const removeBodyClasses=()=>{
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-dark");
  }

  const buttonColor = (color) => {
    document.body.classList.add('bg-' + color)
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    buttonColor();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled", "success");
        // if i want to change my title every time i change my mode then i do it like this
        document.title = "TextUtils - Dark Mode"
        
        // Agr me chahta ho ke har 1 sec me meri yeh cheez title ya screen pr render ho to me aisay karounga
        setInterval(() => {
          document.title="Download TextUtils Now"
        }, 1000);
        setInterval(() => {
          document.title="TextUtils is Amazing"
        }, 1500);
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        document.title = "TextUtils - Light Mode"
        showAlert("Light mode has been enabled", "success");
    }
}

  return (
    <>
      {/* yeh Navbar mene components me se liya hai hum jo bhi component banaingy usko navbar me lengy */}
      {/* <Navbar/> */}

      {/*Now this is Props by using this I can change the properties of any variable without going 
      into its class and its also useful in reusing as I can edit from here and dont need to go into files
      Or is me multiple cheezen pass kar sakhty
      */}


      {/* We must need to wrap my all component in a router for react router Dom */}
    {/* <Router> */}
      <Navbar title= "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      {/* Now for some case agr me yahan values dalna bhol 
      jata ho props ki to woh default me se lelega */}
      {/* <Navbar/> */}
      

      {/* We have put it in conatiner so that bootstrap css will aplly */}
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter your text here." mode={mode} />
      </div>
        {/* <switch> */}
          {/* Because in version6 of react router dom its bit different then hary's video */}
          {/* <Routes> */}
            {/* Agr humain exactly yehi chahiye to hum exact lete hai
            --exact path likhengy to react exact matching karega
            --path likhengy otherwise woh aprtial matching karega
            --Always good practice to use exact path in react router dom
             */}
            {/* <Route exact path='/about' element={<About />}/>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here." mode={mode} />}/>
          </Routes> */}
        {/* </switch> */}
    {/* </Router> */}

    </>
  );
}
export default App;
