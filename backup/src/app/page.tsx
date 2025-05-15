"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50/30">
      {/* Navigation */}
      <header className={`w-full py-5 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">JET</div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">Benefits</Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full px-6 py-2.5 font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5">
              Let's Work Together
            </Link>
          </nav>
          <button className="md:hidden text-gray-700 focus:outline-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50/10 pt-32 pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-cyan-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-purple-300/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex flex-col items-center md:items-start max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 mb-10 shadow-sm">
              <div className="bg-blue-600 rounded-full w-4 h-4 mr-2"></div>
              <span className="font-medium">Automate More Simple</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left md:leading-tight mb-8 bg-gradient-to-br from-gray-900 via-blue-800 to-gray-900 text-transparent bg-clip-text">
              Automate<br />
              Your Business<br />
              <span className="text-blue-600">Save Hours Every<br />
              Week</span>
            </h1>
            
            <p className="text-xl text-gray-700 text-center md:text-left max-w-3xl mb-12 leading-relaxed">
              Streamline operations, reduce manual tasks, and scale faster with
              custom automations powered by <span className="font-semibold">AI + Zapier</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full px-8 py-4 text-center font-medium shadow-xl shadow-blue-500/20 hover:shadow-blue-600/40 transition-all duration-300 hover:-translate-y-1">
                Let's Work Together
              </Link>
              <Link href="#services" className="bg-white border border-gray-200 text-gray-800 rounded-full px-8 py-4 text-center font-medium shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-24 text-center w-full">
              <span className="text-gray-500 font-medium">Explore</span>
              <div className="flex justify-center mt-3">
                <svg className="w-7 h-7 animate-bounce text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Our Services</h2>
          <p className="text-gray-600 text-center mb-20 max-w-3xl mx-auto text-lg">
            We create custom automations that save you time and money
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Zapier Integration</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Connect your favorite apps and automate workflows seamlessly</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">AI Automation</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Leverage AI to streamline decision-making processes</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Tailored automation strategies for your unique business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Benefits</h2>
          <p className="text-gray-600 text-center mb-20 max-w-3xl mx-auto text-lg">
            Our clients experience significant improvements in efficiency and cost savings
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Save Time</h3>
                <p className="text-gray-600">Reduce manual tasks and focus on what matters most to grow your business</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Reduce Costs</h3>
                <p className="text-gray-600">Lower operational expenses through efficient processes and automation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Eliminate Errors</h3>
                <p className="text-gray-600">Automated workflows minimize human error and ensure consistency</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scale Operations</h3>
                <p className="text-gray-600">Grow your business without proportionally increasing workload</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-70"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-70"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">Contact Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto text-lg">
            Ready to transform your business operations? Get in touch today.
          </p>
          
          <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text mb-3">JET</div>
              <p className="text-gray-500 text-sm max-w-md">
                Automate your business operations with custom solutions powered by AI and Zapier integration.
              </p>
            </div>
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-12">
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">Benefits</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 pt-10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jet Automation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 