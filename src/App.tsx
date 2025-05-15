import Hero from "./sections/Hero";
import Intro from "./sections/Intro";

// Figure out a better way to import data
// data.json should be placed in src/data
import data from "./data/data.json";
import CallToAction from "./sections/CallToAction";

function App() {
  return (
    // Navbar

    // Router??

    // Main page
    <div>
      {/* Hero section */}
      <Hero
        name={data.name}
        taglines={data.taglines}
        heroImage={data.heroImage}
      />
      {/* Intro section */}
      <Intro intro={data.intro} />

      {/* CTAs section */}
      <CallToAction />

      <h1>Work</h1>
      <ul>
        <li>Work 1</li>
        <li>Work 2</li>
        <li>Work 3</li>
      </ul>

      <h1>Projects</h1>
      <ul>
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
        <li>Project 4</li>
      </ul>

      <h1>Skills</h1>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>

      <h1>Thoughts</h1>
      <ul>
        <li>Thought 1</li>
        <li>Thought 2</li>
      </ul>

      <h1>Testimonials</h1>
      <ul>
        <li>Testimonial 1</li>
        <li>Testimonial 2</li>
        <li>Testimonial 3</li>
      </ul>

      <h1>Contact</h1>
    </div>

    // Footer
  );
}

export default App;
