import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { featuredPosts } from "../../src/data/featuredposts.js";
import Footer from "./Footer.jsx";
import About from "../pages/About.jsx";
import Postcard from "./Postcard";
import Topic from "./Topic.jsx";

const Hero = () => {
  return (
    <>
      <section className="bg-navy text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto text-center px-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Make Learning Fun With Yashika Blogs
          </h1>
          <p className="text-xl mb-4">
            Sharing my dev journey, projects, and everything in betweeen{" "}
          </p>
          <Link
            to="/blog"
            className="bg-splashPink text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-splashOrangeLight hover:shadow-lg-transition"
          >
            Read Latest Posts
          </Link>
        </motion.div>
      </section>

      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto text-center px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Featured Posts
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Postcard key={index} post={post} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <About />

      <Topic />

      <Footer />
    </>
  );
};

export default Hero;
