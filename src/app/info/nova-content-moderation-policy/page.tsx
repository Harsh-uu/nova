import React from 'react';

const data = [
  {
    heading: "How Moderation Works:",
    details: ["Automated Flagging: Inappropriate language, images, or actions may be flagged automatically.", "User Reports: You can report users or content via in-app tools.", "Human Review: Our trained moderators review reported and flagged content.", "Action Taken: Based on severity, actions include warnings, feature limitations, suspension, or permanent account removal."]
  },
  {
    heading: "Safety Tools",
    details: ["Block & Report buttons available on all profiles", "Content filters to reduce exposure to disturbing material", "Real-time monitoring for repeated abuse or impersonation", "We prioritize transparency and fairness and aim to resolve moderation decisions swiftly and responsibly."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Nova Content Moderation Policy</h1>
      <p className="my-8">Nova uses a mix of AI moderation tools and human review to detect and remove harmful or inappropriate content.</p>
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