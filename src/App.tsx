/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Download, 
  Smartphone, 
  Users, 
  Zap, 
  MessageCircle, 
  PlusCircle, 
  Wallet,
  CheckCircle2,
  Trophy,
  Star,
  ChevronRight,
  Play,
  Heart,
  Instagram,
  Mail,
  Menu,
  X
} from "lucide-react";

const KAARYA_YELLOW = "#FFE500";
const KAARYA_BLACK = "#000000";
const KAARYA_CREAM = "#F5F3E8";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-kaarya-cream)] border-b-4 border-black px-4 md:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-kaarya-yellow border-2 border-black flex items-center justify-center font-archivo text-lg md:text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            K
          </div>
          <span className="font-archivo text-xl md:text-2xl tracking-tighter uppercase">KaarYA</span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold uppercase text-sm">
          <a href="#features" className="hover:text-kaarya-purple transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-kaarya-purple transition-colors">How it works</a>
          <button className="brutal-btn py-2 text-xs">Download App</button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 border-2 border-black bg-white brutal-shadow active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[var(--color-kaarya-cream)] border-b-4 border-black p-6 flex flex-col gap-6 md:hidden font-archivo"
          >
            <a href="#features" onClick={() => setIsOpen(false)} className="text-xl uppercase border-b-2 border-black pb-2">Features</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-xl uppercase border-b-2 border-black pb-2">How it works</a>
            <button className="brutal-btn w-full py-4 text-lg">Download App</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 lg:gap-6 items-start">
      {/* Left Column: Headline & CTA */}
      <motion.div 
        className="col-span-12 lg:col-span-7 flex flex-col justify-center py-6 md:py-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="inline-block bg-kaarya-purple text-white px-3 py-1 border-2 border-black font-bold text-[10px] md:text-xs uppercase brutal-shadow mb-6 w-fit">
          India's first student-only gig marketplace
        </div>
        <h1 className="font-archivo text-5xl md:text-8xl leading-[0.9] uppercase mb-8 tracking-tighter">
          Earn while <br /> 
          <span className="bg-kaarya-yellow px-2 inline-block -rotate-1 brutal-border">you learn.</span>
        </h1>
        <p className="text-lg md:text-xl font-medium text-gray-700 mb-8 md:mb-10 max-w-lg leading-snug">
          Hire peers for micro-gigs, build real portfolios, and get paid instantly. Join the exclusive community of 100,000+ students.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-[#FFE500] border-2 border-black p-4 flex flex-col items-center justify-center brutal-shadow cursor-pointer w-full sm:w-44 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:translate-x-[2px] active:translate-y-[2px]">
            <div className="text-[10px] font-black uppercase mb-1">App Store</div>
            <div className="font-black text-lg">GET IOS</div>
          </div>
          <div className="bg-white border-2 border-black p-4 flex flex-col items-center justify-center brutal-shadow cursor-pointer w-full sm:w-44 hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:translate-x-[2px] active:translate-y-[2px]">
            <div className="text-[10px] font-black uppercase mb-1">Play Store</div>
            <div className="font-black text-lg">ANDROID</div>
          </div>
        </div>
      </motion.div>

      {/* Right Grid Area: Bento Cards */}
      <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {/* Featured Gig Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="col-span-1 sm:col-span-2 bento-card"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FFE500]"></div>
            <div className="bg-black text-white px-2 py-1 text-[10px] font-bold">FEATURED GIG</div>
          </div>
          <h3 className="text-2xl font-archivo uppercase leading-tight mb-2">Video Editor Needed</h3>
          <p className="text-sm font-medium text-gray-600 mb-6">Looking for a student to edit a 5-min vlog with subtitles.</p>
          <div className="flex justify-between items-end border-t-2 border-black pt-4 mt-auto">
            <span className="text-3xl font-archivo">₹800</span>
            <span className="text-[10px] font-bold bg-gray-100 border border-black px-2 py-1 uppercase">VIDEO</span>
          </div>
        </motion.div>

        {/* Stats Card */}
        <div className="col-span-1 bento-card bg-black text-kaarya-yellow justify-center h-32 sm:h-auto">
          <div className="text-4xl font-archivo mb-1 leading-none">100K+</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-white">STUDENTS</div>
        </div>

        {/* Wallet Card */}
        <div className="col-span-1 bento-card bg-kaarya-yellow items-center justify-center text-center h-32 sm:h-auto">
          <div className="text-[10px] font-black uppercase mb-1">Wallet</div>
          <div className="text-2xl font-archivo leading-none">₹4,250</div>
          <div className="text-[9px] mt-2 font-bold bg-white px-2 py-0.5 rounded-full border border-black uppercase">PENDING: ₹800</div>
        </div>

        {/* Live Chat snippet */}
        <div className="col-span-1 sm:col-span-2 bento-card bg-[#F5F3E8]">
           <div className="flex gap-1 mb-4 items-center">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <div className="text-[10px] font-black uppercase">Live Chat</div>
          </div>
          <div className="bg-white p-2 text-[11px] font-bold mb-2 border border-black brutal-shadow">Rahul: "Did you like the latest draft?"</div>
          <div className="bg-kaarya-yellow p-2 text-[11px] font-bold border border-black ml-4 brutal-shadow self-end">You: "Yes! Just small tweaks."</div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, color }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`p-8 border-4 border-black brutal-shadow-lg ${color} flex flex-col gap-4`}
  >
    <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center brutal-shadow">
      <Icon size={32} />
    </div>
    <h3 className="font-archivo text-3xl uppercase leading-tight">{title}</h3>
    <p className="font-medium text-gray-800">{description}</p>
  </motion.div>
);

