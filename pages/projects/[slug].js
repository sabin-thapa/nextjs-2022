import { API_URL } from "@/config/index";

// export const getServerSideProps = async ({ query: { slug } }) => {
//   const res = await fetch(`${API_URL}/api/projects/${slug}`);
//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//   };
// };

//FOR STATIC GENERATION
export const getStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/projects/`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/api/projects/${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
};

const ProjectDetails = ({ evt }) => {
  return (
    <div>
      <h1> {evt.title} </h1>
      <p> {evt.description} </p>
      <p> {evt.description} </p>
      <p> {evt.description} </p>
    </div>
  );
};
export default ProjectDetails;
