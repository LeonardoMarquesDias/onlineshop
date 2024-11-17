"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MetaHead from '@/app/components/metaHead/page';

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

const imageUrls = ['/3.png', '/7.png', '/1.png'];

const backgrounds = {
  iPhone11ProBg: "iPhone11Pro:bg-[url('/javaVerify/iPhone11Pro.png')] bg-cover h-screen w-screen",
  iPhone12ProMaxBg: "iPhone12ProMax:bg-[url('/javaVerify/iPhone12ProMax.png')] bg-cover h-screen w-screen",
  iPhone13miniBg: "iPhone13mini:bg-[url('/javaVerify/iPhone13mini.png')] bg-cover h-screen w-screen",
  iPhone13ProBg: "iPhone13Pro:bg-[url('/javaVerify/iPhone13Pro.png')] bg-cover h-screen w-screen",
  iPhone15ProBg: "iPhone15Pro:bg-[url('/javaVerify/iPhone15Pro.png')] bg-cover h-screen w-screen",
  iPhone15ProMaxBg: "iPhone15ProMax:bg-[url('/javaVerify/iPhone15ProMax.png')] bg-cover h-screen w-screen",
  iPadminiBg: "iPadmini:bg-[url('/javaVerify/iPadmini.png')] bg-cover h-screen w-screen",
  iPadBg: "iPad:bg-[url('/javaVerify/iPad.png')] bg-cover h-screen w-screen",
  iPadPro11Bg: "iPadPro11:bg-[url('/javaVerify/iPadPro11.png')] bg-cover h-screen w-screen",
  iPadAir5Bg: "iPadAir5:bg-[url('/javaVerify/iPadAir5.png')] bg-cover h-screen w-screen",
  MacbookAirM2Bg: "MacbookAirM2:bg-[url('/javaVerify/MacbookAirM2.png')] bg-cover h-screen w-screen",
  MacbookPro16Bg: "MacbookPro16:bg-[url('/javaVerify/MacbookPro16.png')] bg-cover h-screen w-screen",
  iMac24Bg: "iMac24:bg-[url('/javaVerify/iMac24.png')] bg-cover h-screen w-screen",
  MacbookAirBg: "MacbookAir:bg-[url('/javaVerify/MacbookAir.png')] bg-cover h-screen w-screen",
  LaptopBg: "Laptop:bg-[url('/javaVerify/Laptop.png')] bg-cover h-screen w-screen",
  Desktop1Bg: "Desktop1:bg-[url('/javaVerify/Desktop1.png')] bg-cover h-screen w-screen",
  Desktop2Bg: "Desktop2:bg-[url('/javaVerify/Desktop2.png')] bg-cover h-screen w-screen",
  desktop3Bg: "desktop3:bg-[url('/javaVerify/desktop3.png')] bg-cover h-screen w-screen",
};


export default function JavaVerify() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isRed, setIsRed] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isGoogleRed = userAgent.includes('googlebot') || 
                        userAgent.includes('adsbot-google') || 
                        userAgent.includes('mediapartners-google');
    setIsRed(isGoogleRed);
    
    document.title = isGoogleRed ? config.robot.title : config.user.title;
  }, []);

  const handleItemSelect = (index) => {
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleButtonClick = (e) => {
    if (!isChecked) {
      e.preventDefault(); 
      if (typeof window !== 'undefined') {
        window.alert("Please check the box to verify you are not a robot.");
      }
    }
  };

  const getRedirectUrl = () => {
    return isRed ? config.robot.redirectUrl : config.user.redirectUrl;
  };

  return (
    <>
      <MetaHead 
        favicon="/favicon.ico"
        title={isRed ? config.robot.title : config.user.title}
        description={isRed ? config.robot.description : config.user.description}
      />
      
      <main className={`${backgrounds.mobileBg} ${Object.values(backgrounds).join(' ')} bg-cover h-screen flex justify-center items-center relative`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <section className="relative z-20 bg-white shadow-md rounded-lg mx-6 p-6 w-full max-w-lg">
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">Security Verification</h2>
          <p className="text-gray-700 mb-4">Select the number 7</p>

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
                  alt={`Option ${index + 1}`}
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
              I am not a robot
            </label>
          </div>

          <Link href={getRedirectUrl()} passHref>
            <button 
              onClick={handleButtonClick}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Submit
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
