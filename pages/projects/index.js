import Title from "../../components/Title";
import styles from "../../styles/Project.module.css";

//This function runs before the component below renders || not like useEffect
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};

const Projects = ({ posts }) => {
  return (
    <>
      <Title title="Projects" />
      <div>
        <h2> All my projects!</h2>
        {posts.map((post) => (
          <div key={post.id} className={styles.project}>
            <h2> {post.title}</h2>
            <p> {post.body} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
