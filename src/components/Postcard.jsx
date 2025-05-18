import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Postcard = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between  text-navy hover:shadow-xl transition duration-300">
      <div>
        <span className="text-sm text-splashBlue font-medium">
          {post.category}
        </span>
        <h3 className="text-xl font-bold my-4">{post.title}</h3>
        <p className="text-sm">{post.excerpt}</p>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-gray-500">{post.date}</span>
        <Link
          to={post.link}
          className="text-splashPink font-semibold hover:text-splashOrange transition"
        >
          Read More →{" "}
        </Link>
      </div>
      </div>
  );
};

export default Postcard;
