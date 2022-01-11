import Title from "../../components/Title";
import styles from "../../styles/Project.module.css";
import Link from "next/link";

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
      <h2> All my projects!</h2>
      {posts.map((post) => (
        <div className={styles.project}>
          <Link href={"/projects/" + post.id} key={post.id}>
            <h2> {post.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Projects;
