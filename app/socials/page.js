import React from "react";
import Zapper from "../utils/Zapper";
import {
  FaBandcamp,
  FaInstagram,
  FaSpotify,
  FaPatreon,
  FaSoundcloud,
} from "react-icons/fa";

function Socials(props) {
  const socialLinks = [
    {
      title: "Bandcamp",
      link: "https://how2make.bandcamp.com/",
      logo: <FaBandcamp />,
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/sashadza/",
      logo: <FaInstagram />,
    },
    {
      title: "Spotify",
      link: "https://open.spotify.com/artist/1mwaNeRTnMjH53H6eyxKw2?si=1GVS6ZncSZG-264C4YcxpA&nd=1",
      logo: <FaSpotify />,
    },
    {
      title: "Patreon",
      link: "https://www.patreon.com/how2make",
      logo: <FaPatreon />,
    },
    {
      title: "Soundcloud",
      link: "https://soundcloud.com/dza",
      logo: <FaSoundcloud />,
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-8">
      {socialLinks.map((social, index) => (
        <Zapper>
          <div className="flex gap-4 justify-center items-center">
            <div className="text-4xl">{social.logo}</div>
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline text-lg">
              {social.title}
            </a>
          </div>
        </Zapper>
      ))}
    </div>
  );
}

export default Socials;
