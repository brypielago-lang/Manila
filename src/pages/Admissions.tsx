import { Link } from "react-router-dom";
import { CheckCircle2, Download, ChevronRight, FileText, Calendar, CreditCard } from "lucide-react";

export function Admissions() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 relative">
      <div className="absolute top-0 left-0 w-full h-80 bg-primary z-0" />
      
      <div className="relative z-10 pt-20 pb-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl mb-4">Admissions Info</h1>
          <p className="text-xl text-blue-100 mb-8">
            Everything you need to know to join EduFuture College & Senior High School.
          </p>
          <div className="flex gap-4">
             <Link to="/enrollment" className="inline-flex h-12 items-center justify-center rounded-lg bg-secondary px-8 text-base font-bold text-white shadow-lg transition-all hover:bg-secondary-dark hover:scale-105">
                Apply Online Now
             </Link>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Requirements Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-100">
                <FileText className="h-8 w-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">Admission Requirements</h2>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-4 bg-neutral-50 p-3 rounded-lg">Incoming Senior High School (Grade 11)</h3>
                  <ul className="space-y-3">
                    {["Original Form 138 (Report Card)", "Certificate of Good Moral Character", "PSA Authenticated Birth Certificate", "Two (2) copies 2x2 ID Pictures latest", "ESC Certificate (if applicable)"].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-4 bg-neutral-50 p-3 rounded-lg">College Freshmen</h3>
                  <ul className="space-y-3">
                    {["Original Form 138 (Grade 12 Report Card)", "Certificate of Good Moral Character", "PSA Authenticated Birth Certificate", "Two (2) copies 2x2 ID Pictures latest"].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-neutral-800 mb-4 bg-neutral-50 p-3 rounded-lg">Transferees</h3>
                  <ul className="space-y-3">
                    {["Honorable Dismissal / Transfer Credentials", "Transcript of Records (for evaluation)", "Certificate of Good Moral Character", "PSA Authenticated Birth Certificate", "Two (2) copies 2x2 ID Pictures"].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-neutral-600">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Downloadable Forms */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-primary mb-6">Downloadable Forms</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   { title: "Application Form", size: "1.2 MB PDF" },
                   { title: "Recommendation Form", size: "0.5 MB PDF" },
                   { title: "Medical Record Form", size: "0.8 MB PDF" },
                 ].map((file, i) => (
                   <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-primary transition-colors group cursor-pointer">
                     <div>
                       <h4 className="font-bold text-sm text-neutral-800 group-hover:text-primary">{file.title}</h4>
                       <span className="text-xs text-neutral-500">{file.size}</span>
                     </div>
                     <Download className="h-5 w-5 text-neutral-400 group-hover:text-primary" />
                   </div>
                 ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
             {/* Key Dates */}
             <div className="bg-primary-dark rounded-2xl shadow-sm p-6 text-white border-t-4 border-secondary">
               <div className="flex items-center gap-3 mb-6">
                 <Calendar className="h-6 w-6 text-secondary" />
                 <h3 className="font-bold text-xl">Enrollment Dates</h3>
               </div>
               <div className="space-y-4">
                  <div className="border-l-2 border-secondary pl-4 py-1">
                    <span className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">Early Bird Registration</span>
                    <span className="block font-bold">April 15 - May 30, 2024</span>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 py-1">
                    <span className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">Regular Enrollment</span>
                    <span className="block font-bold">June 1 - August 15, 2024</span>
                  </div>
                  <div className="border-l-2 border-secondary pl-4 py-1">
                    <span className="block text-xs font-semibold text-blue-200 uppercase tracking-wider mb-1">Classes Start</span>
                    <span className="block font-bold">August 26, 2024</span>
                  </div>
               </div>
             </div>

             {/* Tuition Quick Look */}
             <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-6">
               <div className="flex items-center gap-3 mb-6">
                 <CreditCard className="h-6 w-6 text-primary" />
                 <h3 className="font-bold text-xl text-primary">Tuition & Fees</h3>
               </div>
               <p className="text-sm text-neutral-600 mb-6">
                 We offer competitive rates and flexible payment options (Full, Semi-Annual, Quarterly, Monthly) to make education accessible.
               </p>
               <ul className="space-y-3 mb-6">
                 <li className="flex justify-between text-sm border-b border-neutral-100 pb-2">
                   <span className="text-neutral-600">Senior High School</span>
                   <span className="font-bold text-neutral-800">Available via Voucher</span>
                 </li>
                 <li className="flex justify-between text-sm border-b border-neutral-100 pb-2">
                   <span className="text-neutral-600">College Programs</span>
                   <span className="font-bold text-neutral-800">From ₱25k / sem</span>
                 </li>
               </ul>
               <button className="w-full rounded-lg bg-neutral-100 py-3 text-sm font-bold text-primary hover:bg-neutral-200 transition-colors">
                 Request Full Assessment
               </button>
             </div>

             {/* Help Block */}
             <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 text-center">
               <h3 className="font-bold text-primary mb-2">Need Assistance?</h3>
               <p className="text-sm text-neutral-600 mb-4">Our admissions team is ready to help you with your application.</p>
               <a href="tel:0281234567" className="inline-flex w-full justify-center rounded-lg border-2 border-primary py-2.5 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">
                 Call Admissions
               </a>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
