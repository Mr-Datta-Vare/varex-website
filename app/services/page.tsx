"use client";

import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">

      <Navbar />

      <div className="pt-20">

        {/* VIDEO SECTION */}
        <section className="relative py-24 px-6 overflow-hidden">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/service.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative z-10">

            <h1 className="text-4xl font-bold mb-6 text-center">
              Our Services
            </h1>

            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
              We provide cutting-edge software solutions tailored for modern businesses,
              helping them scale, automate, and innovate globally.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">Web Development</h2>
                <p className="text-gray-300">Modern and scalable web applications.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">Android Development</h2>
                <p className="text-gray-300">High-performance Android applications.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">Cloud Solutions</h2>
                <p className="text-gray-300">Secure cloud infrastructure with AWS & Azure.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">RPA Services</h2>
                <p className="text-gray-300">Automation using intelligent bots.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">QA & Testing</h2>
                <p className="text-gray-300">Reliable and bug-free testing solutions.</p>
              </div>

              <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition hover:scale-105">
                <h2 className="text-xl font-semibold text-blue-400 mb-2">Custom Software</h2>
                <p className="text-gray-300">Tailor-made software for your business.</p>
              </div>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-[#020617] to-[#0f172a] text-white px-10 py-16">

          <div className="grid md:grid-cols-3 gap-10">

            <div>
              <h2 className="text-2xl font-bold text-blue-400 mb-4">
                VareX Tech
              </h2>

              <p className="text-gray-400 mb-6 leading-relaxed">
                VareX Tech Solutions is a trusted technology partner providing Web,
                Android, Cloud, RPA, and QA services.
              </p>

              <p className="text-gray-400">
                📧 contact@varextech.com
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Web Development</li>
                <li>Android Development</li>
                <li>Cloud Solutions</li>
                <li>RPA Services</li>
                <li>QA & Testing</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
            © 2026 VareX Tech Solutions. All rights reserved.
          </div>

        </footer>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919511954660"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full shadow-lg hover:bg-green-600"
        >
          WhatsApp
        </a>

      </div>

    </div>
  );
}