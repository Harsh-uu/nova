import React from 'react';

const data = [
  {
    heading: "1. Eligibility",
    details: ["You must be at least 18 years old to use Nova.", "By using Nova, you represent and warrant that you have the right, authority, and capacity to enter into these Terms."]
  },
  {
    heading: "2. Account Registration and Security",
    details: ["You must provide accurate, current, and complete information during registration.", "You are responsible for maintaining the confidentiality of your login credentials.", "You agree to notify us immediately of any unauthorized use of your account."]
  },
  {
    heading: "3. User Conduct",
    details: ["You agree not to:", "Use Nova for any unlawful or harmful purpose.", "Harass, abuse, stalk, intimidate, or impersonate any person.", "Post offensive, obscene, or discriminatory content.", "Violate intellectual property or privacy rights.", "Attempt to interfere with the app’s functionality or security.", "Nova reserves the right to suspend or terminate accounts that violate these Terms or our community guidelines."]
  },
  {
    heading: "4. Content Ownership and License",
    details: ["You retain ownership of the content you post.", "By posting content on Nova, you grant us a worldwide, royalty-free, non-exclusive license to use, display, reproduce, and distribute it within the app and for promotional purposes.", "We reserve the right to remove any content that violates our policies."]
  },
  {
    heading: "5. In-App Purchases",
    details: ["Certain features may require payment.", "All purchases are final and non-refundable unless required by applicable law.", "Prices and features are subject to change with prior notice."]
  },
  {
    heading: "6. Termination",
    details: ["You may delete your account at any time.", "We may suspend or terminate your access for violating these Terms or any applicable law.", "Upon termination, your right to use Nova will immediately cease."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Terms and Conditions</h1>
      <p className="mt-8">Welcome to Nova! These Terms and Conditions ("Terms") govern your use of the Nova dating application and its associated services ("Nova," "we," "us," or "our"). By creating an account or using Nova, you agree to be bound by these Terms.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="mt-2">{detail}</li>
          ))}
        </React.Fragment>
      ))}
      <p className='mt-8 text-xl font-semibold'>Thank you for trusting Nova to protect your data and your emotional journey.</p>
    </div>
  )
}

export default Page;