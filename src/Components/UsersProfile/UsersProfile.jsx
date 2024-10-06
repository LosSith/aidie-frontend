import React, { useState } from 'react';
import { FaPencilAlt} from 'react-icons/fa';
import { IoMdPerson } from "react-icons/io";
import './UsersProfile.css';

const UsersProfile = () => {
const [formData, setFormData] = useState({
    address: 'Mapocho 4242',
    city: 'Quinta Normal',
    region: 'Metropolitan Region',
    newPassword: '',
    repeatPassword: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data saved:', formData);
};

return (
    <div className="profile-container">
    <div className="profile-card">
        <div className="profile-avatar">
        <IoMdPerson className="avatar-icon" />
        </div>
        <h1 className="profile-name">Cosme Fulanito</h1>
        <p className="profile-description">
        XX years old, Mapocho 4242 - Quinta Normal, Metropolitan Region.
        </p>

        <div className="form-section">
        <h2 className="form-title">ADDRESS</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-group">
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
            />
            <FaPencilAlt className="input-icon" />
            </div>

            <div className="input-group">
            <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input"
            />
            <FaPencilAlt className="input-icon" />
            </div>

            <div className="input-group">
            <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="form-input"
            />
            <FaPencilAlt className="input-icon" />
            </div>

            <h2 className="form-title">PASSWORD</h2>

            <div className="input-group">
            <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="New password"
            />
            </div>

            <div className="input-group">
            <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Repeat new password"
            />
            </div>

            <button type="submit" className="save-button">
            SAVE
            </button>
        </form>
        </div>
    </div>
    </div>
);
};

export default UsersProfile;
