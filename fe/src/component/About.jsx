import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
            About BlogVerse
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Welcome to <span className="text-blue-600 font-semibold">BlogVerse</span> —
            your destination to read, write, and share ideas with the world.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What is BlogVerse?</h2>
            <p className="text-gray-600 leading-relaxed">
              BlogVerse is a platform built for passionate writers, developers, and
              thinkers. Whether you're documenting your coding journey, sharing
              personal experiences, or writing tutorials, BlogVerse gives you the tools
              to express yourself freely.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why We Built It</h2>
            <p className="text-gray-600 leading-relaxed">
              We believe everyone has a story to tell. In a world full of noise,
              BlogVerse brings back the power of simplicity, creativity, and community.
              Our mission is to empower creators through intuitive tools and a clean,
              distraction-free interface.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Have Feedback?</h3>
          <p className="text-gray-600">
            We’d love to hear from you! Reach out via the contact form or connect with
            us on social media.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
