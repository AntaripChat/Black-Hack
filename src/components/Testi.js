import React, { useEffect, useState } from "react";
import michael_kiger from "../images/michael_kiger.jpg";
import Testimonials from "./Testimonials";
import people03 from "../images/people03.jpg";
import christopher from "../images/christopher.jpg";
import kristian from "../images/kristian.jpg";
import people02 from "../images/people02.jpg";
import people06 from "../images/people06.jpg";

const Testi = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems([
      {
        id: 1,
        img: michael_kiger,
        title: "Michael Kiger",
        source: "Web Developer",
        content:
          "Adrian is the best instructor I have listened to. Watched several hundred tutorials past two years. Many instructors waste lots of time with personal comments during tutorials. Adrian gets right to the point, moving quickly through code examples. I needed to master Javascript and will use JS Mastery exclusively during my career.",
      },
      {
        id: 2,
        img: people03,
        title: "Robert Gregg",
        source: "Software Developer | England",
        content: (
          <>
            <p>
              "Adrian has helped me several times on my Javascript and React
              journey and has shown his crystal clear understanding of these
              topics. I was able to discuss ideas, and he was able to point me
              in the right direction as well as help me with some key issues I
              was struggling with, ultimately leading to getting a job as a
              software developer."
            </p>
          </>
        ),
      },
      {
        id: 3,
        img: christopher,
        title: "Christopher Ang",
        source: "Web Developer",
        content: (
          <>
            <p>
              Adrian and this team are always there to help and guide you. Being
              a part of and surrounded by like-minded people who aspire to
              become great developers is something you don’t find often. I feel
              very fortunate to be a part of this program.
            </p>
          </>
        ),
      },
      {
        id: 4,
        img: kristian,
        title: "Kristian Fulkerson",
        source: "Full Stack Developer",
        content: (
          <>
            <p>
              Simply the best way to take your development skills to the next
              level. Adrian from JS Mastery already has the best free content
              out on the internet, but since joining the master class, my
              confidence in writing more complicated application features has
              skyrocketed. I cannot thank Adrian enough. I am now working as a
              software engineer while participating in the program, and the team
              environment he creates simulates what you will experience once you
              get a job. 10/10
            </p>
          </>
        ),
      },
      {
        id: 5,
        img: people02,
        title: "Akshay Mishra",
        source: "Associate Software Developer | India",
        content: (
          <>
            <p>
              Adrian, I wanted to thank you for your React courses. I've
              personally learned a lot from them and landed a full-time job as a
              JavaScript developer two days ago. Keep doing what you're doing.
              Thank you!
            </p>
          </>
        ),
      },
      {
        id: 6,
        img: people06,
        title: "Oscar Hampton",
        source: "Freelance Software Developer | USA",
        content: (
          <>
            <p>
              JS Mastery has been precisely what I was looking for. I have
              enjoyed the courses, and completing them filled many gaps that
              some other learning platforms brushed over or skipped entirely.
              10/10 would recommend.
            </p>
          </>
        ),
      },
    ]);
  }, []);
  return (
    <div>
      <Testimonials items={items} />
    </div>
  );
};

export default Testi;
