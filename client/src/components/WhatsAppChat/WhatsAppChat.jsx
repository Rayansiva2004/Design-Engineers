import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppChat.css';

const WhatsAppChat = () => {
    const phoneNumber = "9790874661"; // Actual number placeholder
    const message = "Hello, I want to know about your services";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className="whatsapp-chat-container">
            <div className="whatsapp-message-bubble">
                Hi! How may I help you?
            </div>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="whatsapp-icon" />
            </a>
        </div>
    );
};

export default WhatsAppChat;
