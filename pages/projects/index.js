import Title from "../../components/Title";
import styles from "../../styles/Project.module.css";
import { API_URL } from "@/config/index";
import ProjectItem from "@/components/ProjectItem";

//This function runs before the component below renders || not like useEffect
// export const getStaticProps = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       posts: data,
//     },
//   };
// };

//local api routes
export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/projects`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
    revalidate: 1,
  };
};

const Projects = ({ projects }) => {
  return (
    <>
      <Title title="Projects" />
      <h2> All my projects!</h2>
      {projects.length === 0 && <h3> No projects!</h3>}
      {projects.map((prj) => (
        <div className={styles.project} key={prj.id}>
          <ProjectItem prj={prj} />
        </div>
      ))}
    </>
  );
};

export default Projects;
