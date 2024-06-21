import Link from "next/link";

const Footer = () => {
  return (
    <footer className="select-none text-xs font-thin max-w-fit mx-auto pb-2 nav-link">
      <Link
        href={
          "https://www.figma.com/community/file/1357544466051780951/personal-portfolio"
        }
        target="_blank"
      >
        {"Inspired By José Luis Llovet"}
      </Link>
    </footer>
  );
};

export default Footer;
