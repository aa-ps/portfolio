"use client";

const Navbar = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="mx-auto max-w-fit flex gap-10 text-sm font-light p-5">
      <span onClick={() => scrollTo("about-me")} className="nav-link">
        About Me
      </span>
      <span onClick={() => scrollTo("education")} className="nav-link">
        Education
      </span>
      <span onClick={() => scrollTo("projects")} className="nav-link">
        Projects
      </span>
    </nav>
  );
};

export default Navbar;
