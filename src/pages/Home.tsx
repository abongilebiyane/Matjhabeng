import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  MessageSquareWarning, 
  FileText, 
  Droplets, 
  Zap, 
  Trash2, 
  Home as HomeIcon, 
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Users,
  Building2,
  Calendar
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();

  const quickServices = [
    { name: t('hero.cta_payment'), icon: CreditCard, color: 'bg-emerald-50 text-emerald-700', description: 'Pay municipal bills and fines online.' },
    { name: t('hero.cta_report'), icon: MessageSquareWarning, color: 'bg-amber-50 text-amber-700', description: 'Log faults for water, roads, or electricity.' },
    { name: t('hero.cta_permit'), icon: FileText, color: 'bg-blue-50 text-blue-700', description: 'Apply for building or trading permits.' },
  ];

  const services = [
    { name: t('services.water'), icon: Droplets, path: '/services#water' },
    { name: t('services.electricity'), icon: Zap, path: '/services#electricity' },
    { name: t('services.waste'), icon: Trash2, path: '/services#waste' },
    { name: t('services.housing'), icon: HomeIcon, path: '/services#housing' },
    { name: t('services.health'), icon: ShieldCheck, path: '/services#health' },
  ];

  const stats = [
    { label: 'Citizens Served', value: '450k+', icon: Users },
    { label: 'Wards Managed', value: '36', icon: Landmark },
    { label: 'Infrastructure Growth', value: '12%', icon: TrendingUp },
    { label: 'Investment Potential', value: 'R billions', icon: Building2 },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/matjh-hero/1920/1080" 
            alt="Matjhabeng Hero" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full text-emerald-300 text-xs font-black uppercase tracking-widest mb-6">
              Welcome to the Heart of the Free State
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/80 font-medium mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-xl shadow-emerald-900/40 flex items-center group">
                Access Portal <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold transition-all">
                Latest News
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12 md:-translate-y-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickServices.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 group hover:border-emerald-200 transition-colors cursor-pointer"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">{service.description}</p>
              <div className="flex items-center text-emerald-700 font-bold text-sm tracking-tight">
                Get Started <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">Explore Municipal Services</h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">
            Connecting you to the essentials of civic life.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
          {services.map((service) => (
            <NavLink 
              key={service.name}
              to={service.path}
              className="group bg-slate-50 hover:bg-emerald-700 p-8 rounded-3xl border border-slate-200 hover:border-emerald-700 transition-all text-center flex flex-col items-center shadow-sm"
            >
              <div className="text-emerald-700 group-hover:text-white mb-4 transition-colors">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-bold text-slate-700 group-hover:text-white transition-colors">
                {service.name}
              </span>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Stats Section with Recipe 1 (Technical) influence */}
      <section className="bg-slate-950 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-all border-l border-slate-700 h-full">
                {[...Array(12)].map((_, i) => <div key={i} className="border-r border-slate-700 h-full" />)}
            </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="border-l border-emerald-500/30 pl-8 space-y-2">
                <div className="text-emerald-500 mb-4"><stat.icon size={24} /></div>
                <div className="text-4xl md:text-5xl font-black text-white tracking-tighter tabular-nums">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex items-start gap-16">
          <div className="lg:w-1/3 mb-12 lg:mb-0 space-y-6">
            <h2 className="text-4xl font-black tracking-tight text-slate-900 leading-[0.9]">Community Events & Meetings</h2>
            <p className="text-slate-500 leading-relaxed font-medium">
              Stay informed about local council meetings, public forums, and cultural festivals happening across the municipality.
            </p>
            <button className="flex items-center text-sm font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-600 transition-colors">
              View All Events <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
               {[
                 { date: "May 15", month: "Fri", title: "Public Participation Forum", time: "10:00 AM", location: "Welkom Town Hall" },
                 { date: "May 18", month: "Mon", title: "Community Clean-up Day", time: "08:00 AM", location: "Bronville Precinct" },
                 { date: "May 22", month: "Fri", title: "Monthly Council Meeting", time: "14:00 PM", location: "Municipal Chambers" },
                 { date: "Jun 01", month: "Mon", title: "Youth Development Workshop", time: "09:00 AM", location: "Virginia Library" }
               ].map((event, i) => (
                 <div key={i} className="flex gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                   <div className="flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 min-w-[70px]">
                     <span className="text-xs font-black text-emerald-700 uppercase tracking-tighter">{event.month}</span>
                     <span className="text-xl font-black text-slate-900">{event.date.split(' ')[1]}</span>
                   </div>
                   <div className="space-y-1">
                     <h4 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{event.title}</h4>
                     <div className="flex items-center text-xs text-slate-400 font-medium space-x-2">
                        <span className="flex items-center"><Calendar size={12} className="mr-1" /> {event.time}</span>
                        <span>•</span>
                        <span>{event.location}</span>
                     </div>
                   </div>
                 </div>
               ))}
          </div>
        </div>
      </section>

      {/* Local Announcement Ticker / CTA */}
      <section className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
                <div className="bg-emerald-700 text-white p-3 rounded-full"><TrendingUp size={24} /></div>
                <div>
                   <h3 className="font-extrabold text-slate-900">New Tender Opportunities</h3>
                   <p className="text-sm text-slate-500">6 new infrastructure projects available for bidding.</p>
                </div>
            </div>
            <NavLink to="/business" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                Visit Business Portal
            </NavLink>
        </div>
      </section>
    </div>
  );
}

function Landmark({ size }: { size: number }) {
    return <Building2 size={size} />
}
