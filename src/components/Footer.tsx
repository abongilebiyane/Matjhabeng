import { NavLink } from 'react-router-dom';
import { Landmark, Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Landmark className="text-emerald-500" size={32} />
              <div className="text-white">
                <span className="text-xl font-bold tracking-tight block">MATJHABENG</span>
                <span className="text-xs uppercase tracking-widest block opacity-60">Municipality</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing efficient, transparent, and sustainable services to all residents and visitors of Matjhabeng.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><NavLink to="/services" className="hover:text-white transition-colors">Apply for Service</NavLink></li>
              <li><NavLink to="/business" className="hover:text-white transition-colors">View Tenders</NavLink></li>
              <li><NavLink to="/community" className="hover:text-white transition-colors">Council Meetings</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition-colors">Report a Fault</NavLink></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Popular Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Electricity Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Water Accounts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Waste Collection Schedule</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rates & Taxes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Land Use Requests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Job Opportunities</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <span>319 Stateway, Welkom, 9459, Free State</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+27 57 391 3911</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>info@matjhabeng.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs">
          <p>© {new Date().getFullYear()} Matjhabeng Municipality. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
