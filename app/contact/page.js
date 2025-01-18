import React from "react";
import Zapper from "../utils/Zapper";
import {
  FaBandcamp,
  FaInstagram,
  FaYoutubeSquare,
  FaLinkedin,
  FaMailBulk,
} from "react-icons/fa";

function Contact(props) {
  const socialLinks = [
    {
      title: "LinkedIn",
      link: "https://de.linkedin.com/in/philipp-koerber-p1993k1312",
      logo: <FaLinkedin />,
    },
    {
      title: "E-Mail",
      link: "mailto:philipp.koerber.93@gmail.com",
      logo: <FaMailBulk />,
    },
    {
      title: "YouTube",
      link: "https://www.youtube.com/@swim8008",
      logo: <FaYoutubeSquare />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/philipp.koerber/",
      logo: <FaInstagram />,
    },
  ];

  return (
    <div className="h-[100dvh] flex justify-center items-center flex-col gap-8">
      {socialLinks.map((social, index) => (
        <Zapper>
          <div className="flex gap-4 justify-center items-center">
            <div className="text-4xl">{social.logo}</div>
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline text-lg"
            >
              {social.title}
            </a>
          </div>
        </Zapper>
      ))}
    </div>
  );
}

export default Contact;
