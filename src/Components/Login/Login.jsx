import backgroundImage from '../../../public/bg.jpeg';


const styles = {
  pageContainer: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '500px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  h1: {
    fontSize: '1.5em',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#ff00ff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#cc00cc',
  },
  p: {
    marginTop: '20px',
    color: '#333',
  },
  a: {
    color: '#ff00ff',
    textDecoration: 'none',
  },
  aHover: {
    textDecoration: 'underline',
  },
};

const Login = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.loginContainer}>
        <h1 style={styles.h1}>Register your events and let Aidie manage your reminders!</h1>
        <form style={styles.form}>
          <label style={styles.label}>
            Email:
            <input style={styles.input} type="email" name="email" />
          </label>
          <label style={styles.label}>
            Password:
            <input style={styles.input} type="password" name="password" />
        </label>
        <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
            LETS GO!
        </button>
        </form>
        <p style={styles.p}>
        Cant remember your password? <a href="#" style={styles.a} onMouseOver={(e) => (e.target.style.textDecoration = styles.aHover.textDecoration)} onMouseOut={(e) => (e.target.style.textDecoration = styles.a.textDecoration)}>Click here</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
