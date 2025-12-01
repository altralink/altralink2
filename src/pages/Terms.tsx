const Terms = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing or using Altralink's internet services, you agree to be bound by these 
              Terms and Conditions. If you disagree with any part of these terms, you may not use our services.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Description</h2>
            <p className="text-muted-foreground mb-4">
              Altralink provides residential and commercial internet connectivity services, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Fiber optic internet service</li>
              <li>Cable internet service</li>
              <li>WiFi equipment rental and installation</li>
              <li>Technical support and customer service</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Account Registration</h2>
            <p className="text-muted-foreground mb-4">
              To use our services, you must:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Plans and Pricing</h2>
            <p className="text-muted-foreground mb-4">
              All service plans are month-to-month unless otherwise specified. Pricing includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Monthly service fees as advertised</li>
              <li>Equipment rental (where applicable)</li>
              <li>Professional installation (one-time fee or included)</li>
              <li>Applicable taxes and regulatory fees</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              We reserve the right to change pricing with 30 days notice to existing customers.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Payment Terms</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Payments are due on the billing date specified in your account</li>
              <li>Late payments may result in service suspension</li>
              <li>A reconnection fee may apply for suspended services</li>
              <li>We accept major credit cards, debit cards, and electronic bank transfers</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Acceptable Use Policy</h2>
            <p className="text-muted-foreground mb-4">You agree not to use our services to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Engage in illegal activities or violate any laws</li>
              <li>Distribute malware, spam, or harmful content</li>
              <li>Attempt to gain unauthorized access to other systems</li>
              <li>Interfere with or disrupt network services</li>
              <li>Resell or redistribute services without authorization</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Level and Performance</h2>
            <p className="text-muted-foreground mb-6">
              While we strive to provide consistent service speeds as advertised, actual speeds may vary 
              based on various factors including network congestion, equipment, and location. We maintain 
              a 99.9% uptime goal but do not guarantee uninterrupted service.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Equipment</h2>
            <p className="text-muted-foreground mb-4">
              Altralink-provided equipment remains our property and must be:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Returned in good condition upon service termination</li>
              <li>Protected from damage, loss, or theft</li>
              <li>Not modified or tampered with</li>
              <li>Used only for authorized purposes</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              You may be charged for unreturned, damaged, or lost equipment.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Termination</h2>
            <p className="text-muted-foreground mb-4">
              Either party may terminate service with 30 days written notice. We may terminate 
              immediately for:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Non-payment of fees</li>
              <li>Violation of acceptable use policy</li>
              <li>Fraudulent activity</li>
              <li>Abuse of customer support staff</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              Altralink is not liable for indirect, incidental, or consequential damages arising from 
              service use or interruption. Our total liability is limited to the amount paid for services 
              in the month prior to the claim.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Dispute Resolution</h2>
            <p className="text-muted-foreground mb-6">
              Any disputes will be resolved through binding arbitration in accordance with the rules 
              of the American Arbitration Association, rather than in court.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these terms at any time. Material changes will be 
              communicated via email or account notification at least 30 days before taking effect.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms and Conditions:
            </p>
            <ul className="list-none text-muted-foreground mb-6 space-y-2">
              <li>Email: legal@altralink.com</li>
              <li>Phone: +1 (888) 508-6472</li>
              <li>Address: 123 Internet Blvd, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
