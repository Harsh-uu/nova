import React from 'react';

const data = [
  {
    heading: "What is Nova?",
    details: ["Nova is a dating app designed to help you find meaningful connections by focusing on personality and shared values before physical appearance. We believe in fostering genuine interactions."]
  },
  {
    heading: "How does Feel First Mode work?",
    details: ["In Feel First Mode, profile photos are initially blurred. You get to know someone through their bio, interests, and answers to prompts. Photos are revealed gradually as you interact and match."]
  },
  {
    heading: "Is Nova free to use?",
    details: ["Nova offers a free tier with core functionalities. We also have premium subscription options that unlock additional features like advanced filters, unlimited likes, and seeing who likes you."]
  },
  {
    heading: "How do I create a compelling profile?",
    details: ["Be authentic! Use clear photos, write a thoughtful bio, and answer prompts honestly. Showcasing your personality and what you\'re looking for will attract like-minded individuals."]
  },
  {
    heading: "How can I report a user or concern?",
    details: ["You can report a user directly from their profile or through the chat interface. You can also contact our support team via the app settings or by emailing [support@novadating.app]. We take all reports seriously."]
  },
  {
    heading: "What are Nova's safety features?",
    details: ["We have several safety features, including profile verification, in-app reporting, blocking tools, and safety tips. We are committed to creating a safe and respectful community for all our users."]
  },
  {
    heading: "How does matching work on Nova?",
    details: ["Nova uses a sophisticated algorithm that considers your preferences, interests, and in-app activity to suggest compatible matches. The more you use the app, the better our suggestions become."]
  }
];

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <p className="my-8">Have questions about Nova? We've got answers! Browse through our most frequently asked questions to learn more about our features, safety, and how to make the most of your Nova experience.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            <p key={detailIndex} className="mt-2">{detail}</p>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Page;