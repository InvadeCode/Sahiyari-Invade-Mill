import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  MapPin, 
  Menu, 
  X, 
  Globe2,
  ChevronDown,
  BarChart3,
  PackageCheck,
  Building2,
  Factory,
  Mail,
  Phone,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Wheat,
  Scale,
  Target,
  LineChart,
  Layers,
  CheckCircle2,
  Tractor,
  Store,
  Truck,
  Leaf,
  Linkedin
} from 'lucide-react';

// ---------------------------------------------------------
// IMAGE DICTIONARY (Premium Corporate/Milling/Agri)
// ---------------------------------------------------------
const IMAGES = {
  heroVideo: "https://video.wixstatic.com/video/548938_a098ff69446346b39e4883e38fde717f/1080p/mp4/file.mp4",
  millingFacility: "https://images.unsplash.com/photo-1495107336281-19d4f7a7d0aa?auto=format&fit=crop&w=1600&q=80",
  grainsAbstract: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80",
  processingLine: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
  corporateAbstract: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  handshake: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  decisionMakersHero: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1600",
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  qualityControl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
  fields: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
};

// ---------------------------------------------------------
// REUSABLE HOOK FOR SCROLL ANIMATIONS
// ---------------------------------------------------------
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

// ---------------------------------------------------------
// IMAGE FALLBACK HANDLER
// ---------------------------------------------------------
const handleImageError = (e) => {
  e.target.onerror = null; 
  e.target.src = IMAGES.corporateAbstract; 
};

