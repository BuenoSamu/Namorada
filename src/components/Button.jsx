import React, { useState, useRef } from 'react';
import heartNotFilled from '../assets/heartNotFilled.png';
import { Toast } from '../components/Toast'; 

const Button = () => {
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  const handleLike = () => {
    const id = toastId.current++;
    const newToast = {
      id,
      message: `Eu amo muito você ❤️`,
      duration: 5000
    };

    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <div>
      <button
        onClick={handleLike}
        className="mt-5 p-3 flex justify-center items-center hover:scale-110 transition-all duration-300 rounded-xl text-white bg-gradient-to-r from-rose-300 to-rose-400"
      >
        <img
          src={heartNotFilled}
          alt="Heart not filled"
          className="w-6 h-6"
        />
      </button>

      {/* Container de Toasts */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map(toast => (
          <Toast 
            key={toast.id} 
            label={toast.message} 
            isVisible={true} 
            onClose={() => removeToast(toast.id)}
            duration={toast.duration} 
          />
        ))}
      </div>
    </div>
  );
};

export default Button;
