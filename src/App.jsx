import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const IMAGES = {
  heroMain: "https://video.wixstatic.com/video/548938_407546d1a57f4e269cb15b207d40df91/480p/mp4/file.mp4",
  invadeMillLogo: "https://static.wixstatic.com/media/548938_bd3cc5135db34f059c6f5869db50cd46~mv2.png/v1/fill/w_390,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Invade%20Mill-02%2016_44_19.png",
  sahiyariLogo: "https://static.wixstatic.com/media/548938_3f6affea789947a1bd5a3fcfa875a3dc~mv2.png"
};

function usePageScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  usePageScroll();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Invade Mill Takes Over Zumba Foods | Sahiyari Acquisition";

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      body { 
        font-family: 'Poppins', sans-serif; 
        font-weight: 300; 
        overflow-x: hidden; 
        width: 100vw; 
        -webkit-font-smoothing: antialiased; 
        background-color: #f8fafc;
        margin: 0;
      }
      .tracking-ultra { letter-spacing: 0.25em; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0f172a; }
      ::-webkit-scrollbar-thumb { background: #fbbf24; border-radius: 9px; }
      html { scroll-behavior: smooth; }
      
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const handleHeaderScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll(); 
    return () => window.removeEventListener('scroll', handleHeaderScroll);
  }, []);

  return (
    <div className="min-h-screen w-[100vw] selection:bg-amber-400 selection:text-slate-950 relative flex flex-col overflow-x-hidden">
      
      {/* Header - No Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-slate-950 border-b border-white/10 shadow-2xl py-3 text-white' 
        : 'bg-transparent border-transparent py-6 text-white'
      }`}>
        <div className="flex justify-between items-center px-[1%] w-full">
          <div className="flex-shrink-0 flex items-center gap-4 group">
            <div className="flex items-center gap-6">
              <img src={IMAGES.invadeMillLogo} alt="Invade Mill" className="h-[60px] md:h-[70px] w-auto object-contain drop-shadow-md" />
              <div className="w-px h-10 bg-white/20 hidden md:block"></div>
              <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[55px] md:h-[65px] w-auto object-contain drop-shadow-md" />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Hero Section */}
      <div className="flex-grow w-full">
        <section className="h-screen w-full flex flex-col justify-center overflow-hidden z-0 bg-slate-950 px-[3%] relative">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-[1.05]">
            <source src={IMAGES.heroMain} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>
          
          <div className="relative z-10 flex flex-col items-start text-left w-full">
            <div className="flex items-center gap-4 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 reveal-on-scroll visible w-fit mt-20">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-amber-400">Backed by Invade Agro Global</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[7.5rem] font-light leading-[0.95] tracking-tighter mb-8 text-white uppercase reveal-on-scroll visible">
              INVADE MILL TAKES OVER <br />
              <span className="font-medium text-amber-400">ZUMBA FOODS.</span>
            </h1>
            
            <div className="mb-12 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
              <div className="border-l border-amber-400/50 pl-6">
                <p className="text-[15px] md:text-[16px] font-light text-slate-100/80 max-w-2xl leading-relaxed">
                  Sourced with care, processed with precision, and packed with trust. Invade Mill brings its advanced hygienic milling tech and certified quality to the Sahiyari brand, strengthening our farm-to-family food processing ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 pt-24 pb-12 px-[3%] relative z-10 border-t border-white/5 mt-auto text-white w-full">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-6 mb-8">
                <img src={IMAGES.invadeMillLogo} alt="Invade Mill" className="h-[55px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                <div className="w-px h-10 bg-white/20"></div>
                <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[50px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
              </div>
              <p className="text-slate-100/50 font-light text-[14px] max-w-md leading-relaxed mb-8">
                A processing and food value-addition division strengthening the agri-to-food supply chain through milling, trading, branded staples, and institutional supply.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-start lg:items-end gap-6">
              <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 flex items-start gap-4 max-w-sm">
                <MapPin className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-[10px] font-bold tracking-ultra uppercase text-slate-400 mb-1">Manufacturing Base</h4>
                  <p className="text-[13px] font-light leading-relaxed text-slate-100/70 uppercase">Visnagar, Mehsana,<br />Gujarat, India - 384315</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-[11px] font-light text-slate-100/40 leading-relaxed max-w-5xl mb-8">
              DISCLAIMER: This website is prepared for general information and stakeholder communication regarding the acquisition of Zumba Foods Pvt. Ltd. by Invade Mill. It does not constitute an offer, invitation, solicitation, investment recommendation, or financial advice. Operational capacities are based on company-provided details and may be updated from time to time.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-semibold text-slate-100/50 uppercase tracking-[0.2em]">
              <p className="text-left w-full">
                © {new Date().getFullYear()} INVADE MILL. ALL RIGHTS RESERVED. 
                <a href="https://www.invadecode.ai" target="_blank" rel="noreferrer" className="block md:inline mt-2 md:mt-0 md:ml-4 font-bold text-amber-500 hover:text-amber-400 transition-all underline underline-offset-4">BUILT BY INCODE</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
