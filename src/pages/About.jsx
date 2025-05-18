import React from "react";
import avatar from "../../src/assets/yashika1.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-splashBlue text-navy py-20">
      {/* <div className="container mx-auto px-6 md:flex items-center gap-10"> */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container mx-auto text-center px-4 md:flex items-center gap-10"
      >
        {/* Avatar */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={avatar}
            alt="Yashika avatar"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Bio Content */}
        <div className="text-center md:text-left max-w-xl">
          <h2 className="text-3xl font-bold">Hi, I'm Yashika 👋 </h2>
          <p className="text-lg mb-4 leading-relaxed">
            I'm on a mission to become a top 1% developer. I love building
            beautiful UIs,solving coding challenges, and sharing what I learn
            along the way.
          </p>
          <ul className="mb-4 text-sm text-navy">
            <div className="flex flex-col">
              <p>🚀 Working on Project</p>
              <p>💡 Obsessed with clean UI & Tailwind </p>
              <p>
                🌱 Currently learning System Design and Love solving real
                problems{" "}
              </p>
            </div>
            <Link
              to="#"
              className="inline-block bg-white text-splashPink font-semibold px-5 py-2 rounded-full shadow hover:bg-splashOrangeLight hover:text-white transition"
            >
              Same goals, same grind — let’s Talk
            </Link>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
