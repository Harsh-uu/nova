import React from 'react';

const data = [
  {
    heading: "1. Information we collect",
    details: ["Name, email, phone number, location", "Gender identity, sexual orientation (optional)", "Date of birth, profile photos, and bios", "Audio messages and voice intros", "Interests, preferences, emotional status, vibe tags"]
  },
  {
    heading: " Usage Data:",
    details: ["In-app activity (profile views, matches, messages)", "App usage duration, clickstream data"]
  },
  {
    heading: "Device & Technical Information",
    details: ["IP address, device ID, operating system, browser type", "Location data (with permission)", "App version and crash logs"]
  },
  {
    heading: "Sensitive Personal Data (with explicit consent):",
    details: ["Emotional wellness indicators", "Mental health tags"]
  },
  {
    heading: "2. How We Use Your Information",
    details: ["To create and manage your account", "To personalize your experience and match suggestions", "To enable and monitor communications between users", "To improve our app through analytics and feedback", "To prevent fraud, abuse, or violations of our Terms of Use", "To comply with legal obligations (e.g., GDPR, CCPA, IT Act 2000)"]
  },
  {
    heading: "3. How We Share Your Information",
    details: ["We do not sell your personal data. We may share your data with:", "Service Providers (for hosting, analytics, customer support)", "Legal Authorities when required by law or in legal proceedings", "Affiliates and Business Transfers during mergers, acquisitions, or restructuring", "Other Users with your consent (e.g., profile visibility)"]
  },
  {
    heading: "4. Your Rights and Choices",
    details: ["Depending on your location, you may have the right to:", "Access, update, or delete your data", "Withdraw consent at any time", "Object to or restrict data processing", "Export your data (data portability)", "File a complaint with a data protection authority" 
    ]
  },
  {
    heading: "5. Data Retention",
    details: ["We retain your information as long as your account is active and as needed to provide services.", "We may retain certain information for legal or security reasons even after account deletion."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6">
      <h1 className="text-3xl font-semibold">Nova Privacy Policy</h1>
      <p className="mt-8">Nova ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our dating application and services (the "App"). By using Nova, you agree to the terms outlined in this policy.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="mt-2">{detail}</li>
          ))}
        </React.Fragment>
      ))}
      <p className='my-8 text-xl font-semibold'>Thank you for trusting Nova to protect your data and your emotional journey.</p>
    </div>
  )
}

export default Page;