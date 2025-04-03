"use client"

import { useEffect, useState } from "react";
import Hero01 from "./components/hero-01/hero01";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex bg-[#ececec] min-h-screen flex-col items-center justify-between p-24">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen">
          {/* Replace with your actual logo */}
          <Image 
            src="/FTLOGO.png" 
            alt="Fisio T Logo" 
            width={48}
            height={0}
            className="mb-8" 
          />
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-full h-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      ) : (
        <>
          <Hero01 />
          <footer className="text-center p-4 bg-black">
            <p>© 2023 Fisio T. Todos os direitos reservados.</p>
          </footer>
        </>
      )}
    </main>
  );
}
