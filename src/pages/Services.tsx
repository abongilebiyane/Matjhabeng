import { Droplets, Zap, Trash2, Home as HomeIcon, ShieldCheck, ChevronRight, FileText, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  const serviceCategories = [
    {
      id: "water",
      title: "Water & Sanitation",
      icon: Droplets,
      color: "text-blue-600 bg-blue-50",
      description: "Provision of clean, safe drinking water and high-quality sanitation services to all residents.",
      items: [
        "Water Account Inquiries",
        "New Connection Applications",
        "Pipe Burst & Leak Reporting",
        "Water Quality Reports",
        "Sewerage Systems Maintenance"
      ]
    },
    {
      id: "electricity",
      title: "Electricity",
      icon: Zap,
      color: "text-amber-600 bg-amber-50",
      description: "Management and distribution of electrical power throughout the municipality.",
      items: [
        "Prepaid Metering Support",
        "Electricity Fault Reporting",
        "Street Light Maintenance",
        "New Connection Requests",
        "Load Shedding Schedules"
      ]
    },
    {
      id: "waste",
      title: "Waste Management",
      icon: Trash2,
      color: "text-emerald-600 bg-emerald-50",
      description: "Regular refuse collection and sustainable waste disposal services for a cleaner Matjhabeng.",
      items: [
        "Refuse Collection Schedule",
        "Landfill Site Locations",
        "Illegal Dumping Reporting",
        "Recycling Initiatives",
        "Industrial Waste Permits"
      ]
    },
    {
      id: "housing",
      title: "Housing & Land Use",
      icon: HomeIcon,
      color: "text-purple-600 bg-purple-50",
      description: "Overseeing urban development, land use applications, and social housing projects.",
      items: [
        "Town Planning & Zoning",
        "Building Plan Submissions",
        "RDP Housing Applications",
        "Land Alienation",
        "Property Valuation"
      ]
    },
    {
      id: "health",
      title: "Public Health & Safety",
      icon: ShieldCheck,
      color: "text-red-600 bg-red-50",
      description: "Ensuring a safe and healthy environment through licensing and law enforcement.",
      items: [
        "Business Licensing",
        "Environmental Health Checks",
        "Municipal Law Enforcement",
        "Fire & Emergency Services",
        "Social Development Programs"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
                {[...Array(36)].map((_, i) => <div key={i} className="border border-slate-700/30" />)}
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
             Direct <br /> Services
          </h1>
          <p className="mt-8 text-slate-400 max-w-xl font-medium border-l border-emerald-500 pl-6 ml-1 text-lg">
            Streamlining civic life through accessible, transparent, and technology-driven municipal services.
          </p>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
            {serviceCategories.map((category, idx) => (
                <motion.div 
                    key={category.id}
                    id={category.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}
                >
                    <div className="lg:w-1/2 space-y-8">
                        <div className={`inline-flex items-center space-x-3 px-4 py-2 rounded-2xl ${category.color}`}>
                            <category.icon size={24} />
                            <span className="font-black uppercase tracking-widest text-sm">{category.title}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-none">
                            {category.title} Solutions for You
                        </h2>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            {category.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {category.items.map((item, i) => (
                                <div key={i} className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors cursor-pointer group">
                                    <div className="bg-white p-1 rounded group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                                        <ChevronRight size={14} />
                                    </div>
                                    <span className="text-sm font-bold text-slate-700 group-hover:text-emerald-700 transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4 flex flex-wrap gap-4">
                             <button className="px-6 py-3 bg-emerald-700 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors flex items-center gap-2">
                                Online Application <FileText size={18} />
                             </button>
                             <button className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors flex items-center gap-2">
                                Download Forms <Download size={18} />
                             </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden group">
                           <img 
                             src={`https://picsum.photos/seed/serv-${category.id}/800/450`} 
                             alt={category.title} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-24 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-emerald-700 rounded-[3rem] p-12 text-center text-white space-y-8 shadow-2xl shadow-emerald-900/20">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none uppercase">Need Urgent Assistance?</h2>
                <p className="text-emerald-100 text-lg font-medium">
                    Our citizen portal is available 24/7 for reporting faults and managing your account.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <button className="px-8 py-4 bg-white text-emerald-900 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-50 transition-colors">
                        Launch Citizen Portal
                    </button>
                    <button className="px-8 py-4 bg-emerald-800 text-white border border-emerald-600 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-900 transition-colors">
                        Register Account
                    </button>
                </div>
          </div>
      </section>
    </div>
  );
}
