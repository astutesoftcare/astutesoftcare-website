import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCookieBite, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay for better UX before showing the banner
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6 md:p-8 pointer-events-none flex justify-center"
        >
          <div className="bg-white border-t-4 border-gold shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-5xl pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
            
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors p-1"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="flex items-start gap-4 flex-1">
              <div className="bg-gold/10 p-3 rounded-full text-gold shrink-0">
                <FaCookieBite className="text-2xl sm:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-2 font-secondary">We value your privacy</h3>
                <p className="text-gray-600 text-sm leading-relaxed pr-6 md:pr-0">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our <Link to="/privacy-policy" className="text-gold font-semibold hover:underline">Privacy Policy</Link> to learn more.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 shrink-0 mt-4 md:mt-0">
              <button 
                onClick={handleDecline}
                className="px-6 py-3 border-2 border-gray-200 text-gray-600 rounded-full font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-sm"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="btn-secondary w-full sm:w-auto text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
