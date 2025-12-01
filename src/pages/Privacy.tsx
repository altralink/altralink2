const Privacy = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              At Altralink, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our internet services and visit 
              our website.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Information We Collect</h2>
            <h3 className="text-2xl font-semibold mb-3 mt-6">Personal Information</h3>
            <p className="text-muted-foreground mb-4">
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Payment and billing information</li>
              <li>Account credentials</li>
              <li>Service preferences and usage data</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-3 mt-6">Usage Information</h3>
            <p className="text-muted-foreground mb-6">
              We automatically collect certain information when you use our services, including:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Internet connection data and network performance</li>
              <li>Device information and IP addresses</li>
              <li>Service usage patterns and bandwidth consumption</li>
              <li>Technical support interactions</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Provide, maintain, and improve our internet services</li>
              <li>Process payments and manage your account</li>
              <li>Communicate with you about service updates and promotions</li>
              <li>Troubleshoot technical issues and provide customer support</li>
              <li>Prevent fraud and ensure network security</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
              <li>Business partners for joint service offerings (with your consent)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement industry-standard security measures to protect your information from 
              unauthorized access, disclosure, alteration, or destruction. However, no method of 
              transmission over the internet is 100% secure.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Access and update your personal information</li>
              <li>Request deletion of your data (subject to legal requirements)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies and similar technologies to improve your experience on our website. 
              You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Children's Privacy</h2>
            <p className="text-muted-foreground mb-6">
              Our services are not directed to children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-muted-foreground mb-6 space-y-2">
              <li>Email: privacy@altralink.com</li>
              <li>Phone: +1 (888) 508-6472</li>
              <li>Address: 123 Internet Blvd, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
