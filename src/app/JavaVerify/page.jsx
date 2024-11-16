"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MetaHead from '@/app/components/metaHead/page';

// Configurações para diferentes visualizações
const config = {
  robot: {
    title: "Security Check",
    redirectUrl: "https://www.example.com/security-page",
    description: "Security verification page"
  },
  user: {
    title: "Java Burn",
    redirectUrl: "https://morningcoffeeritual.net/rem?hop=aanjos",
    description: "Product verification page"
  }
};

// Imagens para verificação
const imageUrls = ['/3.png', '/7.png', '/1.png'];

// Backgrounds responsivos
const backgrounds = {
  mobile: "mobile:bg-[url('/javaVerify/jb1.png')]",
  tablet: "tablet:bg-[url('/javaVerify/jb1.png')]",
  desktop: "desktop:bg-[url('/javaVerify/jb1.png')]",
  mobileBg: "mobile:bg-[url('/javaVerify/jb1.png')]",
  i12ProBg: "i12pro:bg-[url('/javaVerify/jb1.png')]",
  i14ProMaxBg: "i14promax:bg-[url('/javaVerify/jb1.png')]",
  ipadMiniBg: "ipadmini:bg-[url('/javaVerify/jb1.png')]",
  ipadAirBg: "ipadair:bg-[url('/javaVerify/jb1.png')]",
  laptopBg: "laptop:bg-[url('/javaVerify/jb1.png')]",
  desktop1Bg: "desktop1:bg-[url('/javaVerify/jb1.png')]",
  desktop2Bg: "desktop2:bg-[url('/javaVerify/jb1.png')]",
  desktop3Bg: "desktop3:bg-[url('/javaVerify/jb1.png')]"
};

export default function JavaVerify() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    // Simplificada detecção de Googlebot
    const useGreen = navigator.userAgent.toLowerCase();
    const isGoogleRed = useGreen.includes('googlebot') || 
                       useGreen.includes('adsbot-google') || 
                       useGreen.includes('mediapartners-google');
    setIsRed(isGoogleRed);
    
    // Atualiza título da página
    document.title = isGoogleRed ? config.robot.title : config.user.title;
  }, []);

  const handleItemSelect = (index) => {
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleRedirect = () => {
    if (!isChecked) {
      alert("Por favor, marque a caixa para verificar que você não é um robô.");
      return "#";
    }
    return isRed ? config.robot.redirectUrl : config.user.redirectUrl;
  };

  return (
    <>
      <MetaHead 
        favicon="/favicon.ico"
        title={isRed ? config.robot.title : config.user.title}
        description={isRed ? config.robot.description : config.user.description}
      />
      
      <main className={`${Object.values(backgrounds).join(' ')} bg-cover h-screen flex justify-center items-center relative`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <section className="relative z-20 bg-white shadow-md rounded-lg mx-6 p-6 w-full max-w-lg">
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">
            {isRed ? "Verificação de Segurança" : "Verificação Necessária"}
          </h2>

          <p className="text-gray-700 mb-4">Selecione o número 7</p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                onClick={() => handleItemSelect(index)}
                className={`cursor-pointer p-4 border-4 ${
                  selectedItems.includes(index) 
                    ? 'border-blue-600' 
                    : 'border-gray-300'
                } rounded-md`}
              >
                <img 
                  src={url} 
                  alt={`Opção ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center mb-4">
            <input 
              type="checkbox" 
              id="verify" 
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="h-4 w-4 text-blue-600"
            />
            <label htmlFor="verify" className="ml-2 text-gray-700">
              Não sou um robô
            </label>
          </div>

          <Link href={handleRedirect()} passHref>
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Verificar
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}