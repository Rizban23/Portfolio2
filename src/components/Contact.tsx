'use client';

import { MapPin, Phone } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-4">I'd love to hear from you! Feel free to reach out.</p>

      <div className="space-y-4 text-left max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <MapPin className="text-blue-600" />
          <span>Osh, Kyrgyzstan</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-blue-600" />
          <a href="tel:+996771423708" className="text-blue-600 hover:underline">
            +996 771 423 708
          </a>
        </div>
        <div className="flex items-center gap-3">
          <SiGithub className="text-blue-600" />
          <a href="https://github.com/Rizban23" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="flex items-center gap-3">
          <SiLinkedin className="text-blue-600" />
          <a href="https://linkedin.com/in/rizban23" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
