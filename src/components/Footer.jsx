import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-splashPink to-splashOrange py-10">
      <div className="container mx-auto px-2 lg:flex items-center justify-between">
        <div className="text-2xl md:text-4xl text-splashOrangeLight font-bold text-center mb-4">
          Yashika Reddy
        </div>
        <div>
          <p className="text-center font-semibold">
            {" "}
            © {new Date().getFullYear()} Yashika
            {"     "}All Rights Reserved
          </p>
          <p className="text-center font-semibold">
            Lets talk!
            <a
              href="https://www.linkedin.com/in/yashika-uvaraj-5381161a3/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
