import React from 'react';

const data = [
  {
    heading: "Safety Tips",
    details: ["At Nova, your safety is our top priority. Whether you're chatting online or planning to meet someone in real life, here are essential safety practices to protect your well-being.", "Online Safety:", "Keep personal information private: Don’t share your home address, financial details, or other sensitive info too early.", "Use in-app messaging first: Avoid sharing your phone number or social media until you're comfortable.", "Beware of scams: If someone asks for money, gifts, or urgent help, report it immediately.", "Trust your gut: If something feels off, it probably is.", "Meeting in Person", "Choose public spaces: Meet in cafes, parks, or other well-trafficked places.", "Tell someone you trust: Share your plans and location with a friend or family member.", "Have your own transport: Arrange your own ride to and from the meeting spot.", "Stay sober & aware: Be mindful of your surroundings and avoid excessive drinking.", "If you ever feel unsafe, use the in-app Block and Report features right away."]
  },
  {
    heading: "Accessibility Statement",
    details: ["Nova is committed to digital inclusion for all users, including those with disabilities.", "Our Accessibility Goals", "Visual accessibility: Clear fonts, strong color contrast, and support for color-blind modes.", "Assistive tech compatibility: Screen reader support and navigable interface.", "Inclusive media: Alternative text for images and captions for voice-based features.", "Continuous testing: Regular audits for compliance with WCAG 2.1 standards.", "If you encounter any accessibility issue or have a suggestion, email us at: accessibility@novadating.app", "Together, we’re building a dating space where everyone belongs."]
  },
  {
    heading: "AI & Algorithmic Transparency",
    details: ["Nova is powered by emotionally-aware algorithms, but always with a human-centered philosophy.", "💡 How Our Matching Works", "Nova uses AI to analyze emotional tags, voice tone, shared values, and preferences.", "Each match is scored using NovaScore™—a blend of compatibility, emotional safety, and engagement.", "Matches are explained in simple terms like: “You both love deep conversations and share a grounded vibe.”", "🔒 What We Never Do", "We never sell your data.", "We never rely 100% on AI.Moderation and safety checks always involve humans.", "We avoid bias through constant training, feedback loops, and ethical guardrails.", "🫵 What You Control", "Update your preferences at any time.", "View why a match was recommended.", "Customize your vibe and intent tags to get more aligned connections.", "Nova believes transparency builds trust—and trust is where real connection begins."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
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