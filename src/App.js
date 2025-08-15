import React from 'react';
import './App.css';
import Card from './components/Card';      
import PhotoCard from './components/PhotoCard'; 

import NamoradosDay from '../src/assets/DiaNamorados.jpg';
import Macdonalds from '../src/assets/macdonalds.jpg'
import Kisses from '../src/assets/kisses.jpg'
import Praia from '../src/assets/praia.jpg'
import You from '../src/assets/voce.jpg'
import Family from '../src/assets/Family.jpg'

function App() {
  const photoCards = [
    {
      imageUrl: NamoradosDay,
      title: "Dia dos namorados - 2025",
      description: "Primeiro dia dos namorados que comemoramos em uma cafeteria agradavel"
    },
    {
      imageUrl: Macdonalds,
      title: "Aniversario de namoro no Macdonalds",
      description: "Eu acho essa foto bonitinha"
    },
    {
      imageUrl: Kisses,
      title: "Ganhando beijinho na bochecha",
      description: "O melhor beijinho que existe"
    },
     {
      imageUrl: Praia,
      title: "Praiou",
      description: "Momentos alegres na praia"
    },
     {
      imageUrl: Family,
      title: "Familia",
      description: "❤️❤️❤️❤️"
    },
    {
      imageUrl: You,
      title: "Perfeição",
      description: "Você sendo perfeita e a mais linda de todas"
    }
  ];

  return (
    <div className="bg-[#6D4C5D] min-h-screen py-12 flex flex-col items-center justify-start gap-12">
      
      {/* Card antigo */}
      <div className="w-full flex justify-center mt-32">
        <Card />
      </div>

      {/* Galeria de fotos */}
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Galeria de Fotos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoCards.map((card, index) => (
            <PhotoCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              description={card.description}
              className="mx-auto"
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
