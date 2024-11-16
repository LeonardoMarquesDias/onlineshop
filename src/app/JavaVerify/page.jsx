"use client"; 

import MetaHead from '@/app/components/metaHead/page';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Icon = "/jbut.png";  
const agTitle = "Security Check"; 
const userTitle = "Java Burn";  
const pageDescription = "Custom Description";
const agRedirectUrl = "https://www.example.com/redirectForAg";  
const userRedirectUrl = "https://www.amazon.com/dp/B08N5WRWNW?tag=seuIDafiliado-20"; 

const mobileBg = "bg-[url('/sugardefender/mobile.png')]";
const i12ProBg = "i12pro:bg-[url('/sugardefender/i12pro.png')]";
const i14ProMaxBg = "i14promax:bg-[url('/sugardefender/i14promax.png')]";
const ipadMiniBg = "ipadmini:bg-[url('/sugardefender/ipadmini.png')]";
const ipadAirBg = "ipadair:bg-[url('/sugardefender/ipadair.png')]";
const laptopBg = "laptop:bg-[url('/sugardefender/laptop.png')]";
const desktopBg = "desktop:bg-[url('/sugardefender/desktop.png')]";
const desktop1Bg = "desktop1:bg-[url('/sugardefender/desktop.png')]";
const desktop2Bg = "desktop2:bg-[url('/sugardefender/desktop.png')]";
const desktop3Bg = "desktop3:bg-[url('/sugardefender/desktop.png')]";
const bgCover = "bg-cover";

const imageUrls = ['/3.png', '/7.png', '/1.png'];

export default function JavaVerify() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isAg, setIsAg] = useState(false); 

  const handleItemSelect = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("googlebot") || userAgent.includes("adsbot-google") || userAgent.includes("google ads")) {
      setIsAg(true); 
      document.title = agTitle;  
    } else {
      setIsAg(false); 
      document.title = userTitle;  
    }
  }, []);

  return (
    <>
      <MetaHead 
        favicon={Icon}
        title={isAg ? agTitle : userTitle}  
        description={pageDescription} 
      />
      <main className={`${mobileBg} ${i12ProBg} ${i14ProMaxBg} ${ipadMiniBg} ${ipadAirBg} ${laptopBg} ${desktopBg} ${desktop1Bg} ${desktop2Bg} ${desktop3Bg} ${bgCover} h-screen flex justify-center items-center relative`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <section className="relative z-20 bg-white shadow-md rounded-lg mx-6 p-6 w-full max-w-lg border border-gray-300">
          <h2 className="text-center text-2xl font-semibold mb-4 text-gray-800">Security Verification</h2>
          <p className="text-gray-700 font-medium mb-4">Select the number 7</p>

          <div className="grid grid-cols-3 gap-2 mb-4">
            {/* Imagens para interação */}
            {imageUrls.map((imageUrl, imageIndex) => (
              <div
                key={imageIndex}
                onClick={() => handleItemSelect(imageIndex)}
                className={`cursor-pointer p-4 border-4 ${selectedItems.includes(imageIndex) ? 'border-blue-600' : 'border-gray-300'} rounded-md overflow-hidden`}
              >
                <img 
                  src={imageUrl} 
                  alt={`Image ${imageIndex}`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center mb-3">
            <input 
              type="checkbox" 
              id="notAg" 
              checked={isChecked} 
              onChange={() => setIsChecked(!isChecked)} 
              className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500"
              required 
            />
            <label htmlFor="notAg" className="ml-2 text-gray-700">I'm not a robot</label>
          </div>

          <div className="mt-4">
            <Link 
              href={isAg ? agRedirectUrl : userRedirectUrl}  
              className=""
            >
              <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                Submit
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}