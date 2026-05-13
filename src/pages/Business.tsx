import { Briefcase, Gavel, BarChart3, Landmark, ArrowUpRight, FileText, CheckCircle2, Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Business() {
  const tenders = [
    { id: "MJB/INFRA/2024/01", title: "Welkom Main Road Resurfacing", date: "May 25", status: "Open" },
    { id: "MJB/WATER/2024/09", title: "Provision of Smart Water Meters", date: "Jun 02", status: "Closing Soon" },
    { id: "MJB/EDU/2024/15", title: "Youth Skills Development Center - IT Equipment", date: "Jun 12", status: "Open" },
    { id: "MJB/WASTE/2024/04", title: "Waste-to-Energy Preliminary Feasibility Study", date: "Jun 15", status: "Open" },
  ];

  return (
    <div className="bg-white">
      {/* Business Hero */}
      <section className="bg-slate-50 py-32 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none rotate-12">
            <Briefcase size={600} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:flex items-center gap-16">
          <div className="lg:w-2/3 space-y-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-700 text-white rounded-full font-black uppercase tracking-widest text-[10px]">Investment & Growth</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-slate-900">
                Partner with <br /> Matjhabeng
            </h1>
            <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed italic">
                 "Creating a sustainable and robust economic environment for local and international business partners."
            </p>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4 lg:w-1/3">
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-2">
                <span className="text-4xl font-black text-emerald-700">R2.4B</span>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Local GDP Impact</span>
             </div>
             <div className="bg-slate-900 p-8 rounded-3xl text-white space-y-2 translate-y-8">
                <span className="text-4xl font-black text-emerald-400">12%</span>
                <span className="block text-xs font-bold text-emerald-100/50 uppercase tracking-widest">Growth Target</span>
             </div>
          </div>
        </div>
      </section>

      {/* Main Business Sections */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Tenders listing */}
        <div className="lg:col-span-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-4">
                    <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Open Tenders & RFPs</h2>
                    <p className="text-slate-500 font-medium">Bidding opportunities for infrastructure, supply chain, and professional services.</p>
                </div>
                <div className="relative">
                    <input type="text" placeholder="Search by ID or Keywords" className="pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:border-emerald-500 transition-colors w-full md:w-[300px]" />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                </div>
            </div>

            <div className="space-y-4">
                {tenders.map((tender) => (
                    <motion.div 
                        key={tender.id}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div className="space-y-3">
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2 py-1 rounded">{tender.id}</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{tender.title}</h3>
                            <div className="flex items-center space-x-4 text-xs font-medium text-slate-400">
                                <span className="flex items-center gap-1"><FileText size={14} /> RFP Document</span>
                                <span className="flex items-center gap-1"><Gavel size={14} /> Public Sector</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="text-right shrink-0">
                                <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400">Closing Date</span>
                                <span className="block font-bold text-slate-900">{tender.date}</span>
                                <span className={`text-[10px] font-bold ${tender.status === 'Closing Soon' ? 'text-red-500' : 'text-emerald-500'}`}>{tender.status}</span>
                            </div>
                            <button className="bg-slate-900 text-white p-4 rounded-2xl group-hover:bg-emerald-700 transition-all">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-slate-950 p-12 rounded-[3.5rem] text-white space-y-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <BarChart3 size={300} className="absolute -bottom-20 -right-20" />
                </div>
                <div className="max-w-md relative z-10 space-y-6">
                    <h3 className="text-4xl font-black tracking-tight leading-none uppercase">Supplier Database Registration</h3>
                    <p className="text-slate-400 font-medium">To participate in municipal procurement, suppliers must be registered on the Central Supplier Database (CSD).</p>
                    <button className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-500 transition-colors">Register Company Now</button>
                </div>
            </div>
        </div>

        {/* Investment & Licensing Sidebar */}
        <div className="lg:col-span-4 space-y-8">
            <div className="bg-emerald-50 p-8 rounded-[3rem] border border-emerald-100 space-y-6">
                 <h3 className="text-2xl font-black tracking-tight text-emerald-900 uppercase">Licensing</h3>
                 <p className="text-emerald-700/70 text-sm font-medium leading-relaxed">Ensure your business remains compliant with local municipal bylaws and health regulations.</p>
                 <div className="space-y-3">
                    {["Trading Licences", "Liquor Store Permits", "Informal Trading Permits", "Hawking Licences"].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl text-sm font-bold text-emerald-900 shadow-sm">
                            {item} <ChevronRight size={14} />
                        </div>
                    ))}
                 </div>
            </div>

            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl space-y-8">
                <div className="space-y-4">
                    <div className="bg-slate-900 text-white w-12 h-12 rounded-2xl flex items-center justify-center"><BarChart3 size={24} /></div>
                    <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Investment Opportunities</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                        Matjhabeng offers strategic advantages for manufacturing, agro-processing, and green energy initiatives.
                    </p>
                </div>
                
                <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                        <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Industrial Parks</h4>
                            <p className="text-xs text-slate-400">Available manufacturing zones with high-capacity grid access.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
                        <div>
                            <h4 className="font-bold text-slate-900 text-sm">Mining Heritage Projects</h4>
                            <p className="text-xs text-slate-400">Transformation of legacy mining land for mixed-use development.</p>
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">
                    Download Prospectus
                </button>
            </div>
        </div>
      </section>

      {/* Corporate Social Responsibility Ticker */}
      <section className="bg-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Trusted By Major Stakeholders</span>
            <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                <span className="text-2xl font-black tracking-tighter uppercase italic">Harmony Gold</span>
                <span className="text-2xl font-black tracking-tighter uppercase italic">Sibanye-Stillwater</span>
                <span className="text-2xl font-black tracking-tighter uppercase italic">Department of Trade</span>
                <span className="text-2xl font-black tracking-tighter uppercase italic">IDC South Africa</span>
            </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRight({ size }: { size: number }) {
    return <ArrowUpRight size={size} />
}
