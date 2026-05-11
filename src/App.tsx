import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { Smartphone, MessageCircle, Star, X, Clock, CheckCircle2, ChevronRight, Circle } from 'lucide-react';

import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeType, setActiveType] = useState('All');
  const [selectedRepair, setSelectedRepair] = useState<any | null>(null);
  const [activeBrandIndex, setActiveBrandIndex] = useState(0);
  
  const getWhatsAppUrl = (problem: string) => {
    const message = `Hello iPhone Guru, I have a problem with my device.\n\nService Needed: ${problem}\n\nKindly help me with a quote.`;
    return `https://wa.me/917880973121?text=${encodeURIComponent(message)}`;
  };

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const FAQS = [
    {
      question: "Will my data be safe?",
      answer: "Never. All physical repairs are performed without requiring device unlock. For data recovery, everything is done with your explicit consent."
    },
    {
      question: "What quality of parts do you use?",
      answer: "We use Grade-A OEM-equivalent parts. We'll always tell you exactly what part is used before we start."
    },
    {
      question: "What if the device can't be fixed?",
      answer: "If we can't fix it, you pay nothing. For data recovery we have a strict no-data, no-fee guarantee. Includes 6 months warranty."
    }
  ];

  const BRANDS = [
    { name: 'Apple', logo: '', color: '#FFFFFF' },
    { name: 'Samsung', logo: 'SAMSUNG', color: '#FFFFFF', textLogo: true },
    { name: 'Vivo', logo: 'vivo', color: '#FFFFFF', textLogo: true },
    { name: 'Oppo', logo: 'OPPO', color: '#FFFFFF', textLogo: true },
    { name: 'OnePlus', logo: '1+', color: '#FFFFFF', textLogo: true },
    { name: 'Realme', logo: 'realme', color: '#FFFFFF', textLogo: true },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveBrandIndex((prev) => (prev + 1) % BRANDS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const REPAIR_TYPES = [
    'All', 
    'Screen Problem', 
    'Charging Issue', 
    'Liquid Damage', 
    'Battery Replacement', 
    'Software', 
    'Speaker / Receiver', 
    'Data Backup', 
    'Laptop Services', 
    'Keyboard Issue', 
    'Temper Glass', 
    'Accessories', 
    'Other'
  ];

  const REPAIR_ITEMS = [
    {
      category: 'iPhone',
      type: 'Screen Problem',
      title: 'iPhone Precision<br />Screen Change',
      label: 'iPhone Specialist',
      image: 'https://images.unsplash.com/photo-1601524909162-cd872528dec5?q=80&w=2070',
      description: 'Restoring visual clarity and touch response with certified high-fidelity display panels.',
      issues: ['Cracked glass', 'Touch unresponsiveness', 'Dead pixels', 'Vertical lines'],
      time: '45-60 Minutes',
      parts: ['OEM Grade OLED', 'Water Resistance Gasket', 'TrueTone Programmer'],
    },
    {
      category: 'Samsung',
      type: 'Screen Problem',
      title: 'Premium Samsung<br />Display Fix',
      label: 'Display Expert',
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=2070',
      description: 'Precision display replacement for Samsung flagships using original curved panel technology.',
      issues: ['Screen flicker', 'Glass splintering', 'Internal bleeding', 'Non-functional S-Pen'],
      time: '60-90 Minutes',
      parts: ['Genuine Dynamic AMOLED', 'Original Mid-frame', 'Heat Dissipating Tape'],
    },
    {
      category: 'iPhone',
      type: 'Battery Replacement',
      title: 'iPhone Battery<br />Health Revival',
      label: 'Energy Restoration',
      image: 'https://images.unsplash.com/photo-1591405351990-4726e331f121?q=80&w=2070',
      description: 'Restoring peak power performance with high-capacity certified power cells.',
      issues: ['Rapid drain', 'Unexpected shutdowns', 'Swollen battery', 'Service warning'],
      time: '30-45 Minutes',
      parts: ['BMS Synchronized Battery', 'Battery Seal', 'Cycle Count Reset'],
    },
    {
      category: 'Premium',
      type: 'Liquid Damage',
      title: 'Advanced Water<br />Damage Recovery',
      label: 'Laboratory Grade',
      image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?q=80&w=2070',
      description: 'Multi-stage ultrasonic cleaning and board-level micro-soldering for liquid-ingress devices.',
      issues: ['No power', 'Corroded connectors', 'Intermittent shorting', 'Foggy lenses'],
      time: '24-48 Hours',
      parts: ['Isopropyl Bath', 'Micro-component Replacement', 'Logic Board Shielding'],
    },
    {
      category: 'Premium',
      type: 'Data Backup',
      title: 'Advanced Data<br />Recovery',
      label: 'Secure Retrieval',
      image: 'https://images.unsplash.com/photo-1616110129282-26307d7c67cc?q=80&w=2070',
      description: 'Expert retrieval of encrypted data from logically or physically damaged storage chips.',
      issues: ['Total power failure', 'Corrupted partitions', 'Broken logic boards', 'System boot loops'],
      time: '3-7 Business Days',
      parts: ['NAND Flash Reader', 'Micro-solder Station', 'Secure Backup Drive'],
    },
    {
      category: 'Samsung',
      type: 'Charging Issue',
      title: 'Charging Port<br />Replacement',
      label: 'Power Delivery',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070',
      description: 'Replacing worn or damaged charging connectors to restore fast and stable power transfer.',
      issues: ['Loose port', 'Slow charging', 'Cable not recognized', 'Moisture detected error'],
      time: '45-60 Minutes',
      parts: ['OEM Grade Dock Connector', 'Precision Flex Cable', 'Port Dust Seal'],
    },
    {
      category: 'iPhone',
      type: 'Software',
      title: 'System & Software<br />Optimization',
      label: 'Software Fix',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070',
      description: 'Resolving OS hangs, bricked devices, and complex software-related performance bottlenecks.',
      issues: ['Boot loops', 'Update failures', 'App crashes', 'Slow performance'],
      time: '1-3 Hours',
      parts: ['Fresh OS Flash', 'Cache Cleanup', 'License Verification'],
    },
    {
      category: 'Premium',
      type: 'Laptop Services',
      title: 'Laptop Hardware<br />Refurbishment',
      label: 'Computing Expert',
      image: 'https://images.unsplash.com/photo-1517336714460-d1508397489a?q=80&w=1944',
      description: 'Board-level repairs for MacBooks and laptops, including chip replacement and RAM upgrades.',
      issues: ['Overheating', 'No display', 'Hinge damage', 'Logic board failure'],
      time: '2-5 Business Days',
      parts: ['High-Thermal Paste', 'Genuine Components', 'Performance Testing'],
    },
    {
      category: 'All',
      type: 'Other',
      title: 'Bespoke Device<br />Service',
      label: 'Custom Solutions',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070',
      description: 'Specialized diagnostic for unique device issues that don\'t fall under standard categories.',
      issues: ['Unidentified bugs', 'Niche device repairs', 'Cosmetic restoration', 'Custom upgrades'],
      time: 'Variable',
      parts: ['Precision Diagnostics', 'Custom Sourcing', 'Expert Consultation'],
    },
    {
      category: 'All',
      type: 'Speaker / Receiver',
      title: 'Audio Output<br />Restoration',
      label: 'Audio Specialist',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2070',
      description: 'Fixing muffled sound, crackling speakers, and non-functional earpieces.',
      issues: ['No sound', 'Low volume', 'Distorted audio', 'Mic issues'],
      time: '45-60 Minutes',
      parts: ['OEM Grade Speaker', 'Dust Mesh Kit', 'Acoustic Seal'],
    },
    {
      category: 'Premium',
      type: 'Keyboard Issue',
      title: 'Keyboard & Trackpad<br />Replacement',
      label: 'Input Expert',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83aca2?q=80&w=2070',
      description: 'Replacing sticky, non-responsive, or damaged keys and trackpads for laptops.',
      issues: ['Key sticking', 'No response', 'Trackpad jitter', 'Spill damage'],
      time: '2-4 Hours',
      parts: ['Full Backlit Keyboard', 'Precision Trackpad', 'Internal Flex Cables'],
    },
    {
      category: 'All',
      type: 'Temper Glass',
      title: '9H Hardness<br />Screen Protection',
      label: 'Impact Guard',
      image: 'https://images.unsplash.com/photo-1616110129282-26307d7c67cc?q=80&w=2070',
      description: 'Professional application of premium tempered glass for ultimate scratch and impact resistance.',
      issues: ['Screen protection', 'Scratch prevention', 'Impact absorption'],
      time: '5-10 Minutes',
      parts: ['9H Tempered Glass', 'Alignment Frame', 'Oleophobic Coating'],
    },
    {
      category: 'All',
      type: 'Accessories',
      title: 'Certified Power &<br />Audio Accessories',
      label: 'Original Gear',
      image: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070',
      description: 'Sourcing original and certified cables, chargers, and cases for all major brands.',
      issues: ['Charging cables', 'Wall adapters', 'Protective cases', 'Wireless chargers'],
      time: 'Instant',
      parts: ['MFi Cables', 'Fast Chargers', 'Military Grade Cases'],
    }
  ];

  const filteredRepairs = REPAIR_ITEMS.filter(item => {
    const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
    const typeMatch = activeType === 'All' || item.type === activeType;
    return categoryMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Inter',-apple-system,sans-serif] selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
      {/* Minimalist Navigation */}
      <nav className="fixed top-0 w-full z-[100] border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-10 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black flex items-center justify-center rounded-lg">
              <Smartphone className="w-5 h-5 text-white stroke-[2]" />
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase text-slate-900">iPhone Guru<span className="text-emerald-500">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-slate-500">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-black transition-colors">Reviews</a>
            <a href="#process" className="hover:text-black transition-colors">Process</a>
            <a href="#contact" className="hover:text-black transition-colors">Contact</a>
          </div>
          <div>
            <a href="https://wa.me/917880973121?text=Hello%20iPhone%20Guru%2C%20I%20have%20a%20problem%20with%20my%20device.%0A%0AProblem%3A%20%0AMy%20mobile%20number%3A%20" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white flex items-center gap-2 px-5 py-2 rounded-full shadow-lg shadow-emerald-100 hover:scale-105 transition-all group">
              <MessageCircle className="w-4 h-4 text-white fill-current" />
              <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-16 px-10 text-center flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Certified Apple & Samsung Technicians
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
             <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
             No. 1 in Bengaluru iDevice Repair
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl leading-[1.1] font-bold tracking-tight mb-6">
          Your device,<br /><span className="text-slate-400">back to perfect.</span>
        </h1>
        <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Doorstep replacement in 45 mins.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {['All', 'iPhone', 'Samsung', 'Pixel', 'Premium'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveType('All'); // Reset type filter when category changes
              }}
              className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white border border-slate-100 text-slate-500 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {REPAIR_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.15em] transition-all ${
                activeType === type
                  ? 'bg-emerald-500 text-white shadow-md'
                  : 'bg-slate-50 border border-slate-200 text-slate-400 hover:border-slate-400 hover:text-slate-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        <p className="text-[10px] text-slate-400 font-medium italic mt-2">
          Kindly Select "Other" in case your issue is not listed above.
        </p>
      </header>

      {/* Device Expertise Swiper (Inspired by User Image) */}
      <section className="py-12 bg-slate-950 text-white overflow-hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="expertiseSwiper pb-12"
        >
          {/* iPhone Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('iPhone Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iPhone" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">iPhone</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                {['Battery Issues', 'Screen Issues', 'Liquid Damage', 'Camera Issues', 'Software', 'Glitches'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* iPad Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('iPad Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iPad" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">iPad</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                {['Battery Issues', 'Screen Issues', 'Liquid Damage', 'Camera Issues', 'Software', 'Glitches'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* iWatch Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('iWatch Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iWatch" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">iWatch</h3>
              <div className="space-y-5">
                {['Battery Life', 'Pairing Issues', 'Screen Responsiveness', 'Charging Problems'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* MacBook Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('MacBook Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517336714460-d1508397489a?q=80&w=1944" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="MacBook" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">MacBook</h3>
              <div className="space-y-5">
                {['Battery Issues', 'Display Issues', 'Overheating', 'Startup Problems'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* iMac Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('iMac Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="iMac" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">iMac</h3>
              <div className="space-y-5">
                {['Hard Disk Repair', 'Liquid Damage'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>

          {/* Smart Phones Card */}
          <SwiperSlide 
            className="w-[340px] md:w-[400px] h-fit bg-slate-900 overflow-hidden rounded-[40px] border border-slate-800 group hover:border-emerald-500/30 transition-all duration-500 ease-out opacity-40 [&.swiper-slide-active]:opacity-100 scale-90 [&.swiper-slide-active]:scale-100 cursor-pointer"
            onClick={() => window.open(getWhatsAppUrl('Smartphone Repair'), '_blank')}
          >
            <div className="h-56 relative overflow-hidden">
              <img src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Smart Phones" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            </div>
            <div className="p-10">
              <h3 className="text-4xl font-bold mb-8">Phones</h3>
              <div className="grid grid-cols-2 gap-y-5 gap-x-4">
                {['Battery Issues', 'Screen Issues', 'Liquid Damage', 'Camera Issues', 'Software', 'Glitches'].map((issue) => (
                  <div key={issue} className="flex items-center gap-2.5 text-[12px] text-slate-400 font-medium">
                    <Circle className="w-3.5 h-3.5 text-emerald-500" />
                    {issue}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Swiper Section (The Prototype Look) */}
      <section id="services" className="pb-24 relative isolate">
        <Swiper
          key={`${activeCategory}-${activeType}`} // Force re-initialize swiper when filtered
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          loop={filteredRepairs.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {filteredRepairs.map((item, index) => (
            <SwiperSlide 
              key={`${item.category}-${index}`}
              className="bg-slate-50 flex flex-col justify-end p-10 overflow-hidden relative shadow-2xl rounded-[32px] group opacity-40 [&.swiper-slide-active]:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => window.open(getWhatsAppUrl(`${item.category} ${item.type}`), '_blank')}
            >
              <img
                src={item.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
              <div className="relative z-10 flex flex-col justify-end h-full text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 inline-block">
                  {item.label}
                </span>
                <h3 className="text-3xl font-bold text-white leading-tight mb-4">
                  {item.title.split('<br />').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors"
                >
                  View Details <ChevronRight className="w-3 h-3" />
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* The Hero CTA (WhatsApp Button) */}
        <div className="flex justify-center mt-12 px-6">
          <a
            href="https://wa.me/917880973121?text=Hello%20iPhone%20Guru%2C%20I%20have%20a%20problem%20with%20my%20device.%0A%0AProblem%3A%20%0AMy%20mobile%20number%3A%20" target="_blank" rel="noopener noreferrer"
            className="bg-[#25D366] text-white flex items-center gap-3 px-8 py-4 rounded-full shadow-xl shadow-emerald-200/50 hover:scale-105 transition-transform group"
          >
            <MessageCircle className="w-5 h-5 text-white stroke-[2]" fill="currentColor" />
            <span className="font-bold text-sm tracking-wide">Book via WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Cinematic Brand Expertise Section (Inspired by User Image) */}
      <section className="py-32 bg-black text-white overflow-hidden relative min-h-[600px] flex items-center">
        {/* Infinite Scrolling Logo Marquee (Background) */}
        <div className="absolute inset-0 flex flex-col justify-center gap-12 opacity-10 pointer-events-none select-none">
          <div className="flex whitespace-nowrap gap-24 items-center">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex gap-24 items-center"
            >
              {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
                <div key={i} className="flex items-center gap-4 py-8 px-12 rounded-2xl border border-white/20">
                   <span className={`text-4xl font-black ${brand.textLogo ? 'tracking-tighter italic' : ''}`}>
                    {brand.logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex whitespace-nowrap gap-24 items-center">
            <motion.div 
              animate={{ x: [-1000, 0] }}
              transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
              className="flex gap-24 items-center"
            >
              {[...BRANDS.slice().reverse(), ...BRANDS.slice().reverse(), ...BRANDS.slice().reverse()].map((brand, i) => (
                <div key={i} className="flex items-center gap-4 py-8 px-12 rounded-2xl border border-white/20">
                   <span className={`text-4xl font-black ${brand.textLogo ? 'tracking-tighter italic' : ''}`}>
                    {brand.logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 mb-4 inline-block">
              Expertise Across Ecosystems
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
              Restoring every <span className="text-emerald-500">brand.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto font-light">
              We specialize in original hardware paradigms across all major manufacturers.
            </p>
          </motion.div>

          {/* Central Device Highlight */}
          <div className="relative w-[280px] md:w-[320px] h-[550px] md:h-[600px] perspective-1000">
             {/* The "Hand" Placeholder / Image Mockup */}
             <div className="absolute inset-0 flex justify-center items-center">
                <div className="relative w-[240px] md:w-[280px] h-[500px] md:h-[580px] bg-slate-900 rounded-[50px] border-[8px] border-slate-800 shadow-2xl overflow-hidden shadow-emerald-500/10">
                   {/* Phone Bezel/Island */}
                   <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-800 rounded-full z-20"></div>
                   
                   {/* Animating Logo Screen */}
                   <div className="absolute inset-0 flex items-center justify-center bg-white">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeBrandIndex}
                          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                          className="flex flex-col items-center"
                        >
                          <span className={`text-4xl md:text-6xl font-black text-black mb-2 ${BRANDS[activeBrandIndex].textLogo ? 'tracking-tighter italic' : ''}`}>
                            {BRANDS[activeBrandIndex].logo}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-300">
                            Verified OEM
                          </span>
                        </motion.div>
                      </AnimatePresence>
                   </div>

                   {/* Reflective Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Simulated Hand (Abstract) */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[350px] md:w-[450px] h-[300px] pointer-events-none">
                  <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1556656793-062ff98782fe?q=80&w=2070" 
                    className="w-full h-full object-contain opacity-40 blur-[1px]"
                    alt="Hand"
                  />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials & Reviews */}
      <section id="testimonials" className="py-24 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          {/* Header & Stats */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
                Reviews
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Loved by<br />thousands.
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-start md:items-center w-full md:w-auto">
              {/* Overall Rating */}
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-slate-900 mb-1">4.9</span>
                <div className="flex mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">out of 5.0</span>
              </div>

              {/* Breakdown */}
              <div className="flex flex-col gap-1 w-full md:w-48">
                {[
                  { star: 5, pct: 82 },
                  { star: 4, pct: 13 },
                  { star: 3, pct: 4 },
                  { star: 2, pct: 1 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-slate-400 w-2">{row.star}</span>
                    <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-slate-900 rounded-full" style={{ width: `${row.pct}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 w-6">{row.pct}%</span>
                  </div>
                ))}
              </div>

              {/* Total Reviews */}
              <div className="flex flex-col border-l border-slate-100 pl-12 hidden md:flex">
                <span className="text-2xl font-bold text-slate-900 mb-1">12K+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">verified reviews</span>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Arjun Rao",
                initials: "AR",
                location: "Indiranagar",
                service: "Battery",
                text: "“Battery replaced in under an hour. iPhone 15 Pro back to peak performance. Super clean work.”"
              },
              {
                name: "Priya Sharma",
                initials: "PS",
                location: "Koramangala",
                service: "Screen",
                text: "“WhatsApp in 3 mins, doorstep pickup, new screen by evening. Couldn’t tell it was ever replaced.”"
              },
              {
                name: "Kiran Mehta",
                initials: "KM",
                location: "Whitefield",
                service: "Water Damage",
                text: "“OnePlus fell in a pool — iPhone Guru brought it back! 1-year warranty is real peace of mind.”"
              },
              {
                name: "Dev Kumar",
                initials: "DK",
                location: "HSR Layout",
                service: "Camera",
                text: "“Camera blurry after a drop. New module installed and OIS recalibrated. Back to day-one quality!”"
              },
              {
                name: "Sneha Agarwal",
                initials: "SA",
                location: "Bellandur",
                service: "Charging Port",
                text: "“Charging port micro-soldered perfectly. Data completely safe throughout. Highly recommend!”"
              },
              {
                name: "Rahul Nair",
                initials: "RN",
                location: "JP Nagar",
                service: "Back Glass",
                text: "“Back glass on S24 Ultra laser-separated, colour-matched perfectly. Wireless charging still works!”"
              }
            ].map((review, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, transition: { duration: 0.3, ease: "easeOut" } }}
                className="p-8 rounded-[32px] bg-slate-50 border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-default"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium mb-10 min-h-[80px]">
                  {review.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[11px] font-bold text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900 transition-colors">
                    {review.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-slate-900">{review.name}</span>
                    <span className="text-[10px] font-medium text-slate-400">{review.location} · {review.service}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
              Our Method
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
              Process.<br/>
              <span className="text-slate-400">Simple. Fast. Transparent.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Step 01 */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-16 h-16 bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-2xl shadow-sm relative z-10">
                💬
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 block mb-4">Step 01</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">WhatsApp Us Your Issue</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Describe the problem. Get an itemised quote in minutes. No call centres.
                </p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-16 h-16 bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-2xl shadow-sm relative z-10">
                🚗
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 block mb-4">Step 02</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Drop Off or Doorstep Pickup</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Visit our Koramangala lab or use free doorstep pickup (orders ₹999+).
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wide">
                    Doorstep replacement in 45 min
                  </p>
                  <div className="py-1.5 px-3 bg-emerald-50 rounded-lg border border-emerald-100 self-start">
                    <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.1em]">
                      No. 1 in Bengaluru iDevice Repair
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-16 h-16 bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-2xl shadow-sm relative z-10">
                🔧
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 block mb-4">Step 03</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Expert Repair Begins</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Clean-room lab. Grade-A parts. 22-point diagnostic before & after.
                </p>
              </div>
            </div>

            {/* Step 04 */}
            <div className="flex flex-col gap-6 relative">
              <div className="w-16 h-16 bg-white rounded-3xl border border-slate-200 flex items-center justify-center text-2xl shadow-sm relative z-10">
                ✅
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500 block mb-4">Step 04</span>
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">Collect & Enjoy — Backed by Warranty</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  Printed warranty card. Free re-repair within 6 months. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions Section (FAQ) */}
      <section className="py-24 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto px-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6">
              Assistance
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Common Questions.
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`border rounded-[24px] overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-slate-900 bg-slate-50/50' : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className={`text-[15px] font-bold transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                        isOpen ? 'bg-slate-900 border-slate-900 text-white' : 'border-slate-200 text-slate-400 group-hover:border-slate-400 group-hover:text-slate-600'
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </motion.div>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-8 pb-8">
                          <div className="h-px w-full bg-slate-200 mb-6"></div>
                          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-6 border border-slate-200">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              We’re here<br />for you.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Fastest. Get a quote in minutes. 9am–9pm.
              </p>
              <a 
                href="https://wa.me/917880973121" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-600 font-bold text-sm hover:underline"
              >
                +91 7880973121
              </a>
            </div>

            {/* Visit Our Lab */}
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Visit Our Lab</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-2">
                No. 14, 5th Cross, 7th Block<br />
                Koramangala, Bangalore – 560095
              </p>
              <p className="text-emerald-600 font-bold text-[11px] uppercase tracking-wider">
                Open 9am – 9pm
              </p>
            </div>

            {/* Email */}
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                For invoices, warranties, B2B. Reply in 4 hours.
              </p>
              <a 
                href="mailto:hello@fixpro.in" 
                className="text-emerald-600 font-bold text-sm hover:underline"
              >
                hello@fixpro.in
              </a>
            </div>

            {/* Hours */}
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-xl font-bold mb-2">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Mon–Sat</span>
                  <span className="font-bold text-slate-900">9am–9pm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Sunday</span>
                  <span className="font-bold text-slate-900">10am–7pm</span>
                </div>
                <div className="flex justify-between text-sm pt-2 border-t border-slate-50">
                  <span className="text-slate-500">WhatsApp</span>
                  <span className="font-bold text-emerald-600 uppercase text-[9px] tracking-widest">Always On</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Bar */}
      <footer className="h-20 md:h-12 border-t border-slate-50 bg-slate-50 flex flex-col md:flex-row items-center justify-between px-10 gap-2">
        <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center mt-4 md:mt-0">
          © {new Date().getFullYear()} iPhone Guru — Precision Mobile Electronics
        </div>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest pb-4 md:pb-0">
          <span className="text-emerald-500">Status: Open</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full hidden md:inline-block"></span>
          <span className="text-slate-400 hidden md:inline-block">Mon - Sat 09:00 — 18:00</span>
        </div>
      </footer>

      {/* Repair Details Modal */}
      <AnimatePresence>
        {selectedRepair && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedRepair(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[200] overflow-y-auto pt-10 pb-10 flex justify-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-2xl rounded-[40px] overflow-hidden shadow-2xl relative mx-4 h-fit"
              >
                <button 
                  onClick={() => setSelectedRepair(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white shadow-xl rounded-full flex items-center justify-center z-10 hover:scale-110 active:scale-95 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img src={selectedRepair.image} className="w-full h-full object-cover" alt={selectedRepair.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-10">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mb-2 inline-block">
                      {selectedRepair.label}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                      {selectedRepair.title.replace('<br />', ' ')}
                    </h3>
                  </div>
                </div>

                <div className="p-10 -mt-4 relative bg-white">
                  <p className="text-slate-500 text-lg font-light leading-relaxed mb-10">
                    {selectedRepair.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                        <Star className="w-3 h-3 fill-slate-400" /> Key Issues Covered
                      </h4>
                      <ul className="space-y-3">
                        {selectedRepair.issues.map((issue: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col gap-8">
                       <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                          <Clock className="w-3 h-3" /> Estimated Time
                        </h4>
                        <span className="text-2xl font-bold text-slate-900">{selectedRepair.time}</span>
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3" /> Certified Parts
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedRepair.parts.map((part: string, i: number) => (
                            <span key={i} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-lg">
                              {part}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-slate-50 rounded-4xl border border-slate-100">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Book Appointment</span>
                       <span className="text-xl font-bold text-slate-900">Get it fixed today.</span>
                    </div>
                    <a 
                      href={getWhatsAppUrl(`${selectedRepair.category} ${selectedRepair.type}`)}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full md:w-auto bg-[#25D366] text-white flex items-center justify-center gap-3 px-8 py-4 rounded-full shadow-xl shadow-emerald-200/50 hover:scale-105 transition-transform font-bold"
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
