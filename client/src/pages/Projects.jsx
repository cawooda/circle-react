import Project from "../components/Project";
import AddProject from "../components/AddProject";

const projects = [
  {
    id: 1,
    title: "Circle Supports",
    description:
      "Circle Supports is a business offering suppports to people with a mental health condition. We do this through a unique model of independent contractors providing high quality support and care to those who need it. Much of the business is supported by a framework of integrated software",
    imageUrl: "https://cdn2.thecatapi.com/images/akb.jpg",
    link: "http://people.circlesupports.com",
  },
  {
    id: 2,
    title: "Project 1",
    description: "Some description",
    imageUrl: "https://cdn2.thecatapi.com/images/1r7.jpg",
    link: "",
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
