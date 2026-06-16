import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Flag, Shield, Award, Users } from "lucide-react";

export function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
            alt="University Campus" 
            className="h-full w-full object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white text-center">
          <h1 className="mb-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto max-w-4xl">
            A Legacy of Excellence, <span className="text-secondary">A Future of Innovation.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            For over two decades, EduFuture has been at the forefront of providing quality, accessible, and industry-relevant education.
          </p>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-white relative z-20 -mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-3xl p-10 shadow-sm border border-neutral-100 hover:border-primary transition-all group">
              <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white text-primary transition-all">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To empower students with the knowledge, skills, and values needed to excel in a globalized society through innovative instruction and meaningful industry partnerships.
              </p>
            </div>
            
            <div className="bg-neutral-50 rounded-3xl p-10 shadow-sm border border-neutral-100 hover:border-secondary transition-all group">
              <div className="h-16 w-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white text-secondary transition-all">
                <Eye className="h-8 w-8" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To be a premier educational institution recognized globally for academic excellence, technological innovation, and production of highly competent professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Core Values */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-primary sm:text-4xl mb-6">Our Core Values</h2>
            <p className="text-lg text-neutral-600">The principles that guide our teaching, our administration, and our students.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", desc: "Setting high standards for academic and operational performance.", icon: Award },
              { title: "Integrity", desc: "Upholding honesty, ethics, and transparency in all actions.", icon: Shield },
              { title: "Inclusivity", desc: "Creating a welcoming environment for students of all backgrounds.", icon: Users },
              { title: "Leadership", desc: "Fostering initiative and the courage to make a positive impact.", icon: Flag },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-white shadow-md flex items-center justify-center mb-6 text-primary">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-neutral-600 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-6">Be Part of Our History</h2>
        <Link 
          to="/enrollment" 
          className="inline-flex h-14 items-center justify-center rounded-lg bg-secondary px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:scale-105"
        >
          Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  );
}
