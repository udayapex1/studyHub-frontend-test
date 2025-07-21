import React from "react";
import robo from "../assets/robo.png";
import { motion } from "framer-motion";
import { useAuth } from "../Context/AuthContext.jsx";

const Hero = () => {

const{user} = useAuth() 
console.log(user);


  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-[600px]">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 bottom-0 h-[80%] w-auto max-w-[40%] "
      >
        <img
          src={robo}
          className="h-full object-contain object-left-bottom"
          alt=" Frontend Robot"
        />
      </motion.div>

      <div className="max-width-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center lg:text-left lg:ml-[35%] lg:pl-12  ">
          <motion.h1
            initial={{
              y: -50,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
                staggerChildren: 0.1,
              },
            }}
            className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 overflow-hidden"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="block"
            >
              Your Academic Hub for
            </motion.span>

            <motion.span
              initial={{
                x: -30,
                opacity: 0,
                textShadow: "0 0 0 rgba(37, 99, 235, 0)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                textShadow: [
                  "0 0 0 rgba(37, 99, 235, 0)",
                  "0 0 10px rgba(37, 99, 235, 0.3)",
                  "0 0 5px rgba(37, 99, 235, 0.2)",
                  "0 0 2px rgba(37, 99, 235, 0.1)",
                ],
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "anticipate",
                textShadow: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="text-blue-600 inline-block"
            >
              Indore Colleges
            </motion.span>
          </motion.h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto lg:mx-0 ">
            Notes,PYQ,Lab Manuals and more.. all in one place{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start ">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-medium transition-all transform hover:scale-105">
              {" "}
              Browse Resources
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl text-lg font-medium transition-all   ">
              Request Notes
            </button>
          </div>
        </div>
      </div>

      {/* spot element  */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
    </section>
  );
};

export default Hero;
