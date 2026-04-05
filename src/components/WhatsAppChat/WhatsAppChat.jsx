import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppChat.css';

const WhatsAppChat = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "919790874661"; // Country code 91 + number
    const displayNumber = "+91 97908 74661";
    const message = "Hello, I want to know about your services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleMobileClick = (e) => {
        // On mobile, first tap shows the number, second tap opens WhatsApp
        if (window.innerWidth <= 768 && !showTooltip) {
            e.preventDefault();
            setShowTooltip(true);
            // Auto-hide after 3 seconds
            setTimeout(() => setShowTooltip(false), 3000);
        }
    };

    return (
        <div className="whatsapp-chat-container">
            <div className={`whatsapp-message-bubble ${showTooltip ? 'show-mobile' : ''}`}>
                <span className="whatsapp-phone">{displayNumber}</span>
                <span className="whatsapp-hint">Hi! Tap again to chat</span>
            </div>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
                onClick={handleMobileClick}
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    );
};

export default WhatsAppChat;

