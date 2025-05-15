"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-gradient-to-b from-tertiary/40 to-white">
        <Container>
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
              Jet Automation
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-3xl">
              Streamline your business operations with custom automations using Zapier and AI
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="#services">Learn More</Link>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Services Section */}
      <Container>
        <section className="py-16" id="services">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We create custom automations that save you time and money
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zapier Integration",
                description: "Connect your favorite apps and automate workflows",
              },
              {
                title: "AI Automation",
                description: "Leverage AI to streamline decision-making processes",
              },
              {
                title: "Custom Solutions",
                description: "Tailored automation strategies for your unique business needs",
              },
            ].map((service, i) => (
              <Card key={i} className="p-6">
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-2 text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50 rounded-lg p-8" id="benefits">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Benefits</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our clients experience significant improvements in efficiency and cost savings
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Save Time",
                description: "Reduce manual tasks and focus on what matters most",
              },
              {
                title: "Reduce Costs",
                description: "Lower operational expenses through efficient processes",
              },
              {
                title: "Eliminate Errors",
                description: "Automated workflows minimize human error",
              },
              {
                title: "Scale Operations",
                description: "Grow your business without proportionally increasing workload",
              },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-b from-white to-tertiary/20" id="contact">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Ready to transform your business operations? Get in touch today.
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="p-6">
              <ContactForm />
            </Card>
          </div>
        </section>
      </Container>
      
      <footer className="w-full border-t py-6 mt-24 bg-primary-foreground">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jet Automation. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
} 