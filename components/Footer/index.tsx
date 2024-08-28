import React from "react";
import DiscordIcon from "@/public/assets/icons/discord.svg";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import TelegramIcon from "@/public/assets/icons/telegram.svg";
const Footer = () => {
  const ListSocial = [
    {
      href: "https://discord.gg/",
      icon: TwitterIcon,
    },
    {
      href: "https://discord.gg/",
      icon: DiscordIcon,
      isDisabled: true,
    },
    {
      href: "https://discord.gg/",
      icon: TelegramIcon,
      isDisabled: true,
    },
  ];
  return (
    <footer className="pt-16 pb-[120px]">
      <div className="flex  justify-center gap-8">
        {ListSocial.map((social, index) => (
          <a
            href={social.href}
            className={` ${index != 0 ? "pl-6 border-l border-l-pink" : ""}`}
            key={`${social.href}-${index}`}
            target="_blank"
          >
            {
              <social.icon className="opacity-45 hover:opacity-100 duration-300" />
            }
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
