// [id] is used because the page id is unique/dynamic

// getStaticPaths runs at build time as well

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((project) => {
    return {
      params: { id: project.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const ProjectDetails = () => {
  return (
    <div>
      <h1> Details Page </h1>
    </div>
  );
};
export default ProjectDetails;
