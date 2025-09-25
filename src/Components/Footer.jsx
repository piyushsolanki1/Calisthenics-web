import React from 'react'
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook', href: '#' },
    { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', href: '#' },
    { icon: <Instagram className="h-5 w-5" />, label: 'Instagram', href: '#' },
    { icon: <Youtube className="h-5 w-5" />, label: 'YouTube', href: '#' },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-4 gap-14 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">C</span>
              </div>
              <span className="text-xl font-semibold text-foreground font-['Poppins']">
                CalistheFit
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform your body with calisthenics. Progressive bodyweight workouts 
              designed for every fitness level. Build strength, flexibility, and confidence anywhere.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-md shadow-sm hover:transition duration-300 hover:shadow-xl bg-card text-muted-foreground hover:text-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links and Resources - Always Side by Side */}
          <div className="flex flex-row space-x-10">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="hover:text-primary">Home</a></li>
                <li><a href="/Workouts" className="hover:text-primary">Workouts</a></li>
                <li><a href="/Challenges" className="hover:text-primary">Challenges</a></li>
                <li><a href="/Progress" className="hover:text-primary">Progress</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
                <li><a href="/Nutrition" className="hover:text-primary">Nutrition</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
<div className="bg-card rounded-lg p-6 mb-8 shadow-sm hover:shadow-xl transition delay-200">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
    {/* Text Content */}
    <div className="mb-4 md:mb-0">
      <h3 className="font-semibold text-foreground mb-2 flex items-center">
        <Mail className="h-5 w-5 mr-2" />
        Stay Updated
      </h3>
      <p className="text-muted-foreground text-sm">
        Get the latest workouts, nutrition tips, and community updates.
      </p>
    </div>

    {/* Input and Button */}
    <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
      <button className="bg-amber-500 hover:bg-amber-600 rounded-md px-4 py-2 w-full sm:w-auto">
        Subscribe
      </button>
    </div>
  </div>
</div>


        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between border-t border-border pt-6">
          <div className="text-muted-foreground text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} CalistheFit. All rights reserved.
          </div>
          <div className="text-muted-foreground text-sm">
            <a href="#" className="hover:text-primary m-2">Privacy Policy</a>
            <a href="#" className="hover:text-primary m-2">Terms of Service</a>
            <a href="#" className="hover:text-primary m-2">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

