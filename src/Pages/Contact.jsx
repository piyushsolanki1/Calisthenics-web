import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  HelpCircle,
  Bug,
  Mail,
  Phone,
  Watch,
  LocateIcon,
} from "lucide-react";

const Contact = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    { id: "comment", label: "Comment", icon: <MessageCircle /> },
    { id: "support", label: "Support", icon: <HelpCircle /> },
    { id: "feedback", label: "Feedback", icon: <Send /> },
    { id: "bug", label: "Bug Report", icon: <Bug /> },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Title Section */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-2xl p-4">
          Have questions, feedback, or need support? We're here to help you on
          your calisthenics journey.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        <div className="bg-background dark:bg-gray-800 shadow-md hover:shadow-xl duration-300 rounded-xl p-6">
          {/* Heading */}
          <div className="flex gap-3 pb-4">
            <span>
              <Send />
            </span>
            <h4 className="font-semibold text-lg">Send us a Message</h4>
          </div>

          {/* Name and Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <h4 className="p-2">Your Name</h4>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 text-muted-foreground rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
            <div>
              <h4 className="p-2">Email*</h4>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-muted-foreground rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          {/* Subject Selection */}
          <div className="mt-4">
            <h3 className="p-2">Subject*</h3>
            <div className="grid sm:grid-cols-4 gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm transition-colors duration-300 ${
                    selectedTab === tab.id
                      ? "bg-amber-500 text-white"
                      : "bg-background text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <span className="mb-1">{tab.icon}</span>
                  <p className="text-sm">{tab.label}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="mt-4">
            <h3 className="p-2">Message*</h3>
            <textarea
              placeholder="Tell us how we can help you"
              className="w-full px-4 py-2 text-muted-foreground rounded-lg border focus:outline-none focus:ring-2 focus:ring-amber-600"
              rows="4"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button className="w-full bg-amber-500 hover:bg-amber-600 rounded-lg text-white transition duration-300">
              <div className="flex w-full justify-center px-2 py-2 gap-2">
                <Send size={15} className="mt-1" />
                Send Message
              </div>
            </button>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="bg-background dark:bg-gray-800 shadow-md hover:shadow-xl duration-300 rounded-xl p-6">
          <h4 className="pb-5 font-semibold text-lg">Contact Information</h4>

          {/* Email */}
          <div className="flex items-center pt-4">
            <Mail className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground font-medium">Email</h5>
              <h5 className="font-semibold">solankipiyush6264@gmail.com</h5>
              <p className="text-muted-foreground text-sm">Send us an email anytime</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center pt-4">
            <Phone className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground font-medium">Phone</h5>
              <h5 className="font-semibold">6264537928</h5>
              <p className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center pt-4">
            <LocateIcon className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground font-medium">Location</h5>
              <h5 className="font-semibold">San Francisco, CA</h5>
              <p className="text-muted-foreground text-sm">United States</p>
            </div>
          </div>

          {/* Response Time */}
          <div className="flex items-center pt-4">
            <Watch className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground font-medium">Response Time</h5>
              <h5 className="font-semibold">Within 24 hours</h5>
              <p className="text-muted-foreground text-sm">We're here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>

        <div className="grid sm:grid-cols-2 mt-10 gap-6 m-5">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="bg-background dark:bg-gray-800 shadow-xl p-8 rounded-xl"
              >
                <h4 className="text-foreground pb-4">
                  How do I get started with calisthenics?
                </h4>
                <p className="text-muted-foreground">
                  Begin with our Beginner's Foundation workout and gradually
                  progress through our structured programs. Focus on proper form
                  before increasing intensity.
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
