import React from 'react';

const data = [
  {
    heading: "Data Retention Timeline",
    details: ["Active Users: Data is retained while your account is active.", "Inactive Accounts: Retained for up to 24 months after last activity unless deleted.", "Deleted Accounts: Core data is deleted within 30 days of account deletion; backup data may be retained for legal reasons for up to 90 days."]
  },
  {
    heading: "Data Deletion Requests",
    details: ["You may delete your account at any time through app settings or by emailing [support@novadating.app]. Deletion will:", "Remove your profile, messages, and personal data from the active system.", "Anonymity residual metadata used for analytics.", "We comply with applicable data protection laws (GDPR, CCPA, etc.) and ensure users have control over their personal information."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Nova Data Retention & Deletion Policy</h1>
      <p className="my-8">Nova retains personal data only as long as necessary to deliver a secure and personalized user experience.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="mt-2">{detail}</li>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Page;