
import { useState } from 'react';
import './App.css';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from "./Components/Home/Home";


function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  return (
    <div className="App">
      {isRegistered ? <Login /> : <Register onRegister={handleRegister} />}
      <Home />
    </div>
  );
}

export default App;
