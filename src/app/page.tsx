"use client";

import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className="w-full py-4 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl">JET</div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#services" className="text-gray-700 hover:text-black">Services</Link>
            <Link href="#benefits" className="text-gray-700 hover:text-black">Benefits</Link>
            <Link href="#contact" className="text-gray-700 hover:text-black">Contact</Link>
            <Link href="#contact" className="bg-black text-white rounded-full px-6 py-2 hover:bg-black/90">Let's Work Together</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full bg-blue-50 bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-1 mb-8">
              <div className="bg-blue-600 rounded-full w-4 h-4 mr-2"></div>
              <span>Automate More Simple</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-center leading-tight mb-6">
              Automate<br />
              Your Business<br />
              Save Hours Every<br />
              Week
            </h1>
            
            <p className="text-lg text-gray-700 text-center max-w-3xl mb-10">
              Streamline operations, reduce manual tasks, and scale faster with
              custom automations powered by AI + Zapier.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="#contact" className="bg-black text-white rounded-full px-8 py-3 text-center hover:bg-black/90">
                Let's Work Together
              </Link>
              <Link href="#services" className="bg-white border border-gray-200 text-gray-800 rounded-full px-8 py-3 text-center">
                Explore Services
              </Link>
            </div>
            
            <div className="mt-16 text-center w-full">
              <span className="text-gray-500">Explore</span>
              <div className="flex justify-center mt-2">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            We create custom automations that save you time and money
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Zapier Integration</h3>
              <p className="text-gray-600">Connect your favorite apps and automate workflows</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">AI Automation</h3>
              <p className="text-gray-600">Leverage AI to streamline decision-making processes</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored automation strategies for your unique business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Benefits</h2>
          <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our clients experience significant improvements in efficiency and cost savings
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Save Time</h3>
                <p className="text-gray-600">Reduce manual tasks and focus on what matters most</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Reduce Costs</h3>
                <p className="text-gray-600">Lower operational expenses through efficient processes</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Eliminate Errors</h3>
                <p className="text-gray-600">Automated workflows minimize human error</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">Scale Operations</h3>
                <p className="text-gray-600">Grow your business without proportionally increasing workload</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Ready to transform your business operations? Get in touch today.
          </p>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Jet Automation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
} 