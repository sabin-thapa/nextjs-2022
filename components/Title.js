import React from "react";
import Head from "next/head";

const Title = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title} | Sabin Thapa</title>
      </Head>
    </div>
  );
};

export default Title;
