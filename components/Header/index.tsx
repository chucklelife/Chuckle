import React from "react";
import LogoIcon from "@/public/assets/logo.svg";
const Header = () => {
  return (
    <header className="bg-primary shadow-primary">
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-row">
          <LogoIcon />
          <p className="font-ericaOne text-[27px]">Chuckle</p>
        </div>
        <p className="text-[24px] font-ericaOne">
          Your daily dose of <span className="text-green">misery </span>&{" "}
          <span className="text-yellow">$money</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
