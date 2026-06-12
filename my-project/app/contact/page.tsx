'use client';

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header active="contact" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600">Have a question or feedback? We&apos;d love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="your@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })}>
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="seller">Seller Support</option>
                  <option value="technical">Technical Issue</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                <textarea required rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="Your message..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
              </div>
              <button type="submit" className="w-full bg-amber-700 text-white py-3 rounded-lg font-medium hover:bg-amber-800">Send Message</button>
              {submitted && <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">✓ Thank you! Your message has been sent.</div>}
            </form>
          </div>

          <div>
            <div className="bg-gray-50 p-8 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div><h4 className="font-bold text-gray-900 mb-2">📧 Email</h4><a href="mailto:support@handcrafted-haven.com" className="text-amber-700">support@handcrafted-haven.com</a></div>
                <div><h4 className="font-bold text-gray-900 mb-2">📞 Phone</h4><p className="text-gray-600">+1 (555) 123-4567</p></div>
                <div><h4 className="font-bold text-gray-900 mb-2">📍 Address</h4><p className="text-gray-600">123 Artisan Street<br />Portland, OR 97201<br />USA</p></div>
                <div><h4 className="font-bold text-gray-900 mb-2">🕒 Hours</h4><p className="text-gray-600">Mon–Fri: 9am–6pm<br />Sat: 10am–4pm<br />Sun: Closed</p></div>
              </div>
            </div>
            <div className="bg-amber-50 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="text-amber-700 hover:text-amber-800">FAQ →</Link></li>
                <li><Link href="/help" className="text-amber-700 hover:text-amber-800">Help Center →</Link></li>
                <li><Link href="/seller-guide" className="text-amber-700 hover:text-amber-800">Seller Guide →</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
