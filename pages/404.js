import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const [time, setTime] = useState(3);

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [time]);

  return (
    <div className="not-found">
      <h1> OOPS!!!</h1>
      <h1> The page you requested could not be found!</h1>
      <p>
        {" "}
        Go back to <Link href="/"> Homepage</Link>
      </p>
      <p> Automatic redirecting to the Homepage in {time} seconds...</p>
    </div>
  );
};

export default NotFound;
