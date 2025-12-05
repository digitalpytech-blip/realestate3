import React from 'react';
import { MessageCircle } from 'lucide-react';
import { projectData } from '../utils/mockData';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = projectData.contact.phones[0].replace(/[^0-9]/g, '');
    const message = encodeURIComponent('Hi, I am interested in Aurum Alumni Bliss. Please share more details.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute left-full ml-3 bg-slate-900 text-white text-sm px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
