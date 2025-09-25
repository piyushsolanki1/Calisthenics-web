import React from "react";
import { Send, Option, MessageCircle, HelpCircle, Bug } from "lucide-react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-18">
      <div className="mt-12 text-center">
        <h1 className="text-4xl m-4 font-bold">Get in Touch</h1>
        <p className="text-muted-foreground text-2xl p-4">
          Have questions, feedback, or need support? We're here to help you on
          your calisthenics journey.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className=" bg-background dark:bg-gray-800 border rounded-xl p-4">
          <div className="flex gap-3 pb-4">
            <span>
              <Send />
            </span>
            <h4>Send us Message</h4>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="p-2">Your name</h4>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
              />
            </div>
            <div>
              <h4 className="p-1">Email*</h4>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
              />
            </div>
          </div>

          <div className="">
            <h3 className="p-2">Subject*</h3>
            <div className="grid sm:grid-cols-4 gap-3">
              <div className="flex justify-center gap-2 p-4 bg-background rounded-xl">
                <span>
                  <MessageCircle />
                </span>
                <p>Comment</p>
              </div>
              <div className="flex gap-2 justify-center p-4 bg-background rounded-xl">
                <span>
                  <HelpCircle />
                </span>
                <p>Tech Support</p>
              </div>
              <div className="flex gap-2 justify-center p-4 bg-background rounded-xl">
                <span>
                  <Send />
                </span>
                <p>Feedback</p>
              </div>
              <div className="flex gap-2 justify-center p-4 bg-background rounded-xl">
                <span>
                  <Bug />
                </span>
                <p>Bug Report</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="p-2">Message*</h3>
            <textarea
              placeholder="Tell us how can we help you"
              className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
              rows="4"
            />
          </div>

          <div className="">
            <button className="w-full  bg-amber-500 hover:bg-amber-600 rounded-sm text-white">
              <div className="flex w-full justify-center px-2 py-2 gap-2">
                <span>
                  <Send size={15} className="mt-1" />
                </span>
                Submit
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 grid lg:grid-cols-2 gap-8">
        <div className="bg-background dark:bg-gray-800">
          <h3>Contact Information</h3>
        </div>
        <div className="bg-background dark:bg-gray-800">
          <h3>Quick Actions</h3>
        </div>
      </div>

      <div className=" mt-22">
        <h2 className="text-3xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="grid sm:grid-cols-2 mt-10 gap-6 m-5">
          <div className="bg-background dark:bg-gray-800 shadow-xl p-8 rounded-xl">
            <h4 className="text-foreground pb-4">
              How do I get started with calisthenics?
            </h4>
            <p className="text-muted-foreground">
              Begin with our Beginner's Foundation workout and gradually
              progress through our structured programs. Focus on proper form
              before increasing intensity.
            </p>
          </div>
          <div className="bg-background dark:bg-gray-800 shadow-xl p-8 rounded-xl">
            <h4 className="text-foreground pb-4">
              How do I get started with calisthenics?
            </h4>
            <p className="text-muted-foreground">
              Begin with our Beginner's Foundation workout and gradually
              progress through our structured programs. Focus on proper form
              before increasing intensity.
            </p>
          </div>
          <div className="bg-background dark:bg-gray-800 shadow-xl p-8 rounded-xl">
            <h4 className="text-foreground pb-4">
              How do I get started with calisthenics?
            </h4>
            <p className="text-muted-foreground">
              Begin with our Beginner's Foundation workout and gradually
              progress through our structured programs. Focus on proper form
              before increasing intensity.
            </p>
          </div>
          <div className="bg-background dark:bg-gray-800 shadow-xl p-8 rounded-xl">
            <h4 className="text-foreground pb-4">
              How do I get started with calisthenics?
            </h4>
            <p className="text-muted-foreground">
              Begin with our Beginner's Foundation workout and gradually
              progress through our structured programs. Focus on proper form
              before increasing intensity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
