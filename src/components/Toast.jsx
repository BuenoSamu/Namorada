import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

export const Toast = ({ label, isVisible, onClose, duration = 2000 }) => {
  const [show, setShow] = useState(isVisible);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false); 
        setTimeout(() => onClose(), 300); // espera a animação acabar antes de remover
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible && !show) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className={`animate-fade-in-down ${show ? '' : 'animate-out fade-out-up'}`}>
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/20 shadow-lg backdrop-blur-md"
          style={{
            background: "rgba(251, 207, 232, 0.7)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="bg-pink-500/80 p-1.5 rounded-full">
            <Check className="text-white h-4 w-4" strokeWidth={3} />
          </div>
          <span className="text-pink-900 font-medium">{label}</span>
        </div>
      </div>
    </div>
  );
};
