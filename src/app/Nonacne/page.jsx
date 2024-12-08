"use client";

import Link from 'next/link';
import MetaHead from '@/app/components/metaHead/page';

const backgrounds = {
  iPhone11ProBg: "iPhone11Pro:bg-[url('/nonacne/iPhone11Pro.png')]",
  iPhone12ProMaxBg: "iPhone12ProMax:bg-[url('/nonacne/iPhone12ProMax.png')]",
  iPhone13miniBg: "iPhone13mini:bg-[url('/nonacne/iPhone13mini.png')]",
  iPhone13ProBg: "iPhone13Pro:bg-[url('/nonacne/iPhone13Pro.png')]",
  iPhone15ProBg: "iPhone15Pro:bg-[url('/nonacne/iPhone15Pro.png')]",
  iPhone15ProMaxBg: "iPhone15ProMax:bg-[url('/nonacne/iPhone15ProMax.png')]",
  iPadminiBg: "iPadmini:bg-[url('/nonacne/iPadmini.png')]",
  iPadBg: "iPad:bg-[url('/nonacne/iPad.png')]",
  iPadPro11Bg: "iPadPro11:bg-[url('/nonacne/iPadPro11.png')]",
  iPadAir5Bg: "iPadAir5:bg-[url('/nonacne/iPadAir5.png')]",
  MacbookAirM2Bg: "MacbookAirM2:bg-[url('/nonacne/MacbookAirM2.png')]",
  MacbookPro16Bg: "MacbookPro16:bg-[url('/nonacne/MacbookPro16.png')]",
  iMac24Bg: "iMac24:bg-[url('/nonacne/iMac24.png')]",
  MacbookAirBg: "MacbookAir:bg-[url('/nonacne/MacbookAir.png')]",
  LaptopBg: "Laptop:bg-[url('/nonacne/Laptop.png')]",
  Desktop1Bg: "Desktop1:bg-[url('/nonacne/Desktop1.png')]",
  Desktop2Bg: "Desktop2:bg-[url('/nonacne/Desktop2.png')]",
};

export default function Cookie() {

  return (
    <>
      <MetaHead
        favicon="/favicon.ico"
        title="Cookie"
        description="Policy"
      />

      <main className={`bg-cover h-screen flex justify-center items-center relative ${Object.values(backgrounds).join(' ')}`}>
        <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

        <div className="fixed bottom-0 left-0 right-0 w-full bg-white text-gray-800 shadow-xl p-6 sm:p-8 lg:p-10 rounded-t-lg z-50">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:w-4/5 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">Používáme cookies</h2>
              <p className="text-sm text-justify sm:text-base mb-4">
                Abychom vám zajistili co nejlepší zážitek na našich stránkách, používáme cookies. Pokračováním na stránkách souhlasíte s jejich použitím.   
                <span className="text-blue-600 hover:text-blue-800"> Politika používání cookies </span>
              </p>
            </div>
            <div className="flex flex-row justify-center space-x-4 mt-4 sm:mt-0">
              <Link href="https://nplink.net/d4rpbjmt">
                <button 
                  className="w-full border-2 border-blue-600 sm:w-auto bg-blue-600 text-white py-1.5 px-5 sm:py-2 sm:px-6 rounded-md hover:bg-blue-700 transition-all"
                >
                  Přijmout
                </button>
              </Link>
              <Link href="https://nplink.net/d4rpbjmt">
                <button 
                  className="w-full sm:w-auto bg-transparent border-2 border-gray-500 text-gray-700 py-1.5 px-5 sm:py-2 sm:px-6 rounded-md hover:bg-gray-100 hover:border-gray-600 transition-all"
                >
                  Odmítnout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
