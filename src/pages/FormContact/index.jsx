import React, { useState } from 'react';
import './formcontact.css';

function FormContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        websiteType: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous pouvez ajouter une fonction pour envoyer les données par email.
        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container">
            <h2>Contactez-moi</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label htmlFor="name">Nom :</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    autoComplete='off'
                    required 
                />

                <label htmlFor="email">Email :</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    autoComplete='off'
                    required 
                />

                <label htmlFor="phone">Téléphone :</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    autoComplete='off'
                    required 
                />

                <label htmlFor="websiteType">Type de site web :</label>
                <select 
                    id="websiteType" 
                    name="websiteType" 
                    value={formData.websiteType} 
                    onChange={handleChange} 
                    required
                >
                    <option value="">Sélectionnez un type</option>
                    <option value="vitrine">Site vitrine</option>
                    <option value="portfolio">Portfolio</option>
                    <option value="autre">Autre</option>
                </select>

                <label htmlFor="message">Message :</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                ></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default FormContact;
