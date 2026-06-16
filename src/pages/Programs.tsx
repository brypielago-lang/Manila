import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight, Laptop, Calculator, GraduationCap, Briefcase, HeartHandshake, ShieldCheck, ChefHat, Wrench, Microscope, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

const SHS_PROGRAMS = [
  { id: "stem", name: "STEM", desc: "Science, Technology, Engineering, and Mathematics. Perfect for future engineers, doctors, and IT professionals.", icon: Microscope, color: "text-blue-500", bg: "bg-blue-500/10" },
  { id: "abm", name: "ABM", desc: "Accountancy, Business, and Management. Designed for future entrepreneurs and business leaders.", icon: Calculator, color: "text-green-500", bg: "bg-green-500/10" },
  { id: "humss", name: "HUMSS", desc: "Humanities and Social Sciences. For students pursuing careers in education, law, psychology, and arts.", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
  { id: "tvl", name: "TVL", desc: "Technical-Vocational-Livelihood Track. Focuses on practical skills and job-readiness instantly.", icon: Wrench, color: "text-orange-500", bg: "bg-orange-500/10" },
];

const COLLEGE_PROGRAMS = [
  { id: "bsit", name: "BS Information Technology", desc: "Master software development, network administration, and modern web technologies to become an IT leader.", icon: Laptop, color: "text-blue-600", bg: "bg-blue-600/10" },
  { id: "bsba", name: "BS Business Administration", desc: "Develop sharp business acumen, focusing on marketing, finance, and human resource management.", icon: Briefcase, color: "text-emerald-600", bg: "bg-emerald-600/10" },
  { id: "bscrim", name: "BS Criminology", desc: "Prepare for a distinguished career in law enforcement, public safety, and forensic sciences.", icon: ShieldCheck, color: "text-slate-600", bg: "bg-slate-600/10" },
  { id: "bshm", name: "BS Hospitality Management", desc: "Embark on a global career in hotel operations, culinary arts, and tourism management.", icon: ChefHat, color: "text-amber-600", bg: "bg-amber-600/10" },
  { id: "bsed", name: "BS Education", desc: "Shape the future by becoming a highly qualified professional teacher and educator.", icon: GraduationCap, color: "text-rose-600", bg: "bg-rose-600/10" },
  { id: "bsa", name: "BS Accountancy", desc: "Rigorous training for future Certified Public Accountants and financial consultants.", icon: Calculator, color: "text-teal-600", bg: "bg-teal-600/10" },
  { id: "bsentrep", name: "BS Entrepreneurship", desc: "Transform your ideas into successful business ventures with hands-on startup experience.", icon: HeartHandshake, color: "text-indigo-600", bg: "bg-indigo-600/10" },
];

export function Programs() {
  const [activeTab, setActiveTab] = useState<"shs" | "college">("college");

  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 relative">
      <div className="absolute top-0 left-0 w-full h-80 bg-primary z-0" />
      
      <div className="relative z-10 pt-20 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl mb-4">Academic Programs</h1>
          <p className="text-xl text-blue-100 mb-8">
            Explore our diverse range of industry-aligned programs designed to launch your career.
          </p>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 w-full -mt-16">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex ring-1 ring-neutral-900/5">
             <button 
               onClick={() => setActiveTab("shs")}
               className={cn(
                 "px-8 py-3 rounded-full text-sm font-bold transition-all",
                 activeTab === "shs" ? "bg-primary text-white shadow-md" : "text-neutral-500 hover:text-primary hover:bg-neutral-50"
               )}
             >
               Senior High School
             </button>
             <button 
               onClick={() => setActiveTab("college")}
               className={cn(
                 "px-8 py-3 rounded-full text-sm font-bold transition-all",
                 activeTab === "college" ? "bg-primary text-white shadow-md" : "text-neutral-500 hover:text-primary hover:bg-neutral-50"
               )}
             >
               College Programs
             </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
           {activeTab === "shs" && (
             <div className="grid md:grid-cols-2 gap-8 animation-fade-in">
               {SHS_PROGRAMS.map((prog) => (
                 <div key={prog.id} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 hover:shadow-md transition-all group flex flex-col h-full">
                   <div className={cn("h-14 w-14 rounded-xl flex items-center justify-center mb-6", prog.bg, prog.color)}>
                     <prog.icon className="h-7 w-7" />
                   </div>
                   <h3 className="text-2xl font-bold text-primary mb-3">{prog.name}</h3>
                   <p className="text-neutral-600 mb-8 grow">{prog.desc}</p>
                   <div className="pt-6 border-t border-neutral-100 mt-auto flex items-center justify-between">
                     <Link to="/admissions" className="text-sm font-bold text-secondary group-hover:text-secondary-dark transition-colors">
                       View Requirements
                     </Link>
                     <Link to="/enrollment" className="inline-flex items-center text-sm font-bold bg-primary text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                       Apply <ArrowRight className="ml-2 w-4 h-4" />
                     </Link>
                   </div>
                 </div>
               ))}
             </div>
           )}

           {activeTab === "college" && (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animation-fade-in">
               {COLLEGE_PROGRAMS.map((prog) => (
                 <div key={prog.id} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 hover:shadow-md hover:border-primary transition-all group flex flex-col h-full cursor-pointer relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity -mt-4 -mr-4 transform rotate-12">
                     <prog.icon className="w-32 h-32" />
                   </div>
                   <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center mb-6 relative z-10", prog.bg, prog.color)}>
                     <prog.icon className="h-6 w-6" />
                   </div>
                   <h3 className="text-xl font-bold text-primary mb-3 relative z-10 pr-4">{prog.name}</h3>
                   <p className="text-neutral-600 text-sm mb-8 grow relative z-10">{prog.desc}</p>
                   <div className="pt-4 border-t border-neutral-100 mt-auto flex items-center justify-between relative z-10">
                     <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                       Learn More
                     </span>
                     <ChevronRight className="h-5 w-5 text-neutral-300 group-hover:text-secondary transition-colors" />
                   </div>
                 </div>
               ))}
             </div>
           )}
        </div>

      </div>
    </div>
  );
}
