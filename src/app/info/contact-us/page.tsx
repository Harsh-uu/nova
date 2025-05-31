import React from 'react';

const data = [
  {
    heading: "General Inquiries",
    details: ["For general questions, feedback, or if you just want to say hello, please email us at: [hello@novadating.app]"]
  },
  {
    heading: "Support & Technical Assistance",
    details: ["Having trouble with the app? Our support team is here to help. Reach out to us at: [support@novadating.app]", "You can also check our FAQ page for quick answers to common questions."]
  },
  {
    heading: "Press & Media",
    details: ["For media inquiries, please contact our communications team at: [press@novadating.app]"]
  },
  {
    heading: "Partnership Opportunities",
    details: ["Interested in partnering with Nova? We\'d love to hear from you. Email us at: [partnerships@novadating.app]"]
  },
  {
    heading: "Our Office (By Appointment Only)",
    details: ["Nova Dating Inc.", "123 Love Lane,", "Connection City, CA 90210", "United States"]
  }
];

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Contact Us</h1>
      <p className="my-8">We\'re here to help and answer any questions you might have. We look forward to hearing from you! Please find the best way to reach us below.</p>
      {data.map((item, index) => (
        <React.Fragment key={`${item.heading}-${index}`}>
          <h2 className="text-2xl font-semibold mt-8">{item.heading}</h2>
          {item.details.map((detail, detailIndex) => (
            // Using <p> instead of <li> as these are not necessarily list items in a contact context
            <p key={detailIndex} className="mt-2">{detail}</p>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Page;