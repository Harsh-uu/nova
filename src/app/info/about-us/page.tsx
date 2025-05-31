import React from 'react';

const data = [
  {
    heading: "Our Mission",
    details: ["To make dating emotionally safe, intentionally kind, and authentically human.", "We believe:", "Kindness is the foundation of connection.", "Emotional safety is a non-negotiable.", "You deserve to be more than just a swipe."]
  },
]

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">About Us</h1>
      <p className="my-8 max-w-2xl">Nova began as a deeply personal journey. Our founder, Navatej (32), had spent years trying to find a meaningful connection through modern dating apps. Swipe after swipe, conversation after conversation—it all began to feel transactional, superficial, and emotionally exhausting. There was no room for vulnerability, no space for authentic expression. The platforms weren’t built for people who sought depth, safety, and emotional resonance. One evening, after another ghosted message and another mismatched connection, Navatej asked a simple question: "What if dating felt human again?" That question became the seed of Nova. Nova isn't just another dating app. It's a movement toward emotionally intelligent, safe, and intentional dating. Every design element—from story-based profiles to KindStart™ prompts—is crafted to help users feel truly seen and heard.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            <li key={detailIndex} className="mt-2">{detail}</li>
          ))}
        </React.Fragment>
      ))}
      <p className='mt-8'>Nova is for those who want to date with purpose, not pressure. For those who care deeply. For those who still believe in love—real love.</p>
    </div>
  )
}

export default Page;