import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronRight, Award, Users, BookOpen, Building, PlayCircle, Star, Quote } from "lucide-react";
import { cn } from "../lib/utils";

const STATS = [
  { value: "15K+", label: "Students Enrolled" },
  { value: "95%", label: "Board Passing Rate" },
  { value: "2,500+", label: "Scholarship Recipients" },
  { value: "92%", label: "Graduate Employment Rate" },
];

const FEATURES = [
  { title: "Affordable Education", description: "Quality learning that fits your family's budget with flexible payment terms.", icon: BookOpen },
  { title: "Modern Facilities", description: "State-of-the-art laboratories, libraries, and collaborative spaces.", icon: Building },
  { title: "Experienced Faculty", description: "Learn from industry professionals and highly-credentialed academics.", icon: Users },
  { title: "Career-Focused", description: "Curriculum designed with industry partners to ensure job readiness.", icon: Award },
];

const PROGRAMS = [
  {
    category: "Senior High School",
    items: [
      { name: "STEM", desc: "Science, Technology, Engineering, and Mathematics" },
      { name: "ABM", desc: "Accountancy, Business, and Management" },
      { name: "HUMSS", desc: "Humanities and Social Sciences" },
      { name: "TVL", desc: "Technical-Vocational-Livelihood Track" },
    ]
  },
  {
    category: "College Programs",
    items: [
      { name: "BS Information Technology", desc: "Software Development, Networking, Web Tech" },
      { name: "BS Business Administration", desc: "Marketing, Financial Management, HR" },
      { name: "BS Hospitality Management", desc: "Culinary, Hotel Operations, Tourism" },
      { name: "BS Education", desc: "Early Childhood, Special Education, Sec. Ed" },
    ]
  }
];

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" 
            alt="Students on campus" 
            className="h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-neutral-50/95 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 pb-12 md:pb-0 pr-0 md:pr-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
               </span>
               Enrollment Open for AY 2024-2025
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
              Build Your Future With <span className="text-secondary">Quality</span> Education.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg leading-relaxed font-medium">
              Empowering the next generation through industry-aligned curriculum, world-class facilities, and a legacy of academic excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link 
                to="/enrollment" 
                className="inline-flex h-12 lg:h-14 items-center justify-center px-8 text-base font-bold text-white bg-primary rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              >
                Enroll Now
              </Link>
              <Link 
                to="/admissions" 
                className="inline-flex h-12 lg:h-14 items-center justify-center px-8 text-base font-bold text-primary border-2 border-primary rounded-full hover:bg-neutral-100 transition-colors"
              >
                Request Information
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm font-bold text-neutral-800">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-50 rounded-full flex items-center justify-center text-primary"><CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" /></div>
                <span>Govt. Recognized</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-50 rounded-full flex items-center justify-center text-primary"><CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" /></div>
                <span>Full Scholarships</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-50 rounded-full flex items-center justify-center text-primary"><CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" /></div>
                <span>Industry Partners</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-neutral-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-50 rounded-full flex items-center justify-center text-primary"><CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" /></div>
                <span>Modern Tech Labs</span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 p-6 bg-neutral-100/50 rounded-3xl flex items-center justify-center ring-1 ring-neutral-200 backdrop-blur-sm">
             <div className="bg-white w-full rounded-3xl shadow-xl overflow-hidden border-t-8 border-secondary relative z-20">
               <div className="p-8 pb-4">
                 <h3 className="text-2xl font-bold text-primary">Quick Admission</h3>
                 <p className="text-sm text-neutral-500 mt-1">Start your application in under 2 minutes.</p>
               </div>
               <form className="p-8 pt-2 space-y-4" onSubmit={(e) => e.preventDefault()}>
                 <div>
                   <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Full Name</label>
                   <input type="text" placeholder="Juan Dela Cruz" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Desired Program</label>
                   <select className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                     <option>BS Information Technology</option>
                     <option>BS Business Administration</option>
                     <option>Senior High School (STEM)</option>
                     <option>Senior High School (ABM)</option>
                   </select>
                 </div>
                 <div>
                   <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Address</label>
                   <input type="email" placeholder="juan@example.com" className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                 </div>
                 <Link to="/enrollment" className="inline-block text-center w-full py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl shadow-lg transition-all mt-4">
                   Apply For Admission
                 </Link>
                 <p className="text-[10px] text-center text-neutral-400 mt-4 font-medium">
                   By submitting, you agree to our Privacy Policy and Terms.
                 </p>
               </form>
             </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-20 -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white shadow-xl ring-1 ring-neutral-900/5 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-100 p-8">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-4 text-center">
              <span className="font-display text-4xl font-extrabold text-primary mb-2">{stat.value}</span>
              <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl">Why Choose EduFuture?</h2>
            <p className="mt-4 text-lg text-neutral-600">We provide a supportive, innovative, and deeply engaging environment that equips students for reality.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:shadow-md transition-shadow group">
                <div className="h-12 w-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">Academic Excellence</h2>
              <p className="text-lg text-neutral-600">Discover our comprehensive range of programs designed to ignite passion and build competence.</p>
            </div>
            <Link to="/programs" className="inline-flex items-center font-bold text-secondary hover:text-secondary-dark shrink-0">
              View All Programs <ChevronRight className="ml-1 h-5 w-5" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {PROGRAMS.map((group, i) => (
              <div key={i} className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold border-b-2 border-secondary pb-4 inline-block">{group.category}</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {group.items.map((program, j) => (
                    <div key={j} className="group relative rounded-xl border border-neutral-200 p-6 hover:border-primary hover:shadow-lg transition-all cursor-pointer bg-neutral-50/50 hover:bg-white overflow-hidden">
                      <div className="absolute right-0 top-0 h-16 w-16 -translate-y-8 translate-x-8 rounded-full bg-primary/5 group-hover:bg-secondary/10 transition-colors" />
                      <h4 className="font-bold text-lg text-primary mb-2 relative z-10">{program.name}</h4>
                      <p className="text-sm text-neutral-600 mb-6 relative z-10">{program.desc}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <Link to={`/programs/${program.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                          Learn More
                        </Link>
                        <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-secondary transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Flow */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">Simple Admission Process</h2>
            <p className="text-lg text-blue-100">Your journey starts here. Follow these simple steps to enroll securely online.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            <div className="hidden lg:block absolute top-8 left-10 right-10 h-0.5 bg-blue-400/30 -z-10" />
            {[
              "Submit Inquiry", "Complete Application", "Submit Requirements", 
              "Assessment", "Confirmation", "Enrollment"
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center font-bold text-2xl mb-4 shadow-lg ring-4 ring-primary/20">
                  {index + 1}
                </div>
                <h4 className="font-bold text-sm">{step}</h4>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/enrollment" className="inline-flex h-14 items-center justify-center rounded-lg bg-secondary px-8 text-base font-bold text-white transition-all hover:bg-secondary-dark hover:scale-105">
              Start Application Now
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-4">Student & Parent Success</h2>
            <p className="text-lg text-neutral-600">Hear what our community says about their experience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { type: "Student", program: "BS Information Technology", text: "The modern facilities and industry-aligned curriculum helped me land a job immediately after graduation.", author: "Michael Reyes", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&h=256&fit=crop" },
              { type: "Student", program: "SHS - STEM", text: "The teachers are supportive. I received an academic scholarship which helped my family immensely.", author: "Sarah Cruz", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&h=256&fit=crop" },
              { type: "Parent", program: "Parent of College Freshman", text: "I trust EduFuture for my son's college education. The enrollment process was smooth and staff were very accommodating.", author: "Robert Santiago", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 flex flex-col">
                <div className="flex gap-1 text-secondary mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <Quote className="h-10 w-10 text-neutral-100 mb-4" />
                <p className="text-neutral-700 italic mb-8 grow">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-neutral-100">
                  <img src={testimonial.img} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.author}</h4>
                    <span className="text-xs font-semibold text-neutral-500 uppercase">{testimonial.type} - {testimonial.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop')] opacity-10 bg-cover mix-blend-overlay" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold sm:text-5xl mb-6">Enrollment is Now Open</h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Secure your slot today and start building your future. Apply online in less than 5 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/enrollment" className="inline-flex h-14 items-center justify-center rounded-lg bg-secondary px-10 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:scale-105 hover:shadow-xl">
                  Enroll Now
                </Link>
              </div>

              <div className="mt-8 flex justify-center items-center gap-6 text-sm text-blue-200 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> No hidden fees</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-accent" /> Secure process</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
