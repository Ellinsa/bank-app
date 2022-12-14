import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section
    id="footer"
    className={`${styles.flexCenter} ${styles.paddingX} flex-col sm:mt-0 mt-16`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex - flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make the payments <br className="sm:block hidden" />{" "}
          easy, reliable and secure.
        </p>
      </div>
      <div
        className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}
      >
        {footerLinks.map((footerLinksSection) => (
          <div
            key={footerLinksSection.title}
            className="flex flex-col ss:my-0 my-2 min-w-[150px]"
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLinksSection.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLinksSection.links.map((link, idx) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    idx !== footerLinksSection.links.length - 1
                      ? "mb-4"
                      : "mb-0"
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex md:flex-row flex-col justify-between w-full items-center py-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; 2021 HooBank. <br className="sm:hidden block" /> All
        Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, idx) => (
          <a href={social.link}>
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                idx !== socialMedia.length - 1 ? "mr-6" : " mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
