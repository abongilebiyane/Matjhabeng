import { Newspaper, Users, MessageSquare, Megaphone, ArrowRight, Calendar, Bookmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Community() {
  const news = [
    { title: "Matjhabeng Launches Smart City Initiative", date: "May 10", category: "Internal", summary: "A new project aiming to digitize all municipal services by the end of 2026." },
    { title: "Water Infrastructure Upgrade for Ventersburg", date: "May 08", category: "Infrastructure", summary: "A R15-million investment to replace aging pipelines in the Ventersburg region." },
    { title: "New Sports Complex to Open in Virginia", date: "May 05", category: "Social", summary: "The state-of-the-art facility will host provincial tournaments starting next month." },
  ];

  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 border-b-2 border-slate-900 pb-12 overflow-hidden">
            <motion.div 
                initial={{ x: -100, opacity: 0 }} 
                animate={{ x: 0, opacity: 1 }}
                className="lg:w-2/3"
            >
                <h1 className="text-[14vw] lg:text-[10vw] font-black uppercase tracking-tighter leading-[0.75] mb-8">
                    Together <br /> We Grow
                </h1>
                <div className="flex items-center space-x-8">
                     <div className="text-emerald-700 font-black text-6xl italic leading-none">01.</div>
                     <p className="text-slate-500 font-medium max-w-sm">Matjhabeng is more than a municipality; it is a community of thousands striving for progress.</p>
                </div>
            </motion.div>
            <div className="lg:w-1/3 text-right">
                <div className="inline-block px-4 py-2 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-[10px] mb-4">Latest Statistics</div>
                <div className="text-6xl font-black tracking-tighter tabular-nums text-slate-900">450,000+</div>
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Residents</div>
            </div>
        </div>
      </section>

      {/* Featured News & Events Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* News Feed */}
        <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase">Latest News</h2>
                <button className="text-xs font-black uppercase tracking-widest text-emerald-700 border-b border-emerald-700 pb-1">Archive</button>
            </div>

            <div className="space-y-8">
                {news.map((item, i) => (
                    <motion.article 
                        key={i}
                        whileHover={{ x: 10 }}
                        className="group flex gap-8 items-start cursor-pointer border-b border-slate-100 pb-8"
                    >
                        <div className="shrink-0 space-y-1 text-center">
                            <span className="block text-2xl font-black text-slate-900">{item.date.split(' ')[1]}</span>
                            <span className="block text-[10px] font-black uppercase tracking-widest text-emerald-600">{item.date.split(' ')[0]}</span>
                        </div>
                        <div className="space-y-2">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.category}</span>
                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.summary}</p>
                            <div className="flex items-center text-xs font-black uppercase tracking-widest text-emerald-700 pt-2 opacity-0 group-hover:opacity-100 transition-all">
                                Read Article <ArrowRight size={14} className="ml-2" />
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>

        {/* Public Participation Sidebar */}
        <div className="lg:col-span-1 space-y-12 bg-slate-50 p-8 rounded-[3rem] border border-slate-100 h-fit">
            <div className="space-y-4">
                <div className="bg-white text-emerald-700 w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm"><Users size={24} /></div>
                <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Get Involved</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Participation in local government is your right and responsibility. Join our forums and make your voice heard.
                </p>
            </div>

            <div className="space-y-4">
                <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-center space-x-4 group cursor-pointer hover:border-emerald-300 transition-all">
                    <MessageSquare className="text-slate-400 group-hover:text-emerald-700" />
                    <div>
                        <span className="block font-bold text-slate-900 text-sm">Public Comment Forum</span>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">3 topics active</span>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-center space-x-4 group cursor-pointer hover:border-emerald-300 transition-all">
                    <Megaphone className="text-slate-400 group-hover:text-emerald-700" />
                    <div>
                        <span className="block font-bold text-slate-900 text-sm">Report Service Issues</span>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Online Fault Log</span>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 flex items-center space-x-4 group cursor-pointer hover:border-emerald-300 transition-all">
                    <Bookmark className="text-slate-400 group-hover:text-emerald-700" />
                    <div>
                        <span className="block font-bold text-slate-900 text-sm">Citizen Surveys</span>
                        <span className="block text-[10px] uppercase font-bold text-slate-400">Available Monthly</span>
                    </div>
                </div>
            </div>

            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20 mt-4">
                Register as Citizen
            </button>
        </div>
      </section>

      {/* Social Media Grid */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">Social & Live Updates</h2>
               <p className="text-slate-400 font-medium">Follow our official channels for real-time news and visual updates.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square rounded-3xl bg-slate-900 relative group overflow-hidden cursor-pointer">
                        <img 
                            src={`https://picsum.photos/seed/comm-${i}/400/400?grayscale`} 
                            alt="Social Post" 
                            className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-all" />
                    </div>
                ))}
            </div>
          </div>
      </section>
    </div>
  );
}
