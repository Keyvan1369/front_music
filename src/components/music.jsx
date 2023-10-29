import React from 'react';
import styles from './music.module.css'; 

function Music({ title, description, image }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <img className={styles.image} src={image} alt={title} />
    </div>
  );
}

export default Music;