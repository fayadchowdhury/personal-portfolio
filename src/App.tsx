import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import CallToAction from "./sections/CallToAction";
import Work from "./sections/Work";
import SectionTitle from "./components/SectionTitle";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import NavBar from "./sections/NavBar";
import Testimonials from "./sections/Testimonials";

import { data, getAllProjects, getNavbarData } from "./data";
import { useEffect, useState } from "react";

function App() {
  const [currData, setCurrData] = useState<typeof data>(data);

  useEffect(() => {
    async function apiCalls() {
      const [apiProjects, navbarData] = await Promise.all([
        getAllProjects(data.baseUrl + "projects/getAll"),
        getNavbarData(data.baseUrl + "navbar/getData"),
      ]);

      setCurrData((prev) => {
        console.log(prev.navBar, navbarData, prev.navBar === navbarData);

        return {
          ...prev,
          ...(apiProjects ? { projects: apiProjects } : {}),
          ...(navbarData ? { navBar: { ...navbarData } } : {}),
        };
      });
    }
    apiCalls();
  }, []);

  const coreSkills = currData.skills.coreSkills.map((item: any) => ({
    type: item.core || item.area,
    skills: item.skills,
  }));

  const areaSkills = currData.skills.areaSkills.map((item: any) => ({
    type: item.core || item.area,
    skills: item.skills,
  }));

  return (
    <div className="md:mx-15">
      {/* Navbar */}
      <NavBar leader={currData.navBar.leader} links={currData.navBar.links} />

      {/* Router?? */}

      {/* Main page */}

      {/* Hero section */}
      <Hero
        name={currData.name}
        taglines={currData.taglines}
        socialIcons={currData.socials}
        // heroImage={data.heroImage}
      />
      {/* Intro section */}
      <Intro intro={currData.intro} />
      {/* CTAs section */}
      <CallToAction />
      {/* Work section */}
      <SectionTitle title="Experience" />
      <Work workItems={currData.work} />
      {/* Projects section */}
      <SectionTitle title="Projects" />
      <Projects projects={currData.projects} />

      {/* Skills section */}
      <SectionTitle title="Skills" />
      <Skills skills={coreSkills} />
      <Skills skills={areaSkills} />

      {/* <h1>Thoughts</h1>
      <ul>
        <li>Thought 1</li>
        <li>Thought 2</li>
      </ul> */}

      <SectionTitle title="Testimonials" />
      <Testimonials testimonials={currData.testimonials} />
      {/* Contact section */}
      <Contact
        contactTitle={currData.contact.title}
        contactDescription={currData.contact.description}
        contactFormPostUrl={currData.contact.formPostUrl}
      />
    </div>

    // Footer
  );
}

export default App;
