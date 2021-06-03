import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPopular } from "../Api/Repositories/movies";
import { Button, Layout } from "../Components";

const Home: React.FC<{}> = (): JSX.Element => {
  const [data, setData] = useState<Array<any>>([]);

  useEffect(() => {
    getPopular()
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <h1 className="font-bold text-center my-4 text-lg">Home Page</h1>
      {data.length > 0 ? (
        <div className="text-center my-4 block">
          {data.map((item, i) => {
            return <h1 key={i}>{item.title}</h1>;
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-sm text-center my-4">Loading Popular Movies...</p>
      )}
      <Link to="/about" className="block">
        <Button text="About" />
      </Link>
    </Layout>
  );
};

export default Home;
