import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Menu, 
  X, 
  Globe2,
  PackageCheck,
  Building2,
  Factory,
  Mail,
  Phone,
  Briefcase,
  ShieldCheck,
  Wheat,
  CheckCircle2,
  Store,
  TrendingUp,
  Building,
  PieChart,
  Network,
  Activity,
  Shield,
  Linkedin,
  FileText,
  Target,
  Users,
  ArrowUpRight
} from 'lucide-react';

const IMAGES = {
  heroMain: "https://video.wixstatic.com/video/548938_407546d1a57f4e269cb15b207d40df91/480p/mp4/file.mp4", 
  millingFacility: "https://static.wixstatic.com/media/548938_b26595a1e68c4f6189277ac1054414d5~mv2.jpeg",
  grainsAbstract: "https://static.wixstatic.com/media/548938_1c98fc206a4e410aa9896817bd8a042a~mv2.jpeg",
  processingLine: "https://static.wixstatic.com/media/548938_bdec9a2644494057a2714822455cb3c3~mv2.jpeg",
  corporateAbstract: "https://static.wixstatic.com/media/548938_24f4dc495b274623802d2dd0dd38c905~mv2.jpeg",
  handshake: "https://static.wixstatic.com/media/548938_93281906d222436a99a341dd9b4baf3c~mv2.jpeg",
  logistics: "https://static.wixstatic.com/media/548938_24f4dc495b274623802d2dd0dd38c905~mv2.jpeg",
  fields: "https://static.wixstatic.com/media/548938_e068bcfda2cf4e839155d371269f1626~mv2.png",
  decisionMakersHero: "https://static.wixstatic.com/media/548938_d9d35b6b35634f2a8e708d8397829260~mv2.jpeg",
  investorsHero: "https://static.wixstatic.com/media/548938_93281906d222436a99a341dd9b4baf3c~mv2.jpeg",
  stockMarket: "https://static.wixstatic.com/media/548938_d9d35b6b35634f2a8e708d8397829260~mv2.jpeg",
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

const handleImageError = (e) => {
  e.target.onerror = null; 
  e.target.src = IMAGES.corporateAbstract; 
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    document.title = "Invade Mill Takes Over Zumba Foods | Sahiyari Acquisition";
  }, [currentPage]);

  useEffect(() => {
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'The Acquisition', id: 'acquisition' },
    { label: 'Sahiyari Portfolio', id: 'portfolio' },
    { label: 'Operations & Scale', id: 'operations' },
    { label: 'Decision Makers', id: 'decision-makers' },
    { label: 'Investor Relations', id: 'investors' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen w-[100vw] selection:bg-amber-400 selection:text-slate-950 relative flex flex-col overflow-x-hidden">
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-slate-950 z-[200] transition-transform duration-700 flex flex-col justify-center items-center gap-6 text-white overflow-y-auto py-20 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-full hover:bg-amber-400 hover:text-slate-900 transition-colors">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <button 
              onClick={() => setCurrentPage(item.id)}
              className={`text-xl font-light tracking-ultra uppercase transition-colors ${currentPage === item.id ? 'text-amber-400' : 'hover:text-amber-200'}`}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-slate-950 border-b border-white/10 shadow-2xl py-3 text-white' 
        : 'bg-transparent border-transparent py-6 text-white'
      }`}>
        <div className="flex justify-between items-center px-[1%] w-full">
          
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer flex items-center gap-4 group">
            <div className="flex items-center gap-6">
              <img src={IMAGES.invadeMillLogo} alt="Invade Mill" className="h-[60px] md:h-[70px] w-auto object-contain drop-shadow-md" />
              <div className="w-px h-10 bg-white/20 hidden md:block"></div>
              <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[55px] md:h-[65px] w-auto object-contain drop-shadow-md" />
            </div>
          </button>
          
          <div className="hidden xl:flex items-center justify-center gap-8 text-[11px] font-medium tracking-[0.15em] uppercase px-4 flex-grow">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <div key={item.label} className="relative group">
                  <button 
                    onClick={() => setCurrentPage(item.id)} 
                    className={`flex items-center gap-2 transition-colors py-4 drop-shadow-sm ${
                      isActive ? 'text-amber-400' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:block px-8 py-3.5 text-[10px] font-semibold tracking-widest uppercase rounded-full transition-all duration-500 shadow-xl ${
              isScrolled 
              ? 'bg-amber-400 text-slate-950 hover:bg-white' 
              : 'bg-amber-400 text-slate-950 hover:bg-white'
            }`}>
              Enquire Now
            </button>
            <button className="xl:hidden text-white ml-auto" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow w-full">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} />}
        {currentPage === 'acquisition' && <AcquisitionContent setPage={setCurrentPage} />}
        {currentPage === 'portfolio' && <PortfolioContent setPage={setCurrentPage} />}
        {currentPage === 'operations' && <OperationsContent setPage={setCurrentPage} />}
        {currentPage === 'decision-makers' && <DecisionMakersContent setPage={setCurrentPage} />}
        {currentPage === 'investors' && <InvestorsContent setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} />}
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

            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold tracking-ultra uppercase text-amber-500 mb-6">Microsite Index</h4>
              <ul className="space-y-4 text-[13px] text-slate-100/70 font-light">
                <li><button onClick={() => setCurrentPage('acquisition')} className="hover:text-amber-400 transition-colors">The Acquisition</button></li>
                <li><button onClick={() => setCurrentPage('portfolio')} className="hover:text-amber-400 transition-colors">Sahiyari Portfolio</button></li>
                <li><button onClick={() => setCurrentPage('operations')} className="hover:text-amber-400 transition-colors">Manufacturing</button></li>
                <li><button onClick={() => setCurrentPage('decision-makers')} className="hover:text-amber-400 transition-colors">Decision Makers</button></li>
                <li><button onClick={() => setCurrentPage('investors')} className="hover:text-amber-400 transition-colors">Investor Rationale</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-amber-400 transition-colors">Contact</button></li>
              </ul>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 flex items-start gap-4">
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

function HomeContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-0 bg-slate-950 px-[3%] pt-20">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity scale-[1.05]">
          <source src={IMAGES.heroMain} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-950/95"></div>
        
        <div className="relative z-10 flex flex-col items-start text-left w-full">
          <div className="flex items-center gap-4 mb-8 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 reveal-on-scroll visible w-fit">
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
          
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button onClick={() => setPage('investors')} className="w-full sm:w-auto bg-amber-400 text-slate-950 px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all shadow-xl">
              View Investor Brief
            </button>
            <button onClick={() => setPage('portfolio')} className="group flex items-center justify-center gap-3 w-full sm:w-auto border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-all py-4 px-10 rounded-full">
              Explore Sahiyari Portfolio
            </button>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">The Transaction</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-12 uppercase w-full">
              100% STRATEGIC TAKEOVER.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "100% Equity", desc: "Complete strategic acquisition by Invade Mill." },
                { icon: Factory, title: "70 TPD Capacity*", desc: "Combined Chana Dal & Besan processing capability." },
                { icon: MapPin, title: "Gujarat Base", desc: "Strengthening regional sourcing & manufacturing." },
                { icon: PackageCheck, title: "Sahiyari Brand", desc: "Integration of established staple portfolio." }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-8 rounded-[24px] border border-slate-200 hover:border-amber-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                    <stat.icon className="text-amber-500" size={24} strokeWidth={1.5}/>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 mb-2">{stat.title}</h3>
                  <p className="text-slate-600 text-[14px] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-slate-400 italic mt-6">*Capacity as per provided business information.</p>
          </div>
        </section>

        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-950 text-white">
          <div className="w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-7/12">
                <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-6">Target Company Profile</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] mb-8 text-white w-full">
                  ZUMBA FOODS <br/>PRIVATE LIMITED.
                </h2>
                <p className="text-slate-300 font-light text-[15px] leading-relaxed mb-8 max-w-2xl">
                  Zumba Foods Pvt. Ltd. is a Gujarat-based Chana Daal and Besan mill associated with the food industry since 2021. The company manufactures Chana Dal, Gram Flour, Coarse Gram Flour, and related Besan products under its flagship brand, Sahiyari.
                </p>
                <button onClick={() => setPage('acquisition')} className="flex items-center gap-2 text-[10px] font-bold tracking-ultra uppercase text-amber-400 hover:text-amber-300 transition-colors">
                  Read Full Profile <ArrowRight size={14} />
                </button>
              </div>
              <div className="lg:w-5/12 w-full grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-widest mb-3">Established</span>
                  <span className="text-2xl font-medium">2021</span>
                </div>
                <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-widest mb-3">Focus</span>
                  <span className="text-xl font-medium">Chana Daal & Besan</span>
                </div>
                <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-widest mb-3">Flagship Brand</span>
                  <span className="text-2xl font-medium text-amber-400">Sahiyari</span>
                </div>
                <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                  <span className="block text-slate-400 text-[10px] uppercase tracking-widest mb-3">Location</span>
                  <span className="text-xl font-medium">Visnagar, Gujarat</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-white">
          <div className="w-full reveal-on-scroll">
             <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Core Rationale</p>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-12 uppercase w-full">
               INVESTMENT HIGHLIGHTS.
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
                   <TrendingUp size={20} />
                 </div>
                 <h3 className="text-xl font-medium text-slate-900">Margin Expansion</h3>
                 <p className="text-[14px] text-slate-600 font-light leading-relaxed">Transitioning from commodity trading to branded value-added processing captures significantly higher retail margins.</p>
               </div>
               <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
                   <Building2 size={20} />
                 </div>
                 <h3 className="text-xl font-medium text-slate-900">Asset Integration</h3>
                 <p className="text-[14px] text-slate-600 font-light leading-relaxed">Immediate integration of a fully operational facility bypasses the standard 18-24 month greenfield setup timeline.</p>
               </div>
               <div className="flex flex-col gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
                   <ShieldCheck size={20} />
                 </div>
                 <h3 className="text-xl font-medium text-slate-900">Quality Control</h3>
                 <p className="text-[14px] text-slate-600 font-light leading-relaxed">Owning the milling process ensures 100% adherence to Invade Agro's stringent global hygiene and safety standards.</p>
               </div>
             </div>
          </div>
        </section>

        <section className="px-[3%] w-full py-[15vh] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-10 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <div className="w-full relative z-10 reveal-on-scroll">
            <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-8">Leadership Perspective</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter leading-[1.1] mb-12 w-full uppercase text-slate-100">
              "This acquisition is not just about capacity. It is about <span className="font-medium text-amber-400">controlling the narrative of quality</span> from the farm gate directly to the consumer's plate."
            </h2>
            <div>
              <p className="text-lg font-medium text-white tracking-wide uppercase">Kamlesh M. Chotalia</p>
              <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-2">Chairman & Executive Director, Invade Agro Global</p>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-amber-400 text-slate-950">
          <div className="w-full reveal-on-scroll">
             <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-7/12">
                   <p className="text-[10px] font-bold tracking-ultra text-slate-900 uppercase mb-6">Strategic Location</p>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] mb-8 text-slate-950 w-full">
                     THE GUJARAT <br/>ADVANTAGE.
                   </h2>
                   <p className="text-slate-900 font-light text-[15px] leading-relaxed mb-8 max-w-xl">
                     Operating out of Visnagar, Gujarat, places Invade Mill at the epicenter of India's robust agricultural and trading corridors. It provides immediate access to high-quality raw materials and highly efficient outbound logistics.
                   </p>
                </div>
                <div className="lg:w-5/12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                   <div className="bg-white/30 border border-slate-950/10 p-8 rounded-[24px] hover:bg-white/50 transition-colors">
                     <MapPin size={24} className="text-slate-900 mb-6" />
                     <h3 className="text-xl font-medium text-slate-900 mb-3">Sourcing Proximity</h3>
                     <p className="text-[14px] text-slate-800 font-light leading-relaxed">Direct geographic access to primary agricultural cultivation zones, significantly reducing inbound freight costs.</p>
                   </div>
                   <div className="bg-white/30 border border-slate-950/10 p-8 rounded-[24px] hover:bg-white/50 transition-colors">
                     <Globe2 size={24} className="text-slate-900 mb-6" />
                     <h3 className="text-xl font-medium text-slate-900 mb-3">Export Readiness</h3>
                     <p className="text-[14px] text-slate-800 font-light leading-relaxed">Strategic distance to major deep-water ports (Mundra, Kandla) facilitating future global export ambitions.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-50 border-y border-slate-200">
          <div className="w-full reveal-on-scroll">
             <div className="max-w-4xl mb-16 text-left">
                <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-6">Value Chain Architecture</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] text-slate-900 w-full">
                  A UNIFIED <br/>ECOSYSTEM.
                </h2>
                <p className="text-slate-600 font-light text-[15px] leading-relaxed mt-6 max-w-2xl">
                  The integration of Zumba Foods bridges the gap between commodity trading and retail consumption, establishing a seamless, end-to-end operational flow.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-200 rounded-[32px] overflow-hidden">
                <div className="bg-white p-8 lg:p-12 border-b md:border-b-0 md:border-r border-slate-200 group hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                    <Wheat size={20} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-slate-900">1. Procurement</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed">Direct farm-gate sourcing and mandi operations leveraging IAG's established agricultural network for premium raw chana.</p>
                </div>
                <div className="bg-white p-8 lg:p-12 border-b md:border-b-0 md:border-r border-slate-200 group hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                    <Factory size={20} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-slate-900">2. Processing</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed">The 70 TPD Visnagar facility steps in to clean, mill, and hygienically process the raw material into high-grade Dal and Besan.</p>
                </div>
                <div className="bg-white p-8 lg:p-12 group hover:bg-slate-50 transition-colors">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-6 text-amber-600">
                    <Store size={20} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3 text-slate-900">3. Distribution</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed">Finished goods are branded as Sahiyari and dispatched to wholesale markets, HoReCa partners, and retail distributors.</p>
                </div>
             </div>
          </div>
        </section>
        
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-white">
          <div className="w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2 w-full">
                <div className="relative rounded-[32px] overflow-hidden aspect-square border border-slate-200 shadow-xl">
                   <img src={IMAGES.fields} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover" alt="Sahiyari Products" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                   <div className="absolute bottom-10 left-10 right-10">
                     <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[40px] w-auto object-contain drop-shadow-md mb-4" />
                     <p className="text-white text-[14px] font-light opacity-90">Trusted regional staples, now scaling under the Invade Mill quality umbrella.</p>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full text-left">
                 <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Product Portfolio</p>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-8 uppercase w-full">
                   SAHIYARI PORTFOLIO.
                 </h2>
                 <p className="text-slate-600 font-light text-[15px] leading-relaxed mb-8">
                   The acquisition includes the complete Sahiyari product range, featuring premium quality Chana Dal, Gram Flour, and Coarse Gram Flour. These products form the foundation of our B2C and institutional supply strategies.
                 </p>
                 <ul className="space-y-4 mb-8">
                   <li className="flex items-center gap-3 text-[15px] text-slate-700 font-medium">
                     <CheckCircle2 size={20} className="text-amber-500" /> Premium Chana Dal
                   </li>
                   <li className="flex items-center gap-3 text-[15px] text-slate-700 font-medium">
                     <CheckCircle2 size={20} className="text-amber-500" /> Refined Gram Flour (Besan)
                   </li>
                   <li className="flex items-center gap-3 text-[15px] text-slate-700 font-medium">
                     <CheckCircle2 size={20} className="text-amber-500" /> Coarse Gram Flour
                   </li>
                 </ul>
                 <button onClick={() => setPage('portfolio')} className="px-8 py-3 bg-slate-950 text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-amber-400 hover:text-slate-950 transition-all">
                   View Full Portfolio
                 </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-50 border-t border-slate-200">
          <div className="w-full reveal-on-scroll">
             <div className="max-w-4xl mb-12 text-left">
                <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Manufacturing</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-6 uppercase w-full">
                  OPERATIONAL EXCELLENCE.
                </h2>
                <p className="text-slate-600 font-light text-[15px] leading-relaxed">
                  Integrating state-of-the-art milling technology with zero-touch automation to ensure absolute food safety, consistency, and scale.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className="bg-white p-6 rounded-[20px] border border-slate-100 flex items-start gap-4">
                 <Factory size={24} className="text-amber-500 shrink-0" />
                 <div>
                   <h4 className="text-lg font-medium text-slate-900 mb-1">Optical Sorting</h4>
                   <p className="text-[13px] text-slate-500 leading-relaxed">Advanced automated sorting eliminating 99.9% of impurities.</p>
                 </div>
               </div>
               <div className="bg-white p-6 rounded-[20px] border border-slate-100 flex items-start gap-4">
                 <Shield size={24} className="text-amber-500 shrink-0" />
                 <div>
                   <h4 className="text-lg font-medium text-slate-900 mb-1">Zero-Touch</h4>
                   <p className="text-[13px] text-slate-500 leading-relaxed">Fully automated processing lines ensuring maximum hygiene.</p>
                 </div>
               </div>
               <div className="bg-white p-6 rounded-[20px] border border-slate-100 flex items-start gap-4">
                 <Activity size={24} className="text-amber-500 shrink-0" />
                 <div>
                   <h4 className="text-lg font-medium text-slate-900 mb-1">Quality Labs</h4>
                   <p className="text-[13px] text-slate-500 leading-relaxed">On-site testing for moisture, purity, and grade consistency.</p>
                 </div>
               </div>
               <div className="bg-white p-6 rounded-[20px] border border-slate-100 flex items-start gap-4">
                 <PackageCheck size={24} className="text-amber-500 shrink-0" />
                 <div>
                   <h4 className="text-lg font-medium text-slate-900 mb-1">Bulk Packaging</h4>
                   <p className="text-[13px] text-slate-500 leading-relaxed">Efficient 30kg & 50kg bagging for institutional clients.</p>
                 </div>
               </div>
             </div>
          </div>
        </section>

      </main>
    </>
  );
}

function AcquisitionContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.handshake} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Corporate Transition" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">THE ACQUISITION</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            STRATEGIC <br />INTEGRATION.
          </h1>
          <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            A meticulous transition strategy ensuring operational continuity, quality elevation, and brand preservation under the Invade Mill banner.
          </p>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Immediate Capacity</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] uppercase w-full">
                OPERATIONAL ON DAY ONE.
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <p className="text-slate-600 font-light text-[15px] leading-relaxed">
                     The acquisition of Zumba Foods was designed to bypass the standard 18-24 month timeline required to build a greenfield manufacturing plant. By acquiring an existing, fully compliant facility in Gujarat, Invade Mill immediately adds 70 Tons Per Day (TPD) to its processing capacity.
                  </p>
                  <div className="bg-slate-50 p-8 rounded-[24px] border border-slate-200">
                     <h3 className="text-xl font-medium text-slate-900 mb-4 flex items-center gap-3"><Factory className="text-amber-500"/> Physical Assets Acquired</h3>
                     <ul className="space-y-4">
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} /><span className="text-slate-700 text-[14px]">Fully operational sorting, cleaning, and milling pipelines.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} /><span className="text-slate-700 text-[14px]">On-site quality control and moisture testing laboratories.</span></li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} /><span className="text-slate-700 text-[14px]">Automated packaging units for both retail and bulk institutional formats.</span></li>
                     </ul>
                  </div>
               </div>
               <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
                  <img src={IMAGES.processingLine} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover" alt="Factory" />
               </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
             <div className="text-left mb-16">
               <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-4">Value Creation</p>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[1.1] uppercase w-full">
                 SYNERGY METRICS.
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 gap-8 relative mt-16 pt-16 border-t border-white/10">
                <div className="bg-white/5 p-10 rounded-[24px] border border-white/10 relative">
                   <h3 className="text-2xl font-medium text-white mb-6">Revenue Synergies</h3>
                   <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={16}/></div>
                        <div>
                           <h4 className="text-white font-medium mb-1">Cross-Selling Distribution</h4>
                           <p className="text-[14px] text-slate-400 font-light leading-relaxed">Leveraging Invade Agro's existing institutional relationships to drastically expand Sahiyari's market footprint.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 size={16}/></div>
                        <div>
                           <h4 className="text-white font-medium mb-1">Premium Pricing Power</h4>
                           <p className="text-[14px] text-slate-400 font-light leading-relaxed">Transitioning from bulk commodity trading to branded packaged goods significantly improves retail margins.</p>
                        </div>
                     </li>
                   </ul>
                </div>
                
                <div className="bg-white/5 p-10 rounded-[24px] border border-white/10 relative">
                   <h3 className="text-2xl font-medium text-white mb-6">Cost Synergies</h3>
                   <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5"><TrendingUp size={16}/></div>
                        <div>
                           <h4 className="text-white font-medium mb-1">Procurement Optimization</h4>
                           <p className="text-[14px] text-slate-400 font-light leading-relaxed">Utilizing IAG's massive farm-gate sourcing network lowers the raw material acquisition cost for the mill.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5"><TrendingUp size={16}/></div>
                        <div>
                           <h4 className="text-white font-medium mb-1">Shared Logistics</h4>
                           <p className="text-[14px] text-slate-400 font-light leading-relaxed">Consolidating outbound freight and warehousing with existing Invade Agro operations reduces per-ton transport costs.</p>
                        </div>
                     </li>
                   </ul>
                </div>
             </div>
             
             <div className="mt-8 bg-amber-400 rounded-[20px] p-6 text-center">
                <p className="text-slate-950 text-[11px] font-bold tracking-widest uppercase">TOGETHER, THE ACQUISITION CREATES A STRONGER FOOD PROCESSING AND STAPLES PLATFORM.</p>
             </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Execution Strategy</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] uppercase w-full">
                INTEGRATION ROADMAP.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="bg-white p-8 rounded-[24px] border border-slate-200">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4 block">Phase 1: Day 1 - 30</span>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Operational Transition</h3>
                  <ul className="space-y-3">
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Complete legal entity migration</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> ERP and financial system sync</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Key personnel retention & onboarding</li>
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-[24px] border border-slate-200">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4 block">Phase 2: Day 31 - 90</span>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Quality & Compliance</h3>
                  <ul className="space-y-3">
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Audit against IAG global hygiene standards</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Upgrade testing laboratory equipment</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Initiate fresh raw material supply chain</li>
                  </ul>
               </div>
               <div className="bg-white p-8 rounded-[24px] border border-slate-200">
                  <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest mb-4 block">Phase 3: Day 91+</span>
                  <h3 className="text-2xl font-medium text-slate-900 mb-4">Market Expansion</h3>
                  <ul className="space-y-3">
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Relaunch Sahiyari with updated packaging</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Push products to IAG institutional clients</li>
                     <li className="text-[13px] text-slate-600 flex gap-2"><span className="text-amber-500 font-bold">•</span> Optimize 70 TPD utilization rate</li>
                  </ul>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PortfolioContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.fields} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Sahiyari Products" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">SAHIYARI PORTFOLIO</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            TRUSTED <br />STAPLES.
          </h1>
          <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            A targeted range of premium Chana Dal and Besan products, newly backed by Invade Mill's quality assurance framework.
          </p>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Core Products</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] uppercase w-full">
                THE SAHIYARI RANGE.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="bg-slate-50 rounded-[32px] p-10 border border-slate-200 flex flex-col">
                  <div className="h-48 rounded-[20px] bg-slate-200 mb-8 overflow-hidden relative">
                     <img src={IMAGES.grainsAbstract} className="w-full h-full object-cover" alt="Chana Dal" />
                  </div>
                  <h3 className="text-3xl font-medium text-slate-900 mb-4">Premium Chana Dal</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed mb-6">Sourced from the best farms, optically sorted for uniform size, and unpolished to retain maximum nutritional value.</p>
                  <div className="mt-auto pt-6 border-t border-slate-200">
                     <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2">Ideal For</span>
                     <span className="text-[13px] text-slate-700">Retail distribution & traditional cooking</span>
                  </div>
               </div>
               
               <div className="bg-slate-50 rounded-[32px] p-10 border border-slate-200 flex flex-col">
                  <div className="h-48 rounded-[20px] bg-slate-200 mb-8 overflow-hidden relative">
                     <img src={IMAGES.millingFacility} className="w-full h-full object-cover" alt="Gram Flour" />
                  </div>
                  <h3 className="text-3xl font-medium text-slate-900 mb-4">Refined Gram Flour</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed mb-6">Finely milled besan ensuring smooth batter consistency, processed in a zero-touch hygienic environment.</p>
                  <div className="mt-auto pt-6 border-t border-slate-200">
                     <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2">Ideal For</span>
                     <span className="text-[13px] text-slate-700">Sweets, snacks, and FMCG manufacturing</span>
                  </div>
               </div>
               
               <div className="bg-slate-50 rounded-[32px] p-10 border border-slate-200 flex flex-col">
                  <div className="h-48 rounded-[20px] bg-slate-200 mb-8 overflow-hidden relative">
                     <img src={IMAGES.processingLine} className="w-full h-full object-cover" alt="Coarse Flour" />
                  </div>
                  <h3 className="text-3xl font-medium text-slate-900 mb-4">Coarse Gram Flour</h3>
                  <p className="text-[14px] text-slate-600 font-light leading-relaxed mb-6">Specially textured coarse besan, maintaining the authentic grit required for traditional regional delicacies.</p>
                  <div className="mt-auto pt-6 border-t border-slate-200">
                     <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-2">Ideal For</span>
                     <span className="text-[13px] text-slate-700">Specialty foods & HoReCa sector</span>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-4">Target Markets</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[1.1] uppercase w-full">
                STRATEGIC DISTRIBUTION.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="border-l-2 border-amber-500 pl-6">
                 <h3 className="text-2xl font-medium mb-3">Retail (B2C)</h3>
                 <p className="text-[14px] font-light text-slate-400 leading-relaxed">Consumer packaging ranging from 500g to 5kg, positioned in modern trade and general trade across regional markets.</p>
               </div>
               <div className="border-l-2 border-amber-500 pl-6">
                 <h3 className="text-2xl font-medium mb-3">HoReCa</h3>
                 <p className="text-[14px] font-light text-slate-400 leading-relaxed">Supplying consistent quality in 10kg and 30kg formats to hotels, restaurants, and catering services.</p>
               </div>
               <div className="border-l-2 border-amber-500 pl-6">
                 <h3 className="text-2xl font-medium mb-3">Institutional</h3>
                 <p className="text-[14px] font-light text-slate-400 leading-relaxed">Bulk 50kg supplies for snack manufacturers and FMCG brands requiring strict adherence to food safety standards.</p>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function OperationsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.millingFacility} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Factory Base" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">MANUFACTURING & SCALE</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            ENGINEERED <br />FOR HYGIENE.
          </h1>
          <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            A robust 70 TPD capacity driven by automation, optical sorting, and uncompromising zero-touch safety protocols.
          </p>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">The Infrastructure</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] uppercase w-full">
                VISNAGAR FACILITY.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
               <div>
                  <p className="text-[15px] font-light text-slate-600 leading-relaxed mb-8">
                     Situated in the agricultural heartland of Mehsana, Gujarat, the Visnagar plant is optimized for high-yield, hygienic processing of pulses. The facility layout minimizes material handling while maximizing throughput.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="bg-slate-50 p-6 rounded-[20px] border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Chana Dal Capacity</span>
                        <span className="text-3xl font-medium text-slate-900">50 TPD</span>
                     </div>
                     <div className="bg-slate-50 p-6 rounded-[20px] border border-slate-200">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest block mb-2">Besan Capacity</span>
                        <span className="text-3xl font-medium text-slate-900">20 TPD</span>
                     </div>
                  </div>
               </div>
               
               <div className="bg-slate-950 p-10 rounded-[32px] text-white">
                  <h3 className="text-2xl font-medium mb-6">Processing Pipeline</h3>
                  <ul className="space-y-6">
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-400 font-bold text-[12px]">1</div>
                        <div>
                           <h4 className="font-medium text-white mb-1">Pre-Cleaning</h4>
                           <p className="text-[13px] text-slate-400 font-light leading-relaxed">Removal of large foreign matter and dust via high-capacity aspirators.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-400 font-bold text-[12px]">2</div>
                        <div>
                           <h4 className="font-medium text-white mb-1">Optical Sorting</h4>
                           <p className="text-[13px] text-slate-400 font-light leading-relaxed">Color-based cameras reject discolored or defective grains instantly.</p>
                        </div>
                     </li>
                     <li className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-amber-400 font-bold text-[12px]">3</div>
                        <div>
                           <h4 className="font-medium text-white mb-1">Milling & Grinding</h4>
                           <p className="text-[13px] text-slate-400 font-light leading-relaxed">Precision milling ensuring uniform particle size and minimal nutrient loss.</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-amber-400 text-slate-950 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-900 uppercase mb-4">Logistics & Supply</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-950 leading-[1.1] uppercase w-full">
                FARM TO WAREHOUSE.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white/30 border border-slate-950/10 p-10 rounded-[24px]">
                  <h3 className="text-2xl font-medium mb-4 flex items-center gap-3"><Wheat size={24}/> Procurement Grid</h3>
                  <p className="text-[15px] font-light leading-relaxed text-slate-800">
                     Through Invade Agro's network, we source premium raw chana directly from designated agricultural zones in MP, Rajasthan, and Gujarat, ensuring traceability and stable pricing models.
                  </p>
               </div>
               <div className="bg-white/30 border border-slate-950/10 p-10 rounded-[24px]">
                  <h3 className="text-2xl font-medium mb-4 flex items-center gap-3"><PackageCheck size={24}/> Outbound Capability</h3>
                  <p className="text-[15px] font-light leading-relaxed text-slate-800">
                     On-site modern warehousing allows for optimal inventory buffering. Finished goods are dispatched via a dedicated logistics fleet to wholesale hubs and institutional clients efficiently.
                  </p>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function DecisionMakersContent({ setPage }) {
  usePageScroll();

  const boardMembers = [
    { name: "Meenal S Patwardhan", title: "MD & Vice-Chairman, Asia" },
    { name: "Chirag Kotecha", title: "CEO & MD, Invade Mill" },
    //{ name: "Dr. MY Farooqui", title: "Additional Director" },
    //{ name: "Vishal Jamdade", title: "Director (Agro Inputs), India" },
    { name: "Bhavin Kapadia", title: "Director - Funds (Global)" },
    //{ name: "Yagnik Waghela", title: "Director - Investor Relations" },
    //{ name: "Mahesh Mastan", title: "Director - Public Relations" },
    { name: "Trevor D'souza", title: "Director - Operations" }
    //{ name: "Hitesh Waghela", title: "CFO, India" }
  ];

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.decisionMakersHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Leadership" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">DECISION MAKERS</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            BOARD <br />MEMBERS.
          </h1>
          <div className="border-l border-amber-500/50 pl-6">
            <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              The minds steering the global agricultural transition. Our leadership team brings together decades of expertise in agronomy, supply chain logistics, and strategic execution.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">A Message from Leadership</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] mb-16 max-w-5xl uppercase">
                "Our focus has always been on building <span className="font-medium text-amber-500">disciplined operating structures</span> that empower farmers and scale across borders."
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start pt-12 lg:pt-16 border-t border-slate-200">
              <div className="lg:w-1/3 flex flex-col items-start w-full">
                 <div className="w-20 h-20 rounded-full bg-slate-100 text-amber-600 flex items-center justify-center mb-6">
                   <span className="text-xl font-medium tracking-widest">KC</span>
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-light text-slate-900 mb-2">Kamlesh M. Chotalia</h3>
                 <p className="text-[11px] font-bold tracking-widest text-slate-500 uppercase mb-8">Executive Director & Chairman<br/>Kigali, Rwanda</p>
                 <a href="https://www.linkedin.com/in/kc6666/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-slate-950 bg-amber-400 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-1">
                   <Linkedin size={16} />
                   <span className="text-[11px] font-bold tracking-widest uppercase">Connect</span>
                 </a>
              </div>
              <div className="lg:w-2/3 space-y-6 text-slate-600 font-light text-[15px] md:text-[17px] leading-relaxed w-full">
                <p className="text-xl text-slate-900 font-medium mb-4">
                  Driving regional expansion through structured growth.
                </p>
                <p>
                  Kamlesh M. Chotalia (KC) brings over 28 years of leadership experience across agriculture and food processing. He has played a key role in shaping IAG's regional expansion and building disciplined operating structures across all our markets.
                </p>
                <p>
                  As Chairman and Executive Director, he oversees strategic growth, high-level partnerships, and rigorous corporate governance. His vision guides IAG's long-term direction across its global footprint, ensuring that our operations remain both profitable and sustainably impactful.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">The Leadership</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] text-slate-900">
                DIRECTORS & CORE TEAM.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-[24px] p-8 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                      <span className="text-sm font-medium tracking-widest">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-slate-900">{member.name}</h3>
                    <p className="text-amber-600 font-bold text-[10px] tracking-widest uppercase leading-relaxed">{member.title}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <button className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 transition-colors">
                      <Linkedin size={18} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Profile</span>
                    </button>
                    <ArrowUpRight size={18} className="text-slate-200 group-hover:text-amber-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
             <div className="text-left mb-16">
               <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-4">Framework</p>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-white leading-[1.1] uppercase w-full">
                 CORPORATE GOVERNANCE.
               </h2>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                 <Shield className="text-amber-400 mb-6" size={32}/>
                 <h3 className="text-xl font-medium mb-3">Compliance First</h3>
                 <p className="text-[14px] text-slate-400 font-light leading-relaxed">Strict adherence to national corporate laws and food safety regulations, ensuring completely transparent audits.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                 <Target className="text-amber-400 mb-6" size={32}/>
                 <h3 className="text-xl font-medium mb-3">Strategic Alignment</h3>
                 <p className="text-[14px] text-slate-400 font-light leading-relaxed">Every operational decision at the mill is aligned with the long-term value creation goals of the Invade Agro board.</p>
               </div>
               <div className="bg-white/5 p-8 rounded-[24px] border border-white/10">
                 <Users className="text-amber-400 mb-6" size={32}/>
                 <h3 className="text-xl font-medium mb-3">Stakeholder Equity</h3>
                 <p className="text-[14px] text-slate-400 font-light leading-relaxed">Maintaining clear, regular communication with investors, local farmers, and institutional buyers to build lasting trust.</p>
               </div>
             </div>
          </div>
        </section>
      </main>
    </>
  );
}

function InvestorsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.investorsHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Corporate" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">INVESTOR RELATIONS</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            TRANSPARENCY <br />& GOVERNANCE.
          </h1>
          <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            For all investor-related inquiries, compliance details, and access to our corporate regulatory framework.
          </p>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24 border-b border-slate-100 pb-12">
               <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Get in Touch</p>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] uppercase w-full">
                 DIRECT CONTACTS.
               </h2>
               <p className="text-slate-600 font-light text-[15px] leading-relaxed mt-6 max-w-2xl">
                  Our investor relations team is committed to providing timely, transparent communication to our shareholders and institutional partners regarding the Zumba Foods integration.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-8 md:p-12 flex flex-col relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                   <Briefcase size={120} strokeWidth={1} className="text-slate-900" />
                 </div>
                 <div className="relative z-10 flex-grow">
                   <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">Yagnik Waghela</h3>
                   <p className="text-amber-500 font-bold text-[11px] tracking-widest uppercase mb-10">Director (Investor Relations)</p>
                   <div className="space-y-6">
                     <a href="tel:+919920779198" className="flex items-center gap-4 text-slate-700 hover:text-amber-500 transition-colors">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200">
                         <Phone size={16} />
                       </div>
                       <span className="text-[15px] font-medium">+91 99207 79198</span>
                     </a>
                     <a href="mailto:yagnik@invadeagro.com" className="flex items-center gap-4 text-slate-700 hover:text-amber-500 transition-colors">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-slate-200">
                         <Mail size={16} />
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[15px] font-medium text-slate-900">yagnik@invadeagro.com</span>
                         <span className="text-[14px] text-slate-500 mt-0.5">ir@invadeagro.com (Alt)</span>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
               
               <div className="rounded-[24px] border border-slate-200 overflow-hidden relative h-full group bg-slate-950 flex flex-col justify-center p-8 md:p-10">
                  <img src={IMAGES.stockMarket} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" alt="Market Growth" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-transparent"></div>
                  <div className="relative z-10 text-white">
                     <svg className="w-10 h-10 text-amber-400 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                     <h3 className="text-xl md:text-2xl lg:text-[1.7rem] font-light leading-snug text-white/90">"Our commitment to transparency and disciplined governance ensures long-term, sustainable value for all our stakeholders."</h3>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full bg-slate-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="text-left mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Regulatory & Compliance</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.1] mb-6 uppercase w-full">
                CORPORATE DIRECTORY.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-amber-400 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-slate-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-slate-400 uppercase mb-3">Registered Address</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Invade Agro Limited</h3>
                <p className="text-slate-600 font-light text-[14px] md:text-[15px] leading-relaxed flex-grow">
                  8th Floor, Centrum IT Park, <br />
                  Unit No. 805 & 806, Plot No. D-1, <br />
                  Neheru Nagar, Wagle Industrial Estate, <br />
                  Thane West, Thane, Maharashtra 400604
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-amber-400 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-slate-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-slate-400 uppercase mb-3">Company Secretary</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Kaushal Dalal & Associates</h3>
                <p className="text-slate-600 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  Practising Company Secretary <br />
                  Flat No. 1, Nishant Building, Poddar Street, <br />
                  Opposite SVC Bank, Santacruz West, Mumbai – 400054
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Email:</span> team@cskda.com</p>
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Web:</span> www.cskda.com</p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-amber-400 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-slate-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PieChart size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-slate-400 uppercase mb-3">Auditor</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">MRB and Associates</h3>
                <p className="text-slate-600 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  A-102, 1st Floor Shraddha Heights <br />
                  Telly Gully Cross Road, <br />
                  Andheri (E), Mumbai – 400069
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Email:</span> manish.b@mrbassociates.com</p>
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Web:</span> www.mrbassociates.com</p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-amber-400 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-slate-50 text-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-slate-400 uppercase mb-3">Registrar & Transfer Agents</p>
                <h3 className="text-2xl font-medium text-slate-900 mb-4">Purva Sharegistry (India) Pvt. Ltd.</h3>
                <p className="text-slate-600 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  Unit No. 9, Ground Floor, Shiv Shakti Ind. Estt, <br />
                  J. R. Boricha Marg, Lower Parel East, <br />
                  Mumbai, Maharashtra – 400011
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 space-y-3">
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Phone:</span> 022 4790 0138</p>
                  <p className="text-[13px] text-slate-600"><span className="font-medium text-slate-900">Web:</span> www.purvashare.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ContactContent({ setPage }) {
  usePageScroll();
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 4000);
    }, 1500);
  };

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-slate-950 text-white relative overflow-hidden pt-20 z-0 px-[3%]">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.corporateAbstract} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Corporate" />
        
        <div className="w-full relative z-10 reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-amber-400 uppercase mb-6">CONTACT US</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-light tracking-tighter uppercase leading-[1.05] mb-10 text-white">
            REACH OUT <br />TODAY.
          </h1>
          <p className="text-slate-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
            Submit commercial inquiries, partnership proposals, or operational questions regarding the Invade Mill and Sahiyari integration.
          </p>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               
               <div>
                  <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Direct Message</p>
                  <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-slate-900 leading-[1.1] mb-8 uppercase">
                    SEND AN INQUIRY.
                  </h2>
                  <p className="text-[15px] font-light text-slate-600 mb-10 leading-relaxed">
                    Please use the form below to connect with our administrative and commercial teams. Your inquiry will be securely routed.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">First Name</label>
                        <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-4 text-[14px] focus:outline-none focus:border-amber-400 transition-colors" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Last Name</label>
                        <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-4 text-[14px] focus:outline-none focus:border-amber-400 transition-colors" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Corporate Email</label>
                      <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-4 text-[14px] focus:outline-none focus:border-amber-400 transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Inquiry Type</label>
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-4 text-[14px] focus:outline-none focus:border-amber-400 transition-colors appearance-none">
                        <option>Distribution & Sales</option>
                        <option>Bulk Procurement (HoReCa)</option>
                        <option>Media & PR</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">Message</label>
                      <textarea required rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-[12px] px-4 py-4 text-[14px] focus:outline-none focus:border-amber-400 transition-colors resize-none" placeholder="How can we assist you?"></textarea>
                    </div>
                    <button type="submit" disabled={formState === 'loading' || formState === 'success'} className="w-full bg-slate-950 text-white font-bold text-[11px] tracking-widest uppercase rounded-[12px] py-5 hover:bg-amber-400 hover:text-slate-950 transition-all disabled:opacity-50">
                      {formState === 'idle' && 'Submit Inquiry'}
                      {formState === 'loading' && 'Sending...'}
                      {formState === 'success' && 'Message Received'}
                    </button>
                    {formState === 'success' && (
                       <p className="text-emerald-600 text-[12px] text-center mt-2 flex items-center justify-center gap-2">
                         <CheckCircle2 size={14}/> We will get back to you shortly.
                       </p>
                    )}
                  </form>
               </div>
               
               <div className="bg-slate-50 p-10 lg:p-12 rounded-[32px] border border-slate-200 h-fit">
                  <h3 className="text-2xl font-medium text-slate-900 mb-8">Headquarters</h3>
                  
                  <div className="space-y-8">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                           <Building2 size={18} className="text-slate-900"/>
                        </div>
                        <div>
                           <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">Corporate Office</p>
                           <p className="text-[14px] font-light text-slate-700 leading-relaxed">
                              8th Floor, Centrum IT Park,<br/>
                              Unit No. 805 & 806, Plot No. D-1,<br/>
                              Neheru Nagar, Wagle Industrial Estate,<br/>
                              Thane West, Maharashtra 400604
                           </p>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                           <MapPin size={18} className="text-slate-900"/>
                        </div>
                        <div>
                           <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">Manufacturing Base</p>
                           <p className="text-[14px] font-light text-slate-700 leading-relaxed">
                              Invade Mill Facility,<br/>
                              Visnagar, Mehsana,<br/>
                              Gujarat, India - 384315
                           </p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1">
                           <Mail size={18} className="text-slate-900"/>
                        </div>
                        <div>
                           <p className="text-[11px] font-bold tracking-widest text-slate-400 uppercase mb-1">General Inquiries</p>
                           <a href="mailto:info@invademill.com" className="text-[14px] font-medium text-slate-900 hover:text-amber-500 transition-colors">info@invademill.com</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
