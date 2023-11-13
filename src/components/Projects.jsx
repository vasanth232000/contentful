import React from "react";
import SingleProject from "./SingleProject";
import { useFetchApi } from "../contentful/ContentApi";

const Projects = () => {
  const { data, isLoading } = useFetchApi();

  if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
      <div className="projects-center">
        {data.map((item, index) => {
          return <SingleProject key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
