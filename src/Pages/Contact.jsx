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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const tabs = [
    { id: "comment", label: "Comment", icon: <MessageCircle /> },
    { id: "support", label: "Support", icon: <HelpCircle /> },
    { id: "feedback", label: "Feedback", icon: <Send /> },
    { id: "bug", label: "Bug Report", icon: <Bug /> },
  ];

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !selectedTab) {
      setError("Please fill out all required fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    // Simulate sending data (e.g., API call)
    setTimeout(() => {
      console.log("Form submitted:", {
        ...formData,
        subject: selectedTab,
      });
      setIsSubmitting(false);
      alert("Your message has been sent!");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setSelectedTab("");
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mt-12 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
        <p className="text-muted-foreground text-2xl p-4">
          Have questions, feedback, or need support? We're here to help you on
          your calisthenics journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12">
        {/* Left Side - Contact Form */}
        <div className="bg-background dark:bg-gray-800 shadow-md hover:shadow-xl duration-300 rounded-xl p-6">
          <div className="flex gap-3 pb-4">
            <Send />
            <h4>Send us a Message</h4>
          </div>

          {error && <p className="text-red-500 mb-3">{error}</p>}

          <form onSubmit={handleSubmit}>
            {/* Name and Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="p-2">Your Name*</h4>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
                  required
                />
              </div>
              <div>
                <h4 className="p-1">Email*</h4>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
                  required
                />
              </div>
            </div>

            {/* Subject Tabs */}
            <div className="mt-4">
              <h3 className="p-2">Subject*</h3>
              <div className="grid sm:grid-cols-4 gap-3">
                {tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-sm transition-colors duration-300 ${
                      selectedTab === tab.id
                        ? "bg-amber-500 text-white"
                        : "bg-background text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <span className="mb-1 text-muted-foreground">{tab.icon}</span>
                    <p className="text-sm text-muted-foreground">{tab.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Field */}
            <div className="mt-4">
              <h3 className="p-2">Message*</h3>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help you"
                className="w-full px-4 py-2 text-muted-foreground rounded-lg focus:outline-amber-600"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 rounded-sm text-white flex justify-center items-center gap-2 py-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} className="mt-1" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Contact Information */}
        <div className="bg-background dark:bg-gray-800 shadow-md hover:shadow-xl duration-300 rounded-xl p-6">
          <h4 className="pb-5">Contact Information</h4>

          <div className="flex pt-4">
            <Mail className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground">Email</h5>
              <h5>solankipiyush6264@gmail.com</h5>
              <p className="text-muted-foreground">Send us an email anytime</p>
            </div>
          </div>

          <div className="flex pt-4">
            <Phone className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground">Phone</h5>
              <h5>6264537928</h5>
              <p className="text-muted-foreground">Mon-Fri, 9am-6pm</p>
            </div>
          </div>

          <div className="flex pt-4">
            <LocateIcon className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground">Location</h5>
              <h5>Indore, MP</h5>
              <p className="text-muted-foreground">India</p>
            </div>
          </div>

          <div className="flex pt-4">
            <Watch className="text-amber-500 bg-amber-100 p-2 rounded-xl" size={35} />
            <div className="pl-3">
              <h5 className="text-foreground">Response Time</h5>
              <h5>Within 24 hours</h5>
              <p className="text-muted-foreground">We're here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-22">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="grid sm:grid-cols-2 mt-10 gap-6 m-5">
          {[
            {
              question: "How do I get started with calisthenics?",
              answer:
                "Begin with our Beginner's Foundation workout and gradually progress through our structured programs. Focus on proper form before increasing intensity.",
            },
            {
              question: "Do I need equipment for these workouts?",
              answer:
                "Most workouts can be done using just your body weight. However, having basic equipment like pull-up bars and resistance bands can help.",
            },
            {
              question: "How long does it take to see results?",
              answer:
                "Results vary by individual, but with consistency, most people see noticeable improvements in strength and mobility within 4-6 weeks.",
            },
            {
              question: "Is calisthenics suitable for beginners?",
              answer:
                "Absolutely! Calisthenics is ideal for beginners as it focuses on natural body movements and can be easily scaled to your fitness level.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-background dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 p-8 rounded-xl"
            >
              <h4 className="text-foreground pb-4 font-medium">{faq.question}</h4>
              <p className="text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
