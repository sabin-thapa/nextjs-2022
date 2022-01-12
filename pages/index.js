import Image from "next/image";
import Title from "../components/Title";
export default function Home() {
  return (
    <>
      <Title title="Home" />
      <div>
        <div>
          <h1>Sabin Thapa</h1>
          <Image src="/sabin.jpg" height={400} width={400} />
        </div>
      </div>
    </>
  );
}
