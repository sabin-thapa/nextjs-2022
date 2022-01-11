import Title from "../components/Title";
import HomeStyles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Title title="Home" />
      <div className={HomeStyles.container}>
        <div>
          <h1>This is the Homepage!</h1>
          <p>
            {" "}
            LoremEt reprehenderit deserunt eu est. Et tempor in sint anim irure
            commodo culpa pariatur occaecat exercitation nostrud reprehenderit
            sunt. Dolor tempor Lorem ad aliquip aliqua esse enim quis sit
            tempor.
          </p>
        </div>
      </div>
    </>
  );
}
