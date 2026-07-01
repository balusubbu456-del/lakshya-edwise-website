"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          country: form.country,
          message: form.message,
          source: "Contact Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSuccess("Enquiry submitted successfully!");
        setForm({
          name: "",
          phone: "",
          country: "",
          message: "",
        });
      } else {
        setSuccess("Something went wrong. Try again.");
      }
    } catch (error) {
      setSuccess("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-white text-slate-950">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white md:p-12">
            <p className="font-bold text-cyan-200">Contact Us</p>
            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Start Your Study Abroad Journey
            </h2>
            <p className="mt-5 leading-8 text-blue-100">
              Submit your enquiry and our counsellor will contact you for free counselling.
            </p>

            <div className="mt-10 space-y-4 text-blue-50">
              <a href="tel:+919999999999" className="block hover:text-cyan-300">
                📞 +91 99999 99999
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="block hover:text-cyan-300"
              >
                💬 WhatsApp Consultation Available
              </a>
              <a
                href="mailto:info@lakshyaedwise.com"
                className="block hover:text-cyan-300"
              >
                📧 info@lakshyaedwise.com
              </a>
              <p>📍 India</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 p-8 md:p-12">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-blue-600"
              placeholder="Name"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-blue-600"
              placeholder="Phone"
            />

            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-blue-600"
              placeholder="Country / Course Interest"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="h-36 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-blue-600"
              placeholder="Message"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-slate-950 p-4 font-black text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Send Message"}
            </button>

            {success && (
              <p className="rounded-2xl bg-green-50 p-4 text-center font-bold text-green-700">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}