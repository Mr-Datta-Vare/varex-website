"use client";

import Navbar from "@/components/Navbar";

export default function ServicesPage() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">

      <Navbar />

      <div className="pt-20">

        {/* Contact Section */}
        <section className="px-6 py-16">

          <h1 className="text-4xl font-bold text-center mb-6">
            Contact Us
          </h1>

          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

            {/* Left Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">
                Get in Touch
              </h2>

              <p className="text-gray-400 mb-6">
                Reach out to us for any queries, project discussions, or collaborations.
              </p>

              <p className="mb-4 text-gray-300">📧 contact@varextech.com</p>
              <p className="mb-4 text-gray-300">📞 +91 9511954660</p>
              <p className="text-gray-300">🌍 Serving clients globally</p>
            </div>

            {/* Right Form */}
            <div className="bg-[#0f172a] p-8 rounded-xl">

              <form className="flex flex-col gap-4">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-3 rounded bg-[#020617] border border-gray-700"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 rounded bg-[#020617] border border-gray-700"
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="p-3 rounded bg-[#020617] border border-gray-700"
                ></textarea>

                <button
                  type="submit"
                  className="bg-blue-500 py-3 rounded hover:bg-blue-600 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/919511954660"
          target="_blank"
          className="fixed bottom-6 right-6 bg-green-500 px-5 py-3 rounded-full shadow-lg hover:bg-green-600"
        >
          WhatsApp
        </a>

      </div> {/* ✅ FIX: pt-20 close */}

    </div>
  );
}