// ---------------------------------------------------------
// MAIN APP COMPONENT & ROUTER
// ---------------------------------------------------------
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    document.title = "Invade Mill Takes Over Zumba Foods | Sahiyari Acquisition";
    
    // Inject Meta Description dynamically
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = "Investor-facing overview of Invade Mill’s 100% takeover of Zumba Foods Pvt. Ltd., the company behind Sahiyari Chana Daal and Besan products.";
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
        width: 100%; 
        -webkit-font-smoothing: antialiased; 
        background-color: #fff; 
      }
      .tracking-ultra { letter-spacing: 0.25em; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #fff; }
      ::-webkit-scrollbar-thumb { background: #eab308; border-radius: 9px; }
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

  // Invade Mill / Acquisition Specific Nav
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
    <div className="min-h-screen w-full selection:bg-amber-400 selection:text-slate-900 relative flex flex-col">
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-[200] transition-transform duration-700 flex flex-col justify-center items-center gap-6 text-white overflow-y-auto py-20 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-colors">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <button 
              onClick={() => setCurrentPage(item.id)}
              className={`text-xl font-light tracking-ultra uppercase transition-colors ${currentPage === item.id ? 'text-yellow-400' : 'hover:text-yellow-400'}`}
            >
              {item.label}
            </button>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-slate-900 border border-white/10 shadow-2xl py-3 text-white mx-[2%] mt-4 rounded-[20px]' 
        : 'bg-transparent border-transparent py-6 text-white rounded-none'
      }`}>
        <div className="flex justify-between items-center px-[3%] w-full">
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer flex items-center gap-5 group">
            <img 
              src="https://static.wixstatic.com/media/548938_bd3cc5135db34f059c6f5869db50cd46~mv2.png/v1/fill/w_390,h_242,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Invade%20Mill-02%2016_44_19.png" 
              alt="Invade Mill Limited" 
              className="h-10 md:h-[50px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md" 
            />
            <div className="hidden sm:flex items-center border-l border-white/20 pl-5 h-full">
              <img 
                src="https://static.wixstatic.com/media/548938_3f6affea789947a1bd5a3fcfa875a3dc~mv2.png" 
                alt="Sahiyari Foods" 
                className="h-8 md:h-[40px] w-auto object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md" 
              />
            </div>
          </button>
          
          {/* Main Menu Links */}
          <div className="hidden xl:flex items-center justify-center gap-8 text-[12px] font-medium tracking-[0.15em] uppercase w-full px-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <div key={item.label} className="relative group">
                  <button 
                    onClick={() => setCurrentPage(item.id)} 
                    className={`flex items-center gap-2 transition-colors py-4 drop-shadow-sm ${
                      isActive ? 'text-yellow-400' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {isActive && <span className="w-1 h-1 bg-yellow-400 rounded-full flex-shrink-0"></span>}
                    <span>{item.label}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:block px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase rounded-full transition-all duration-500 ${
              isScrolled 
              ? 'bg-yellow-400 text-slate-900 hover:bg-white hover:text-black shadow-xl' 
              : 'bg-white text-slate-900 hover:bg-yellow-400 hover:text-slate-900'
            }`}>
              Enquire Now
            </button>
            <button className="xl:hidden text-white ml-auto hover:text-yellow-400 transition-colors" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} />}
        {currentPage === 'acquisition' && <AcquisitionContent setPage={setCurrentPage} />}
        {currentPage === 'portfolio' && <PortfolioContent setPage={setCurrentPage} />}
        {currentPage === 'operations' && <OperationsContent setPage={setCurrentPage} />}
        {currentPage === 'decision-makers' && <DecisionMakersContent setPage={setCurrentPage} />}
        {currentPage === 'investors' && <InvestorsContent setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} />}
      </div>

      {/* Global Footer */}
      <footer className="bg-slate-900 pt-24 pb-12 px-[3%] relative z-10 border-t border-white/5 mt-auto text-white">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-light tracking-widest uppercase mb-6 text-white">Invade Mill</h2>
              <p className="text-slate-300 font-light text-[14px] max-w-md leading-relaxed mb-4">
                Sourced with care, processed with precision, and packed with trust, so every meal is wholesome and pure. From flours to multi-grain mixes, we process nutrition with care.
              </p>
              <p className="text-yellow-400 font-medium text-[11px] tracking-widest uppercase">
                Backed by Invade Agro Global - A trusted global leader.
              </p>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-bold tracking-ultra uppercase text-amber-500 mb-6">Microsite Index</h4>
              <ul className="space-y-4 text-[13px] text-slate-300 font-light">
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
                <MapPin className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-[9px] font-bold tracking-ultra uppercase text-yellow-400 mb-1">Manufacturing Base</h4>
                  <p className="text-[12px] font-light leading-relaxed text-slate-300 uppercase">Visnagar, Mehsana,<br />Gujarat, India - 384315</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-[11px] font-light text-slate-400/80 leading-relaxed max-w-5xl mb-8">
              DISCLAIMER: This website is prepared for general information and stakeholder communication regarding the acquisition of Zumba Foods Pvt. Ltd. by Invade Mill. It does not constitute an offer, invitation, solicitation, investment recommendation, or financial advice. Operational capacities (e.g., 70 TPD) and processing information are based on company-provided details and may be updated from time to time. Forward-looking statements regarding synergies and margin expansions are subject to execution risks and market conditions.
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-semibold text-slate-400 uppercase tracking-[0.2em]">
              <p className="text-center md:text-left">
                © {new Date().getFullYear()} INVADE MILL. ALL RIGHTS RESERVED. 
                <span className="block md:inline mt-2 md:mt-0 md:ml-4 font-medium text-yellow-500/80">Built by InCode</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------
function HomeContent({ setPage }) {
  usePageScroll();
  return (
    <>
      {}
      <section className="sticky top-0 h-screen min-h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden z-0 bg-slate-900 pt-20 pb-10">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity scale-[1.05]" style={{ opacity: 0.35 }}>
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-[3%] w-full max-w-5xl mx-auto mt-10">
          <div className="flex items-center gap-4 mb-6 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 reveal-on-scroll visible">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] uppercase text-yellow-400">Backed by Invade Agro Global</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-[1.05] tracking-tighter mb-6 text-white uppercase reveal-on-scroll visible">
            INVADE MILL TAKES OVER<br />
            <span className="font-medium text-yellow-400 drop-shadow-lg">ZUMBA FOODS.</span>
          </h1>
          
          <p className="text-[13px] md:text-[15px] font-light text-slate-200 max-w-2xl leading-relaxed mb-6 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            Sourced with care, processed with precision, and packed with trust. Invade Mill brings its advanced hygienic milling tech and certified quality to the Sahiyari brand, strengthening our farm-to-family food processing ecosystem.
          </p>
          
          <p className="text-[10px] md:text-[11px] font-medium text-yellow-400/90 max-w-2xl leading-relaxed mb-8 reveal-on-scroll visible uppercase tracking-widest" style={{transitionDelay: '0.3s'}}>
            100% Natural Pulses • FSSAI, ISO, HACCP Certified • Advanced Milling
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full reveal-on-scroll visible" style={{transitionDelay: '0.4s'}}>
            <button onClick={() => setPage('investors')} className="w-full sm:w-auto bg-yellow-400 text-slate-900 px-8 py-3.5 text-[10px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-all shadow-xl">
              View Investor Brief
            </button>
            <button onClick={() => setPage('portfolio')} className="group flex items-center justify-center gap-3 w-full sm:w-auto border border-white/20 text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:bg-white/10 transition-all py-3.5 px-8 rounded-full">
              Explore Sahiyari by Invade Mill
            </button>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-neutral-50 rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        
        {}
        {/* SECTION 1: High Level Stats */}
        <section className="px-[3%] w-full py-[8vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: "100% Takeover", desc: "Complete strategic acquisition of Zumba Foods by Invade Mill." },
                { icon: Factory, title: "Advanced Milling", desc: "Upgraded hygienic processing for 100% natural pure pulses." },
                { icon: ShieldCheck, title: "Certified Quality", desc: "FSSAI, ISO, and HACCP standards applied across the board." },
                { icon: PackageCheck, title: "Sahiyari Integration", desc: "Integration of established staples into the Invade Mill family." }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-[24px] border border-black/5 shadow-sm hover:shadow-md transition-shadow group">
                  <stat.icon className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5}/>
                  <h3 className="text-xl font-medium text-neutral-900 mb-2">{stat.title}</h3>
                  <p className="text-black/60 text-[13px] leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-black/40 italic mt-6 text-right w-full block">*Capacity and processing metrics as per provided business information.</p>
          </div>
        </section>

        {}
        {/* SECTION 2: Strategic Addition */}
        <section className="px-[3%] w-full py-[10vh] bg-white border-t border-black/5">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div className="lg:w-[55%]">
                  <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-4">The Strategy</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] uppercase">
                    A STRATEGIC ADDITION TO THE INVADE MILL STACK.
                  </h2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[15px] leading-relaxed">
                   Invade Mill’s takeover of Zumba Foods Pvt. Ltd. brings a focused Chana Daal and Besan manufacturing platform into the group’s wider commodity, processing, and food supply ecosystem. We are moving toward higher-value processing and branded staples.
                 </p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
               <div className="bg-slate-50 rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-yellow-300 transition-colors">
                 <Factory size={40} className="text-slate-800 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-slate-900 mb-4">Processing Depth</h3>
                 <p className="text-slate-700 font-light text-[14px] leading-relaxed">
                   Adds Chana Daal, Besan, Coarse Besan, and gram flour manufacturing capability directly into the Invade Mill ecosystem, reducing reliance on third-party millers.
                 </p>
               </div>
               <div className="bg-yellow-50 rounded-[24px] p-8 md:p-10 border border-yellow-200 flex flex-col hover:border-yellow-400 transition-colors">
                 <PackageCheck size={40} className="text-yellow-600 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-yellow-900 mb-4">Brand Ownership</h3>
                 <p className="text-yellow-800/80 font-light text-[14px] leading-relaxed">
                   Brings the Sahiyari product line into the group, giving Invade Mill an instantly recognizable branded consumer and bulk product portfolio.
                 </p>
               </div>
               <div className="bg-neutral-50 rounded-[24px] p-8 md:p-10 border border-black/5 flex flex-col hover:border-slate-300 transition-colors">
                 <BarChart3 size={40} className="text-neutral-700 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-neutral-900 mb-4">Investor Visibility</h3>
                 <p className="text-neutral-600 font-light text-[14px] leading-relaxed">
                   Creates a clearer, tangible value-added food processing story for investors, partners, and institutional buyers looking beyond raw commodity trading.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {}
        {/* SECTION 3: Profile & Brand Focus */}
        <section className="px-[3%] w-full py-[10vh] bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-yellow-400 uppercase mb-4">Target Profile</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8">
                  ZUMBA FOODS <br/>PRIVATE LIMITED.
                </h2>
                <p className="text-slate-300 font-light text-[15px] leading-relaxed mb-10">
                  A Gujarat-based Chana Daal and Besan mill associated with the food industry since 2021. The company manufactures under its flagship brand, Sahiyari, which is now fully integrated as <strong>Sahiyari by Invade Mill</strong>.
                </p>
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-[13px]">
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Company</span>
                    <span className="font-medium text-slate-200">Zumba Foods Pvt. Ltd.</span>
                  </div>
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Flagship Brand</span>
                    <span className="font-medium text-yellow-400">Sahiyari</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Location</span>
                    <span className="font-medium text-slate-300">Visnagar, Mehsana, Gujarat, India</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden relative border border-white/10 bg-yellow-500/10 flex flex-col justify-center items-center text-center p-12">
                <img 
                  src="https://static.wixstatic.com/media/548938_3f6affea789947a1bd5a3fcfa875a3dc~mv2.png" 
                  alt="Sahiyari Foods" 
                  className="h-24 md:h-32 w-auto object-contain mb-8 drop-shadow-2xl" 
                />
                <p className="text-xl md:text-2xl font-light italic text-white/90 mb-4">"Swad se Yaari, Apni Sahiyari"</p>
                <div className="inline-block mt-4 bg-white/10 px-6 py-2 rounded-full border border-white/20">
                  <span className="text-[10px] font-bold tracking-widest text-yellow-300 uppercase">Now Backed by Invade Mill</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* SECTION 4: Sourcing Standard */}
        <section className="px-[3%] w-full py-[10vh] bg-slate-50">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-4">The Invade Mill Standard</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-slate-900 leading-[1.1] mb-6 uppercase">
                  FROM FARMS TO FAMILIES.
                </h2>
                <p className="text-slate-900/70 font-light text-[15px] leading-relaxed mb-6">
                  Invade Mill follows a rigorous process of sourcing, cleaning, milling, and packaging. We source commodities directly from our established farm networks. This ensures that the raw chana dal used for Sahiyari products is 100% natural, pure, and traceable back to the soil.
                </p>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:border-yellow-200 transition-all group">
                   <Tractor size={32} className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                   <h4 className="font-medium text-slate-900 mb-2">Direct Sourcing</h4>
                   <p className="text-[13px] text-black/60 leading-relaxed">Procured from trusted farms, cutting out middlemen delays.</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5 hover:border-yellow-200 transition-all group">
                   <Store size={32} className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                   <h4 className="font-medium text-slate-900 mb-2">Family Delivered</h4>
                   <p className="text-[13px] text-black/60 leading-relaxed">Wholesome, pure, and safely packed for every meal.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* SECTION 5: Advanced Processing Infrastructure */}
        <section className="px-[3%] w-full py-[10vh] bg-white">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll text-center max-w-4xl">
            <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-4">Infrastructure</p>
            <Factory size={48} className="text-slate-800 mx-auto mb-6" strokeWidth={1} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
              ADVANCED HYGIENIC MILLING TECH.
            </h2>
            <p className="text-black/60 font-light text-[15px] leading-relaxed">
              Invade Mill has upgraded the Sahiyari processing pipelines with advanced hygienic milling technology. Every grain of Chana Daal and speck of Besan is processed with precision, ensuring the final product is completely untouched by hand. We process nutrition with care, delivering authentic taste, hygiene, and everyday goodness.
            </p>
          </div>
        </section>

        {}
        {/* SECTION 6: Certifications */}
        <section className="px-[3%] w-full py-[10vh] bg-slate-800 text-white text-center">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <p className="text-[10px] font-bold tracking-widest text-yellow-400 uppercase mb-4">Compliance & Safety</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter leading-[1.1] mb-12 uppercase">
              CERTIFIED QUALITY & TRUST.
            </h2>
            <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-yellow-400 hover:text-slate-900 transition-colors group">
                 <ShieldCheck size={32} className="text-yellow-400 mb-3 group-hover:text-slate-900" strokeWidth={1.5} />
                 <span className="font-bold tracking-widest text-sm md:text-base">FSSAI</span>
               </div>
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-yellow-400 hover:text-slate-900 transition-colors group">
                 <ShieldCheck size={32} className="text-yellow-400 mb-3 group-hover:text-slate-900" strokeWidth={1.5} />
                 <span className="font-bold tracking-widest text-sm md:text-base">ISO</span>
               </div>
               <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/10 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm hover:bg-yellow-400 hover:text-slate-900 transition-colors group">
                 <ShieldCheck size={32} className="text-yellow-400 mb-3 group-hover:text-slate-900" strokeWidth={1.5} />
                 <span className="font-bold tracking-widest text-sm md:text-base">HACCP</span>
               </div>
            </div>
            <p className="text-slate-300 font-light text-[14px] md:text-[15px] mt-10 max-w-2xl mx-auto leading-relaxed">
              Trusted by homes and businesses alike. Our commitment is simple: pulses that are safe, nutritious, and consistently reliable under the Invade Mill guarantee.
            </p>
          </div>
        </section>

        {}
        {/* SECTION 7: Besan Highlight */}
        <section className="px-[3%] w-full py-[10vh] bg-neutral-50">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-2">Portfolio Focus</p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-neutral-900 uppercase">THE BESAN RANGE.</h2>
                <p className="text-black/50 mt-2 text-[14px]">Manufactured by Invade Mill under the Sahiyari brand.</p>
              </div>
              <button onClick={() => setPage('portfolio')} className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 hover:text-yellow-500 flex items-center gap-2 transition-colors">
                View Full Range <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product cards retain their distinct packaging colors for product identification */}
              <div className="rounded-[24px] border p-8 flex flex-col hover:shadow-lg transition-shadow bg-amber-50 border-amber-200 text-amber-900">
                <h4 className="text-2xl font-semibold tracking-tight mb-4">Ultra Premium Besan</h4>
                <p className="text-[13px] font-medium opacity-90 mb-4">Ideal For: Khaman, Ganthiya, Fafda</p>
                <p className="text-[12px] opacity-80 italic mt-auto">Made from high-quality chana dal, untouched by hand.</p>
              </div>
              <div className="rounded-[24px] border p-8 flex flex-col hover:shadow-lg transition-shadow bg-slate-100 border-slate-200 text-slate-900">
                <h4 className="text-2xl font-semibold tracking-tight mb-4">Fine Besan</h4>
                <p className="text-[13px] font-medium opacity-90 mb-4">Ideal For: Bhajiya, Pakoda, Home Use</p>
                <p className="text-[12px] opacity-80 italic mt-auto">Smooth texture, rich taste.</p>
              </div>
              <div className="rounded-[24px] border p-8 flex flex-col hover:shadow-lg transition-shadow bg-lime-50 border-lime-200 text-lime-900">
                <h4 className="text-2xl font-semibold tracking-tight mb-4">Coarse Besan</h4>
                <p className="text-[13px] font-medium opacity-90 mb-4">Ideal For: Motichur Laddu, Sweets</p>
                <p className="text-[12px] opacity-80 italic mt-auto">Granular, not-so-finely ground gram flour.</p>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* SECTION 8: Chana Daal Highlight */}
        <section className="px-[3%] w-full py-[10vh] bg-yellow-50 border-t border-yellow-100">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-2">Portfolio Focus</p>
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-neutral-900 uppercase">100% NATURAL CHANA DAAL.</h2>
                <p className="text-black/50 mt-2 text-[14px]">Sortex processed and packed by Invade Mill.</p>
              </div>
              <button onClick={() => setPage('portfolio')} className="text-[10px] font-bold uppercase tracking-widest text-yellow-600 hover:text-yellow-500 flex items-center gap-2 transition-colors">
                View Details <ArrowRight size={14} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="rounded-[24px] border border-yellow-200 bg-white p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold tracking-tight mb-2 text-slate-900">Silky Daal Chana Daal</h4>
                <p className="text-[13px] font-medium text-slate-800 mb-4">Packing: 1 KG, 30 KG</p>
                <p className="text-[13px] text-slate-500 italic mt-auto">Smooth texture, rich taste, naturally cultivated & Sortex processed by Invade Mill.</p>
              </div>
              <div className="rounded-[24px] border border-yellow-200 bg-white p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold tracking-tight mb-2 text-slate-900">Dry Daal Chana Daal</h4>
                <p className="text-[13px] font-medium text-slate-800 mb-4">Packing: 30 KG</p>
                <p className="text-[13px] text-slate-500 italic mt-auto">Authentic flavor, hygienically processed & nutrient rich under Invade Mill standards.</p>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* SECTION 9: Institutional Scale & Future Roadmap */}
        <section className="px-[3%] w-full py-[10vh] bg-white border-t border-black/5">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              <div className="flex flex-col justify-center">
                <Truck size={40} className="text-yellow-500 mb-6" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                  INSTITUTIONAL & BULK SUPPLY.
                </h2>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-6">
                  Invade Mill is a recognized supplier to major FMCG and corporate food brands. By applying this B2B logistics framework to the Zumba Foods facility, Sahiyari’s 30 KG and 50 KG bulk packs are now seamlessly integrated into Invade Mill’s institutional supply chains.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-[14px] text-neutral-700 font-medium">
                    <CheckCircle2 size={18} className="text-yellow-500" /> Rapid, high-volume delivery capability.
                  </li>
                  <li className="flex items-center gap-3 text-[14px] text-neutral-700 font-medium">
                    <CheckCircle2 size={18} className="text-yellow-500" /> Consistent quality metrics across batches.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-10 md:p-12 rounded-[32px] border border-black/5">
                <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-4">Future Roadmap</p>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 uppercase mb-6">
                  EXPANDING THE PORTFOLIO.
                </h3>
                <p className="text-black/60 font-light text-[14px] leading-relaxed mb-8">
                  The acquisition allows the Sahiyari brand to leverage Invade Mill's broader commodity expertise. Soon, Sahiyari by Invade Mill will introduce whole grains, multi-grain mixes, and premium dry fruits to the consumer market.
                </p>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col items-center text-center shadow-sm hover:border-yellow-200 transition-colors">
                     <Wheat size={28} className="text-yellow-500 mb-3" strokeWidth={1.5}/>
                     <h4 className="font-medium text-neutral-900 text-[14px]">Whole Grains</h4>
                   </div>
                   <div className="bg-white p-6 rounded-2xl border border-black/5 flex flex-col items-center text-center shadow-sm hover:border-yellow-200 transition-colors">
                     <Leaf size={28} className="text-yellow-500 mb-3" strokeWidth={1.5}/>
                     <h4 className="font-medium text-neutral-900 text-[14px]">Dry Fruits</h4>
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

// ---------------------------------------------------------
// 2. THE ACQUISITION PAGE
// ---------------------------------------------------------
function AcquisitionContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <img src={IMAGES.handshake} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Acquisition Overview" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">Strategic Integration</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            THE ACQUISITION.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* Strategic Addition */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div className="lg:w-[55%]">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] uppercase">
                    A STRATEGIC ADDITION TO THE INVADE MILL STACK.
                  </h2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed">
                   Invade Mill’s takeover of Zumba Foods Pvt. Ltd. brings a focused Chana Daal and Besan manufacturing platform into the group’s wider commodity, processing, and food supply ecosystem. The acquisition supports Invade Mill’s move toward higher-value processing, branded staples, institutional supply, and scalable food infrastructure.
                 </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
               <div className="bg-slate-50 rounded-[24px] p-8 md:p-10 border border-slate-200 flex flex-col hover:border-yellow-300 transition-colors">
                 <Factory size={40} className="text-slate-800 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-slate-900 mb-4">Processing Depth</h3>
                 <p className="text-slate-700 font-light text-[14px] leading-relaxed">
                   Adds Chana Daal, Besan, Coarse Besan, and gram flour manufacturing capability directly into the Invade Mill ecosystem, reducing reliance on third-party millers.
                 </p>
               </div>
               <div className="bg-yellow-50 rounded-[24px] p-8 md:p-10 border border-yellow-200 flex flex-col hover:border-yellow-400 transition-colors">
                 <PackageCheck size={40} className="text-yellow-600 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-yellow-900 mb-4">Brand Ownership</h3>
                 <p className="text-yellow-800/80 font-light text-[14px] leading-relaxed">
                   Brings the Sahiyari product line into the group, giving Invade Mill an instantly recognizable branded consumer and bulk product portfolio.
                 </p>
               </div>
               <div className="bg-neutral-50 rounded-[24px] p-8 md:p-10 border border-black/5 flex flex-col hover:border-slate-300 transition-colors">
                 <BarChart3 size={40} className="text-neutral-700 mb-6" strokeWidth={1.5} />
                 <h3 className="text-2xl font-medium text-neutral-900 mb-4">Investor Visibility</h3>
                 <p className="text-neutral-600 font-light text-[14px] leading-relaxed">
                   Creates a clearer, tangible value-added food processing story for investors, partners, and institutional buyers looking beyond raw commodity trading.
                 </p>
               </div>
            </div>
          </div>
        </section>

        {/* Zumba Profile */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-yellow-400 uppercase mb-4">Target Company Profile</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8">
                  ZUMBA FOODS <br/>PRIVATE LIMITED.
                </h2>
                <p className="text-slate-300 font-light text-[15px] md:text-[16px] leading-relaxed mb-10">
                  Zumba Foods Pvt. Ltd. is a Gujarat-based Chana Daal and Besan mill associated with the food industry since 2021. The company manufactures Chana Dal, Gram Flour, Coarse Gram Flour, and related Besan products under its flagship brand, Sahiyari.
                </p>
                
                <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-[13px]">
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Company</span>
                    <span className="font-medium">Zumba Foods Pvt. Ltd.</span>
                  </div>
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Category</span>
                    <span className="font-medium">Chana Daal & Besan Mill</span>
                  </div>
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Flagship Brand</span>
                    <span className="font-medium text-yellow-400">Sahiyari</span>
                  </div>
                  <div>
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Established</span>
                    <span className="font-medium">2021</span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-yellow-500 font-bold uppercase tracking-widest text-[9px] mb-1">Location</span>
                    <span className="font-medium text-slate-300">Visnagar, Mehsana, Gujarat, India</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-[500px] rounded-[32px] overflow-hidden relative border border-white/10 bg-yellow-400/10 flex flex-col justify-center items-center text-center p-12">
                <img 
                  src="https://static.wixstatic.com/media/548938_3f6affea789947a1bd5a3fcfa875a3dc~mv2.png" 
                  alt="Sahiyari Foods" 
                  className="h-28 md:h-40 w-auto object-contain mb-8 drop-shadow-2xl" 
                />
                <p className="text-2xl font-light italic text-white/90">"Swad se Yaari, Apni Sahiyari"</p>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Synergy Split Screen */}
        <section className="w-full flex flex-col">
           <div className="flex flex-col lg:flex-row w-full">
             <div className="lg:w-1/2 bg-neutral-100 py-20 lg:py-28 px-8 lg:px-16 flex flex-col justify-start">
               <div className="max-w-md mx-auto w-full">
                 <h3 className="text-3xl font-light uppercase text-slate-900 mb-8 tracking-tight">Invade Mill Brings:</h3>
                 <ul className="space-y-6">
                   {['Commodity sourcing expertise', 'Processing vision & strategy', 'Institutional supply relationships', 'Trade and logistics infrastructure', 'Aggressive scale ambition'].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 text-[15px] font-medium text-neutral-700">
                       <CheckCircle2 size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" /> 
                       <span className="leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
             
             <div className="lg:w-1/2 bg-slate-800 py-20 lg:py-28 px-8 lg:px-16 flex flex-col justify-start text-white">
               <div className="max-w-md mx-auto w-full">
                 <h3 className="text-3xl font-light uppercase text-yellow-400 mb-8 tracking-tight">Zumba / Sahiyari Brings:</h3>
                 <ul className="space-y-6">
                   {['Existing manufacturing base (Gujarat)', 'Chana Daal & Besan product range', 'Branded product identity', 'Bulk and consumer pack formats', 'Regional market footprint'].map((item, i) => (
                     <li key={i} className="flex items-start gap-4 text-[15px] font-light text-slate-200">
                       <CheckCircle2 size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" /> 
                       <span className="leading-snug">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
             </div>
           </div>

           {/* Synergy Summary Bar */}
           <div className="w-full bg-yellow-400 py-8 px-[3%] flex justify-center items-center border-t border-black/10">
             <p className="text-[12px] md:text-[14px] font-bold tracking-widest uppercase text-slate-900 text-center flex items-center gap-3">
               <Scale size={18} className="hidden md:block opacity-60" />
               Together, the acquisition creates a stronger food processing and staples platform.
               <Scale size={18} className="hidden md:block opacity-60" />
             </p>
           </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 3. SAHIYARI PORTFOLIO PAGE
// ---------------------------------------------------------
function PortfolioContent({ setPage }) {
  usePageScroll();

  const besanProducts = [
    { name: "Ultra Premium Besan", use: "Khaman, Ganthiya, Fafda", packs: "10 KG, 30 KG, 50 KG", note: "Made from high-quality chana dal, untouched by hand", theme: "bg-amber-50 border-amber-200 text-amber-900" },
    { name: "Premium Besan", use: "Ganthiya, Fafda, Papdi", packs: "10 KG, 30 KG, 50 KG", note: "Made from quality gram flour, untouched by hand", theme: "bg-slate-50 border-slate-200 text-slate-900" },
    { name: "White Gold Besan", use: "Ganthiya, Papdi, Khandvi", packs: "10 KG, 30 KG, 50 KG", note: "Made from high-quality chana dal, untouched by hand", theme: "bg-[#faf8f0] border-[#e6debc] text-neutral-800" },
    { name: "Special Besan", use: "Papdi, Gathiya, Packed Namkeen", packs: "10 KG, 30 KG, 50 KG", note: "Made from high-quality chana dal, untouched by hand", theme: "bg-blue-50 border-blue-200 text-blue-900" },
    { name: "Deluxe Besan", use: "Bhajiya, Motichur Laddu, Sev, Masala Namkeen", packs: "10 KG, 30 KG, 50 KG", note: "Made from high-quality chana dal, untouched by hand", theme: "bg-orange-50 border-orange-200 text-orange-900" },
    { name: "Coarse Besan", use: "Motichur Laddu, Mohanthal, Fulwadi, Sweets", packs: "10 KG, 30 KG, 50 KG", note: "Granular, not-so-finely ground gram flour", theme: "bg-lime-50 border-lime-200 text-lime-900" },
    { name: "Fine Besan", use: "Ganthiya, Bhajiya, Pakoda, Home Use", packs: "500 GM, 1 KG, 5 KG", note: "Smooth texture, rich taste, made from high-quality chana dal", theme: "bg-yellow-50 border-yellow-200 text-yellow-900" },
  ];

  const daalProducts = [
    { name: "Silky Daal Chana Daal", use: "Home, Restaurant, Namkeen Recipes", packs: "1 KG, 30 KG", note: "Smooth texture, rich taste, naturally cultivated & Sortex processed" },
    { name: "Dry Daal Chana Daal", use: "Home, Restaurant, Namkeen Recipes", packs: "30 KG", note: "Authentic flavor, hygienically processed & nutrient rich" },
  ];

  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <img src={IMAGES.grainsAbstract} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Grains" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">Product Ecosystem</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            SAHIYARI <br/>PORTFOLIO.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                THE SAHIYARI PRODUCT ECOSYSTEM.
              </h2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                Sahiyari is positioned around purity, rich taste, high nutritional value, freshness, and longer shelf-life. The product range serves household consumers, restaurants, namkeen manufacturers, sweets manufacturers, and bulk buyers.
              </p>
            </div>

            {/* Besan Range */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px bg-black/10 flex-grow"></span>
                <h3 className="text-xl font-medium tracking-widest uppercase text-slate-900">Gram Flour / Besan Range</h3>
                <span className="h-px bg-black/10 flex-grow"></span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {besanProducts.map((prod, i) => (
                  <div key={i} className={`rounded-[24px] border p-8 flex flex-col hover:shadow-lg transition-shadow ${prod.theme}`}>
                    <h4 className="text-2xl font-semibold tracking-tight mb-4">{prod.name}</h4>
                    <div className="space-y-4 flex-grow mb-6">
                      <div>
                        <p className="text-[9px] font-bold tracking-widest uppercase opacity-60 mb-1">Ideal For</p>
                        <p className="text-[14px] font-medium opacity-90">{prod.use}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest uppercase opacity-60 mb-1">Packing Available</p>
                        <p className="text-[14px] font-medium opacity-90">{prod.packs}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-black/10">
                      <p className="text-[12px] opacity-80 italic">{prod.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daal Range */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px bg-black/10 flex-grow"></span>
                <h3 className="text-xl font-medium tracking-widest uppercase text-slate-900">Chana Daal Range</h3>
                <span className="h-px bg-black/10 flex-grow"></span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {daalProducts.map((prod, i) => (
                  <div key={i} className="rounded-[24px] border border-yellow-200 bg-gradient-to-br from-yellow-50 to-white p-8 flex flex-col hover:shadow-lg transition-shadow">
                    <h4 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">{prod.name}</h4>
                    <div className="space-y-4 flex-grow mb-6">
                      <div>
                        <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-1">Ideal For</p>
                        <p className="text-[14px] font-medium text-slate-950">{prod.use}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold tracking-widest uppercase text-slate-500 mb-1">Packing Available</p>
                        <p className="text-[14px] font-medium text-slate-950">{prod.packs}</p>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-yellow-200/50">
                      <p className="text-[12px] text-slate-500 italic">{prod.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 4. OPERATIONS & SCALE PAGE
// ---------------------------------------------------------
function OperationsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <img src={IMAGES.processingLine} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Processing Facility" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">Operations & Scale</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            MANUFACTURING.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        
        {/* Manufacturing Flow */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                PROCESSING BUILT FOR SCALE, QUALITY, AND CONSISTENCY.
              </h2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                The Zumba Foods manufacturing base strengthens Invade Mill’s ability to serve both bulk and consumer food categories. The Sahiyari range is built around high-quality chana dal, hygienic processing, untouched-by-hand handling, and product consistency across multiple pack sizes.
              </p>
            </div>

            <div className="relative mt-20">
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-yellow-100 via-yellow-400 to-yellow-100 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                {[
                  { step: '01', title: 'Raw Chana Selection', icon: Wheat },
                  { step: '02', title: 'Cleaning & Sorting', icon: ShieldCheck },
                  { step: '03', title: 'Milling / Splitting', icon: Factory },
                  { step: '04', title: 'Besan Processing', icon: Layers },
                  { step: '05', title: 'Bulk & Consumer Packing', icon: PackageCheck },
                  { step: '06', title: 'Institutional Supply', icon: Truck }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-white border border-yellow-200 shadow-lg flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform bg-yellow-50 text-slate-800 hover:text-yellow-600">
                      <div className="absolute -top-3 bg-slate-900 text-white px-2 py-1 rounded-full text-[10px] font-bold tracking-widest border border-white/20">
                        {item.step}
                      </div>
                      <item.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[14px] font-medium text-neutral-900 tracking-tight">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {['Chana Daal & Besan focused facility', 'Bulk and consumer pack capability', 'Institutional buyer relevance', 'Gujarat manufacturing location', 'Product range across gram flour & dal', 'Quality-led branded staple portfolio'].map((highlight, i) => (
                <div key={i} className="bg-neutral-50 px-6 py-4 rounded-xl border border-black/5 flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-yellow-500 flex-shrink-0" />
                  <span className="text-[13px] text-neutral-800 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Road Ahead */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-900 text-white">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-16">
              <p className="text-[10px] font-bold tracking-ultra text-yellow-400 uppercase mb-4">Growth Roadmap</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1]">
                THE ROAD AHEAD.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: "Phase 1", title: "Acquisition Integration", items: ["Governance alignment", "Manufacturing review", "Product and packaging audit", "Brand and operational consolidation"] },
                { phase: "Phase 2", title: "Quality & Capacity Optimization", items: ["Production process strengthening", "Quality checks", "SKU rationalization", "Institutional buyer readiness"] },
                { phase: "Phase 3", title: "Market Expansion", items: ["B2B buyer outreach", "Distributor/channel strengthening", "Retail packaging push", "Regional market development"] },
                { phase: "Phase 4", title: "Investor Reporting & Scale", items: ["Performance dashboards", "Capacity utilization tracking", "Product-wise contribution view", "Export and institutional supply roadmap"] }
              ].map((phase, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[24px] hover:bg-white/10 transition-colors">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-yellow-400 mb-2">{phase.phase}</p>
                  <h3 className="text-xl font-medium mb-6 text-white">{phase.title}</h3>
                  <ul className="space-y-4">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[13px] text-slate-300 font-light leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5. DECISION MAKERS PAGE
// ---------------------------------------------------------
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
    { name: "Trevor D'souza", title: "Director - Operations" },
    //{ name: "Hitesh Waghela", title: "CFO, India" }
  ];

  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <img src={IMAGES.decisionMakersHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Farmers" />
        
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">DECISION MAKERS</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            BOARD <br />MEMBERS.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1200px] mx-auto w-full reveal-on-scroll">
            
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-yellow-400"></span>
                <p className="text-[10px] font-bold tracking-[0.2em] text-slate-700 uppercase">A Message from Leadership</p>
                <span className="w-12 h-[1px] bg-yellow-400"></span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter text-neutral-900 leading-[1.15] mb-16 max-w-5xl">
                "Our focus has always been on building <span className="font-medium text-slate-800">disciplined operating structures</span> that empower farmers and scale across borders."
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start pt-12 lg:pt-16 border-t border-black/10">
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left w-full">
                 <div className="w-20 h-20 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-6 border border-slate-200">
                   <span className="text-xl font-medium tracking-widest">KC</span>
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-2">Kamlesh M. Chotalia</h3>
                 <p className="text-[11px] font-bold tracking-widest text-slate-600 uppercase mb-8">Executive Director & Chairman<br/>Kigali, Rwanda</p>
                 <a href="https://www.linkedin.com/in/kc6666/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white bg-slate-900 hover:bg-slate-800 px-8 py-4 rounded-full transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-1">
                   <Linkedin size={16} />
                   <span className="text-[11px] font-bold tracking-widest uppercase">Connect</span>
                 </a>
              </div>
              <div className="md:w-2/3 space-y-6 text-black/60 font-light text-[15px] md:text-[17px] leading-relaxed w-full">
                <p className="text-xl text-black/80 font-medium mb-4">
                  Driving regional expansion through structured growth.
                </p>
                <p>
                  Kamlesh M. Chotalia (KC) brings over 28 years of leadership experience across agriculture and food processing. He has played a key role in shaping Invade Mill’s regional expansion and building disciplined operating structures across all our markets.
                </p>
                <p>
                  As Chairman and Executive Director, he oversees strategic growth, high-level partnerships, and rigorous corporate governance. His vision guides Invade Mill’s long-term direction across its global footprint, ensuring that our operations remain both profitable and sustainably impactful.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-slate-600 uppercase mb-4">The Leadership</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                DIRECTORS & CORE TEAM.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, i) => (
                <div key={i} className="bg-white border border-black/5 rounded-[24px] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500">
                      <span className="text-sm font-medium tracking-widest">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-neutral-900">{member.name}</h3>
                    <p className="text-slate-600 font-medium text-[11px] tracking-widest uppercase leading-relaxed max-w-[240px]">{member.title}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                    <a href="#" className="inline-flex items-center gap-2 text-black/30 hover:text-slate-600 transition-colors">
                      <Linkedin size={18} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                    </a>
                    <ArrowUpRight size={18} className="text-black/10 group-hover:text-yellow-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6. INVESTOR RELATIONS PAGE
// ---------------------------------------------------------
function InvestorsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <img src={IMAGES.corporateAbstract} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" alt="Investors" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">Investor Relations</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            STRATEGIC <br/>RATIONALE.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                WHY THIS ACQUISITION MATTERS.
              </h2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                The 100% takeover of Zumba Foods represents a calculated expansion into food processing and branded staples, aligning with Invade Mill’s long-term vision of vertical integration and value addition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Value Addition", desc: "Invade Mill moves further up the food value chain from commodity movement into processing and branded staple products.", icon: Scale },
                { title: "Brand Portfolio", desc: "Sahiyari gives the group an owned product identity across Besan and Chana Daal categories, reducing reliance on unbranded bulk trade.", icon: Target },
                { title: "Bulk + Consumer Play", desc: "The portfolio supports both institutional/bulk requirements and retail/consumer pack opportunities, diversifying revenue streams.", icon: Layers },
                { title: "Gujarat Manufacturing Base", desc: "A processing location in Gujarat strengthens regional sourcing, production agility, and strategic market access.", icon: MapPin },
                { title: "Margin Expansion Potential", desc: "Value-added processing can support stronger unit economics compared to plain commodity trading, subject to execution and market conditions.", icon: LineChart },
                { title: "Scalable Platform", desc: "The acquisition creates a platform that can be expanded across product variants, geographies, B2B buyers, retail channels, and export opportunities.", icon: BarChart3 }
              ].map((card, i) => (
                <div key={i} className="bg-neutral-50 rounded-[24px] p-8 border border-black/5 hover:border-yellow-200 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-colors">
                    <card.icon size={20} />
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3">{card.title}</h3>
                  <p className="text-black/60 font-light text-[14px] leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {}
        {/* NEW SECTION 1: VALUE CREATION & SYNERGIES */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400 rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-yellow-400 uppercase mb-4">Strategic Synergies</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6">
                VALUE CREATION MODEL.
              </h2>
              <p className="text-slate-300 font-light text-[15px] leading-relaxed">
                The integration of Zumba Foods into the Invade Mill ecosystem is designed to unlock immediate operational efficiencies while expanding long-term revenue channels across institutional and retail markets.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-8">
                  <LineChart size={24} />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-widest text-white mb-6">Revenue Synergies</h3>
                <ul className="space-y-6">
                  {[
                    "Cross-selling Sahiyari branded products to Invade Mill's existing FMCG network.",
                    "Expanding distribution reach beyond Gujarat using Invade's national logistics.",
                    "Introducing bulk institutional packaging (30KG/50KG) for B2B buyers.",
                    "New product development utilizing Invade's broader commodity access."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[14px] text-slate-300 font-light">
                      <CheckCircle2 size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 md:p-12 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 flex items-center justify-center mb-8">
                  <Scale size={24} />
                </div>
                <h3 className="text-2xl font-light uppercase tracking-widest text-white mb-6">Cost Synergies</h3>
                <ul className="space-y-6">
                  {[
                    "Centralized procurement of raw Chana utilizing Invade's direct-to-farm networks.",
                    "Elimination of third-party milling premiums by keeping processing in-house.",
                    "Shared warehousing and supply chain logistics to reduce transport overhead.",
                    "Optimization of packaging costs through group-level bulk purchasing."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[14px] text-slate-300 font-light">
                      <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* NEW SECTION 2: MARKET DYNAMICS */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-neutral-50">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-4">Market Dynamics</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase text-neutral-900 leading-[1.1] mb-6">
                  THE SHIFT TO <br/>BRANDED STAPLES.
                </h2>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-6">
                  The Indian market is experiencing a massive structural shift. Consumers and institutional buyers alike are moving away from unorganized, loose commodities toward hygienically packed, branded staples that guarantee purity and safety.
                </p>
                <p className="text-black/60 font-light text-[15px] leading-relaxed mb-8">
                  The Sahiyari portfolio positions Invade Mill perfectly at the intersection of this transition. By controlling the milling process and the brand, we capture the margin that traditionally rests with middlemen.
                </p>
                <div className="flex gap-8 border-t border-black/10 pt-8">
                  <div>
                    <h4 className="text-3xl font-light text-slate-900 mb-1">Untouched</h4>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-yellow-600">By Hand Process</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-light text-slate-900 mb-1">FSSAI</h4>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-yellow-600">Certified Quality</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm">
                    <Target size={32} className="text-yellow-500 mb-6" strokeWidth={1.5} />
                    <h4 className="text-lg font-medium text-slate-900 mb-2">Consumer Trust</h4>
                    <p className="text-[13px] text-black/50 leading-relaxed">Predictable quality across every batch builds deep household loyalty.</p>
                  </div>
                  <div className="bg-white rounded-[24px] p-8 border border-black/5 shadow-sm translate-y-8">
                    <Building2 size={32} className="text-yellow-500 mb-6" strokeWidth={1.5} />
                    <h4 className="text-lg font-medium text-slate-900 mb-2">B2B Compliance</h4>
                    <p className="text-[13px] text-black/50 leading-relaxed">Meeting the strict auditing standards of national namkeen and sweets manufacturers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {}
        {/* NEW SECTION 3: INTEGRATION ROADMAP */}
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh] bg-white border-t border-black/5">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-widest text-yellow-600 uppercase mb-4">Execution Plan</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase text-neutral-900 leading-[1.1] mb-6">
                POST-MERGER INTEGRATION.
              </h2>
            </div>
            
            <div className="relative">
              <div className="hidden lg:block absolute top-[50%] left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {[
                  { title: "Phase 1: Alignment", desc: "Consolidating corporate governance, financial reporting, and compliance frameworks to match Invade Mill standards." },
                  { title: "Phase 2: Optimization", desc: "Upgrading milling infrastructure, implementing strict quality control checks, and rationalizing the SKU portfolio." },
                  { title: "Phase 3: B2B Expansion", desc: "Integrating Sahiyari's 30KG/50KG bulk packs into Invade's existing institutional supply contracts." },
                  { title: "Phase 4: Retail Scale", desc: "Expanding consumer pack distribution into new geographical territories utilizing shared logistics." }
                ].map((step, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm hover:shadow-lg transition-shadow group relative">
                    <div className="w-8 h-8 rounded-full bg-slate-900 text-yellow-400 flex items-center justify-center font-bold text-[12px] mb-6 group-hover:scale-110 transition-transform">
                      {idx + 1}
                    </div>
                    <h3 className="text-lg font-medium text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-[13px] text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <p className="text-[11px] font-medium text-yellow-800 uppercase tracking-widest text-center">
                This website is for information purposes only and does not constitute an offer, solicitation, or investment advice. Forward-looking statements regarding synergies and margin expansions are subject to execution risks and market conditions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 7. CONTACT PAGE
// ---------------------------------------------------------
function ContactContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-[60vh] w-full flex flex-col justify-end pb-[10vh] bg-slate-900 text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-overlay z-0"></div>
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-yellow-400 uppercase mb-4">Connect</p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight uppercase leading-[1.05] text-white">
            INVESTOR & BUSINESS ENQUIRIES.
          </h1>
        </div>
      </section>

      <main className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              <div className="lg:w-[50%] w-full">
                <h3 className="text-3xl font-light uppercase tracking-widest text-slate-900 mb-10">Send an Enquiry</h3>
                <form className="space-y-8 w-full" onSubmit={(e) => { e.preventDefault(); alert('Enquiry form submitted visually (placeholder).'); }}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Name</label>
                       <input type="text" required className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors bg-transparent" placeholder="John Doe" />
                     </div>
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Company</label>
                       <input type="text" className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors bg-transparent" placeholder="Organization" />
                     </div>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Email Address</label>
                       <input type="email" required className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors bg-transparent" placeholder="john@example.com" />
                     </div>
                     <div>
                       <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Phone</label>
                       <input type="tel" className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors bg-transparent" placeholder="+91..." />
                     </div>
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Enquiry Type</label>
                     <select className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors bg-transparent text-neutral-800">
                       <option>Investor Enquiry</option>
                       <option>Institutional Buying</option>
                       <option>Distribution</option>
                       <option>Partnership</option>
                       <option>Media</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Message</label>
                     <textarea required className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-yellow-500 transition-colors h-24 resize-none bg-transparent" placeholder="Detail your requirements..."></textarea>
                   </div>
                   <button type="submit" className="bg-slate-900 text-white px-12 py-4 text-[11px] font-bold tracking-ultra uppercase rounded-full hover:bg-yellow-400 hover:text-slate-900 transition-colors mt-6 w-full sm:w-auto shadow-xl">
                     Submit Enquiry
                   </button>
                </form>
              </div>

              <div className="lg:w-[50%] w-full">
                 <div className="bg-neutral-50 rounded-[32px] p-8 md:p-12 border border-black/5 mb-8">
                   <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-6">Zumba Foods / Sahiyari Manufacturing Base</h3>
                   <div className="space-y-6">
                     <div className="flex items-start gap-4 text-black/70">
                       <MapPin size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                       <p className="text-[14px] leading-relaxed">
                         S. No. 513, Khadalpur, Ta. Visnagar,<br/>
                         Dist. Mehsana - 384315,<br/>
                         Gujarat, India
                       </p>
                     </div>
                     <div className="flex items-center gap-4 text-black/70">
                       <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                       <p className="text-[14px] font-medium">+91 97141 45445</p>
                     </div>
                     <div className="flex items-center gap-4 text-black/70">
                       <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                       <p className="text-[14px] font-medium">info@invademill.com</p>
                     </div>
                     <div className="flex items-center gap-4 text-black/70">
                       <Globe2 size={20} className="text-yellow-500 flex-shrink-0" />
                       <p className="text-[14px] font-medium">www.sahiyariindia.com</p>
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-slate-100 rounded-[24px] p-8 border border-slate-200">
                      <h4 className="text-[11px] font-bold tracking-widest uppercase text-slate-700 mb-2">Invade Mill HQ</h4>
                      <p className="text-[13px] text-slate-600">For corporate and broad Invade Mill inquiries.</p>
                    </div>
                    <div className="bg-yellow-50 rounded-[24px] p-8 border border-yellow-100">
                      <h4 className="text-[11px] font-bold tracking-widest uppercase text-yellow-600 mb-2">Investor Relations</h4>
                      <p className="text-[13px] text-slate-600">For acquisition metrics and corporate governance.</p>
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
