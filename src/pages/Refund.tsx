const Refund = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Refund Policy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-4">Our Commitment to You</h2>
            <p className="text-muted-foreground mb-6">
              At Altralink, your satisfaction is our priority. We stand behind the quality of our 
              services and offer a transparent refund policy to ensure you can try our internet 
              service with confidence.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">30-Day Money-Back Guarantee</h2>
            <p className="text-muted-foreground mb-4">
              We offer a 30-day money-back guarantee for new customers:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>If you're not satisfied with our service within the first 30 days, we'll refund your first month's service fee</li>
              <li>No questions asked - we simply want you to be happy with your internet service</li>
              <li>You must cancel within 30 days of your activation date to qualify</li>
              <li>Equipment must be returned in good condition</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">What's Included in the Refund</h2>
            <p className="text-muted-foreground mb-4">
              The 30-day money-back guarantee covers:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Your first month's service fee</li>
              <li>Any equipment rental fees paid</li>
              <li>Installation fees (if applicable)</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">What's Not Included</h2>
            <p className="text-muted-foreground mb-4">
              The following are non-refundable:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Taxes and regulatory fees</li>
              <li>Charges for damaged or unreturned equipment</li>
              <li>Third-party service fees</li>
              <li>Usage charges incurred before cancellation</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Outages and Disruptions</h2>
            <p className="text-muted-foreground mb-4">
              If you experience significant service disruptions:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>We may provide prorated credits for extended outages (over 24 hours)</li>
              <li>Credits are automatically applied to your next billing cycle</li>
              <li>Scheduled maintenance does not qualify for credits</li>
              <li>Outages caused by customer equipment or external factors are not eligible</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Service Downgrade or Plan Changes</h2>
            <p className="text-muted-foreground mb-6">
              If you downgrade your service plan mid-month, the new rate will apply from the next 
              billing cycle. No refunds are issued for partial months when downgrading. When upgrading, 
              you'll be charged a prorated amount for the remainder of the current billing cycle.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">How to Request a Refund</h2>
            <p className="text-muted-foreground mb-4">To request a refund:</p>
            <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2">
              <li>Contact our customer service team at +1 (888) 508-6472</li>
              <li>Provide your account information and reason for cancellation</li>
              <li>Schedule equipment return (if applicable)</li>
              <li>Refunds are processed within 7-10 business days after equipment is returned</li>
            </ol>

            <h2 className="text-3xl font-bold mb-4 mt-12">Equipment Return</h2>
            <p className="text-muted-foreground mb-4">
              To receive your full refund, equipment must be:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Returned within 10 days of cancellation</li>
              <li>In good working condition with no physical damage</li>
              <li>Packaged securely with all original components</li>
              <li>Shipped using our prepaid return label (provided upon request)</li>
            </ul>
            <p className="text-muted-foreground mb-6">
              Equipment not returned or returned damaged may result in charges up to the full 
              replacement cost of the equipment.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Billing Disputes</h2>
            <p className="text-muted-foreground mb-6">
              If you believe you've been incorrectly charged, please contact us immediately. We'll 
              investigate the issue and, if an error occurred, provide appropriate credits or refunds 
              within two billing cycles.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Promotional Credits</h2>
            <p className="text-muted-foreground mb-6">
              Promotional credits, discounts, or special offers are forfeit upon cancellation and 
              are not refundable or transferable.
            </p>

            <h2 className="text-3xl font-bold mb-4 mt-12">Refund Processing Time</h2>
            <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
              <li>Account credits: Applied within 1-2 business days</li>
              <li>Credit card refunds: 7-10 business days after approval</li>
              <li>Bank transfers: 10-14 business days after approval</li>
            </ul>

            <h2 className="text-3xl font-bold mb-4 mt-12">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For questions about refunds or to request a refund:
            </p>
            <ul className="list-none text-muted-foreground mb-6 space-y-2">
              <li>Phone: +1 (888) 508-6472 (24/7)</li>
              <li>Email: billing@altralink.com</li>
              <li>Chat: Available on our website during business hours</li>
            </ul>

            <p className="text-muted-foreground mb-6">
              We're committed to making the refund process as smooth as possible. Our customer 
              service team is here to help answer any questions you may have.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;
