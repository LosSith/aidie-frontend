import './FormPostBuy.css';
import backgroundImage from '../../../public/bg.jpeg';

const FormPostBuy3 = () => {
    const handleButtonClick = () => {
        console.log("User clicked 'TAKE ME HOME'");
    };

    return (
        <div className="post-buy-container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', borderRadius: '10px' }}>
            <div className="post-buy-card" style={{ backgroundColor: '#007bff', padding: '20px', borderRadius: '10px' }}>
            <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Great!</h1>
            <p style={{ color: '#DED7D3', fontWeight: 'bold', textAlign: 'center' }}>
            If you don't know <span style={{ color: '#CA27C9' }}>where to park</span>, we recommend you to use <span style={{ color: '#1E1E1E' }}>this app</span> and 
            <span style={{ color: '#CA27C9' }}>rent one parking lot</span> near the event's location!
            </p>
                <p style={{ color: 'white', textAlign: 'center' }}>
                    Remember to drive responsibly.
                </p>
                <button
                    className="btn btn-primary"
                    onClick={handleButtonClick}
                    style={{ backgroundColor: '#FFD400', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                >
                    TAKE ME HOME
                </button>
            </div>
        </div>
    );
};

export default FormPostBuy3;
