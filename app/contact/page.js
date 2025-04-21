import React from "react";
import Zapper from "../utils/Zapper";
import {
  FaGithub,
  FaLinkedin,
  FaMailBulk,
  FaTwitch,
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
      title: "Github",
      link: "https://github.com/philkoerber",
      logo: <FaGithub />,
    },
    {
      title: "Twitch",
      link: "https://www.twitch.tv/sswwiimmtv",
      logo: <FaTwitch />,
    },
  ];

  return (
    <div className="h-full flex justify-center items-center flex-col gap-8">
      {socialLinks.map((social, index) => (
        <Zapper key={social + index}>
          <div className="flex gap-4 justify-center items-center">
            <div className="text-4xl">{social.logo}</div>
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-lg"
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
