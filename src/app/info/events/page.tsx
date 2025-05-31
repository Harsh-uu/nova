import React from 'react';

const data = [
  {
    heading: "Nova Launch Party - NYC",
    details: ["Date: July 15, 2025", "Time: 7:00 PM - 10:00 PM EST", "Location: The Grand Ballroom, New York City", "Description: Join us to celebrate the official launch of Nova! Mingle with other singles, enjoy live music, complimentary drinks, and be the first to experience exclusive new features. RSVP required."]
  },
  {
    heading: "Virtual Speed Dating Night",
    details: ["Date: August 5, 2025", "Time: 8:00 PM - 9:30 PM PST (Online Event)", "Location: Nova App - Special Event Section", "Description: Meet multiple potential matches in a series of fun, timed video chats. A great way to connect from the comfort of your home. Limited spots available, sign up in the app!"]
  },
  {
    heading: "Workshop: Building Meaningful Connections",
    details: ["Date: September 10, 2025", "Time: 2:00 PM - 4:00 PM CST (Online Webinar)", "Location: Zoom (Link provided upon registration)", "Description: Led by relationship expert Dr. Connect, this workshop will provide insights and practical tips on how to build deeper, more meaningful connections in the digital age. Free for all Nova users."]
  },
  {
    heading: "Nova Community Mixer - London",
    details: ["Date: October 20, 2025", "Time: 6:30 PM - 9:00 PM GMT", "Location: The Social Hub, London", "Description: An informal get-together for Nova users in the London area. A chance to meet new people in a relaxed atmosphere. First drink on us!"]
  }
];

const Page = () =>{
  return(
    <div className="px-12 py-6 mb-8">
      <h1 className="text-3xl font-semibold">Nova Events & Meetups</h1>
      <p className="my-8">Connect with the Nova community in person and online! Check out our upcoming events, workshops, and meetups designed to help you find meaningful connections and have fun.</p>
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