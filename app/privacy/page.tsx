export default function PrivacyPolicy() {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              Last updated: January 2025
            </p>
  
            <section>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <p>
                Immutable Vision does not collect personal information through this website. 
                We do not require user registration or account creation.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-3">Cookies and Tracking</h2>
              <p>
                This website uses essential cookies for basic functionality and performance monitoring. 
                These are provided automatically by our hosting platform (Vercel) and include:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Technical cookies for site functionality</li>
                <li>Performance and analytics cookies to improve site experience</li>
              </ul>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-3">Third-Party Services</h2>
              <p>
                Our website is hosted, which may collect technical information 
                for hosting and performance purposes. We do not use additional third-party 
                tracking or analytics services.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <p>
                For questions about this privacy policy, please contact us through our 
                social media channels listed on the main website.
              </p>
            </section>
  
            <section>
              <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. Any changes will be 
                posted on this page with an updated revision date.
              </p>
            </section>
          </div>
        </div>
      </div>
    )
  }