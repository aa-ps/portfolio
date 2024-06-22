import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaCode, FaHashtag } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { IoLanguage } from "react-icons/io5";

export default function Home() {
  return (
    <main className="container mx-auto grid justify-center p-4 max-w-3xl">
      <section id="about-me" className="grid my-10">
        <div>
          <Image
            src="/images/headshot.png"
            alt="Headshot Picture"
            width={100}
            height={100}
            className="rounded-full object-contain"
          />
        </div>
        <div className="section-title mt-2">
          <h1>Hey, I am Aarón</h1>
          <div className="bg-[#95CFCC] rounded-md h-min ml-2">
            <p className="text-[#1F3A8A] px-1 py-[.10rem] text-xs font-bold">
              Open to work
            </p>
          </div>
        </div>
        <div className="pb-3 max-w-4xl">
          <p className="text-[#FFEA9F] sm:inline">
            Quick to learn and dedicated to self-growth.
          </p>
          <p className="text-[#FFBBC3] sm:inline before:content-['_']">
            Passionate Software Engineer.
          </p>
          <p className="text-[#B6FBFF] sm:inline before:content-['_']">
            Dedicated to creating meaningful projects.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap pb-2">
          <Link
            href="https://www.linkedin.com/in/aaron-pulido-salinas/"
            target="_blank"
            className="social-link"
          >
            <FaLinkedin aria-label="LinkedIn" className="social-icon" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/aa-ps/"
            target="_blank"
            className="social-link"
          >
            <FaGithub aria-label="GitHub" className="social-icon" />
            GitHub
          </Link>
          <Link
            href="m&#97;ilto&#58;aaronp&#117;&#108;i45&#64;gmail&#46;&#99;om"
            target="_blank"
            className="social-link"
          >
            <MdEmail aria-label="Email" className="social-icon" />
            a&#97;ron&#112;&#117;li45&#64;gma&#105;l&#46;com
          </Link>
        </div>
      </section>
      <section id="education" className="my-10">
        <div className="section-title">
          <GiGraduateCap className="w-8 h-8" />
          <h1>Education</h1>
        </div>
        <div className="border-l-2 pl-2 pt-1">
          <div className="pb-8">
            <p className="text-[#FFBBC3]">Aug. 2022 - May 2024</p>
            <p>University of Texas Rio Grande Valley</p>
            <p className="text-[#FFEA9F] font-bold">
              Bachelor of Science in Computer Science
            </p>
            <p>GPA: 4.0</p>
          </div>
          <div>
            <p className="text-[#FFBBC3]">Aug. 2020 - May 2022</p>
            <p>South Texas College</p>
            <p className="text-[#FFEA9F] font-bold">
              Associate of Science in Computer Science
            </p>
            <p>GPA: 3.90</p>
          </div>
        </div>
      </section>
      <section className="my-10">
        <div className="section-title">
          <IoLanguage className="w-8 h-8" />
          <h1>Languages</h1>
        </div>
        <p className="border-b-4 border-[#FFEA9F] pb-2 mb-2">
          English - Native
        </p>
        <p className="border-b-4 border-[#FFEA9F] pb-2 mb-2">
          Spanish - Native
        </p>
      </section>
      <section id="skills" className="my-10">
        <div className="section-title">
          <FaHashtag className="w-8 h-8" />
          <h1>Skills</h1>
        </div>
        <div className="grid gap-3 mb-4">
          <p>Programming Languages:</p>
          <div className="skills">
            <p>C</p>
            <p>C++</p>
            <p>HTML/CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>R</p>
            <p>Ruby</p>
            <p>Rust</p>
            <p>SQL</p>
            <p>TypeScript</p>
          </div>
        </div>
        <div className="grid gap-3 mb-4">
          <p>Frameworks:</p>
          <div className="skills">
            <p>Angular</p>
            <p>Bootstrap</p>
            <p>Express.js</p>
            <p>Flutter</p>
            <p>Next.js</p>
            <p>React.js</p>
            <p>Ruby on Rails</p>
            <p>Tailwind CSS</p>
          </div>
        </div>
        <div className="grid gap-3 mb-4">
          <p>Developer Tools:</p>
          <div className="skills">
            <p>AWS</p>
            <p>Docker</p>
            <p>Git</p>
            <p>GitHub</p>
            <p>Jira</p>
            <p>VS Code</p>
          </div>
        </div>
      </section>
      <section id="projects" className="my-10">
        <div className="section-title">
          <FaCode className="w-8 h-8" />
          <h1>Projects</h1>
        </div>
        <div className="mb-10">
          <p className="text-[#FFEA9F] font-bold">JunkYard Inventory Manager</p>
          <p>
            Developed a website utilizing React.js and Express.js for managing
            vehicle inventory for junkyard businesses. The project included a
            robust backend with Express.js and MySQL for CRUD operations, a
            reactive frontend with React.js and TypeScript, and deployment using
            Docker Compose.
          </p>
          <Link
            href="https://github.com/aa-ps/junkyardpro"
            target="_blank"
            className="social-link w-max mt-4 mb-8"
          >
            <FaGithub aria-label="GitHub" className="social-icon" />
            GitHub
          </Link>
          <div className="project-img">
            <Image
              src={"/images/junkyardpro.png"}
              alt="JunkYard Project Photo"
              fill
            />
          </div>
        </div>
        <div className="mb-10">
          <p className="text-[#FFEA9F] font-bold">Simplified Tax Filing App</p>
          <p>
            Developed a user-friendly mobile application using Flutter to
            simplify the tax filing process. The project included designing an
            intuitive UX, creating a RESTful API for user authentication, and
            implementing receipt scanning functionality.
          </p>
          <Link
            href="https://github.com/aa-ps/easytax"
            target="_blank"
            className="social-link w-max mt-4 mb-8"
          >
            <FaGithub aria-label="GitHub" className="social-icon" />
            GitHub
          </Link>
        </div>
        <div className="mb-10">
          <p className="text-[#FFEA9F] font-bold">Educational Blog Platform</p>
          <p>
            Created an educational blog with server-side rendering using Next.js
            to improve SEO. The project involved implementing TypeScript for
            type safety and Tailwind CSS for a responsive and engaging user
            interface.
          </p>
          <Link
            href="https://github.com/aa-ps/discover-with-aaron"
            target="_blank"
            className="social-link w-max mt-4 mb-8"
          >
            <FaGithub aria-label="GitHub" className="social-icon" />
            GitHub
          </Link>
          <div className="project-img">
            <Image
              src={"/images/blogplatform.png"}
              alt="Blog Platform Project Photo"
              fill
            />
          </div>
        </div>
        <div className="mb-10">
          <p className="text-[#FFEA9F] font-bold">
            Professor Rating Lookup Extension
          </p>
          <p>
            {
              "Developed a Chrome extension for accessing professor ratings during registration. The project included integrating Chrome's API to embedthe rating system into the registration page and using the Rate My Professors API for data retrieval."
            }
          </p>
          <Link
            href="https://github.com/aa-ps/rate-my-vaquero"
            target="_blank"
            className="social-link w-max mt-4 mb-8"
          >
            <FaGithub aria-label="GitHub" className="social-icon" />
            GitHub
          </Link>
        </div>
        <div className="mb-10">
          <p className="text-[#FFEA9F] font-bold">Web Games Portal</p>
          <p>
            Built a dynamic game portal using Next.js, incorporating server-side
            rendering for enhanced user interaction. Included features such as
            game search and user engagement metrics, and ensured optimal
            performance with a PageSpeed Insights score of 90+.
          </p>
        </div>
      </section>
    </main>
  );
}
