import React from 'react';


const WhatsAppLogo = () => {
  return (
    <a
      href="https://wa.me/7757999339" // Replace with the actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp green color
        padding: '20px',
        borderRadius: '50%',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <i 
      class="bx bxl-whatsapp"
      style={{
        color: 'white',
        fontSize: '24px',
        borderRadius: '50%',
      }}
      ></i>
    </a>
  );
};

export default WhatsAppLogo;