import React, { useState, useContext } from 'react';
import './register.css';
import backgroundImage from '../../../public/bg.jpeg';
import { AppContext } from '../Contexto/AppContext'; // Asegúrate de tener la ruta correcta
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Register = () => {
  const { handleRegisterSubmit } = useContext(AppContext); // Extraemos la función del contexto
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    birthdate: '',
    password: '',
    repeatpassword: '', // Asegúrate de validar que las contraseñas coincidan
    address: '',
    region: '',
    commune: '',
    id: '',
  });

  const [step, setStep] = useState(1);
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Modificamos handleSubmit para usar la función de registro del contexto y redirigir
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatpassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await handleRegisterSubmit(formData); // Llamamos a la función de registro
      console.log('User successfully registered');
      navigate('/login'); // Redirigimos a la página de login
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="page-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="form-container">
        <h1 className="form-title">Register in our app and don’t let any event slip through your mind</h1>
        <form className="form" onSubmit={handleSubmit}>
          {/* Página 1 */}
          {step === 1 && (
            <>
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name"
              />
              <input
                className="input"
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                className="input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
             
              
              <input
                className="input"
                type="password"
                name="repeatpassword"
                value={formData.repeatpassword}
                onChange={handleChange}
                placeholder="Repeat Password"
              />
              <button type="button" className="button" onClick={handleNextStep}>
                Continue
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <input
                className="input"
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                placeholder="Birth Date"
              />
              <input
                className="input"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <input
                className="input"
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Region"
              />
              <input
                className="input"
                type="text"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                placeholder="Commune"
              />
              <div className="button-container">
                <button type="button" className="button-prev" onClick={handlePrevStep}>
                  Back
                </button>
                <button type="submit" className="button">
                  Register
                </button>
              </div>
            </>
          )}
        </form>
        <p className="forgot-password">
          Can't remember your password? <a href="#" className="link">Click here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
