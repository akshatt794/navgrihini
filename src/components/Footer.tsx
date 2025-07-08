// src/components/Footer.tsx
import SocialMediaFooter from "./SocialMediaFooter";
import { HiChevronDown } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <SocialMediaFooter />
      <footer className="max-w-screen-2xl mx-auto border-b-8 border-secondaryBrown px-5">
        <div className="flex flex-wrap justify-center gap-24 text-center mt-12 max-md:flex-col max-md:gap-10">
          {[
            {
              title: "Client Service",
              items: ["After-sale Service", "Free Insurance"],
            },
            {
              title: "Our Brand",
              items: [
                "The Company",
                "The Excellence",
                "International Awards",
                "Our Story",
              ],
            },
            {
              title: "Luxury Clothing",
              items: ["Special Edition", "Summer Edition", "Unique Collection"],
            },
          ].map((section, i) => (
            <div key={i} className="flex flex-col gap-1">
              <h3 className="text-2xl font-bold max-sm:text-xl">{section.title}</h3>
              {section.items.map((item, idx) => (
                <p key={idx} className="text-lg max-sm:text-base">{item}</p>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 my-20">
          <p className="flex justify-center items-center text-2xl gap-2 max-sm:text-xl">
            Worldwide / English <HiChevronDown />
          </p>
          <h2 className="text-6xl font-light text-center max-sm:text-5xl">
            NAVGRIHINI
          </h2>
          <p className="text-base text-center max-sm:text-sm">All rights reserved ©2025</p>
          <ul className="flex justify-center items-center gap-7 text-base max-sm:text-sm flex-wrap">
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
            <li>Legal Notes</li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
