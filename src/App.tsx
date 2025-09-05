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

import data from "./data";

function App() {
  const coreSkills = data.skills.coreSkills.map((item: any) => ({
    type: item.core || item.area,
    skills: item.skills,
  }));

  const areaSkills = data.skills.areaSkills.map((item: any) => ({
    type: item.core || item.area,
    skills: item.skills,
  }));

  return (
    <div className="md:mx-15">
      {/* Navbar */}
      <NavBar leader={data.navBar.leader} links={data.navBar.links} />

      {/* Router?? */}

      {/* Main page */}

      {/* Hero section */}
      <Hero
        name={data.name}
        taglines={data.taglines}
        // heroImage={data.heroImage}
      />
      {/* Intro section */}
      <Intro intro={data.intro} />
      {/* CTAs section */}
      <CallToAction />
      {/* Work section */}
      <SectionTitle title="Experience" />
      <Work workItems={data.work} />
      {/* Projects section */}
      <SectionTitle title="Projects" />
      <Projects projects={data.projects} />

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
      <Testimonials testimonials={data.testimonials} />
      {/* Contact section */}
      <Contact
        contactTitle={data.contact.title}
        contactDescription={data.contact.description}
        contactFormPostUrl={data.contact.formPostUrl}
      />
    </div>

    // Footer
  );
}

export default App;
