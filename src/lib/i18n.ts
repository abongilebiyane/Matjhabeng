import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        community: 'Community',
        business: 'Business',
        contact: 'Contact',
      },
      hero: {
        title: 'Building a Better Matjhabeng Together',
        subtitle: 'Dedicated to sustainable growth, transparent governance, and excellence in service delivery for all our citizens.',
        cta_payment: 'Pay Bills',
        cta_report: 'Report Issue',
        cta_permit: 'Apply for Permit',
      },
      alerts: {
        emergency: 'EMERGENCY ALERT',
        loadshedding: 'Scheduled maintenance in Welkom Zone 3 today from 14:00 - 18:00.',
      },
      services: {
        water: 'Water & Sanitation',
        electricity: 'Electricity',
        waste: 'Waste Management',
        housing: 'Housing & Permits',
        health: 'Health & Safety',
      }
    }
  },
  st: {
    translation: {
      navbar: {
        home: 'Lehae',
        about: 'Mabapi le Rona',
        services: 'Ditšebeletso',
        community: 'Sechaba',
        business: 'Kgwebo',
        contact: 'Ikopanye le Rona',
      },
      hero: {
        title: 'Ho Aha Matjhabeng e Molemo Hammoho',
        subtitle: 'Re ikemiseditse kgolo e tsitsitseng, puso e hlakileng, le bokhabane ditshebeletsong bakeng sa baahi bohle ba rona.',
        cta_payment: 'Lefa Dikoloto',
        cta_report: 'Tlaleha Mathata',
        cta_permit: 'Etsa Kopo ya Tumello',
      }
    }
  },
  af: {
    translation: {
      navbar: {
        home: 'Tuisblad',
        about: 'Oor Ons',
        services: 'Dienste',
        community: 'Gemeenskap',
        business: 'Besigheid',
        contact: 'Kontak',
      },
      hero: {
        title: 'Bou Saam aan \'n Beter Matjhabeng',
        subtitle: 'Toegewy aan volhoubare groei, deursigtige regering en uitnemendheid in dienslewering vir al ons burgers.',
        cta_payment: 'Betaal Rekeninge',
        cta_report: 'Meld Probleem Aan',
        cta_permit: 'Doen Aansoek vir Permit',
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
