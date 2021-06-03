import React from "react";
import { Link } from "react-router-dom";
import { Button, Layout } from "../Components";

const About: React.FC<{}> = (): JSX.Element => {

  return (
    <Layout>
      <h1 className="font-bold text-center my-4 text-lg">About Page</h1>
      <Link to="/">
        <Button text="Home" />
      </Link>
    </Layout>
  );
};

export default About;
