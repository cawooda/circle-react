import Project from "../components/Project";
import AddProject from "../components/AddProject";

const projects = [
  {
    id: 3,
    title: "Dog Tech",
    name: "tech-blog",
    description:
      "Dog Tech is a blog about tech. We dont know how dogs feature just yet, but we will let our users decide how dogs inspire great tech with their simple, loyal and friendly manner",
    imageName: "dog.jpg",
    link: "http://people.circlesupports.com",
  },
  {
    id: 2,
    title: "Litscape",
    name: "litscape",
    description:
      "Litscape connects writers with the wise words of greats gone by. A simple quote finding app, litscape allows you to quickly and easily search for and obtain quotes by famous people",
    imageName: "litscape.png",
    link: "https://cawooda.github.io/lit-scape/",
  },
  {
    id: 1,
    title: "Circle Supports",
    name: "circle",
    description:
      "Circle Supports is a business offering suppports to people with a mental health condition. We do this through a unique model of independent contractors providing high quality support and care to those who need it. Much of the business is supported by a framework of integrated software",
    imageName: "circle.png",
    link: "http://people.circlesupports.com",
  },
];

export default function Projects() {
  return (
    <div id="error-page">
      <h1>Projects</h1>

      <Project projects={projects} />
      <AddProject />
    </div>
  );
}
