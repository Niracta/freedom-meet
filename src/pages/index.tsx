import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import { config } from "../config";
import avatar from "../../public/avatar.png";
import { Waves } from "../internals/Waves";
import styles from "../theme.module.css";

const Home: React.FC = () => (
  <>
    <Waves />
    <main className={styles.container}>
      <article className={styles.cell}>
        <figure className={styles.profile}>
          <div className={styles.avatar}>
            <Image alt={config.name} src={avatar} />
          </div>
          <figcaption className={styles.about}>
            <h1 className={styles.name}>{config.name}</h1>
            <h2 className={styles.title}>{config.title}</h2>
          </figcaption>
        </figure>
      </article>
      <ul className={styles.links}>
        {config.links.map(({ Icon, url, label }) => (
            <li key={url} className={styles.cell}>
              <a className={styles.socialLink} href={url}>
                <Icon />
                {label}
              </a>
            </li>
          ))}
      </ul>
    </main>
  </> 
);

export default Home;
