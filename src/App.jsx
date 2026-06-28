import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight,
  MapPin, 
  Menu, 
  X, 
  Globe2,
  BarChart3,
  PackageCheck,
  Building2,
  Factory,
  Mail,
  Phone,
  Briefcase,
  ShieldCheck,
  Wheat,
  Scale,
  Target,
  LineChart,
  Layers,
  CheckCircle2,
  Store,
  Truck,
  Linkedin,
  TrendingUp,
  Leaf,
  Award,
  Users,
  FileText,
  Building,
  PieChart,
  Network,
  Clock,
  Activity,
  Shield
} from 'lucide-react';

const IMAGES = {
  heroMain: "https://video.wixstatic.com/video/548938_407546d1a57f4e269cb15b207d40df91/480p/mp4/file.mp4", 
  millingFacility: "https://images.unsplash.com/photo-1495107336281-19d4f7a7d0aa?auto=format&fit=crop&w=1600&q=80",
  grainsAbstract: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80",
  processingLine: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
  corporateAbstract: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  handshake: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
  logistics: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
  fields: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
  decisionMakersHero: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1600",
  investorsHero: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600",
  stockMarket: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600",
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

      {}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-slate-950 border-b border-white/10 shadow-2xl py-3 text-white' 
        : 'bg-transparent border-transparent py-6 text-white'
      }`}>
        <div className="flex justify-between items-center px-[1%] w-[100vw]">
          
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer flex items-center gap-4 group">
            <div className="flex items-center gap-6 bg-slate-950/40 backdrop-blur-sm px-6 py-2 rounded-full border border-white/5">
              <img src={IMAGES.invadeMillLogo} alt="Invade Mill" className="h-[40px] w-auto object-contain drop-shadow-md" />
              <div className="w-px h-8 bg-white/20 hidden md:block"></div>
              <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[35px] w-auto object-contain drop-shadow-md" />
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
      <div className="flex-grow w-[100vw]">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} />}
        {currentPage === 'acquisition' && <AcquisitionContent setPage={setCurrentPage} />}
        {currentPage === 'portfolio' && <PortfolioContent setPage={setCurrentPage} />}
        {currentPage === 'operations' && <OperationsContent setPage={setCurrentPage} />}
        {currentPage === 'decision-makers' && <DecisionMakersContent setPage={setCurrentPage} />}
        {currentPage === 'investors' && <InvestorsContent setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} />}
      </div>

      {}
      <footer className="bg-slate-950 pt-24 pb-12 px-[3%] relative z-10 border-t border-white/5 mt-auto text-white w-[100vw]">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-6 mb-8">
                <img src={IMAGES.invadeMillLogo} alt="Invade Mill" className="h-[40px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
                <div className="w-px h-8 bg-white/20"></div>
                <img src={IMAGES.sahiyariLogo} alt="Sahiyari" className="h-[35px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
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
              DISCLAIMER: This website is prepared for general information and stakeholder communication regarding the acquisition of Zumba Foods Pvt. Ltd. by Invade Mill. It does not constitute an offer, invitation, solicitation, investment recommendation, or financial advice. Operational capacities (e.g., 70 TPD) and processing information are based on company-provided details and may be updated from time to time. Forward-looking statements regarding synergies and margin expansions are subject to execution risks and market conditions.
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

// ---------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------
function HomeContent({ setPage }) {
  usePageScroll();
  return (
    <>
      {}
      <section className="sticky top-0 h-screen w-[100vw] flex flex-col justify-center overflow-hidden z-0 bg-slate-950 px-[3%] pt-20">
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
            INVADE MILL <br />
            TAKES OVER <br/>
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
        
        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh]">
          <div className="w-full reveal-on-scroll">
            <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">The Transaction</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-12 uppercase max-w-5xl">
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

        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-slate-950 text-white">
          <div className="w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-7/12">
                <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-6">Target Company Profile</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] mb-8 text-white">
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
        
        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-white">
          <div className="w-full reveal-on-scroll">
             <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Core Rationale</p>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-12 uppercase max-w-5xl">
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

        {}
        <section className="px-[3%] w-[100vw] py-[15vh] bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-10 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4">
            <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          <div className="w-full relative z-10 reveal-on-scroll">
            <p className="text-[10px] font-bold tracking-ultra text-amber-500 uppercase mb-8">Leadership Perspective</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter leading-[1.1] mb-12 max-w-5xl uppercase text-slate-100">
              "This acquisition is not just about capacity. It is about <span className="font-medium text-amber-400">controlling the narrative of quality</span> from the farm gate directly to the consumer's plate."
            </h2>
            <div>
              <p className="text-lg font-medium text-white tracking-wide uppercase">Kamlesh M. Chotalia</p>
              <p className="text-[11px] text-slate-400 tracking-widest uppercase mt-2">Chairman & Executive Director, Invade Agro Global</p>
            </div>
          </div>
        </section>

        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-amber-400 text-slate-950">
          <div className="w-full reveal-on-scroll">
             <div className="flex flex-col lg:flex-row gap-16 items-start">
                <div className="lg:w-7/12">
                   <p className="text-[10px] font-bold tracking-ultra text-slate-900 uppercase mb-6">Strategic Location</p>
                   <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] mb-8 text-slate-950">
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

        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-slate-50 border-y border-slate-200">
          <div className="w-full reveal-on-scroll">
             <div className="max-w-4xl mb-16">
                <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-6">Value Chain Architecture</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.05] text-slate-900">
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
        
        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-white">
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
              <div className="lg:w-1/2 w-full">
                 <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Product Portfolio</p>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-8 uppercase">
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
        
        {}
        <section className="px-[3%] w-[100vw] py-[10vh] lg:py-[15vh] bg-slate-50 border-t border-slate-200">
          <div className="w-full reveal-on-scroll">
             <div className="max-w-4xl mb-12">
                <p className="text-[10px] font-bold tracking-ultra text-slate-500 uppercase mb-4">Manufacturing</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-slate-900 leading-[1.05] mb-6 uppercase">
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
