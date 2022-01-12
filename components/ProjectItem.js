import Link from "next/link";
import { API_URL } from "../config";

const ProjectItem = ({ prj }) => {
  return (
    <div>
      <Link href={`/projects/${prj.slug}`}>
        <h2> {prj.title} </h2>
      </Link>
    </div>
  );
};

export default ProjectItem;
