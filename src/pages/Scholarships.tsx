export function Scholarships() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 relative pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-extrabold text-primary mb-6">Scholarships & Grants</h1>
        <p className="text-xl text-neutral-600 mb-8">We believe that quality education should be accessible to everyone. Explore our financial assistance programs.</p>
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">Available Programs</h2>
          <ul className="space-y-4 list-disc pl-5 text-neutral-700">
            <li><strong>Academic Excellence Scholarship:</strong> For high school valedictorians and salutatorians (100% Tuition Discount).</li>
            <li><strong>Athletic Scholarship:</strong> For exceptional student-athletes representing the institution.</li>
            <li><strong>Financial Aid Grant:</strong> Need-based assistance for deserving students.</li>
            <li><strong>Government Vouchers:</strong> SHS Voucher Program and Tertiary Education Subsidy (TES).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
