import { useState } from 'react';
import backgroundImage from '../../../public/bg.jpeg';

const styles = {
  pageContainer: {
    backgroundImage: `url(${backgroundImage})`, // Usa la imagen importada como fondo
    backgroundSize: 'cover', // Asegúrate de que la imagen cubra todo el contenedor
    backgroundPosition: 'center', // Centra la imagen
    height: '100vh', // Asegúrate de que cubra toda la altura de la pantalla
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    boxSizing: 'border-box',
    position: 'relative', // Permite superponer elementos sobre el fondo
  },
  h1: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#CA27C9', // Color de fondo de los inputs
    color: '#fff', // Color del texto de los inputs
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '10px',
    backgroundColor: '#06B4CF', // Color azul para Siguiente y Registrar
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flexGrow: 1,
    fontSize: '1rem',
    margin: '5px',
    fontWeight: 'bold', // Letra más gruesa
  },
  buttonPrev: {
    padding: '10px',
    backgroundColor: '#FFEB3B', // Color amarillo claro para Anterior
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flexGrow: 1,
    fontSize: '1rem',
    margin: '5px',
    fontWeight: 'bold', // Letra más gruesa
  },
};

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
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h1 style={styles.h1}>Registro de Usuario</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          {/* Página 1 */}
          {step === 1 && (
            <>
              <input
                style={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="First Name" // Placeholder en lugar de label
              />
              <input
                style={styles.input}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
              <input
                style={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                style={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <input
                style={styles.input}
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                placeholder="Repeat Password"
              />
              <button type="button" style={styles.button} onClick={handleNextStep}>
                Siguiente
              </button>
            </>
          )}

          {/* Página 2 */}
          {step === 2 && (
            <>
              <input
                style={styles.input}
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="Birth Date"
              />
              <input
                style={styles.input}
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <input
                style={styles.input}
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                placeholder="Region"
              />
              <input
                style={styles.input}
                type="text"
                name="commune"
                value={formData.commune}
                onChange={handleChange}
                placeholder="Commune"
              />
              <div style={styles.buttonContainer}>
                <button type="button" style={styles.buttonPrev} onClick={handlePrevStep}>
                  Anterior
                </button>
                <button type="submit" style={styles.button}>
                  Registrar
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
