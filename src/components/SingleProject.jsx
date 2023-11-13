import React from "react";

const SingleProject = (item) => {
  const { title, url, img } = item;
  return (
    <a href={url} className="project">
      <img src={img} alt={title} className="img" />
      <h5>{title}</h5>
    </a>
  );
};

export default SingleProject;
