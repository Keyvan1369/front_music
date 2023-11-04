import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MusicPage = () => {
  const { id } = useParams();
  const [music, setMusic] = useState();

  useEffect(() => {
    fetch("http://localhost:3070/api/music/" + id)
      .then((res) => res.json())
      .then((data) => {
        setMusic(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const { title,description,image} = music || {};

  return (
    <div>
      <h1>Music Detail</h1>
      <h2 >{title}</h2>
      <p >{description}</p>
      <img  src={image} alt={title} />
    </div>
  );
};

export default MusicPage;
