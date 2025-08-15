import React from 'react';

const PhotoCard = ({ 
  imageUrl, 
  title, 
  description,
  altText = "Imagem",
  className = ""
}) => {
  return (
    <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      
      {/* Container da imagem com proporção fixa 4:3 */}
      <div className="relative w-full aspect-w-4 aspect-h-3 overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#6D4C5D] to-[#5a3f4d] flex items-center justify-center">
            <svg className="w-12 h-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
        )}
      </div>

      {/* Container do texto */}
      <div className="p-4 bg-gradient-to-r from-[#6D4C5D] to-[#5a3f4d] text-white">
        <h3 className="font-semibold text-lg truncate">{title}</h3>
        <p className="text-sm mt-1 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
