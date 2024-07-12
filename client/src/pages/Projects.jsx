import Project from "../components/Project";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Some description",
    imageUrl: "https://cdn2.thecatapi.com/images/akb.jpg",
    link: "",
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
    </div>
  );
}
