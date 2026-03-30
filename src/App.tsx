import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Users, Droplets, BookOpen, Share2, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Impact', href: '#impact' },
  { name: 'Team', href: '#team' },
  { name: 'Support Us', href: '#support' },
];

const Section = ({ children, className, id }: { children: React.ReactNode, className?: string, id?: string }) => (
  <motion.section id={id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`py-20 px-4 ${className}`}>
    {children}
  </motion.section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 font-serif">Youth Climate Baithak</span>
              <a href="https://aware2-act-youth.vercel.app/" className="text-xs text-[#019DC6] hover:underline">An initiative by Aware2Act Youth</a>
            </div>
            <div className="hidden md:flex space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-[#019DC6]">{link.name}</a>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 space-y-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="block text-sm font-medium text-gray-600 hover:text-[#019DC6]" onClick={() => setIsMenuOpen(false)}>{link.name}</a>
            ))}
          </div>
        )}
      </nav>

      <header className="relative h-screen flex items-center justify-center text-center text-white">
        <img src="https://i.postimg.cc/3JQVpMPg/1266108-9196115-Agriculture2-akhbar.jpg" alt="Farming community" className="absolute inset-0 w-full h-full object-cover object-center" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">Climate Literacy for Communities That Need It Most</h1>
          <p className="text-xl md:text-2xl">Bringing climate awareness directly into drought-affected farming villages of Balochistan, Pakistan through trusted local voices.</p>
        </motion.div>
      </header>

      <Section id="about" className="bg-[#e6f7fc]">
        <h2 className="text-4xl font-bold text-center mb-12">Why Balochistan Cannot Wait</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Droplets, text: "Balochistan covers 44% of Pakistan's land yet receives the least rainfall in the country" },
            { icon: Users, text: "Farming communities face worsening drought, crop failure, and water scarcity every year" },
            { icon: BookOpen, text: "Most affected communities have no access to climate education or awareness programs" },
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
              <card.icon className="w-12 h-12 text-[#019DC6] mb-6" />
              <p className="text-lg">{card.text}</p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-lg text-center">Communities experience climate impacts daily but cannot connect them to climate change or respond effectively. This gap limits resilience.</p>
        <img src="https://i.postimg.cc/zGJwZpg3/Bori-Dheri.jpg" alt="Cracked land" className="w-full h-auto rounded-2xl mt-12 shadow-lg" referrerPolicy="no-referrer" />
      </Section>

      <Section>
        <h2 className="text-4xl font-bold text-center mb-12">What is a Baithak?</h2>
        <p className="max-w-3xl mx-auto text-lg text-center mb-12">A Baithak is a community sitting — a traditional concept of gathering to discuss important issues. Youth Climate Baithak uses this trusted format to bring climate literacy directly into villages through structured, participatory sessions led by local youth.</p>
        <img src="https://image2url.com/r2/default/images/1774785030900-1c6cf650-ec32-4a71-8876-fd8cebb59d72.blob" alt="Community gathering" className="w-full h-auto rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
      </Section>

      <Section id="how-it-works" className="bg-[#0a2a33] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: "Recruit Climate Dosts", text: "We identify and train 8 local youth volunteers from target communities." },
            { title: "Orientation", text: "All Climate Dosts attend one online orientation session." },
            { title: "Baithak Sessions", text: "Each Climate Dost organizes one 90-minute community session." },
            { title: "Climate Guidebook", text: "Every participant receives a simple Urdu-language climate awareness guidebook." },
          ].map((step, i) => (
            <div key={i} className="space-y-4">
              <div className="text-5xl font-bold text-[#019DC6]">0{i + 1}</div>
              <h3 className="text-2xl font-bold">{step.title}</h3>
              <p className="text-gray-300">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="impact">
        <h2 className="text-4xl font-bold text-center mb-12">Expected Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { num: 8, text: "Climate Dost Facilitators" },
            { num: 8, text: "Community Baithak Sessions" },
            { num: 300, text: "Community Members Reached" },
            { num: 200, text: "Climate Guidebooks Distributed" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-[#019DC6] mb-2">{stat.num}+</div>
              <div className="text-lg font-medium">{stat.text}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-lg">Across drought-affected farming districts of Balochistan, Pakistan</p>
      </Section>

      <Section id="team" className="bg-[#f8f8f8]">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-xl border-t-4 border-[#019DC6] shadow-sm text-center">
            <h3 className="text-xl font-bold mb-1">Shahjahan Baloch</h3>
            <p className="text-gray-500">Project Lead</p>
            <p className="text-xs text-gray-400 mt-2">shahjahanshah0856@gmail.com</p>
          </div>
        </div>
      </Section>

      <Section className="bg-[#019DC6] text-white">
        <h2 className="text-4xl font-bold text-center mb-6">About Aware2Act Youth</h2>
        <p className="max-w-3xl mx-auto text-lg text-center mb-10">Youth Climate Baithak is a sub-initiative of Aware2Act Youth (A2A Youth) — a youth-led, non-political grassroots organization from Pakistan working on health awareness, climate education, social issues dialogue, and youth empowerment. Our mission is to amplify unheard voices and make awareness accessible in underserved communities.</p>
        <div className="text-center">
          <a href="https://aware2-act-youth.vercel.app/" className="bg-white text-[#019DC6] px-8 py-3 rounded-full font-medium">Visit A2A Youth Website</a>
        </div>
      </Section>

      <Section id="support">
        <h2 className="text-4xl font-bold text-center mb-12">Support This Initiative</h2>
        <p className="max-w-2xl mx-auto text-lg text-center mb-12">If you believe in grassroots climate education, share our project and help us reach more communities.</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-[#f8f8f8] p-8 rounded-2xl text-center">
            <Share2 className="w-12 h-12 text-[#019DC6] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Share This Project</h3>
            <div className="flex justify-center gap-4">
              <button className="bg-[#019DC6] text-white px-4 py-2 rounded">Twitter</button>
              <button className="bg-[#019DC6] text-white px-4 py-2 rounded">Facebook</button>
              <button className="bg-[#019DC6] text-white px-4 py-2 rounded">WhatsApp</button>
            </div>
          </div>
          <div className="bg-[#f8f8f8] p-8 rounded-2xl text-center">
            <Mail className="w-12 h-12 text-[#019DC6] mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <a href="mailto:aware2act.youth@gmail.com" className="text-[#019DC6] font-medium">aware2act.youth@gmail.com</a>
          </div>
        </div>
      </Section>

      <footer className="bg-[#0a2a33] text-white py-12 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-bold font-serif">Youth Climate Baithak</h3>
            <p className="text-gray-400">A sub-initiative of Aware2Act Youth</p>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white">{link.name}</a>
            ))}
          </div>
          <p className="text-gray-500 text-sm">© 2027 Aware2Act Youth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