const Features = () => (
  <section id="features" className="py-24 px-6 bg-white border-y-4 border-black">
    <div className="max-w-7xl mx-auto">
      <div className="mb-20">
        <h2 className="font-archivo text-5xl md:text-7xl uppercase mb-6">Built for the <br /> <span className="bg-kaarya-yellow px-4 italic-small">next-gen workforce</span></h2>
        <p className="text-xl max-w-2xl font-medium">We've rethinking how students gig. No corporate jargon. No BS. Just pure work and skill-building.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Zap}
          title="Micro-Gig Discovery"
          description="A Tinder-style swipeable deck for discovering micro-gigs. Filter by category, budget, and skills."
          color="bg-white"
        />
        <FeatureCard 
          icon={MessageCircle}
          title="High-Context Chat"
          description="Real-time messaging with integrated voice notes, attachments, and gig context. No context switching needed."
          color="bg-white"
        />
        <FeatureCard 
          icon={Trophy}
          title="Verifiable Portfolio"
          description="Every gig you complete is added to your on-chain portfolio. Show, don't just tell."
          color="bg-kaarya-yellow"
        />
        <FeatureCard 
          icon={Wallet}
          title="Instant Payments"
          description="Unified wallet for all earnings. Track every transaction and withdraw instantly to UPI."
          color="bg-white"
        />
        <FeatureCard 
          icon={Users}
          title="Exclusive Community"
          description="India's first student-only network. High trust, low friction, zero gatekeeping."
          color="bg-[var(--color-kaarya-purple)] text-white"
        />
        <FeatureCard 
          icon={PlusCircle}
          title="Fast Gigs"
          description="Post a gig in 6 simple steps. Hire your peers in minutes, not days."
          color="bg-white"
        />
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 px-6 bg-[var(--color-kaarya-cream)]">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative h-[600px] border-4 border-black brutal-shadow-lg rounded-3xl overflow-hidden bg-white">
        <img src="https://picsum.photos/seed/karya_app/800/1200" alt="App Usage" className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-12 flex flex-col justify-end text-white">
          <p className="font-archivo text-4xl leading-tight mb-4 uppercase">"KaarYa changed how I earn during college. I bought my first camera with my gig earnings!"</p>
          <p className="font-bold">— Rahul S., Design Student</p>
        </div>
      </div>

      <div>
        <h2 className="font-archivo text-5xl uppercase mb-12">Seamless <br /> Experience</h2>
        <div className="space-y-12">
          {[
            { step: "01", title: "Join the Club", desc: "Select your role, pick your skills, and join your campus community." },
            { step: "02", title: "Browse or Post", desc: "Swipe through gigs or post one yourself using our 6-step guided flow." },
            { step: "03", title: "Do the Work", desc: "Use high-context chat to coordinate and deliver via the built-in tracking." },
            { step: "04", title: "Earn & Grow", desc: "Get paid instantly and watch your portfolio stats climb." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="font-archivo text-4xl text-kaarya-yellow stroke-black border-2 border-black px-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-black">
                {item.step}
              </div>
              <div>
                <h4 className="font-archivo text-2xl uppercase mb-2">{item.title}</h4>
                <p className="text-gray-600 font-medium">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Showcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [swipeCount, setSwipeCount] = useState(0);

  const features = [
    {
      id: 0,
      title: "Discovery",
      icon: Zap,
      description: "Swipe through micro-gigs designed specially for students. From campus errands to remote dev tasks.",
      color: "bg-kaarya-yellow"
    },
    {
      id: 1,
      title: "Chat",
      icon: MessageCircle,
      description: "Discuss gig details, share voice notes, and iron out the specifics without leaving the app.",
      color: "bg-white"
    },
    {
      id: 2,
      title: "Portfolio",
      icon: Trophy,
      description: "Your work earns you verifiable badges and stats. Build a career while you're still in college.",
      color: "bg-kaarya-purple"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Controls */}
          <div className="w-full lg:w-1/3 space-y-4 md:space-y-6">
            <h2 className="font-archivo text-3xl md:text-5xl uppercase mb-8 leading-tight">The App <br /> Experience</h2>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-4 md:gap-6">
              {features.map((f, i) => (
                <button
                  key={f.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex flex-col lg:flex-row items-center lg:items-center gap-2 md:gap-4 p-3 md:p-6 border-4 border-black brutal-shadow transition-all ${activeTab === i ? 'bg-kaarya-yellow translate-x-1 translate-y-1 shadow-none' : 'bg-white hover:bg-gray-50'}`}
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 border-2 border-black flex items-center justify-center shrink-0 ${activeTab === i ? 'bg-black text-white' : 'bg-gray-100'}`}>
                    <f.icon size={18} className="md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-archivo text-[10px] sm:text-xs md:text-xl uppercase leading-tight text-center lg:text-left">{f.title}</h4>
                </button>
              ))}
            </div>
            <p className="hidden lg:block text-gray-600 font-medium mt-6">{features[activeTab].description}</p>
          </div>

          {/* Visual Showcase */}
          <div className="w-full lg:w-2/3 h-[450px] md:h-[600px] border-4 border-black brutal-shadow-lg rounded-3xl bg-[var(--color-kaarya-cream)] relative overflow-hidden flex items-center justify-center p-4 md:p-8">
            <AnimatePresence mode="wait">
              {activeTab === 0 && (
                <motion.div
                  key="discovery"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="w-full h-full flex items-center justify-center relative touch-none"
                >
                  <div className="relative w-56 h-72 md:w-72 md:h-96">
                    <motion.div
                      key={swipeCount}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, { offset }) => {
                        if (Math.abs(offset.x) > 50) {
                          setSwipeCount(prev => prev + 1);
                        }
                      }}
                      className="absolute inset-0 bg-white border-2 border-black rounded-2xl brutal-shadow p-4 md:p-6 flex flex-col cursor-grab active:cursor-grabbing"
                    >
                      <div className="w-full h-24 md:h-32 bg-gray-100 border border-black rounded-lg mb-4 overflow-hidden">
                        <img 
                          src={`https://picsum.photos/seed/gig-swipe-${swipeCount}/400/300`} 
                          className="w-full h-full object-cover" 
                          alt="Gig" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <h4 className="font-archivo text-lg md:text-2xl mb-1 truncate">
                        {["Logo Revamp", "Video Edit", "Copywriting", "App Feedback"][swipeCount % 4]}
                      </h4>
                      <p className="text-xs md:text-sm font-bold text-gray-500 mb-4">₹{500 + (swipeCount % 5) * 500}</p>
                      <div className="mt-auto flex justify-between">
                        <div className="p-2 md:p-3 border-2 border-black rounded-full text-red-500 bg-white"><Heart size={18} /></div>
                        <div className="p-2 md:p-3 border-2 border-black rounded-full text-green-500 bg-white"><Zap size={18} fill="currentColor" /></div>
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 bg-gray-200 border-2 border-black rounded-2xl -z-10 translate-x-2 translate-y-2" />
                  </div>
                  <div className="absolute bottom-4 text-[10px] md:text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-1">Swipe card</div>
                </motion.div>
              )}

              {activeTab === 1 && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full max-w-xs md:max-w-sm flex flex-col gap-4"
                >
                  <div className="bg-white border-2 border-black p-3 md:p-4 rounded-xl rounded-bl-none brutal-shadow self-start max-w-[85%]">
                    <p className="text-xs md:text-sm font-bold">Hey Arjun! Can you help with the logo?</p>
                  </div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-kaarya-yellow border-2 border-black p-3 md:p-4 rounded-xl rounded-br-none brutal-shadow self-end max-w-[85%]"
                  >
                    <p className="text-xs md:text-sm font-bold">Sure! What's the vibe? ⚡️</p>
                  </motion.div>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-white border-2 border-black p-3 md:p-4 rounded-xl rounded-bl-none brutal-shadow self-start flex items-center gap-3 w-full"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-kaarya-purple border border-black flex items-center justify-center text-white shrink-0"><Play size={12} fill="currentColor" /></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full bg-black" />
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {activeTab === 2 && (
                <motion.div
                  key="portfolio"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="w-full max-w-sm md:max-w-lg grid grid-cols-2 gap-4"
                >
                  <div className="bg-white border-4 border-black p-4 md:p-6 brutal-shadow flex flex-col items-center text-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-kaarya-yellow border-2 border-black flex items-center justify-center mb-4"><Trophy size={20} className="md:w-8 md:h-8" /></div>
                    <div className="font-archivo text-2xl md:text-3xl">12</div>
                    <div className="text-[8px] md:text-[10px] font-black uppercase">Gigs Done</div>
                  </div>
                  <div className="bg-black text-white border-4 border-black p-4 md:p-6 brutal-shadow flex flex-col items-center text-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-kaarya-purple border-2 border-white flex items-center justify-center mb-4"><Star size={20} className="md:w-8 md:h-8" /></div>
                    <div className="font-archivo text-2xl md:text-3xl">4.9</div>
                    <div className="text-[8px] md:text-[10px] font-black uppercase">Rating</div>
                  </div>
                  <div className="col-span-2 bg-white border-4 border-black p-4 md:p-6 brutal-shadow">
                    <h5 className="font-black uppercase text-[10px] md:text-xs mb-4">Skills</h5>
                    <div className="space-y-4">
                      {['UI Design', 'React Native'].map((skill, i) => (
                        <div key={skill}>
                          <div className="flex justify-between text-[8px] md:text-[10px] font-black uppercase mb-1">
                            <span>{skill}</span>
                            <span>{80 - i * 10}%</span>
                          </div>
                          <div className="h-3 md:h-4 bg-gray-100 border-2 border-black p-0.5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${80 - i * 10}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-kaarya-purple"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-kaarya-yellow border-t-4 border-black py-12 md:py-16 px-4 md:px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
        <div className="col-span-1 sm:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-black border-2 border-black flex items-center justify-center font-archivo text-xl text-kaarya-yellow shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]">
              K
            </div>
            <span className="font-archivo text-2xl tracking-tighter uppercase">KaarYA</span>
          </div>
          <p className="text-lg md:text-xl font-bold max-w-md mb-8 leading-snug">
            Empowering the next generation of Indian creators, builders, and doers. Because every student's work matters.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/prashlesh_8055" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:translate-y-[-2px] brutal-shadow transition-all active:translate-y-[2px] active:shadow-none">
              <Instagram size={24} />
            </a>
            <a href="mailto:iamprashlesh@gmail.com" className="w-12 h-12 border-2 border-black bg-white flex items-center justify-center hover:translate-y-[-2px] brutal-shadow transition-all active:translate-y-[2px] active:shadow-none">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-archivo text-lg uppercase mb-4 md:mb-6 border-b-2 border-black pb-2">Navigation</h4>
          <ul className="space-y-3 md:space-y-4 font-bold uppercase text-xs md:text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#how-it-works" className="hover:underline">Workflow</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-archivo text-lg uppercase mb-4 md:mb-6 border-b-2 border-black pb-2">Support</h4>
          <ul className="space-y-3 md:space-y-4 font-bold uppercase text-xs md:text-sm">
            <li><a href="#" className="hover:underline">Join Beta</a></li>
            <li><a href="mailto:iamprashlesh@gmail.com" className="hover:underline">Contact Support</a></li>
            <li><a href="#" className="hover:underline">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t-2 border-black flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
        <p>© 2026 KaarYA Student Marketplace. MIT License.</p>
        <div className="flex gap-6 md:gap-8">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-kaarya-yellow selection:text-black">
      <Nav />
      <Hero />
      
      {/* Marquee */}
      <div className="bg-kaarya-black py-4 overflow-hidden border-y-4 border-black">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-kaarya-yellow font-archivo text-2xl uppercase">
              <Zap size={24} fill="currentColor" />
              <span>Design gigs</span>
              <Users size={24} fill="currentColor" />
              <span>Dev micro-tasks</span>
              <MessageCircle size={24} fill="currentColor" />
              <span>Video editing</span>
              <PlusCircle size={24} fill="currentColor" />
              <span>Content writing</span>
            </div>
          ))}
        </div>
      </div>

      <Features />
      <HowItWorks />
      <Showcase />
      
      {/* CTA Section */}
      <section className="bg-kaarya-purple py-16 md:py-24 px-4 md:px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-block p-6 md:p-12 border-4 border-white brutal-shadow-lg bg-black/20 backdrop-blur-sm w-full sm:w-auto"
          >
            <h2 className="font-archivo text-4xl md:text-7xl uppercase mb-8 leading-tight">Ready to <br /> <span className="text-kaarya-yellow">start earning?</span></h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <button className="brutal-btn text-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">Get for iOS</button>
              <button className="brutal-btn text-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 w-full sm:w-auto">Get for Android</button>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 border-4 border-white rotate-12 opacity-10 md:opacity-20 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-white opacity-10 md:opacity-20 pointer-events-none" />
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .italic-small {
          font-style: italic;
          font-size: 0.9em;
        }
      `}} />
    </div>
  );
}
