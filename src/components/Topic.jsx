import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const topics = [
  { name: "React", color: "bg-splashBlue" },
  { name: "JavaScript", color: "bg-splashPink" },
  { name: "Tailwind CSS", color: "bg-splashOrange" },
  { name: "Productivity", color: "bg-indigo-500" },
  { name: "Linux", color: "bg-emerald-500" },
  { name: "Career", color: "bg-purple-500" },
];

const Topic = () => {
  return (
    <section className="bg-navy py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Explore by Topics</h2>
        <p className="text-lg max-w-xl mx-auto mb-10">
          Dive into your favorite topics and learn with me—one post at a time 🚀
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic, index) => {
            return (
              <motion.button
                key={index}
                to={`/topics/${topic.name.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-white ${topic.color} px-5 py-2 rounded-full shadow`}
              >
                {topic.name}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Topic;
