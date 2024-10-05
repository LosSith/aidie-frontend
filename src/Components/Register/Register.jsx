import React, { useState } from 'react';
import './register.css'; // Importamos los estilos desde el archivo CSS
import backgroundImage from '../../../public/bg.jpeg'; // Importamos la imagen de fondo

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    birthDate: '',
    password: '',
    address: '',
    region: '',
    commune: '',
    id: '',
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
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
                name="lastName"
                value={formData.lastName}
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
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat Password"
              />
              <button type="button" className="button" onClick={handleNextStep}>
                Continue
              </button>
            </>
          )}

          {/* Página 2 */}
          {step === 2 && (
            <>
              <input
                className="input"
                type="date"
                name="birthDate"
                value={formData.birthDate}
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
