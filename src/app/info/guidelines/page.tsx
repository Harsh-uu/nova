import React from 'react';

const data = [
  {
    heading: "Core Principles",
    details: ["Kindness First: Treat others with empathy and compassion.", "Respect Boundaries: Don’t pressure or coerce anyone.", "Be Yourself: Misleading or impersonating others is not allowed.", "Zero Tolerance for Hate: No racism, sexism, homophobia, or hate speech.", "Keep it Legal: Do not engage in or promote illegal activity."]
  },
  {
    heading: "Prohibited Behavior",
    details: ["Harassment, threats, bullying, or intimidation", "Non-consensual explicit content", "Sharing personal info of others without consent", "Scams, phishing, or fraudulent behavior", "Use of bots or automated systems", "Violations may result in warnings, suspensions, or permanent bans."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Nova Community Guidelines</h1>
      <p className="my-8">At Nova, we believe meaningful connections thrive in safe, respectful, and kind environments. These Community Guidelines are here to help everyone feel secure and valued while using our platform.</p>
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