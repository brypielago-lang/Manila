import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Check, ChevronRight, ChevronLeft, UploadCloud, FileText, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";

// Schema Definitions
const formSchema = z.object({
  // Step 1: Personal
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  middleName: z.string().optional(),
  birthdate: z.string().min(1, "Birthdate is required"),
  gender: z.string().min(1, "Gender is required").refine(val => ["Male", "Female", "Prefer not to say"].includes(val), "Please select a valid gender"),
  address: z.string().min(5, "Address is required"),
  mobileNumber: z.string().min(10, "Valid mobile number is required"),
  email: z.string().email("Valid email is required"),

  // Step 2: Academic
  schoolAttended: z.string().min(2, "School name is required"),
  strand: z.string().optional(),
  gradeLevel: z.string().min(1, "Grade/Year level is required"),
  programApplyingFor: z.string().min(1, "Program selection is required"),

  // Step 3: Parent/Guardian
  parentName: z.string().min(2, "Parent/Guardian name is required"),
  parentContact: z.string().min(10, "Valid contact number is required"),
  parentOccupation: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Academic Info" },
  { id: 3, title: "Guardian Info" },
  { id: 4, title: "Documents" },
  { id: 5, title: "Review" },
];

export function Enrollment() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
  });

  const { formState: { errors } } = form;

  const nextStep = async () => {
    // Basic validation trigger per step
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) fieldsToValidate = ['firstName', 'lastName', 'birthdate', 'gender', 'address', 'mobileNumber', 'email'];
    if (currentStep === 2) fieldsToValidate = ['schoolAttended', 'gradeLevel', 'programApplyingFor'];
    if (currentStep === 3) fieldsToValidate = ['parentName', 'parentContact'];

    const isStepValid = await form.trigger(fieldsToValidate);
    if (isStepValid) setCurrentStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data: FormData) => {
    console.log("Form submitted", data);
    const generatedRef = "REF-" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setRefNumber(generatedRef);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-neutral-50 py-24 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-10 text-center border-t-8 border-accent">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 mb-6">
            <CheckCircle2 className="h-12 w-12 text-accent" />
          </div>
          <h2 className="text-3xl font-display font-extrabold text-primary mb-2">Application Submitted!</h2>
          <p className="text-neutral-600 mb-8">
            Thank you for choosing EduFuture. We have received your application successfully.
          </p>
          
          <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100 mb-8 max-w-sm mx-auto">
            <p className="text-sm text-neutral-500 font-semibold uppercase tracking-wider mb-1">Your Reference Number</p>
            <p className="font-mono text-2xl font-bold text-primary tracking-widest">{refNumber}</p>
          </div>

          <p className="text-sm text-neutral-500 mb-8">
            An email confirmation and SMS have been sent to you with further instructions.
          </p>

          <Link to="/" className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-primary font-bold text-white transition-all hover:bg-primary-dark">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-64 bg-primary z-0" />
      
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 text-center text-white">
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl mb-2">Online Enrollment</h1>
          <p className="text-blue-100">Join EduFuture today securely and easily.</p>
        </div>

        <div className="rounded-3xl bg-white shadow-2xl overflow-hidden border-t-8 border-secondary">
          {/* Progress Indicator */}
          <div className="bg-white px-6 py-4 border-b border-neutral-100 sm:px-10">
             <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 -z-10 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-0.5 bg-secondary -z-10 -translate-y-1/2 transition-all duration-300"
                style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
              />
              {STEPS.map((step) => (
                <div key={step.id} className="flex flex-col items-center">
                  <div className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-bold bg-white transition-colors duration-300",
                    currentStep > step.id ? "border-secondary bg-secondary text-white" : 
                    currentStep === step.id ? "border-secondary text-secondary" : 
                    "border-neutral-300 text-neutral-400"
                  )}>
                    {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  <span className={cn(
                    "mt-2 text-xs font-semibold hidden sm:block absolute bottom-[-24px] whitespace-nowrap",
                    currentStep >= step.id ? "text-primary" : "text-neutral-400"
                  )}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-6 sm:hidden" /> {/* Spacer for mobile */}
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 sm:p-10 bg-white">
            
            {/* STEP 1: Personal Info */}
            <div className={cn("space-y-6", currentStep === 1 ? "block" : "hidden")}>
              <h2 className="text-2xl font-bold text-primary mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">First Name *</label>
                  <input {...form.register("firstName")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Middle Name</label>
                  <input {...form.register("middleName")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Last Name *</label>
                  <input {...form.register("lastName")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName.message}</span>}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">Birthdate *</label>
                  <input type="date" {...form.register("birthdate")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  {errors.birthdate && <span className="text-red-500 text-xs mt-1">{errors.birthdate.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Gender *</label>
                  <select {...form.register("gender")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  {errors.gender && <span className="text-red-500 text-xs mt-1">{errors.gender.message}</span>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Complete Address *</label>
                <textarea {...form.register("address")} rows={2} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                {errors.address && <span className="text-red-500 text-xs mt-1">{errors.address.message}</span>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Mobile Number *</label>
                  <input type="tel" {...form.register("mobileNumber")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="e.g. 09123456789" />
                  {errors.mobileNumber && <span className="text-red-500 text-xs mt-1">{errors.mobileNumber.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Email Address *</label>
                  <input type="email" {...form.register("email")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>}
                </div>
              </div>
            </div>

            {/* STEP 2: Academic Info */}
            <div className={cn("space-y-6", currentStep === 2 ? "block" : "hidden")}>
              <h2 className="text-2xl font-bold text-primary mb-6">Academic Information</h2>
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Previous School Attended *</label>
                <input {...form.register("schoolAttended")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                {errors.schoolAttended && <span className="text-red-500 text-xs mt-1">{errors.schoolAttended.message}</span>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Grade/Year Level Applying For *</label>
                  <select {...form.register("gradeLevel")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option value="">Select Level</option>
                    <option value="Grade 11">Senior High - Grade 11</option>
                    <option value="Grade 12">Senior High - Grade 12 Transferee</option>
                    <option value="College Freshmen">College - First Year</option>
                    <option value="College Transferee">College - Transferee</option>
                  </select>
                  {errors.gradeLevel && <span className="text-red-500 text-xs mt-1">{errors.gradeLevel.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Program/Strand selection *</label>
                  <select {...form.register("programApplyingFor")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm">
                    <option value="">Select Program</option>
                    <optgroup label="Senior High School">
                      <option value="STEM">STEM</option>
                      <option value="ABM">ABM</option>
                      <option value="HUMSS">HUMSS</option>
                    </optgroup>
                    <optgroup label="College">
                      <option value="BS IT">BS Information Technology</option>
                      <option value="BS BA">BS Business Administration</option>
                      <option value="BS HM">BS Hospitality Management</option>
                    </optgroup>
                  </select>
                  {errors.programApplyingFor && <span className="text-red-500 text-xs mt-1">{errors.programApplyingFor.message}</span>}
                </div>
              </div>
            </div>

            {/* STEP 3: Parent/Guardian */}
            <div className={cn("space-y-6", currentStep === 3 ? "block" : "hidden")}>
              <h2 className="text-2xl font-bold text-primary mb-6">Parent/Guardian Information</h2>
              <div>
                <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Guardian's Full Name *</label>
                <input {...form.register("parentName")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                {errors.parentName && <span className="text-red-500 text-xs mt-1">{errors.parentName.message}</span>}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Guardian's Contact No. *</label>
                  <input type="tel" {...form.register("parentContact")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                  {errors.parentContact && <span className="text-red-500 text-xs mt-1">{errors.parentContact.message}</span>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Occupation</label>
                  <input {...form.register("parentOccupation")} className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm" />
                </div>
              </div>
            </div>

            {/* STEP 4: Documents Upload */}
            <div className={cn("space-y-6", currentStep === 4 ? "block" : "hidden")}>
              <h2 className="text-2xl font-bold text-primary mb-6">Upload Requirements</h2>
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 text-sm text-neutral-700">
                Please upload clear copies of the following documents. You can also skip this for now and submit them later on-site.
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Form 138 / Report Card",
                  "Certificate of Good Moral",
                  "PSA Birth Certificate",
                  "2x2 ID Picture"
                ].map((doc, i) => (
                  <div key={i} className="border-2 border-dashed border-neutral-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-primary transition-colors bg-neutral-50/50">
                     <FileText className="h-8 w-8 text-neutral-400 mb-2" />
                     <span className="text-sm font-semibold text-neutral-700 mb-1">{doc}</span>
                     <span className="text-xs text-neutral-500 mb-4">(PDF, JPG, PNG)</span>
                     <div className="relative">
                       <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                       <button type="button" className="inline-flex items-center text-xs font-bold bg-white border border-neutral-200 px-3 py-1.5 rounded-md shadow-sm pointer-events-none gap-2 text-primary">
                         <UploadCloud className="w-4 h-4" /> Browse
                       </button>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 5: Review */}
            <div className={cn("space-y-6", currentStep === 5 ? "block" : "hidden")}>
              <h2 className="text-2xl font-bold text-primary mb-6">Review Information</h2>
              <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100 space-y-6 text-sm">
                <div>
                  <h3 className="font-bold text-primary border-b border-neutral-200 pb-2 mb-3">Personal Details</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-neutral-700">
                    <span className="text-neutral-500">Name:</span> <span className="font-medium">{form.watch("lastName")}, {form.watch("firstName")}</span>
                    <span className="text-neutral-500">Email:</span> <span className="font-medium">{form.watch("email")}</span>
                    <span className="text-neutral-500">Mobile:</span> <span className="font-medium">{form.watch("mobileNumber")}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-primary border-b border-neutral-200 pb-2 mb-3">Academic Selection</h3>
                  <div className="grid grid-cols-2 gap-y-2 text-neutral-700">
                    <span className="text-neutral-500">Applying As:</span> <span className="font-medium">{form.watch("gradeLevel")}</span>
                    <span className="text-neutral-500">Program:</span> <span className="font-medium">{form.watch("programApplyingFor")}</span>
                    <span className="text-neutral-500">Prev. School:</span> <span className="font-medium">{form.watch("schoolAttended")}</span>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 mt-6">
                <div className="flex items-start">
                   <input type="checkbox" id="terms" className="mt-1 h-4 w-4 rounded border-neutral-300 text-accent focus:ring-accent" required />
                   <label htmlFor="terms" className="ml-3 block text-sm leading-6 text-neutral-700">
                     I certify that all information provided is true and correct. I agree to the <a href="#" className="font-semibold text-primary underline">Data Privacy Policy</a> and <a href="#" className="font-semibold text-primary underline">Terms & Conditions</a>.
                   </label>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between border-t border-neutral-100 pt-6">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-700 hover:bg-neutral-50 transition-colors"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Back
                </button>
              ) : <div />}
              
              {currentStep < STEPS.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform ml-auto"
                >
                  Continue <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-10 py-3 text-sm font-bold text-white shadow-lg shadow-secondary/20 hover:scale-105 transition-transform ml-auto"
                >
                  Submit Application <CheckCircle2 className="ml-2 h-5 w-5" />
                </button>
              )}
            </div>
            
          </form>
        </div>

        {/* Trust Signals Under Form */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 opacity-60">
           <span className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider"><CheckCircle2 className="w-4 h-4"/> SSL Secured</span>
           <span className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider"><CheckCircle2 className="w-4 h-4"/> Data Privacy Compliant</span>
        </div>
      </div>
    </div>
  );
}
