
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Phone, Mail } from 'lucide-react';
import './ChatSupport.css';

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="chat-support-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="chat-window"
          >
            <div className="chat-header">
              <div className="header-info">
                <div className="status-dot"></div>
                <h3>SoftNova Support</h3>
              </div>
              <button onClick={toggleChat} className="close-btn" aria-label="Close Chat">
                <X size={22} strokeWidth={3} />
              </button>
            </div>
            
            <div className="chat-body">
              <div className="chat-message bot">
                <p>Hello! 👋 Welcome to SoftNova. How can we assist you today?</p>
                <span className="time">Just now</span>
              </div>
              
              <div className="support-options">
                <p className="options-title">Contact us via:</p>
                <a 
                  href="https://api.whatsapp.com/send/?phone=6385118083" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="support-option whatsapp"
                >
                  <Phone size={18} />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="chat-footer">
              <p>Typically replies in under 1 hour</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="btn-content">
          {isOpen ? <X size={22} strokeWidth={2.5} /> : <MessageCircle size={22} strokeWidth={2.5} />}
        </div>
        
        {!isOpen && (
          <motion.div 
            className="chat-label"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <span>Need Help?</span>
          </motion.div>
        )}
        
        {!isOpen && (
          <motion.span 
            className="notification-ping"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default ChatSupport;
