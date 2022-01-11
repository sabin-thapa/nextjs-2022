import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1> OOPS!!!</h1>
      <h1> The page you requested could not be found!</h1>
      <p>
        {" "}
        Go back to <Link href="/"> Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
