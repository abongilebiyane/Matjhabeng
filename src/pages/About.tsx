import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Landmark, Users, History, Target, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const council = [
    { name: "Cllr. Thabo Mokone", role: "Executive Mayor", image: "https://i.pravatar.cc/150?u=mayor" },
    { name: "Cllr. Sarah Steyn", role: "Speaker", image: "https://i.pravatar.cc/150?u=speaker" },
    { name: "Mr. Johannes van Wyk", role: "Municipal Manager", image: "https://i.pravatar.cc/150?u=manager" },
    { name: "Cllr. Lesego Moloi", role: "MMC: Finance", image: "https://i.pravatar.cc/150?u=finance" },
  ];

  return (
    <div className="space-y-0">
      {/* Editorial Hero */}
      <section className="bg-slate-950 py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[50vw] h-full opacity-20 filter grayscale pointer-events-none">
            <img 
                src="https://picsum.photos/seed/about-arch/1000/1000" 
                alt="Architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
             initial={{ opacity: 0, y: 50, skewX: -5 }}
             animate={{ opacity: 1, y: 0, skewX: 0 }}
             className="text-[12vw] md:text-[8vw] font-black tracking-tighter text-white uppercase leading-[0.85] mb-12"
          >
            Governance <br /> & Identity
          </motion.h1>
          <div className="max-w-xl text-slate-400 font-medium text-lg border-l-2 border-emerald-500 pl-8 ml-2">
            The Matjhabeng Local Municipality is dedicated to serving the community through transparent, accountable, and innovation-driven governance.
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-emerald-600 font-black uppercase tracking-widest text-sm">Our Vision</div>
              <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">To be the core of investment in the Free State.</h2>
              <p className="text-slate-500 leading-relaxed font-medium">
                We strive to create an environment where business can flourish, jobs are created, and every citizen enjoys a world-class standard of living through effective service delivery and social cohesion.
              </p>
            </div>
          </div>
          <div className="space-y-8 bg-slate-50 p-12 rounded-[4rem] border border-slate-100 italic font-medium text-slate-600 relative overflow-hidden">
             <div className="absolute top-4 right-8 opacity-10"><Target size={120} /></div>
             <p className="relative z-10 text-xl leading-relaxed">
               "Our mission is to provide efficient and sustainable services through community participation and the effective use of resources, ensuring a clean, safe and healthy environment for all."
             </p>
          </div>
        </div>
      </section>

      {/* Mayor's Message */}
      <section className="py-24 bg-emerald-700 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
             <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute inset-4 border-2 border-emerald-400/30 rounded-[3rem] z-10" />
                <img 
                    src="https://picsum.photos/seed/mayor-port/800/1000" 
                    alt="The Mayor" 
                    className="w-full h-full object-cover rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                />
             </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="text-emerald-300 font-extrabold uppercase tracking-widest text-sm">Message from the Executive Mayor</div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[0.9]">Together, We Are Resilient.</h2>
            <p className="text-emerald-50/80 leading-relaxed text-lg">
              "Fellow citizens, Matjhabeng is a region of immense potential. From our mining heritage to our future as an industrial hub, we are committed to rebuilding our infrastructure and restoring the pride of our towns. Every drop of water preserved, every light bulb that stays on, and every road repaired is a step towards the Matjhabeng we all deserve."
            </p>
            <div className="pt-4">
                <span className="block font-bold text-xl uppercase tracking-tight">Cllr. Thabo Mokone</span>
                <span className="block text-emerald-300 font-medium uppercase tracking-widest text-xs">Executive Mayor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Council Directory */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                   <div className="text-emerald-600 font-black uppercase tracking-widest text-sm">Our Leadership</div>
                   <h2 className="text-4xl font-black tracking-tight text-slate-900 uppercase">Meet the Council Members</h2>
                </div>
                <button className="text-sm font-black uppercase tracking-widest text-emerald-700 flex items-center border-b-2 border-emerald-700 pb-1 hover:border-emerald-500 hover:text-emerald-500 transition-colors">
                    Full Directory
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {council.map((member, i) => (
                    <motion.div 
                        key={i} 
                        whileHover={{ y: -10 }}
                        className="space-y-4 group"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100">
                             <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                referrerPolicy="no-referrer"
                             />
                        </div>
                        <div>
                           <h4 className="font-extrabold text-slate-900 tracking-tight">{member.name}</h4>
                           <span className="text-xs uppercase font-black text-slate-400 tracking-widest">{member.role}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 border-r border-slate-300 pr-8">
                <div className="bg-white p-3 rounded-2xl text-emerald-700 shadow-sm"><Phone size={20} /></div>
                <div>
                   <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Call Central Office</span>
                   <span className="block font-bold text-slate-900 tracking-tight">+27 57 391 3911</span>
                </div>
            </div>
            <div className="flex items-center space-x-4 border-r border-slate-300 pr-8">
                <div className="bg-white p-3 rounded-2xl text-emerald-700 shadow-sm"><Mail size={20} /></div>
                <div>
                   <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Customer Care</span>
                   <span className="block font-bold text-slate-900 tracking-tight">customercare@matjhabeng.co.za</span>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-2xl text-emerald-700 shadow-sm"><MapPin size={20} /></div>
                <div>
                   <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Main Headquarters</span>
                   <span className="block font-bold text-slate-900 tracking-tight">319 Stateway, Welkom</span>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
