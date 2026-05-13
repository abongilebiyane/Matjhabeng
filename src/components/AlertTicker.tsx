import { useTranslation } from 'react-i18next';
import { AlertCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function AlertTicker() {
  const { t } = useTranslation();
  const [currentAlert, setCurrentAlert] = useState(0);

  const alerts = [
    { id: 1, text: t('alerts.loadshedding'), type: 'warning' },
    { id: 2, text: 'Water maintenance in Bronville scheduled for tomorrow, May 14th.', type: 'info' },
    { id: 3, text: 'General Council Meeting open to public this Friday at 10:00.', type: 'info' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAlert((prev) => (prev + 1) % alerts.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [alerts.length]);

  return (
    <div className="bg-emerald-900 text-white py-2 px-4 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-start relative min-h-[1.5rem]">
        <div className="flex items-center bg-emerald-800/50 px-2 py-0.5 rounded mr-3 shrink-0">
          <AlertCircle size={14} className="text-emerald-400 mr-1.5" />
          <span className="text-[10px] font-black uppercase tracking-tighter shrink-0">{t('alerts.emergency')}</span>
        </div>
        
        <div className="relative flex-grow overflow-hidden h-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentAlert}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-xs font-medium whitespace-nowrap lg:whitespace-normal absolute inset-0 text-center sm:text-left"
            >
              {alerts[currentAlert].text}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="hidden sm:flex items-center space-x-1 ml-4 opacity-50 shrink-0">
          <button onClick={() => setCurrentAlert((prev) => (prev - 1 + alerts.length) % alerts.length)} className="hover:opacity-100"><ChevronLeft size={14} /></button>
          <span className="text-[10px] font-bold tabular-nums">{currentAlert + 1}/{alerts.length}</span>
          <button onClick={() => setCurrentAlert((prev) => (prev + 1) % alerts.length)} className="hover:opacity-100"><ChevronRight size={14} /></button>
        </div>
      </div>
    </div>
  );
}
