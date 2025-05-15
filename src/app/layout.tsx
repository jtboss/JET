import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jet Automation | Streamline Your Business",
  description: "Jet Automation helps businesses streamline operations through custom automations using Zapier and AI.",
  keywords: "automation, zapier, business automation, workflow automation, AI automation",
  openGraph: {
    title: "Jet Automation | Streamline Your Business",
    description: "Jet Automation helps businesses streamline operations through custom automations using Zapier and AI.",
    url: "https://jetautomation.com",
    siteName: "Jet Automation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
} 