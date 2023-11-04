import React from 'react';
import { Link } from 'react-router-dom';
import styles from './music.module.css'; 

function Music({ title, description, image,_id }) {
  return (
    <Link to={"/music/"+_id} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img className={styles.image} src={image} alt={title} />
    </Link>
  );
}

export default Music;