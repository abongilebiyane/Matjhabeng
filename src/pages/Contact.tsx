import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-emerald-800 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-5xl font-black tracking-tighter uppercase leading-none">Get in Touch</h1>
          <p className="text-emerald-100/70 max-w-xl mx-auto font-medium">
            We are here to help. Reach out to our dedicated teams for any inquiries, reports, or feedback.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact info cards */}
        <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-6">
                <div className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl shrink-0"><Phone size={24} /></div>
                <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 tracking-tight">Phone Inquiries</h3>
                    <p className="text-slate-500 text-sm">General: +27 57 391 3911</p>
                    <p className="text-slate-500 text-sm italic">Emergency 24/7: +27 57 910 6000</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-6">
                <div className="bg-blue-50 text-blue-700 p-4 rounded-2xl shrink-0"><Mail size={24} /></div>
                <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 tracking-tight">Email Addresses</h3>
                    <p className="text-slate-500 text-sm">info@matjhabeng.co.za</p>
                    <p className="text-slate-500 text-sm">tenders@matjhabeng.co.za</p>
                </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-start gap-6">
                <div className="bg-purple-50 text-purple-700 p-4 rounded-2xl shrink-0"><MapPin size={24} /></div>
                <div className="space-y-1">
                    <h3 className="font-bold text-slate-900 tracking-tight">Office Locations</h3>
                    <p className="text-slate-500 text-sm font-medium">Headquarters: Welkom</p>
                    <p className="text-slate-400 text-xs">Regional offices in Virginia, Hennenman, & Ventersburg.</p>
                </div>
            </div>

            <div className="bg-emerald-900 p-8 rounded-3xl text-white space-y-6 overflow-hidden relative">
                <div className="absolute top-0 right-0 opacity-10 -rotate-12 translate-x-4 -translate-y-4"><MessageCircle size={150} /></div>
                <div className="space-y-2 relative z-10">
                    <h3 className="text-xl font-black tracking-tight leading-none">WhatsApp Bot</h3>
                    <p className="text-emerald-100/60 text-sm">Report water leaks or power outages instantly.</p>
                </div>
                <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold w-full text-sm hover:bg-emerald-400 transition-colors relative z-10">
                   Chat via WhatsApp
                </button>
            </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-8 uppercase">Send an Online Inquiry</h2>
                
                {submitted ? (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="bg-emerald-50 p-12 rounded-3xl text-center space-y-4"
                   >
                       <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                           <CheckCircle2 size={32} />
                       </div>
                       <h3 className="text-2xl font-black text-emerald-900">Message Received</h3>
                       <p className="text-emerald-700 font-medium">Thank you for reaching out. Your reference number is <span className="font-bold">#MJB-2024-99</span>. We will respond within 48 business hours.</p>
                   </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                            <input required type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                            <input required type="email" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Account Number (Optional)</label>
                            <input type="text" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="12345678" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                            <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all">
                                <option>Billing & Accounts</option>
                                <option>Reporting Fault</option>
                                <option>Permit Application Status</option>
                                <option>Tender Query</option>
                                <option>General Information</option>
                            </select>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-400">Message / Description</label>
                            <textarea required rows={5} className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all" placeholder="Please provide as much detail as possible..."></textarea>
                        </div>
                        <div className="md:col-span-2 pt-4">
                            <button type="submit" className="w-full px-8 py-5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3">
                                <Send size={18} /> Submit Inquiry
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Our Presence</h2>
                <p className="text-slate-500 font-medium">Find us in the major hubs across the municipality.</p>
            </div>
            <div className="h-[400px] bg-slate-200 rounded-3xl flex items-center justify-center relative overflow-hidden group">
                 <img 
                    src="https://picsum.photos/seed/map-area/1600/600?grayscale" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-lg flex items-center space-x-2">
                        <MapPin className="text-emerald-700" size={20} />
                        <span className="font-bold text-slate-800">Interactive Map Integration Ready</span>
                    </div>
                 </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { town: "Welkom", address: "319 Stateway", phone: "057 391 3911" },
                  { town: "Virginia", address: "Government Buildings", phone: "057 212 3111" },
                  { town: "Odendaalsrus", address: "Waterkant St", phone: "057 391 3911" },
                  { town: "Allanridge", address: "Municipal Office", phone: "057 391 3911" }
                ].map((office, idx) => (
                    <div key={idx} className="space-y-1 border-l border-emerald-500/30 pl-6">
                        <h4 className="font-black text-slate-900 uppercase">{office.town}</h4>
                        <p className="text-xs text-slate-500 font-medium">{office.address}</p>
                        <p className="text-xs text-emerald-700 font-bold">{office.phone}</p>
                    </div>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
}
