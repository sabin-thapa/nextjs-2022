import { API_URL } from "@/config/index";

export const getServerSideProps = async ({ query: { slug } }) => {
  const res = await fetch(`${API_URL}/api/projects/${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
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
