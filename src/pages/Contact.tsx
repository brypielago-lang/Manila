export function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50 relative pt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-extrabold text-primary mb-6">Contact Us</h1>
        <p className="text-xl text-neutral-600 mb-8">Have questions? We're here to help.</p>
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 text-left">
          <h2 className="text-2xl font-bold text-primary mb-4">Admissions Office</h2>
          <p className="text-neutral-700 mb-2"><strong>Email:</strong> admissions@edufuture.edu</p>
          <p className="text-neutral-700 mb-2"><strong>Phone:</strong> (02) 8123-4567</p>
          <p className="text-neutral-700 mb-6"><strong>Address:</strong> 123 University Avenue, Innovation District, Metro City 1000</p>
        </div>
      </div>
    </div>
  );
}
