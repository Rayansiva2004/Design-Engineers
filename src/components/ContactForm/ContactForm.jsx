import { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential Design',
        message: '',
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        let message = "Hello Design Engineers, I would like to enquire about your services.";

        if (formData.name || formData.message) {
            message = `Hello Design Engineers,\n\nName: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message || 'I would like to enquire about your services.'}`;
        }

        const phoneNumber = "919790874661";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="contact-form-card animate-fade-up">
            <h3>Send a Message</h3>
            <p>Fill out the form below and we'll respond within 24 hours.</p>
            <form onSubmit={handleSendMessage} id="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
                            required
                            aria-required="true"
                            aria-label="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            aria-required="true"
                            aria-label="Email Address"
                        />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 00000 00000"
                            value={formData.phone}
                            onChange={handleChange}
                            aria-label="Phone Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="projectType">Project Type</label>
                        <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            aria-label="Project Type"
                        >
                            <option value="Project Management Contracts">Project Management Contracts</option>
                            <option value="Structural Designs">Structural Designs</option>
                            <option value="Estimations & Valuation">Estimations & Valuation</option>
                            <option value="3D Elevations">3D Elevations</option>
                            <option value="3D Design Services">3D Design Services</option>
                            <option value="Commercial Design">Commercial Design</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="CMDA / DTCP Building and Layout Approvals">CMDA / DTCP Building and Layout Approvals</option>
                            <option value="Layout Designs">Layout Designs</option>
                            <option value="Digital Survey">Digital Survey</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        aria-required="true"
                        aria-label="Message"
                    ></textarea>
                </div>
                <div className="form-actions-wrapper">
                    <button
                        type="submit"
                        className="btn btn-primary form-submit"
                        aria-label="Send Message via WhatsApp"
                    >
                        Send via WhatsApp
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                    </button>
                    <a href="tel:+919790874661" className="btn btn-call-now">
                        Call Now
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </a>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
