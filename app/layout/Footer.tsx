import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="bg-white text-white py-6 fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full"
    >
      <div className="container mx-auto max-w-[1200px] px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Fisio T. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Desenvolvido com ❤️ por [Pedro Trotta]
        </p>
      </div>
    </motion.footer>
  );
}